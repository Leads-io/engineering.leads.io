Knowledge required for software engineers to work with data storage systems. This includes relational databases like MySQL, key-value stores like Redis, or use of browser stores such as cookies and local storage. This also covers the methods of interacting with data stores, such as SQL in RDBMS, and GraphQL when working with APIs.

### Level 2
Has basic knowledge of data stores, capable of performing simple storage and retrieval operations.

### Level 3
Is familiar with data stores within their domain, likely one or two specifically, and the common ways of interacting with them on projects.
 - can architect simple structures appropriate to the application domain within their data store, understanding the core principles to make them efficient (e.g. having indexes for SQL tables, GraphQL object caching).
 - uses the tools and libraries within the platform they regularly work with to interact with data stores, such as using Doctrine to interact with MySQL.
 - understands the native mechanisms for interacting with data stores (SQL for RDBMS), so they can interrogate them standalone effectively, without relying on libraries and abstraction layers.
 - is able to examine the contents of a data store to correlate the behaviour of an application to the data being stored.
 - can select an appropriate place to store data, understanding the implications of doing so. For example, when to use a cookie, local storage or session.
 - knows how to store or reference sensitive data appropriately and securely.

### Level 4
Understands different data stores to the level of being able to optimise and improve their use from design and performance perspectives.
 - can plan their code to minimise the impact of utilising a data store, such as retrieving larger amounts of data as a batch rather than individually.
 - employs simple techniques for improving the performance of data store operations, such as when using a normalised table structure in a relational database is appropriate.
 - is familiar with tools and techniques for analysing data store interactions to identify bottlenecks and opportunities for optimisation, for example using the output of EXPLAIN on a MySQL query to identify KEYs being used.
 - understands the key ways a data store may be configured to optimise interactions with it, such as choosing the appropriate level of transaction isolation to use in an RDBMS.
 - is aware of how a platform, and the libraries it uses, interact with the data store, the benefits this provides but also the pitfalls that may arise. For example: tracking database transactions, or how the data schema may be constructed.
 - is aware of techniques on how to monitor and diagnose issues, such as using the MySQL slow query log, or browser developer tools to examine cookies and local storage.

### Level 5
Is considered an authority with the data stores commonly used within their domain. Can extend their knowledge to less familiar technologies, and plan their use in conjunction with those used as standard.
 - considers the movement of data between different data stores and plans their implementation to interact with all of them effectively, for example ensuring that content updates are coordinated between browser local storage and the application database.
 - is familiar with replication and how this affects the behaviour of the application, such as with a Document Store that replicates data between multiple nodes.
 - can plan their code to utilise the most appropriate node for each operation and can recognise when issues have arisen from this, for example writing data to the primary database, reading data from a replica.
 - is capable of performing in-depth investigations to identify the causes of problems, and implement or recommend appropriate solutions, For example using MySQL ‘SHOW ENGINE INNODB STATUS’ to diagnose transaction issues.
 - is aware of the common configuration options for a storage system, and can work with devops and service providers to tune these for improving performance and uptime.
 - guides others within their team on the standard and optimal approaches for utilising the data stores with which they are most familiar.

### Level 6
Uses their broad and deep experience of data storage solutions to architect complex project applications, guiding and upskilling teams on the rationale behind their decisions at every opportunity.
 - is able to build systems with distributed data points, and plan how they will interact together to create the most seamless experience for the end user. For example, the interaction of the browser with the server, optimistic UI updates, messages being sent to a queue, subscribers processing those messages and storing data in DB, and a fast key-pair store such as Redis.
 - can assess the pros and cons of different data store solutions and make a recommendation based upon reference architectures and project requirements, for example MySQL versus pSQL, Redis vs Memcached, local component state vs Redux.
 - understands replication and clustering techniques for a variety of data store types and can make recommendations on the set up of these for scalability purposes, such as multi-primary or multi-replica replication, sharding, and failover in RDBMS.
 - is able to convey the intention of the architecture to a project team, and advise on the management of data between data-points so that the team may competently implement the solution.
 - mentors team members of the projects they are involved with, and the wider Leads.io community on the best practices and advanced techniques for utilising data stores.