### General
1. MR title and commits contain the relevant Jira ticket
2. Target branch is either develop, or the epic branch
3. All threads are resolved
4. MR Comments should provide an explanation or a solution to a problem being raised.
5. The MR author has added comments to explain any additional changes that are not obviously related to the ticket

### Code Structure/Style:
1. Code is in small maintainable modules
2. Duplicated code has been refactored
3. Existing design patterns have been used
4. Naming follows existing conventions, and uses ubiquitous language
5. No CS/Linting issues
6. All existing calls of an updated/removed method have been refactored

### Tests:
1. No decrease in test coverage
2. If a bug has been fixed, a test has been added to stop any future regressions
3. Tests consider edge cases rather than just the happy path
4. CI Pipeline is passing
5. For a frontend change, the code has been checked out locally and there are no obvious issues

### Performance:
1. Are there any inefficient queries?
2. Are there any potential bottlenecks in the code?

### Security:
1. Inputs are validated
2. Outputs are escaped
3. All variables used in SQL are passed in as query parameters, or escaped in legacy code
4. Exceptions are not output as part of the response
5. The correct roles are linked to the controller in Sherlock

### Debugging:
1. All dev code has been removed (console.log, echo, var_dump, etc)
2. No commented out code
