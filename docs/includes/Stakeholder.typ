#import "@preview/tablem:0.2.0": tablem, three-line-table
#import "@preview/dashy-todo:0.0.3": todo
#let three-line-table = tablem.with(
  render: (columns: auto, ..args) => {
    table(
      columns: columns,
      stroke: 0.2pt,
      align: left + top,
      table.hline(y: 0),
      table.hline(y: 1, stroke: .5pt),
      ..args,
      table.hline(),
    )
  }
)

The stakeholders of the MindChain system can be categorized into four main groups: Users, Operators, Developers, and Business. Each group has its own set of concerns and interests in the system.

#three-line-table(columns:(1.5fr, 1.5fr, 2.5fr, 3fr))[
  | *Category* | *Stakeholder* | *Description* | *Primary Concerns* |
  | ------ | ---------- | -------- | ------- |
  | #underline[*Users*]   | Students       | Undergraduate and graduate students at IIIT Hyderabad who seek academic and research support; some students can be recognized as experts        | 
  - Ease of submitting queries
  - Quick and accurate expert matching
  - Timely responses to questions
  - User-friendly interface
  - If expert, get matched and allow to answer
  - Privacy of academic information
  |
  | ^       | Faculty |	Professors and instructors who provide expertise and answer student queries	|
  - Relevant query matching based on expertise
  - Manageable workload and notification frequency
  - Efficient communication tools
  - Don't want to be overwhelmed with notifications
  |
  | ^       | Staff |	Administrative and support staff who assist with event coordination and administrative queries	|
  - Clear categorization of administrative queries
  - Integration with institutional systems
  - Efficient workflow management
  - Reporting and analytics
  |
  | #underline[*Operators*]   | System Administrators | IT staff responsible for maintaining and operating the MindChain platform        | 
  - System reliability and uptime
  - Performance monitoring
  - Security management
  - Backup and recovery
  - Ease of maintenance
  |
  | ^       | Department Coordinators    | Staff who oversee the use of MindChain within specific departments  |
  - Department-specific analytics
  - Faculty workload management
  - Query routing and assignment
  - Integration with departmental processes
  |
  | ^ | IT Support Staff       | Personnel who provide technical support to users of the system        |
  - Troubleshooting tools
  - User management capabilities
  - System diagnostics
  - Documentation and knowledge base
  |
  | #underline[*Developers*]   | Software Developers | Engineers who build and maintain the MindChain platform        | 
  - Code maintainability and quality
  - Development efficiency
  - Technical documentation
  - Testing and debugging capabilities
  - Integration with development tools
  |
  | ^ | UX/UI Designers	| Designers responsible for the user experience and interface	|
  - Design system consistency
  - Accessibility compliance
  - User flow optimization
  - Responsive design implementation
  |
  | ^ | Data Scientists	| Specialists who develop and improve the matching algorithm	|
  - Data quality and availability
  - Algorithm performance metrics
  - Model training and evaluation
  - Integration with the matching subsystem
  |
  | ^ | QA Engineers	| Quality assurance specialists who test the system	|
  - Testability of components
  - Test automation support
  - Bug tracking and reporting
  - Performance testing capabilities
  |
  | #underline[*Business*] | Institute Leadership |	Directors, deans, and other leadership at IIIT Hyderabad	|
  - Alignment with institutional goals
  - Return on investment
  - Reputation and image
  - Compliance with policies
  - Strategic value
  |
  | ^ | Project Sponsors	| Individuals or groups funding the MindChain project	|
  - Budget adherence
  - Timeline compliance
  - Feature delivery
  - Project success metrics
  |
  | ^ | Regulatory Compliance |	Legal and compliance officers ensuring adherence to regulations	|
  - Data privacy compliance
  - Security standards
  - Prevention and mitigation of cyber crimes
  - Accessibility requirements
  - Audit trails and reporting
  |
]

==== Viewpoints

#three-line-table(columns:(1fr, 2fr, auto, 1.5fr))[
  | *Viewpoint* | *Description* | *Addressed Concerns* | *Primary Stakeholders* |
  | ------ | ----------- | ------- | ------- |
  | Functional Viewpoint | Describes the system's functional elements, their responsibilities, interfaces, and interactions | 
  - Feature completeness
  - System capabilities
  - Functional requirements
  - Integration points
  |
  Students, Faculty, Staff, Developers
  |
  | Information Viewpoint | Describes how the system stores, manages, and manipulates data |
  - Data integrity
  - Data privacy
  - Information flow
  - Data persistence
  |
  Data Scientists, System Administrators, Regulatory Compliance
  |
  | Deployment Viewpoint | Describes the environment in which the system will be deployed and the dependencies on its environment |
  - System reliability
  - Scalability
  - Performance
  - Infrastructure requirements
  |
  System Administrators, IT Support Staff, Developers
  |
  | Development Viewpoint | Describes the architecture that supports the software development process |
  - Code maintainability
  - Development efficiency
  - Testing strategy
  - Module organization
  |
  Software Developers, QA Engineers
  |
  | Usability Viewpoint | Describes the user interface, user experience, and accessibility aspects of the system |
  - User-friendly interface
  - Accessibility
  - User flow optimization
  - Responsive design
  |
  Students, Faculty, Staff, UX/UI Designers
  |
  | Security Viewpoint | Describes how the system protects sensitive data and prevents unauthorized access |
  - Data protection
  - Authentication
  - Authorization
  - Audit trails
  |
  System Administrators, Regulatory Compliance, Institute Leadership
  |
  | Performance Viewpoint | Describes the performance characteristics of the system and how they affect user experience |
  - Response time
  - Throughput
  - Resource utilization
  - Scalability
  |
  Students, Faculty, System Administrators, Developers
  |
]


// Functional Viewpoint
// Primary Stakeholders:

// Students
// Faculty
// Staff
// Developers
// Concerns Addressed:

// Feature completeness
// System capabilities
// Functional requirements
// Integration points
// Model Kinds:

// Use case diagrams
// Sequence diagrams
// Conventions:

// UML notation for use cases and sequence diagrams
// Correspondence Rules:

// Consistency between functional and non-functional requirements
// 2. Information Viewpoint
// Primary Stakeholders:

// Data Scientists
// System Administrators
// Regulatory Compliance
// Concerns Addressed:

// Data integrity
// Data privacy
// Information flow
// Data persistence
// Model Kinds:

// Entity-relationship diagrams
// Data flow diagrams
// Conventions:

// UML notation for ER diagrams and data flow diagrams
// Correspondence Rules:

// Consistency between data models and functional requirements
// 3. Deployment Viewpoint
// Primary Stakeholders:

// System Administrators
// IT Support Staff
// Developers
// Concerns Addressed:

// System reliability
// Scalability
// Performance
// Infrastructure requirements
// Model Kinds:

// Deployment diagrams
// Network diagrams
// Conventions:

// UML notation for deployment and network diagrams
// Correspondence Rules:

// Consistency between deployment and functional requirements
// 4. Development Viewpoint
// Primary Stakeholders:

// Software Developers
// QA Engineers
// Concerns Addressed:

// Code maintainability
// Development efficiency
// Testing strategy
// Module organization
// Model Kinds:

// Class diagrams
// Component diagrams
// Conventions:

// UML notation for class and component diagrams
// Correspondence Rules:

// Consistency between development and functional requirements
// 5. Usability Viewpoint
// Primary Stakeholders:

// Students
// Faculty
// Staff
// UX/UI Designers
// Concerns Addressed:

// User-friendly interface
// Accessibility
// User flow optimization
// Responsive design
// Model Kinds:

// Wireframes
// User journey maps
// Conventions:

// Design system guidelines and accessibility standards
// Correspondence Rules:

// Consistency between usability and functional requirements
// 6. Security Viewpoint
// Primary Stakeholders:

// System Administrators
// Regulatory Compliance
// Institute Leadership
// Concerns Addressed:

// Data protection
// Authentication
// Authorization
// Audit trails
// Model Kinds:

// Security architecture diagrams
// Threat models
// Conventions:

// Security standards and best practices
// Correspondence Rules:

// Consistency between security and functional requirements
// 7. Performance Viewpoint
// Primary Stakeholders:

// Students
// Faculty
// System Administrators
// Developers
// Concerns Addressed:

// Response time
// Throughput
// Resource utilization
// Scalability
// Model Kinds:

// Performance diagrams
// Load testing reports
// Conventions:

// Performance metrics and benchmarks
// Correspondence Rules:

// Consistency between performance and functional requirements

==== Key Architecture Views
For each viewpoint need to mention: Model Kinds,Conventions, Correspondence Rules are not mentioned in this document!

===== Logical View
The logical view represents the functional elements of the system and their relationships. It addresses concerns related to system functionality, organization, and structure.

*Key Diagrams:*
- Component diagram showing the main subsystems #footnote[Mentioned in previous sections]
- Class diagrams for key domain models #footnote[Mentioned in previous sections]
- Sequence diagrams for critical interactions #footnote[Mentioned in previous sections]


===== Process View
The process view addresses concerns related to concurrency, distribution, performance, and scalability. It shows how the runtime elements of the system interact.

*Key Diagrams:*
- Activity diagrams for key workflows
  #figure(
    image("../images/expert matrching - Activity Diagram.png", width: 63%),
    caption: [Activity Diagram for Expert matching],
  )
#pagebreak()
- State diagrams for complex processes
  #figure(
    image("../images/expert matrching - State Diagram.png", width: 63%),
    caption: [Activity Diagram for Expert matching],
  )
#pagebreak()
- Communication diagrams for real-time interactions
  #figure(
    image("../images/expert matrching - Communication Diagram.png", width: 100%),
    caption: [Communication Diagram for Expert matching],
  )

===== Development View
The development view addresses concerns related to software management, reuse, constraints, and development environment. It shows the organization of modules and components.

*Key Diagrams:*
- Package diagrams showing code organization
- Module dependency diagrams
- Build and deployment pipeline diagrams


===== Physical View
The physical view addresses concerns related to system topology, distribution, and deployment. It shows how software elements are mapped to hardware.

*Key Diagrams:*
- Deployment diagrams showing hardware configuration
  #figure(
    image("../images/mindchain deployment.png", width: 100%),
    caption: [Deployment Diagram for MindChain],
  )
- Network topology diagrams
- Infrastructure architecture diagrams
  #figure(
    image("../images/deployment diagram.png", width: 100%),
    caption: [Different components involved in deployment],
  )

===== Scenarios
Scenarios illustrate how the various architectural elements work together to fulfill key requirements. They serve as a validation mechanism for the architecture.

*Key Diagrams:*
- Use case diagrams for main system functions
  #figure(
    image("../images/minchain - usecase diagram.png", width: 100%),
    caption: [Use Case Diagram for MindChain],
  )
- User journey maps for key workflows
  #figure(
    image("../images/mindchain - journey.png", width: 100%),
    caption: [Use Case Diagram for MindChain],
  )
#pagebreak()
- Sequence diagrams for specific scenarios
  #figure(
    image("../images/expert matrching - SequenceDiagram.png", width: 100%),
    caption: [Sequence Diagram for MindChain],
  )
