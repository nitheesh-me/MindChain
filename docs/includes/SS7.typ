==== SS7: Integration Subsystem
The Integration Subsystem manages connections with external systems and services, including the browser extensions institutional databases, and third-party services. It provides APIs and adapters for seamless integration.

+ _Key Components:_
  - API Gateway: Provides unified access to system functionality
  - Institutional Data Connector: Integrates with IIIT Hyderabad's academic databases
  - External Service Adapters: Connects to third-party services as needed

+ _Interfaces:_
  - To Institutional Systems: Connects to academic databases and authentication systems
  - To All Subsystems: Provides external data and services as needed

#figure(
  image("../images/integration - domain diagram.png", width: 90%),
  caption: [Integration Subsystem : Detailed Bounded Contexts]
)