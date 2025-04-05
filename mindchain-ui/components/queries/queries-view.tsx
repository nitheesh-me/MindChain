"use client";

import { useState, useEffect } from "react";
import { getCurrentUser, getQueries } from "@/lib/api";
import type { User, Query } from "@/lib/types";
import { QueryList } from "@/components/dashboard/query-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function QueriesView() {
  const [user, setUser] = useState<User | null>(null);
  const [queries, setQueries] = useState<Query[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getCurrentUser();
        setUser(userData);

        if (user === null) {
          console.error("TODO: redirect to login");
          // Redirect to login or show a message
          setLoading(false);
          return;
        }
        const queriesData = await getQueries(user.id);
        setQueries(queriesData);
      } catch (error) {
        console.error("Failed to fetch queries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-12 w-32" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  const activeQueries = queries.filter(
    (q) => q.status !== "resolved" && q.status !== "closed",
  );
  const resolvedQueries = queries.filter(
    (q) => q.status === "resolved" || q.status === "closed",
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Queries</h1>

      <Tabs defaultValue="active">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="active">
            Active Queries ({activeQueries.length})
          </TabsTrigger>
          <TabsTrigger value="resolved">
            Resolved Queries ({resolvedQueries.length})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="mt-4">
          {activeQueries.length > 0 ? (
            <QueryList queries={activeQueries} />
          ) : (
            <Card>
              <CardContent className="py-10 text-center">
                <p className="text-muted-foreground">No active queries</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        <TabsContent value="resolved" className="mt-4">
          {resolvedQueries.length > 0 ? (
            <QueryList queries={resolvedQueries} />
          ) : (
            <Card>
              <CardContent className="py-10 text-center">
                <p className="text-muted-foreground">No resolved queries</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
