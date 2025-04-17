==== SS0: Authentication Subsystem
The Authentication Subsystem ensures secure access to the MindChain platform by managing user authentication and session handling. It integrates with institutional authentication systems and supports multi-factor authentication (MFA) for enhanced security.
+ _Key Components:_
  - Login Service: Handles user login requests and validates credentials
  - Session Manager: Manages user sessions, including token generation and expiration
  - MFA Service: Implements multi-factor authentication for added security
  - Authentication Gateway: Acts as a unified entry point for authentication requests
  - Audit Logger: Tracks authentication events for security and compliance

+ _Interfaces:_
  - To User Interface: Provides login and MFA interfaces
  - To Institutional Authentication System: Integrates with OAuth  -SAML for institutional SSO
  - To User Management Subsystem: Validates user roles and permissions
  - To Security Subsystem: Shares authentication logs for monitoring and threat detection

#figure(
  image("../images/auth service - domain diagram.png", width: 90%),
  caption: [Authentication Subsystem : Detailed Bounded Contexts]
)

