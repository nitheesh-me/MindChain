"use client"

import { useState, useEffect } from "react"
import { getCurrentUser, getQueries } from "@/lib/api"
import type { User, Query } from "@/lib/types"
import { QueryForm } from "./query-form"
import { QueryList } from "./query-list"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { BarChart3, CheckCircle, Clock, HelpCircle, MessageSquare, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function DashboardView() {
  const [user, setUser] = useState<User | null>(null)
  const [queries, setQueries] = useState<Query[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getCurrentUser()
        setUser(userData)

        const queriesData = await getQueries(userData.id)
        setQueries(queriesData)
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleQuerySubmit = (newQuery: Query) => {
    setQueries((prev) => [newQuery, ...prev])
  }

  if (loading) {
    return (
      <div className="space-y-6 bg-background/10">
        <Skeleton className="h-12 w-64" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Skeleton className="h-32 rounded-2xl" />
          <Skeleton className="h-32 rounded-2xl" />
          <Skeleton className="h-32 rounded-2xl" />
          <Skeleton className="h-32 rounded-2xl" />
        </div>
        <Skeleton className="h-64 rounded-2xl" />
      </div>
    )
  }

  const pendingQueries = queries.filter((q) => q.status === "pending")
  const matchingQueries = queries.filter((q) => q.status === "matching")
  const matchedQueries = queries.filter((q) => q.status === "matched")
  const resolvedQueries = queries.filter((q) => q.status === "resolved" || q.status === "closed")

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
      {/* <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"> */}
        {/* <div>
          <h1 className="text-3xl font-bold">Welcome back, {user?.name.split(" ")[0]}</h1>
          <p className="text-foreground/70">Here's what's happening with your queries today.</p>
        </div>

        <Button onClick={() => setShowQueryForm(!showQueryForm)} className="rounded-full">
          {showQueryForm ? (
            <>Cancel</>
          ) : (
            <>
              <Plus className="mr-2 h-4 w-4" />
              New Query
            </>
          )}
        </Button> */}
        <Card className="w-full md:w-1/3">
          <CardHeader>
            <CardTitle>Welcome, {user?.name.split(" ")[0]}</CardTitle>
            <CardDescription>
              {user ? `${user.role.charAt(0).toUpperCase() + user.role.slice(1)} at ${user.department}` : "No details regarding your role"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-medium">Email:</span> {user?.email}
              </p>
              <p className="text-sm">
                <span className="font-medium">Expertise:</span> {user?.expertise.join(", ")}
              </p>
              {user?.researchInterests && (
                <p className="text-sm">
                  <span className="font-medium">Research Interests:</span> {user.researchInterests.join(", ")}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="w-full md:w-2/3">
          <CardHeader>
            <CardTitle>Submit a New Query</CardTitle>
            <CardDescription>Get connected with the right expert for your question</CardDescription>
          </CardHeader>
          <CardContent>
            <QueryForm onSubmit={handleQuerySubmit} userId={user?.id || ""} />
          </CardContent>
        </Card>
      </div>


      {/* {showQueryForm ? (
        <Card className="rounded-2xl border shadow-lg overflow-hidden">
          <CardHeader className="bg-muted">
            <CardTitle>Submit a New Query</CardTitle>
            <CardDescription>Get connected with the right expert for your question</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <QueryForm onSubmit={handleQuerySubmit} userId={user?.id || ""} />
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="rounded-2xl border shadow-md card-hover">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-foreground/70 text-sm mb-1">Pending</p>
                    <h3 className="text-3xl font-bold">{pendingQueries.length}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/queries" className="text-sm text-primary hover:underline">
                    View all pending queries
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border shadow-md card-hover">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-foreground/70 text-sm mb-1">Matching</p>
                    <h3 className="text-3xl font-bold">{matchingQueries.length}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HelpCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/queries" className="text-sm text-primary hover:underline">
                    View matching queries
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border shadow-md card-hover">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-foreground/70 text-sm mb-1">Active Chats</p>
                    <h3 className="text-3xl font-bold">{matchedQueries.length}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/queries" className="text-sm text-primary hover:underline">
                    View active chats
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border shadow-md card-hover">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-foreground/70 text-sm mb-1">Resolved</p>
                    <h3 className="text-3xl font-bold">{resolvedQueries.length}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/queries" className="text-sm text-primary hover:underline">
                    View resolved queries
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
            <TabsList className="grid w-full grid-cols-2 rounded-xl">
              <TabsTrigger value="overview" className="rounded-lg">
                Overview
              </TabsTrigger>
              <TabsTrigger value="recent" className="rounded-lg">
                Recent Queries
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6">
              <Card className="rounded-2xl border shadow-lg overflow-hidden">
                <CardHeader className="bg-muted">
                  <div className="flex items-center justify-between">
                    <CardTitle>Query Analytics</CardTitle>
                    <BarChart3 className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="h-[300px] flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-foreground/70 mb-2">Response Rate</p>
                      <div className="text-5xl font-bold mb-4">
                        {queries.length > 0
                          ? `${Math.round((queries.filter((q) => q.status === "matched" || q.status === "resolved").length / queries.length) * 100)}%`
                          : "0%"}
                      </div>
                      <p className="text-foreground/70 text-sm">
                        Average response time: <span className="font-medium">2.5 hours</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="recent" className="mt-6">
              <QueryList queries={queries.slice(0, 5)} />
            </TabsContent>
          </Tabs>
        </>
      )} */}

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="recent">Recent Queries</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="rounded-2xl border shadow-md card-hover">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-foreground/70 text-sm mb-1">Pending</p>
                    <h3 className="text-3xl font-bold">{pendingQueries.length}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/queries" className="text-sm text-primary hover:underline">
                    View all pending queries
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border shadow-md card-hover">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-foreground/70 text-sm mb-1">Matching</p>
                    <h3 className="text-3xl font-bold">{matchingQueries.length}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <HelpCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/queries" className="text-sm text-primary hover:underline">
                    View matching queries
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border shadow-md card-hover">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-foreground/70 text-sm mb-1">Active Chats</p>
                    <h3 className="text-3xl font-bold">{matchedQueries.length}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/queries" className="text-sm text-primary hover:underline">
                    View active chats
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border shadow-md card-hover">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-foreground/70 text-sm mb-1">Resolved</p>
                    <h3 className="text-3xl font-bold">{resolvedQueries.length}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/queries" className="text-sm text-primary hover:underline">
                    View resolved queries
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="recent" className="mt-4">
          <QueryList queries={queries} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
