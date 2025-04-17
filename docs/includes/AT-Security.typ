#import "@preview/dashy-todo:0.0.3": todo
==== Security Tactics

Tactics employed to optimize response time, throughput, and resource utilization.

1. *Defense in Depth*
/ Focus: Multi-layered Protection

MindChain implements multiple layers of security controls to protect sensitive academic and personal data.

*Implementation Details*
+ Network-level protection with WAF and DDoS mitigation
+ Application-level security with input validation and output encoding
+ Database-level security with encryption and access controls
+ Regular security audits and penetration testing

*Quality Attribute Addressed*
This tactic addresses *EFR5 (Data Privacy)* and *EFR6 (Authentication and Authorization)* by creating multiple security barriers that must be breached for an attacker to access sensitive information.

2. *Least Privilege*

/ Focus: Access Control
MindChain enforces the principle of least privilege, ensuring users and system components have only the minimum access rights necessary.

_Implementation Details_
- Role-based access control for different user types (students, faculty, staff)
- Fine-grained permissions for system operations
- Contextual access controls based on query relevance and expertise
- Service-to-service authentication with limited scopes

_Quality Attribute Addressed_
This tactic addresses *EFR6 (Authentication and Authorization)* by minimizing the potential damage from compromised accounts or services, limiting access to only what is necessary for each role or component.
