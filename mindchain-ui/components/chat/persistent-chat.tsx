"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, X, ChevronDown, ChevronUp, Send, Minimize2, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { format } from "date-fns"
import { MatchNotification } from "../notification/match-notification"

// Mock active chats
const mockActiveChats = [
  {
    id: "chat1",
    name: "Vikram Singh",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "I'm implementing a CNN for image classification and need help with the architecture.",
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    unread: 2,
  },
  {
    id: "chat2",
    name: "Meera Patel",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Thank you for your guidance on the research methodology!",
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    unread: 0,
  },
]

// Mock messages for a chat
const mockMessages = [
  {
    id: "msg1",
    senderId: "student1",
    senderName: "Vikram Singh",
    senderAvatar: "/placeholder.svg?height=40&width=40",
    content: "Hello Dr. Sharma, I need help with my CNN architecture for image classification.",
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    read: true,
  },
  {
    id: "msg2",
    senderId: "expert1",
    senderName: "Dr. Sharma",
    senderAvatar: "/placeholder.svg?height=40&width=40",
    content: "Hi Vikram, I'd be happy to help. What specific issue are you facing with the CNN architecture?",
    timestamp: new Date(Date.now() - 3500000).toISOString(),
    read: true,
  },
  {
    id: "msg3",
    senderId: "student1",
    senderName: "Vikram Singh",
    senderAvatar: "/placeholder.svg?height=40&width=40",
    content:
      "I'm trying to decide on the number of convolutional layers and filter sizes for my image classification task. My dataset consists of 10,000 images across 5 categories.",
    timestamp: new Date(Date.now() - 3400000).toISOString(),
    read: true,
  },
  {
    id: "msg4",
    senderId: "expert1",
    senderName: "Dr. Sharma",
    senderAvatar: "/placeholder.svg?height=40&width=40",
    content:
      "For a dataset of that size and complexity, I would recommend starting with a simple architecture: 3-4 convolutional layers with increasing filter sizes (e.g., 32, 64, 128, 256), each followed by max pooling. Then add 1-2 fully connected layers before the output layer.",
    timestamp: new Date(Date.now() - 3300000).toISOString(),
    read: true,
  },
  {
    id: "msg5",
    senderId: "student1",
    senderName: "Vikram Singh",
    senderAvatar: "/placeholder.svg?height=40&width=40",
    content: "That makes sense. What about the kernel size for the convolutional layers?",
    timestamp: new Date(Date.now() - 120000).toISOString(),
    read: false,
  },
  {
    id: "msg6",
    senderId: "student1",
    senderName: "Vikram Singh",
    senderAvatar: "/placeholder.svg?height=40&width=40",
    content: "Also, should I use batch normalization after each convolutional layer?",
    timestamp: new Date(Date.now() - 60000).toISOString(),
    read: false,
  },
]

// Mock match notification
const mockMatch = {
  id: "match1",
  queryId: "q8",
  title: "Need help with Reinforcement Learning project",
  student: "Arjun Mehta",
  matchScore: 94,
  matchCriteria: ["Reinforcement Learning", "Machine Learning", "AI"],
  timeToExpire: 120, // 2 minutes
}

export function PersistentChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [activeChat, setActiveChat] = useState<string | null>(null)
  const [chats, setChats] = useState(mockActiveChats)
  const [messages, setMessages] = useState(mockMessages)
  const [newMessage, setNewMessage] = useState("")
  const [showMatch, setShowMatch] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Simulate receiving a match notification after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMatch(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isOpen && activeChat && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [isOpen, activeChat, messages])

  const handleSendMessage = () => {
    if (!newMessage.trim() || !activeChat) return

    const newMsg = {
      id: `msg${messages.length + 1}`,
      senderId: "expert1",
      senderName: "Dr. Sharma",
      senderAvatar: "/placeholder.svg?height=40&width=40",
      content: newMessage,
      timestamp: new Date().toISOString(),
      read: true,
    }

    setMessages([...messages, newMsg])
    setNewMessage("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleAcceptMatch = (id: string) => {
    console.log(`Accepted match ${id}`)
    setShowMatch(false)
    // Here you would typically:
    // 1. Call an API to accept the match
    // 2. Add the new chat to the chats list
    // 3. Open the chat interface
  }

  const handleDeclineMatch = (id: string) => {
    console.log(`Declined match ${id}`)
    setShowMatch(false)
    // Here you would typically call an API to decline the match
  }

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false)
    } else {
      setIsOpen(!isOpen)
    }
  }

  const minimizeChat = () => {
    setIsMinimized(true)
  }

  const openChat = (chatId: string) => {
    setActiveChat(chatId)
    setIsMinimized(false)

    // Mark messages as read
    if (activeChat === chatId) {
      setMessages(messages.map((msg) => ({ ...msg, read: true })))
      setChats(chats.map((chat) => (chat.id === chatId ? { ...chat, unread: 0 } : chat)))
    }
  }

  const totalUnread = chats.reduce((sum, chat) => sum + chat.unread, 0)

  return (
    <>
      {/* Match Notification */}
      {showMatch && <MatchNotification match={mockMatch} onAccept={handleAcceptMatch} onDecline={handleDeclineMatch} />}

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button onClick={toggleChat} size="lg" className="rounded-full h-14 w-14 shadow-lg">
          <MessageSquare className="h-6 w-6" />
          {totalUnread > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {totalUnread}
            </span>
          )}
        </Button>
      </div>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, height: isMinimized ? 60 : 500 }}
            animate={{
              opacity: 1,
              y: 0,
              height: isMinimized ? 60 : 500,
              width: isMinimized ? 300 : 350,
            }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-40 shadow-xl"
          >
            <Card className="w-full h-full flex flex-col rounded-xl overflow-hidden">
              {isMinimized ? (
                <div
                  className="bg-indigo-500 text-white p-4 cursor-pointer flex justify-between items-center"
                  onClick={() => setIsMinimized(false)}
                >
                  <div className="font-medium">Chats ({chats.length})</div>
                  <ChevronUp className="h-5 w-5" />
                </div>
              ) : (
                <>
                  <CardHeader className="bg-indigo-500 text-white p-4 flex flex-row justify-between items-center">
                    <div className="font-medium">
                      {activeChat ? chats.find((c) => c.id === activeChat)?.name || "Chat" : `Chats (${chats.length})`}
                    </div>
                    <div className="flex items-center gap-2">
                      {activeChat && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 text-white hover:text-white hover:bg-indigo-600"
                          onClick={() => setActiveChat(null)}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-white hover:text-white hover:bg-indigo-600"
                        onClick={minimizeChat}
                      >
                        <Minimize2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-white hover:text-white hover:bg-indigo-600"
                        onClick={() => setIsOpen(false)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 p-0 overflow-hidden">
                    {!activeChat ? (
                      <Tabs defaultValue="active" className="h-full flex flex-col">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="active">Active</TabsTrigger>
                          <TabsTrigger value="archived">Archived</TabsTrigger>
                        </TabsList>
                        <TabsContent value="active" className="flex-1 overflow-hidden">
                          <ScrollArea className="h-[380px]">
                            {chats.map((chat) => (
                              <div
                                key={chat.id}
                                className="flex items-center gap-3 p-3 hover:bg-muted cursor-pointer"
                                onClick={() => openChat(chat.id)}
                              >
                                <Avatar className="h-10 w-10">
                                  <AvatarImage src={chat.avatar} alt={chat.name} />
                                  <AvatarFallback>{chat.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                  <div className="flex justify-between items-baseline">
                                    <h4 className="font-medium text-sm truncate">{chat.name}</h4>
                                    <span className="text-xs text-muted-foreground">
                                      {format(new Date(chat.timestamp), "h:mm a")}
                                    </span>
                                  </div>
                                  <p className="text-xs text-muted-foreground truncate">{chat.lastMessage}</p>
                                </div>
                                {chat.unread > 0 && <Badge className="bg-indigo-500 text-white">{chat.unread}</Badge>}
                              </div>
                            ))}
                          </ScrollArea>
                        </TabsContent>
                        <TabsContent value="archived" className="flex-1">
                          <div className="h-[380px] flex items-center justify-center text-muted-foreground">
                            No archived chats
                          </div>
                        </TabsContent>
                      </Tabs>
                    ) : (
                      <div className="flex flex-col h-full">
                        <ScrollArea className="flex-1 p-4">
                          <div className="space-y-4">
                            {messages.map((message) => {
                              const isExpert = message.senderId === "expert1"
                              return (
                                <div key={message.id} className={`flex ${isExpert ? "justify-end" : "justify-start"}`}>
                                  <div
                                    className={`flex gap-2 max-w-[80%] ${isExpert ? "flex-row-reverse" : "flex-row"}`}
                                  >
                                    <Avatar className="h-8 w-8 flex-shrink-0">
                                      <AvatarImage src={message.senderAvatar} alt={message.senderName} />
                                      <AvatarFallback>
                                        {message.senderName.substring(0, 2).toUpperCase()}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <div
                                        className={`rounded-lg p-3 ${
                                          isExpert
                                            ? "bg-indigo-500 text-white rounded-tr-none"
                                            : "bg-muted rounded-tl-none"
                                        }`}
                                      >
                                        <p className="text-sm">{message.content}</p>
                                      </div>
                                      <div
                                        className={`flex items-center mt-1 text-xs text-muted-foreground ${isExpert ? "justify-end" : "justify-start"}`}
                                      >
                                        {format(new Date(message.timestamp), "h:mm a")}
                                        {isExpert && <Check className="ml-1 h-3 w-3" />}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )
                            })}
                            <div ref={messagesEndRef} />
                          </div>
                        </ScrollArea>
                        <CardFooter className="p-3 border-t">
                          <div className="flex w-full gap-2">
                            <Textarea
                              value={newMessage}
                              onChange={(e) => setNewMessage(e.target.value)}
                              onKeyDown={handleKeyDown}
                              placeholder="Type a message..."
                              className="resize-none min-h-[40px] max-h-[120px]"
                              rows={1}
                            />
                            <Button
                              size="icon"
                              onClick={handleSendMessage}
                              disabled={!newMessage.trim()}
                              className="h-10 w-10"
                            >
                              <Send className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardFooter>
                      </div>
                    )}
                  </CardContent>
                </>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

