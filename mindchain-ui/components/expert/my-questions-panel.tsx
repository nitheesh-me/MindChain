"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { formatDistanceToNow } from "date-fns"
import { MessageSquare, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

// Mock data for questions the expert has accepted
const mockMyQuestions = [
  {
    id: "q5",
    title: "Help with Deep Learning project",
    description: "I'm implementing a CNN for image classification and need help with the architecture.",
    category: "academic",
    status: "active",
    createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    lastActivity: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
    student: "Vikram Singh",
    unreadMessages: 2,
  },
  {
    id: "q6",
    title: "Research methodology for NLP paper",
    description: "Need guidance on the research methodology for my paper on sentiment analysis.",
    category: "research",
    status: "active",
    createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    lastActivity: new Date(Date.now() - 7200000).toISOString(), // 2 hours ago
    student: "Meera Patel",
    unreadMessages: 0,
  },
  {
    id: "q7",
    title: "Database design for web application",
    description: "Need help with designing a database schema for my web application project.",
    category: "academic",
    status: "resolved",
    createdAt: new Date(Date.now() - 604800000).toISOString(), // 7 days ago
    lastActivity: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
    student: "Ananya Gupta",
    unreadMessages: 0,
  },
]

export function MyQuestionsPanel() {
  const [questions, setQuestions] = useState(mockMyQuestions)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("active")

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const activeQuestions = questions.filter((q) => q.status === "active")
  const resolvedQuestions = questions.filter((q) => q.status === "resolved")

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 rounded-xl">
          <TabsTrigger value="active" className="rounded-lg">
            Active Questions ({activeQuestions.length})
          </TabsTrigger>
          <TabsTrigger value="resolved" className="rounded-lg">
            Resolved Questions ({resolvedQuestions.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="mt-6">
          {activeQuestions.length === 0 ? (
            <Card className="rounded-xl">
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">You don't have any active questions.</p>
                <Button variant="link" asChild>
                  <Link href="#available">Browse available questions</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {activeQuestions.map((question) => (
                <Card key={question.id} className="rounded-xl hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{question.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          From: {question.student} • Started{" "}
                          {formatDistanceToNow(new Date(question.createdAt), { addSuffix: true })}
                        </p>
                      </div>
                      {question.unreadMessages > 0 && (
                        <Badge className="bg-indigo-500">
                          {question.unreadMessages} new {question.unreadMessages === 1 ? "message" : "messages"}
                        </Badge>
                      )}
                    </div>

                    <p className="text-sm mb-4 line-clamp-2">{question.description}</p>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>
                          Last activity {formatDistanceToNow(new Date(question.lastActivity), { addSuffix: true })}
                        </span>
                      </div>

                      <Button asChild>
                        <Link href={`/chat/${question.id}`}>
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Continue Chat
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="resolved" className="mt-6">
          {resolvedQuestions.length === 0 ? (
            <Card className="rounded-xl">
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">You don't have any resolved questions yet.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {resolvedQuestions.map((question) => (
                <Card key={question.id} className="rounded-xl hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{question.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          From: {question.student} • Resolved{" "}
                          {formatDistanceToNow(new Date(question.lastActivity), { addSuffix: true })}
                        </p>
                      </div>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" />
                        Resolved
                      </Badge>
                    </div>

                    <p className="text-sm mb-4 line-clamp-2">{question.description}</p>

                    <div className="flex justify-end">
                      <Button variant="outline" asChild>
                        <Link href={`/chat/${question.id}`}>View History</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

