"use client";

import { useState, useEffect } from "react";
import {
  getQuery,
  getExpertsByQuery,
  getChatSessionByQuery,
  matchExperts,
  notifyExperts,
} from "@/lib/api";
import type { Query, User, ChatSession } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDistanceToNow } from "date-fns";
import { ArrowLeft, MessageSquare, UserCheck } from "lucide-react";
import Link from "next/link";
import { ExpertList } from "./expert-list";
import { ChatInterface } from "./chat-interface";

interface QueryDetailProps {
  queryId: string;
}

export function QueryDetail({ queryId }: QueryDetailProps) {
  const [query, setQuery] = useState<Query | null>(null);
  const [experts, setExperts] = useState<User[]>([]);
  const [chatSession, setChatSession] = useState<ChatSession | null>(null);
  const [loading, setLoading] = useState(true);
  const [matchingExperts, setMatchingExperts] = useState(false);
  const [notifyingExperts, setNotifyingExperts] = useState(false);
  const [activeTab, setActiveTab] = useState("details");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryData = await getQuery(queryId);
        if (queryData) {
          setQuery(queryData);

          if (queryData.matchedExperts && queryData.matchedExperts.length > 0) {
            const expertsData = await getExpertsByQuery(queryId);
            setExperts(expertsData);
          }

          const chatData = await getChatSessionByQuery(queryId);
          if (chatData) {
            setChatSession(chatData);
            setActiveTab("chat");
          }
        }
      } catch (error) {
        console.error("Failed to fetch query details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [queryId]);

  const handleMatchExperts = async () => {
    setMatchingExperts(true);
    try {
      const matches = await matchExperts(queryId);
      if (matches.length > 0) {
        setQuery((prev) => {
          if (!prev) return null;
          return {
            ...prev,
            matchedExperts: matches,
            status: "matching",
          };
        });

        // Fetch the expert details
        const expertsData = await getExpertsByQuery(queryId);
        setExperts(expertsData);
      }
    } catch (error) {
      console.error("Failed to match experts:", error);
    } finally {
      setMatchingExperts(false);
    }
  };

  const handleNotifyExperts = async () => {
    setNotifyingExperts(true);
    try {
      const success = await notifyExperts(queryId);
      if (success) {
        setQuery((prev) => {
          if (!prev || !prev.matchedExperts) return prev;
          return {
            ...prev,
            matchedExperts: prev.matchedExperts.map((match) => ({
              ...match,
              status: "notified",
              notifiedAt: new Date().toISOString(),
            })),
          };
        });
      }
    } catch (error) {
      console.error("Failed to notify experts:", error);
    } finally {
      setNotifyingExperts(false);
    }
  };

  const getStatusColor = (status: Query["status"]) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "matching":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "matched":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "resolved":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "closed":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (!query) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-10">
          <p className="text-muted-foreground mb-4">Query not found</p>
          <Button asChild>
            <Link href="/">Back to Dashboard</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Query Details</h1>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>{query.title}</CardTitle>
              <CardDescription>
                {formatDistanceToNow(new Date(query.createdAt), {
                  addSuffix: true,
                })}
              </CardDescription>
            </div>
            <Badge className={getStatusColor(query.status)}>
              {query.status.charAt(0).toUpperCase() + query.status.slice(1)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{query.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline">
              Category:{" "}
              {query.category.charAt(0).toUpperCase() + query.category.slice(1)}
            </Badge>
            <Badge variant="outline">
              Urgency:{" "}
              {query.urgency.charAt(0).toUpperCase() + query.urgency.slice(1)}
            </Badge>
          </div>

          {query.status === "pending" && (
            <Button onClick={handleMatchExperts} disabled={matchingExperts}>
              {matchingExperts
                ? "Matching Experts..."
                : "Find Matching Experts"}
            </Button>
          )}

          {query.status === "matching" &&
            query.matchedExperts &&
            query.matchedExperts.every((m) => m.status === "pending") && (
              <Button onClick={handleNotifyExperts} disabled={notifyingExperts}>
                {notifyingExperts ? "Notifying Experts..." : "Notify Experts"}
              </Button>
            )}

          {query.status === "matched" && (
            <div className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-green-600" />
              <span className="text-green-600">
                Expert matched! Check the chat tab.
              </span>
            </div>
          )}
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="chat" disabled={!chatSession}>
            Chat {chatSession && <MessageSquare className="ml-2 h-4 w-4" />}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="mt-4">
          {query.matchedExperts && query.matchedExperts.length > 0 ? (
            <ExpertList experts={experts} matches={query.matchedExperts} />
          ) : (
            <Card>
              <CardContent className="py-10 text-center">
                <p className="text-muted-foreground">No experts matched yet</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        <TabsContent value="chat" className="mt-4">
          {chatSession ? (
            <ChatInterface session={chatSession} />
          ) : (
            <Card>
              <CardContent className="py-10 text-center">
                <p className="text-muted-foreground">
                  No chat session available
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
