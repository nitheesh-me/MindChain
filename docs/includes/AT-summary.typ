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

==== Tactics Summary
Overview of architectural tactics and their relationship to quality attributes.

#three-line-table(columns:(1fr, 1fr, 1fr, 2fr))[
  | *Tactic* | *Category* | *Primary Quality Attributes	* | *Implementation Approach* |
  | ------ | ---------- | -------- | ------- |
  | Caching Strategy | Performance | Response Time | Multi-level caching with time-based invalidation |
  |Asynchronous Processing | Performance | Response Time, Scalability | Message queues and background processing|
  |Defense in Depth | Security | Data Privacy, Authentication | Multi-layered security controls |
  |Least Privilege | Security | Authentication and Authorization | Role-based and contextual access controls |
  |Horizontal Scaling | Scalability | Scalability | Stateless services with load balancing |
  |Data Partitioning | Scalability | Scalability, Response Time | Sharding and specialized databases |
  |Service Isolation | Maintainability | Extensibility, Testability | Microservices with clear boundaries |
  |Comprehensive Monitoring | Maintainability | Availability, Testability | Distributed tracing and centralized logging |
]
