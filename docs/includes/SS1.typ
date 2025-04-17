==== SS1: User Management Subsystem
The User Management Subsystem handles user authentication, profile management, and Attribute-based access control (ABAC). It integrates with IIIT Hyderabad's authentication system and maintains user profiles with academic expertise, research interests, and other relevant information.

+ _Key Components:_
  - Authentication Service: Handles user login, session management, and integration with institutional SSO
  - Profile Manager: Manages user profiles, expertise data, and preferences
  - Authorization Service: Implements Attribute-based access control and permission management
  - User Data Store: Securely stores user information and credentials

+ _Interfaces:_
  - To Authentication System: OAuth/SAML integration with IIIT Hyderabad's authentication
  - To Query Matching Subsystem: Provides expertise data for matching algorithm
  - To Communication Subsystem: Provides user identity and contact information

#figure(
  image("../images/user management - domain diagram.png", width: 50%),
  caption: [User management Subsystem : Detailed Bounded Contexts]
)
