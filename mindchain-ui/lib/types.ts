export interface User {
  id: string
  name: string
  email: string
  role: "student" | "faculty" | "staff"
  department: string
  expertise: string[]
  researchInterests?: string[]
  courses?: string[]
  eventExperience?: string[]
  profileImage?: string
}

// Query Types
export interface Query {
  id: string
  userId: string
  title: string
  description: string
  category: "academic" | "research" | "event" | "other"
  status: "pending" | "matching" | "matched" | "resolved" | "closed"
  urgency: "low" | "medium" | "high"
  createdAt: string
  updatedAt: string
  matchedExperts?: MatchedExpert[]
}

export interface MatchedExpert {
  userId: string
  score: number
  status: "pending" | "notified" | "accepted" | "declined"
  notifiedAt?: string
  respondedAt?: string
}

// Chat Types
export interface ChatSession {
  id: string
  queryId: string
  expertId: string
  userId: string
  status: "active" | "closed"
  createdAt: string
  updatedAt: string
  messages: ChatMessage[]
}

export interface ChatMessage {
  id: string
  sessionId: string
  senderId: string
  content: string
  timestamp: string
  read: boolean
}

// Notification Types
export interface Notification {
  id: string
  userId: string
  type: "query_match" | "expert_response" | "chat_message" | "system"
  title: string
  message: string
  read: boolean
  createdAt: string
  data?: Record<string, any>
}

