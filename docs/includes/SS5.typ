==== SS5: Notification Subsystem
The Notification Subsystem manages the delivery of notifications to users across multiple channels. It implements intelligent notification batching to minimize disruption while ensuring timely delivery of important information.

+ _Key Components:_
  - Notification Manager: Coordinates notification creation and delivery
  - Channel Adapters: Handles delivery through different channels (in-app, email)
  - Batching Service: Implements intelligent notification grouping and timing
  - Notification Store: Persists notification history and status

+ _Interfaces:_
  - To User Interface: Delivers in-app notifications
  - To Expert Matching Subsystem: Receives expert match events
  - To Communication Subsystem: Receives message events
  - To External Services: Connects to email and push notification services

#figure(
  image("../images/notification - domain diagram.png", width: 90%),
  caption: [Notification Subsystem : Detailed Bounded Contexts]
)
