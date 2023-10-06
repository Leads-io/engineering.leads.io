---
    title: SQL
---

### Usage

We expect that people will use the style presented in this guide during development. Enforcement is still expected to happen at the time of review as the CI pipeline is only run manually. At a latter date the pipeline will run with every change and eventually set to be mandatory for the pipeline to pass.


### General Guidance

- Do not optimize for fewer lines of code, new lines are cheap but [brain time is expensive](https://blog.getdbt.com/write-better-sql-a-defense-of-group-by-1/).

- Be consistent. Even if you are not sure of the best way to do something do it the same way throughout your code, it will be easier to read and make changes if they are needed.

- Be explicit. Defining something explicitly will ensure that it works the way you expect and it is easier for the next person, which may be you, when you are explicit in SQL.


### Best Practices

- No tabs should be used - only spaces.
- Indents should use four spaces.

- Always capitalise SQL keywords (e.g., `SELECT *` or `AS` instead of `select *`)

- Wrap long lines of code, between 80 and 100, to a new line.

- Use the `AS` operator when aliasing a column or table.

- Prefer `DATEDIFF` to inline additions `date_column + interval_column`. The function is more explicit and will work for a wider variety of date parts.

- Prefer `!=` to `<>`. This is because `!=` is more common in other programming languages and reads like "not equal" which is how we're more likely to speak.

- Prefer `WHERE` to `HAVING` when either would suffice.

- Multiple WHERE clauses should go on different lines and begin with the SQL operator:

    ```sql
    SELECT
        `email`,
        `country_id`,
        `created_at`
    FROM `enquiry`
    WHERE
        `country_id` = 1
    AND `created_at` >= '2015-01-01'
    ```
 
- Always alias grouping aggregates and other column expressions.
    ```sql
    -- Preferred
    SELECT max(`id`) AS `max_customer_id`
    FROM `customer`

    -- Not Preferred
    SELECT max(id)
    FROM `customer`
    ```    
    
### General Naming Conventions

- Table names are singular
- Column names are singular
- Don't use abbreviations, unless it's something commonly accepted. Don't assume someone else understands the abbreviation you do


- All table and field names should be [snake-cased](https://en.wikipedia.org/wiki/Snake_case):

    ```sql
    -- Preferred
    SELECT
        `dvcecreatedtstamp` AS `device_created_timestamp`
        ...

    -- vs

    -- Not Preferred
    SELECT
        `dvcecreatedtstamp` AS `DeviceCreatedTimestamp`
        ...
    ```
- Timestamps should end with `_at` and should always be in UTC.
- Dates should end with `_date`.
- Avoid reserved words/keywords like `date` or `month` as a column name. Take note that `lead` is a reserved word in MySQL 8 and above!
- Escape all table and column names with backticks. Firstly, this ensures that even reserved words will parse correctly. Secondly, this ensures future refactoring is easier to find and replace in your IDE. 

### Primary Keys

- Always use Primary Keys
- Call them `id`, make them an INT (unless you need a different size)
- Make them unsigned, unless you have a good reason to use negative numbers
- Always use surrogate keys instead of natural keys (unless you have a specific edge case)

These reasons are for consistency and readability. When referring to ambiguous fields such as `id` you should always be doing the following anyway:
    
  ```sql
    -- Preferred
    SELECT
    `table2`.`id` AS `table2_id` FROM table1 INNER JOIN `table2`
  
    -- vs

    -- Not Preferred (will error anyway)
  SELECT
    `id` FROM `table1` JOIN `table2`
        ...
  ```

### Foreign Keys

- Use them! It has been a very, very long time since MySQL did not support them
- Name them using the joinee table name suffixed with `_id`

    ```sql
    CREATE TABLE `admin_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `default_business_unit_id` int(10) unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `admin_user_default_business_unit_id_fk` (`default_business_unit_id`),
  CONSTRAINT `admin_user_default_business_unit_id_fk` FOREIGN KEY (`default_business_unit_id`) REFERENCES `business_unit` (`id`)
        ...
    ```

### Commenting

- Comments should go near the top of your query, or at least near the closest SELECT
- Try to only comment on things that aren't obvious about the query (e.g., why a particular ID is hardcoded, etc.)
- When making single line comments in a model use the `--` syntax
- When making multi-line comments in a model use the `/*  */` syntax
- Respect the character line limit when making comments. Move to a new line or to the model documentation if the comment is too long
- Calculations made in SQL should have a brief description of what's going on and if available, a link to the handbook defining the metric (and how it's calculated)
- Instead of leaving `TODO` comments, track this in your issue management system



### Reference Conventions

- Explicitly use `INNER JOIN` instead of just `JOIN`

    ```sql
    SELECT
    `project`.`name` AS `project_name`,
    COUNT(`backing`.`id`) AS `backing_count`
    FROM `project`
    INNER JOIN `backing` ON ...
    INNER JOIN ...
    LEFT JOIN `backer_reward` ON ...
    LEFT JOIN ...
    ```

- When joining tables and referencing columns from both tables consider the following:

- Prefer explicit join statements. Even though the optimiser can work this out, it's better to be explicit for the use of other humans.

    ```sql
    -- Preferred
    SELECT *
    FROM `first_table`
    INNER JOIN `second_table`
    ...

    -- vs

    -- Not Preferred
    SELECT *
    FROM `first_table`,
        `second_table`
    ...
    ```


### Common Table Expressions (CTEs)

- Prefer CTEs over sub-queries as [CTEs make SQL more readable and are more performant](https://www.alisa-in.tech/post/2019-10-02-ctes/):

    ```sql
    -- Preferred
    WITH `important_list` AS (

        SELECT DISTINCT
            `specific_column`
        FROM `other_table`
        WHERE `specific_column` != 'foo'
        
    )

    SELECT
        `primary_table`.`column_1`,
        `primary_table`.`column_2`
    FROM `primary_table`
    INNER JOIN `important_list`
        ON `primary_table`.`column_3` = `important_list`.`specific_column`

    -- vs   

    -- Not Preferred
    SELECT
        `primary_table`.`column_1`,
        `primary_table`.`column_2`
    FROM `primary_table`
    WHERE `primary_table`.`column_3` IN (
        SELECT DISTINCT `specific_column` 
        FROM `other_table`
        WHERE `specific_column` != 'foo')
    ```

- Use CTEs to reference other tables.
- CTEs should be placed at the top of the query.
- Where performance permits, CTEs should perform a single, logical unit of work.
- CTE names should be as concise as possible while still being clear.
    - Avoid long names like `replace_sfdc_account_id_with_master_record_id` and prefer a shorter name with a comment in the CTE. This will help avoid table aliasing in joins.
- CTEs with confusing or notable logic should be commented in file and documented in dbt docs.
- CTEs that are duplicated across models should be pulled out into their own models.

## Influences and links
1. https://launchbylunch.com/posts/2014/Feb/16/sql-naming-conventions/#primary-keys
2. https://about.gitlab.com/handbook/business-technology/data-team/platform/sql-style-guide/
3. https://github.com/brooklyn-data/co/blob/main/sql_style_guide.md
4. https://github.com/dbt-labs/corp/blob/main/dbt_style_guide.md
5. https://github.com/mattm/sql-style-guide