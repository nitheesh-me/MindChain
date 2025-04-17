==== SS4: Communication Subsystem
The Communication Subsystem handles all real-time and asynchronous communication between users and experts. It provides chat functionality, message delivery, and conversation management across the platform.

+ _Key Components:_
  - Chat Service: Manages real-time messaging between users
  - Message Store: Persists chat history and message data
  - Conversation Manager: Handles conversation state and metadata
  - Read Receipt Service: Tracks message delivery and read status

+ _Interfaces:_
  - To User Interface: Provides chat UI components and real-time updates
  - To Notification Subsystem: Triggers message notifications
  - To Query Management Subsystem: Updates query status based on communication

#figure(
  image("../images/communication - domain diagram.png", width: 90%),
  caption: [Communication Subsystem : Detailed Bounded Contexts]
)
