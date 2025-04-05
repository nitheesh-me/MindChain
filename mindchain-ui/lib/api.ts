import type {
  Query,
  User,
  ChatSession,
  Notification,
  MatchedExpert,
  ChatMessage,
} from "./types";

// Mock data for demonstration
const MOCK_DELAY = 1000;

// Mock users data
const mockUsers: User[] = [
  {
    id: "u1",
    name: "Dr. Sharma",
    email: "sharma@iiit.ac.in",
    role: "faculty",
    department: "Computer Science",
    expertise: ["Machine Learning", "Natural Language Processing", "AI"],
    researchInterests: ["Deep Learning", "Computer Vision"],
    courses: ["CS101", "AI201"],
    profileImage: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "u2",
    name: "Prof. Reddy",
    email: "reddy@iiit.ac.in",
    role: "faculty",
    department: "Electronics",
    expertise: ["VLSI Design", "Embedded Systems"],
    researchInterests: ["IoT", "Sensor Networks"],
    courses: ["EC202", "ES301"],
    profileImage: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "u3",
    name: "Rahul Kumar",
    email: "rahul.k@iiit.ac.in",
    role: "student",
    department: "Computer Science",
    expertise: ["Web Development", "Mobile Apps"],
    researchInterests: ["HCI", "UX Design"],
    profileImage: "/placeholder.svg?height=100&width=100",
  },
];

// Mock queries data
const mockQueries: Query[] = [
  {
    id: "q1",
    userId: "u3",
    title: "Need help with Machine Learning project",
    description:
      "I am working on a classification problem and facing issues with model accuracy.",
    category: "academic",
    status: "matched",
    urgency: "high",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 43200000).toISOString(),
    matchedExperts: [
      {
        userId: "u1",
        score: 0.95,
        status: "accepted",
        notifiedAt: new Date(Date.now() - 43200000).toISOString(),
        respondedAt: new Date(Date.now() - 39600000).toISOString(),
      },
    ],
  },
  {
    id: "q2",
    userId: "u3",
    title: "Question about VLSI course project",
    description:
      "I need guidance on the final project requirements for the VLSI Design course.",
    category: "academic",
    status: "pending",
    urgency: "medium",
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    updatedAt: new Date(Date.now() - 172800000).toISOString(),
  },
];

// Mock chat sessions
const mockChatSessions: ChatSession[] = [
  {
    id: "cs1",
    queryId: "q1",
    expertId: "u1",
    userId: "u3",
    status: "active",
    createdAt: new Date(Date.now() - 39600000).toISOString(),
    updatedAt: new Date(Date.now() - 3600000).toISOString(),
    messages: [
      {
        id: "m1",
        sessionId: "cs1",
        senderId: "u3",
        content: "Hello Dr. Sharma, I need help with my ML project.",
        timestamp: new Date(Date.now() - 39600000).toISOString(),
        read: true,
      },
      {
        id: "m2",
        sessionId: "cs1",
        senderId: "u1",
        content:
          "Hi Rahul, I would be happy to help. Can you describe the issue you are facing?",
        timestamp: new Date(Date.now() - 39000000).toISOString(),
        read: true,
      },
      {
        id: "m3",
        sessionId: "cs1",
        senderId: "u3",
        content:
          "I am working with a dataset for image classification and my model accuracy is stuck at 70%.",
        timestamp: new Date(Date.now() - 38400000).toISOString(),
        read: true,
      },
    ],
  },
];

// Mock notifications
const mockNotifications: Notification[] = [
  {
    id: "n1",
    userId: "u3",
    type: "expert_response",
    title: "Expert Matched",
    message: "Dr. Sharma has accepted your query about Machine Learning.",
    read: true,
    createdAt: new Date(Date.now() - 39600000).toISOString(),
    data: {
      queryId: "q1",
      expertId: "u1",
    },
  },
  {
    id: "n2",
    userId: "u3",
    type: "chat_message",
    title: "New Message",
    message: "You have a new message from Dr. Sharma.",
    read: false,
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    data: {
      chatSessionId: "cs1",
      messageId: "m2",
    },
  },
];

// API functions
export async function getCurrentUser(): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY));
  return mockUsers[2]; // Return the student user as the current user
}

export async function getQueries(userId: string): Promise<Query[]> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY));
  return mockQueries.filter((query) => query.userId === userId);
}

export async function getQuery(queryId: string): Promise<Query | undefined> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY));
  return mockQueries.find((query) => query.id === queryId);
}

export async function submitQuery(
  query: Omit<
    Query,
    "id" | "createdAt" | "updatedAt" | "status" | "matchedExperts"
  >,
): Promise<Query> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY));

  const newQuery: Query = {
    id: `q${mockQueries.length + 1}`,
    status: "pending",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...query,
  };

  mockQueries.push(newQuery);
  return newQuery;
}

export async function getExpertsByQuery(queryId: string): Promise<User[]> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY));

  const query = mockQueries.find((q) => q.id === queryId);
  if (!query || !query.matchedExperts) return [];

  const expertIds = query.matchedExperts.map((match) => match.userId);
  return mockUsers.filter((user) => expertIds.includes(user.id));
}

export async function getChatSession(
  sessionId: string,
): Promise<ChatSession | undefined> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY));
  return mockChatSessions.find((session) => session.id === sessionId);
}

export async function getChatSessionByQuery(
  queryId: string,
): Promise<ChatSession | undefined> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY));
  return mockChatSessions.find((session) => session.queryId === queryId);
}

export async function sendChatMessage(
  sessionId: string,
  senderId: string,
  content: string,
): Promise<ChatMessage> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY));

  const session = mockChatSessions.find((s) => s.id === sessionId);
  if (!session) throw new Error("Chat session not found");

  const newMessage = {
    id: `m${session.messages.length + 1}`,
    sessionId,
    senderId,
    content,
    timestamp: new Date().toISOString(),
    read: false,
  };

  session.messages.push(newMessage);
  session.updatedAt = new Date().toISOString();

  return newMessage;
}

export async function getNotifications(
  userId: string,
): Promise<Notification[]> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY));
  return mockNotifications.filter(
    (notification) => notification.userId === userId,
  );
}

export async function markNotificationAsRead(
  notificationId: string,
): Promise<Notification> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY));

  const notification = mockNotifications.find((n) => n.id === notificationId);
  if (!notification) throw new Error("Notification not found");

  notification.read = true;
  return notification;
}

export async function matchExperts(queryId: string): Promise<MatchedExpert[]> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY * 2));

  const query = mockQueries.find((q) => q.id === queryId);
  if (!query) throw new Error("Query not found");

  // Simulate the matching algorithm
  const matches: MatchedExpert[] = [
    {
      userId: "u1",
      score: 0.95,
      status: "pending",
    },
    {
      userId: "u2",
      score: 0.75,
      status: "pending",
    },
  ];

  query.matchedExperts = matches;
  query.status = "matching";
  query.updatedAt = new Date().toISOString();

  return matches;
}

export async function notifyExperts(queryId: string): Promise<boolean> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY));

  const query = mockQueries.find((q) => q.id === queryId);
  if (!query || !query.matchedExperts) return false;

  // Simulate notifying experts
  query.matchedExperts.forEach((match) => {
    match.status = "notified";
    match.notifiedAt = new Date().toISOString();
  });

  return true;
}

export async function acceptQuery(
  queryId: string,
  expertId: string,
): Promise<boolean> {
  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY));

  const query = mockQueries.find((q) => q.id === queryId);
  if (!query || !query.matchedExperts) return false;

  const match = query.matchedExperts.find((m) => m.userId === expertId);
  if (!match) return false;

  match.status = "accepted";
  match.respondedAt = new Date().toISOString();
  query.status = "matched";
  query.updatedAt = new Date().toISOString();

  // Create a new chat session
  const newSession: ChatSession = {
    id: `cs${mockChatSessions.length + 1}`,
    queryId,
    expertId,
    userId: query.userId,
    status: "active",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    messages: [],
  };

  mockChatSessions.push(newSession);

  return true;
}
