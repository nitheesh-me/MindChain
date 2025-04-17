==== SS2: Query Management Subsystem
The Query Management Subsystem handles the creation, tracking, and resolution of user queries. It manages the lifecycle of queries from submission to resolution, including categorization, prioritization, and status tracking.

+ _Key Components:_
  - Query Submission Service: Processes query submissions from web and app interfaces
  - Query Tracker: Manages query status and lifecycle
  - Category Manager: Handles query categorization and tagging
  - Query Data Store: Stores query details, status, and history

+ _Interfaces:_
  - To User Interface: Provides query submission and tracking functionality
  - To Expert Matching Subsystem: Sends queries for expert matching
  - To Analytics Subsystem: Provides query data for analysis

#figure(
  image("../images/query management - domain diagram.png", width: 50%),
  caption: [Query management Subsystem : Detailed Bounded Contexts]
)
