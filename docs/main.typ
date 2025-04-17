#import "@preview/fyrst-ru-labreport:0.1.0": *
#import "@preview/obsidius:0.1.0": *
#import "@preview/cetz:0.3.2"
#import "@preview/fletcher:0.5.4" as fletcher: node, edge
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

#let observation(title:"Observation", content) = {
    callout(emoji.notepad, title, content,
        (rgb("#6F05E7"), rgb("#EDE8FD"), rgb("#C4B3FF")))
}


#show: project.with(
  title: [MindChain: Right Help, Right Away! #footnote[Repo https://github.com/nitheesh-me/MindChain & https://github.com/YashSonkar-PhD-CSE/MindChain_Android]],
  course-name: [Software Engineering],
  course-abrev: [CS6.401],
  organization: [International Institute of Information Technology, Hyderabad],
  logo:image("iiit-logo.png",width:50%),
  authors:(
     (
      name: "Sanket Adlak",
      phone: "2024204005",
      address: "team-17 (P90)",
      email: "sanket.adlak@students.iiit.ac.in"
     ),
     (
      name: "Priyank Nagarnaik",
      phone: "2024204011",
      address: "team-17 (P90)",
      email: "priyank.nagarnaik@students.iiit.ac.in"
    ),
    (
      name: "Aditya Singh Rathore",
      phone: "2024204012",
      address: "team-17 (P90)",
      email: "aditya.sing@students.iiit.ac.in"
    ),
    (
      name: "Yash Sonkar",
      phone: "2024801001",
      address: "team-17 (P90)",
      email: "yash.sonkar@research.iiit.ac.in"
    ),
    (
      name: "Nitheesh Chandra",
      phone: "2024801002",
      address: "team-17 (P90)",
      email: "nitheeshchandra.y@research.iiit.ac.in"
    ),
  ),
  author-columns:2,
  supervisors:(
    (
      name:"Karthik Vaidhyanathan",
      title:"Course Instructor",
      email:"karthik.vaidhyanathan@iiit.ac.in",
      // phone:"+001-123-4567"
    ),
    (
      name:"Teaching Assistants",
      // title:"TAs",
      email:"https://karthikv1392.github.io/cs6401_se/staff/",
      phone:none
    ),
  ),
  supervisors-columns:2,
  bibliography:bibliography("bibliography.bib", full: true),
  paper-size:"a4",
  lang:"en", 
)
#set heading(numbering: none)

// #outline(title: "TODOs", target: figure.where(kind: "todo"))

// = Abstract
// This document outlines the requirements, architecture, tactics, patterns, and prototype implementation for the MindChain project. It aims to provide a structured approach to designing, building, and analyzing the system to address a real-world problem using software engineering principles. Though we were aware implementation might get hindered, we wanted to plan this project as if it will work at a moderate large scale.


= Introduction

MindChain is motivated by the perennial challenge of timely and accurate assistance within campus communities, where students, researchers, and event organizers at IIIT Hyderabad frequently seek domain-specific expertise. Traditional channels—such as notice boards, email threads, and generic Q&A forums—support asynchronous exchanges but often suffer from low engagement, delayed responses, and difficulty in matching specialized queries to the right experts. While existing platforms (e.g., university helpdesks and third‑party collaboration tools) offer basic messaging and ticket‑tracking features, they lack tailored mechanisms for incremental discovery and efficient expert discovery in a dynamic academic setting.

To address these limitations, we present MindChain, a community-driven platform that seamlessly connects help‑seekers with IIIT Hyderabad experts through advanced query‑matching algorithms, configurable notification policies, and integrated real‑time chat. Our approach begins with a formal specification of functional requirements—covering user registration, role‑based profiles, query submission, matched recommendation workflows, and communication channels—and extra‑functional requirements for scalability, reliability, and user experience. We detail architectural patterns such as pub/sub event handling, modular service decomposition, and real‑time messaging protocols. A prototype implementation demonstrates support for incremental notifications, expert availability tracking, and intuitive user interfaces. MindChain’s holistic design fosters human-centric interactions, reduces response latency, and establishes a reusable blueprint for campus‑scale assistance platforms, laying the groundwork for future enhancements and broader deployment.

= Exclusions

Certain aspects were intentionally excluded from the scope of this paper to focus on the core objectives. These exclusions include integration with observability tools and error tracking systems such as Sentry, deployment specifications like CPU and memory limits, additional architectural decision records (ADRs), comprehensive low-level design details, and in-depth research on algorithmic approaches. By narrowing the scope, the work prioritizes a clear, actionable blueprint for addressing immediate community needs while leaving room for future refinements and expansions.


= Deliverables

== Task 1: Requirements & Subsystems
This section documents the specific functional and extra-functional requirements of the MindChain system and provides an overview of its main subsystems.
=== Functional Requirements
Core functional requirements that define what the MindChain system must/should do.

+ *User Management*
 #include "includes/FR1.typ"
 #include "includes/FR2.typ"
 #include "includes/FR3.typ"

+ *Query Management*
 #include "includes/FR4.typ"
 #include "includes/FR5.typ"
 #include "includes/FR6.typ"

+ *Communication Management*
 #include "includes/FR7.typ"
 #include "includes/FR8.typ"
 #include "includes/FR9.typ"

+ *Analytics and Feedback*
 #include "includes/FR10.typ"
 #include "includes/FR11.typ"

=== Extra-functional Requirements
Quality attributes and constraints that define how the MindChain system should operate.

+ *Performance*
 #include "includes/EFR1.typ"
 #include "includes/EFR2.typ"

+ *Reliability*
 #include "includes/EFR3.typ"
 #include "includes/EFR4.typ"

+ *Security*
 #include "includes/EFR5.typ"
 #include "includes/EFR6.typ"

+ *Usability*
 #include "includes/EFR7.typ"
 #include "includes/EFR8.typ"

+ *Maintainability*
 #include "includes/EFR9.typ"
 #include "includes/EFR10.typ"

#pagebreak()
=== Subsystem Overview
Breaks down the primary subsystems, explaining their roles and how they integrate to form the cohesive MindChain platform.

#figure(
  image("images/system context diagram.png", width: 80%),
  caption: [high-level system context diagram showing MindChain and its external interactions],
)


#figure(
  image("images/Bounded Context Map.png", width: 100%),
  caption: [Strategic Domain Model: Bounded Context Map and their relations],
)
#figure(
  image("images/high level - event flow across domains diagram.png", width: 110%),
  caption: [High level Event Flow: domain events flow between bounded contexts:],
)

+ #include "includes/SS0.typ"
+ #include "includes/SS1.typ"
+ #include "includes/SS2.typ"
+ #include "includes/SS3.typ"
+ #include "includes/SS4.typ"
+ #include "includes/SS5.typ"
+ #include "includes/SS6.typ"
+ #include "includes/SS7.typ" // ignoring as this is just a connector.

== Task 2: Architecture Framework
This section outlines the architectural framework of MindChain, including stakeholder identification following IEEE 42010 and major design decisions documented as Architecture Decision Records (ADRs).
=== Stakeholder Identification
Following IEEE 42010 standard to identify stakeholders, their concerns, and the viewpoints and views addressing these concerns.

IEEE 42010 is a standard for architecture description that provides a framework for identifying stakeholders, their concerns, and the viewpoints and views that address these concerns. This framework helps ensure that the architecture meets the needs of all stakeholders and addresses their specific concerns.

_Key Components of IEEE 42010:_
/ Stakeholders: Individuals, groups, or organizations with interests in or concerns about the system
/ Concerns: Interests or requirements that stakeholders have regarding the system
/ Viewpoints: Perspectives from which to view the system that address specific concerns
/ Views: Representations of the system from specific viewpoints

==== Stakeholder Categories

#include "includes/Stakeholder.typ"

#pagebreak()

=== Major Design Decisions(\* are accepted)
Architecture Decision Records (ADRs) documenting significant design decisions for the MindChain platform.

_What are ADRs?_

Architecture Decision Records (ADRs) are documents that capture important architectural decisions made along with their context and consequences. They provide a record of architectural decisions and the rationale behind them, serving as valuable documentation for current and future team members.

_Key Components of an ADR:_
/ Title: A descriptive title for the decision
/ Status: The current status of the decision (proposed, accepted, deprecated, etc.)
/ Context: The background and situation that led to the need for a decision
/ Decision: The specific architectural decision that was made
/ Consequences: The resulting effects of the decision, both positive and negative
/ Alternatives: Other options that were considered and why they were rejected

#pagebreak()
#include "includes/ADR001.typ"
#pagebreak()
#include "includes/ADR002.typ"
#pagebreak()
#include "includes/ADR003.typ"
#pagebreak()
#include "includes/ADR004.typ"
#pagebreak()
#include "includes/ADR005.typ"
#pagebreak()
#include "includes/ADR006.typ"
#pagebreak()

== Task 3: Tactics & Patterns
This section details the architectural tactics employed to address quality attributes and the design patterns implemented in the MindChain system.

=== Architectural Tactics
Describes tactics implemented to address extra-functional requirements, ensuring system quality.

#include "includes/AT-Performance.typ"
#include "includes/AT-Security.typ"
#include "includes/AT-Scalability.typ"
#include "includes/AT-Maintainability.typ"

#include "includes/AT-summary.typ"

=== Implementation Patterns
Design patterns utilized in the MindChain platform to solve common architectural challenges.

#include "includes/IP-Architectural.typ"
#include "includes/IP-Structural.typ"
#include "includes/IP-Behavioral.typ"
#include "includes/IP-Integration.typ"


#figure(
  image("images/MindChain Arch HLD box-arrow.png", width: 100%),
  caption: [Final High Level Architecture Diagram for Mind Chain],
)

== Task 4: Implementation & Analysis
This section covers the development of MindChain prototype and provide a comparative analysis of the implemented architecture against alternatives

=== Prototype Development
Details the development of the MindChain prototype, showcasing key workflows and functionalities.

// ==== Development Process
// The MindChain prototype was developed using an iterative approach, focusing on delivering incremental functionality while maintaining architectural integrity. The development process consisted of the following phases:

// / Core Architecture Setup: Established the foundational microservices architecture, set up service boundaries, and implemented basic communication patterns between services.
// / User Management & Authentication: Implemented user registration, authentication, and profile management functionality with role-based access control for students, faculty, and staff.
// / Query & Expert Matching: Developed the core query submission workflow and expert matching algorithm, integrating with institutional data sources for contextual awareness.
// / Communication & Notifications: Implemented real-time chat functionality and the incremental notification system to facilitate seamless communication between users.

// Development Insight
// Each phase included continuous integration and deployment, with automated testing to ensure architectural integrity was maintained throughout the development process.

==== Core Functionality & Architectural Design

The MindChain prototype demonstrates the following core functionality, aligned with the architectural design principles:

/ Context-Aware Query Matching: The prototype implements the vector embedding-based matching algorithm that analyzes query content and matches it with expert profiles based on academic expertise, research interests, and past interactions.
/ Real-Time Communication: WebSocket-based real-time chat functionality enables immediate interaction between students and matched experts, with message persistence and history retrieval.
/ Incremental Notifications: Smart notification batching and prioritization system that minimizes disruption while ensuring timely delivery of important updates.

Architectural Design Highlights
/ Microservices Architecture: Decomposed into seven specialized services with clear boundaries and responsibilities.
/ Event-Driven Communication: Asynchronous event-based communication between services for improved scalability and resilience.
/ Polyglot Persistence: Specialized databases for different data types and access patterns (relational for structured data, document for profiles, graph for relationships).
/ API Gateway: Unified entry point for client applications with authentication, routing, and request aggregation

==== Key Workflows

The prototype showcases the following key workflows that are essential to MindChain's operation:
_Query Submission & Expert Matching Workflow_
+ User submits a query through the web interface or app
+ Query is processed and enriched with contextual information
+ Matching algorithm analyzes query content and generates vector embeddings
+ System identifies and ranks potential experts based on expertise match
+ Top-ranked experts receive notifications about the new query
+ Experts can accept or decline the query
+ Upon acceptance, a communication channel is established
_Real-Time Communication Workflow_
+ User and expert join the established communication channel
+ WebSocket connection is established for real-time messaging
+ Messages are encrypted end-to-end for security
+ Messages are persisted to the database for history and continuity
+ Users receive real-time typing indicators and read receipts
+ File sharing and rich media support is available
+ Chat history is accessible for future reference
_Notification Management Workflow_
+ System events trigger notification creation
+ Notifications are prioritized based on urgency and user preferences
+ Similar notifications are batched to reduce interruptions
+ Notifications are delivered through multiple channels (in-app, email, push)
+ User interaction with notifications is tracked for future optimization
+ Notification preferences can be customized by users

==== Technologies & Tools
The MindChain prototype leverages the following technologies and tools:

_Frontend Technologies_
- React with Next.js for server-side rendering and routing
- TypeScript for type safety and developer experience
- Tailwind CSS for responsive and consistent UI design
- Socket.IO client for real-time communication
- React Query for efficient data fetching and caching

_Backend Technologies_
- Python with FastAPI for API services
- Socket.IO server for WebSocket communication
- PostgreSQL for structured data storage
- MongoDB for document storage (user profiles, queries)
- Redis for caching and pub/sub messaging
-  #strike[Neo4j for graph relationships (expertise network)]

_Android Native Application_
- Kotlin for the application code
- Jetpack Compose as UI framework
- Dagger-Hilt for dependency injection

_AI & Machine Learning_
- TensorFlow for vector embeddings generation
- BERT-based models for semantic understanding
- Custom matching algorithms for expert recommendation
- Scikit-learn for classification and clustering

_DevOps & Infrastructure_
- Docker for containerization
- Kubernetes for orchestration and scaling
-  #strike[GitHub Actions for CI/CD pipelines]
-  #strike[Prometheus and Grafana for monitoring]
-  #strike[ELK Stack for centralized logging]
-  #strike[Terraform for infrastructure as code]

_Development Tools_
- VS Code with specialized extensions for collaborative development
- Postman for API testing and documentation
-  #strike[Jest and React Testing Library for automated testing]
-  #strike[Storybook for component development and documentation]
-  #strike[Figma for UI/UX design and prototyping]

=== Architecture Analysis
This page provides a detailed analysis of MindChain's architecture, comparing it with alternative approaches and evaluating its performance against key extra-functional requirements.

==== Microservices vs. Monolithic Architecture
We compared our implemented microservices architecture against a monolithic alternative to evaluate the trade-offs and validate our architectural decisions.

#figure(
  image("images/monolith-vs-microservice.png", width: 100%),
  caption: [Different components involved in deployment],
)

#three-line-table(columns:(1fr, 2fr, 2fr))[
  | *Aspect* | *Microservices Architecture (Implemented; only essential)* | *Monolithic Architecture (Alternative)* |
  | ------ | ---------- | -------- |
  | Development Complexity | Higher initial complexity due to distributed nature | Lower initial complexity, simpler setup |
  | Scalability | Independent scaling of services based on demand | Entire application must scale together |
  | Deployment | Independent deployment of services | Entire application deployed at once| 
  | Technology Flexibility | Different technologies can be used for different services | Single technology stack for the entire application |
  | Fault Isolation | Failures contained within individual services | Failures can affect the entire application |
  | Team Organization | Teams can work independently on different services | Teams must coordinate more closely |
  | Operational Complexity | Higher due to distributed nature | Lower, simpler to monitor and manage |
  | Resource Utilization | Higher overhead due to service replication | More efficient resource usage | 
]

#observation[While the microservices architecture introduces additional complexity, it provides significant advantages in terms of scalability, fault isolation, and team autonomy that are critical for MindChain's long-term evolution.
]

#pagebreak()
===== Performance Analysis
We conducted a comprehensive quantitative evaluation of three architectural deployments—monolithic, microservices without autoscaling, and microservices with autoscaling—for MindChain’s prototype. To capture end-to-end performance and reliability, we measured five Service Level Indicators (SLIs):

+ Latency (P50, P95, P99)
+ Throughput (requests per second)
+ Error Rate (percentage of failed requests)
+ Availability (service uptime under stress)
+ Resource Utilization (CPU & memory usage)

*Performance SLIs*
Used dummy data and load generators to do stress testing.

_Latency_ for query submission

#three-line-table()[
  | Load Level | Monolith P50 / P95 / P99 (ms) |  MS w/o AS P50 / P95 / P99 (ms) |MS w/ AS P50 / P95 / P99 (ms) |
  | ---- | ---- | ---- | ---- |
  | Light (≤100) | 110 / 180 / 300 | 145 / 220 / 360 | 135 / 210 / 350 |
  | Medium (101–500) | 240 / 400 / 650 | 260 / 430 / 700 | 255 / 420 / 680 |
  | Heavy (>500) | 750 / 1,200 / 2,000 | 450 / 700 / 1,050 | 440 / 680 / 1,000 |
]

#observation[
  Auto scaling reduces tail latency by ~5–8% under heavy load, closing the performance gap with the monolith at P95/P99.
  - Bottleneck analysis is not done at this stage, to identify if database is the cause of issue / running on single instance infra.
]

_Throughput_
#three-line-table()[
 | Architecture | Max Throughput (req/s) |
 | --- | --- |
 | Monolith | ~800 |
 | MS w/o AS (fixed pods) | ~1,200 |
 | MS w/ AS (elastic) | ~1,800 (at max usage) |
]

_Error Rate_: primarily timeouts / connection failures

#three-line-table()[
  | Load Level | Monolith (%) | MS w/o AS (%) | MS w/ AS (%) |
  | --- | --- | --- | --- |
  | Light | 0.05 | 0.08 | 0.06| 
  | Medium | 0.5 | 0.7 | 0.6 |
  | Heavy | 4.2 | 3.5 | 1.8 |
]

#observation[
Autoscaling reduces error rates under stress by redistributing load to new instances, halving the heavy-load error rate compared to fixed microservices.
]

_Availability_: Kind of hard to reproduce! getting different values but he trend is same

#three-line-table()[
  | Architecture | Availability under ≥2,000 connections| 
  | --- | --- |
  | Monolith | 82% |
  | MS w/o AS | 92% |
  | MS w/ AS | 98% |
]

#observation[
Autoscaling enhances uptime by provisioning additional service instances before saturation.
]

===== Operational SLIs

_CPU & Memory Utilization_: auto scaling at 50% usage; adjusting this varies results

#three-line-table()[
  | Metric | Monolith Avg. | MS w/o AS Avg. | MS w/ AS Avg. |
  | ---- | ---- | ---- | ---- |
  | CPU Utilization | 80% | 70% | 65% |
  | Memory Utilization | 85% | 75% | 70% |
]

#observation[
  Elastic scaling in the autoscaled microservices cluster maintains headroom, reducing resource peaks by ~5–10%.
]

_Saturation (Queue Length)_

- Monolith: Queue depth spikes $>100$ under heavy load.
- MS w/o AS: Spikes to $~60$ when fixed service instances hit capacity.
- MS w/ AS: Peaks remain $<40$ thanks to horizontal pod autoscaling.

==== Architectural Trade-offs
Based on our analysis, we identified the following key trade-offs between the microservices and monolithic architectures:

*Performance Trade-offs*
/ Network Overhead vs. Scalability: The microservices architecture introduces network communication overhead, slightly reducing performance for simple operations. However, it enables independent scaling of services, resulting in better performance under high load and for complex operations.
/ Specialized Optimization vs. Global Optimization: Microservices allow for specialized optimization of individual services (e.g., the matching algorithm service), while the monolith enables more holistic optimizations across the entire codebase.

*Maintainability Trade-offs*
/ Development Complexity vs. Long-term Maintainability: The microservices architecture has higher initial development complexity but offers better long-term maintainability through clearer service boundaries and independent evolution.
/ Technology Diversity vs. Consistency: Microservices enable using different technologies for different services, allowing optimal tool selection but increasing the knowledge requirements for the development team.
/ Deployment Complexity vs. Deployment Flexibility: Microservices require more sophisticated deployment infrastructure but enable independent deployment of services, reducing the risk and impact of deployments.

*Cost Trade-offs*
/ Infrastructure Costs vs. Development Costs: The microservices architecture has higher baseline infrastructure costs but can reduce development costs through team autonomy and parallel development.
/ Operational Complexity vs. Operational Flexibility: Microservices require more sophisticated monitoring and management tools, increasing operational costs, but provide better operational flexibility and fault isolation.
/ Initial Investment vs. Long-term Scalability: Microservices require higher initial investment in infrastructure and tooling but offer better long-term scalability and cost efficiency as the system grows and evolves.

==== Decision Rationale
After careful consideration of these trade-offs, we chose the microservices architecture for MindChain based on the following key factors:

/ Anticipated Growth: MindChain is expected to grow significantly in terms of user base and feature set, making the scalability advantages of microservices critical.
/ Team Structure: The development team is organized into specialized groups that align well with the service boundaries, enabling more efficient parallel development.
/ Specialized Optimization: Different components of MindChain have vastly different performance characteristics and requirements, making specialized optimization valuable.
/ Fault Isolation: The critical nature of the platform for academic support makes fault isolation particularly important to maintain overall system availability.
/ Technology Evolution: The rapidly evolving nature of AI and matching algorithms makes the ability to update individual services independently particularly valuable.

#observation(title:"Conclusion")[
While the microservices architecture introduces additional complexity, our quantitative analysis confirms that it provides significant advantages in terms of scalability, performance under load, and long-term maintainability that align with MindChain's requirements and growth trajectory.

- _Next Steps_: Integrate real traffic simulations, refine HPA thresholds.
]

== Reflections
// 	Include	reflections	on	the	project	process	and	any	lessons	learned
*Challenges Faced*
+ Team Coordination: Misaligned communication led to delays and inconsistencies, highlighting the need for better collaboration tools and clearer documentation.
+ Matching Algorithm: The current implementation is basic, suitable for the MVP, but requires optimization for scalability and quality with more data.
+ UI/UX Balancing: Balancing aesthetics and usability required iterative user feedback, which delayed finalization.

*Lessons Learned*
+ Document Design Decisions: ADRs clarified decisions and reduced confusion, proving essential for long-term maintainability.
+ Prioritize Deliverability: Focused on timelines and team expertise over ideal solutions, ensuring practical progress.
+ Iterative Feedback: Regular stakeholder feedback helped refine implementation and user experience.
+ Scalability Mindset: Even MVP designs must consider future growth to avoid technical debt.

*Key Takeaways*
+ Data quality is crucial for algorithm development and UI precision.
+ Automated testing and robust monitoring reduce post-deployment issues.
+ Comprehensive onboarding and documentation enhance team efficiency.
+ User-centric, iterative design ensures relevance and usability.

These insights emphasize pragmatic planning, communication, and adaptability for future projects.

// #pagebreak()
// == Extra Information

// home screen
// #image("images/home-page.png", height:92%)

// sample page
// #image("images/mindchain-me-page.png")

// notificaiton popup
// #image("images/mindchian-notification-popup.png")