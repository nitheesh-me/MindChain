# Requirements Engineering Overview

Template:
```markdown
[when?] [under what conditions?]
THE SYSTEM [MUST|SHOULD|COULD|WOULD NOT](MoSCoW) <process>
<things to be processed> [<process details>*]
```
## Introduction
- **Definition**: Requirements Engineering (RE) is the process of defining, documenting, and maintaining requirements in the engineering design process.
- **Goal**: Ensure a clear understanding of what needs to be built and why.

## Stakeholders
* Identify:
- Client (whoever is paying for the system)
- Users (end-users of the system)
- maintainer (who will maintain the system)
- Legislators (regulatory bodies)
* Classify:
- Active/Passive
- Involment phases
- Influence / Decision competence
* Analyze:
- Relation between stakeholders
- primary needs
* Manage:
- communication, keep in loop

## Goals
* Business Goals
  - What is the business case for the system?
  - What are the expected benefits, ROI on dev, and others?
  - Might not be directly related to the system.
    - earn 1 Million ROI in 2 years
    - take over 30% of the market of XYZ
* Usage Goals
  - What are the primary use cases?
  - Who are the end-users?
* System Goals
  - What are the system's functional and non-functional requirements?
  - What are the constraints and limitations?

Quality Goals: (Usability, Performance, Security, Accuracy, etc.)
- Reliability: 99.9% uptime, the system reacts correctly to all inputs

Optimization Goals: (soft goals)
- Performance: increase support for additional users by 20% each year for 3 years

Behavioral Goals: (hard goals)
- Accuracy: 280-300ms response time for 95% of requests

Anti-Goals: (negative goals)
- Data loss is estimated at 0.1% of all transactions despite backup and recovery measures

System Vision:
- Structure: (system under development -> Buisness env, operational env, technical env)
- Process: (what users can do with the system)
- Concerns: (what the system must do to be successful)

Usage Model

- Use Case diagram
  - Overview of the system (UML)
  - senarios (Cockburn style)


## Key Activities
1. **Elicitation**: Gathering requirements from stakeholders.
2. **Analysis**: Refining and prioritizing requirements.
3. **Specification**: Documenting requirements clearly and unambiguously.
4. **Validation**: Ensuring requirements meet stakeholder needs.
5. **Management**: Handling changes and maintaining traceability.

## Types of Requirements
- **Functional Requirements**: What the system should do.
- **Non-functional Requirements**: System qualities (e.g., performance, security).
- **Constraints**: Limitations or restrictions (e.g., regulatory, technical).

## Importance of RE
- Reduces project risks.
- Improves communication among stakeholders.
- Ensures alignment with business goals.

## Challenges
- Ambiguity in requirements.
- Conflicting stakeholder needs.
- Managing changes effectively.

## Best Practices
- Engage stakeholders early and often.
- Use visual models to clarify requirements.
- Prioritize requirements based on value and feasibility.
- Regularly review and validate requirements.



---

- Natural Language Requirements
- Model based Requirements
  - Graphs (UML, SysML): Artifact-based, state-based, activity-based
    - Goals
    - Stakeholders
    - constraints
  - Formulas (Precise, Mathematical, Z3, LEAN)
  - Sudo code (rapid prototyping)

... > "Requirements Engineering" > Design > Implementation > Testing > Development + Installation > Maintenance + Evolution > ...
- Requirements Engineering: Will exist for each system and subsystem (twin peaks)
  - Elicitation:
  - Analysis:
  - Specification: 
  - Verification & Validation: 
  - Management

Problems:
- Incomplete/Hidden requirements
- Incosistent requirements
- Terminology
- Unclear requirements
- Communication
- Moving Targets
- Technically infeasible requirements
- Stakeholder conflicts
- Underspecified requirements
- Unclear / Unmeasurable Extra Functional Requirements

- IEEE 830-1998
- ISO/IEC/IEEE 29148:2018
