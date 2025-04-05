"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AvailableQuestionsList } from "./available-questions-list";
import { MyQuestionsPanel } from "./my-questions-panel";
import { ExpertStatsPanel } from "./expert-stats-panel";
import { getCurrentUser } from "@/lib/api";
import type { User } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";

export function ExpertDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("available");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getCurrentUser();
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [user]);

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-12 w-64" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Skeleton className="h-32 rounded-2xl" />
          <Skeleton className="h-32 rounded-2xl" />
          <Skeleton className="h-32 rounded-2xl" />
        </div>
        <Skeleton className="h-64 rounded-2xl" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Expert Dashboard</h1>
        <p className="text-foreground/70">
          Help students by answering their queries in your area of expertise.
        </p>
      </div>

      <ExpertStatsPanel />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
        <TabsList className="grid w-full grid-cols-2 rounded-xl">
          <TabsTrigger value="available" className="rounded-lg">
            Available Questions
          </TabsTrigger>
          <TabsTrigger value="my-questions" className="rounded-lg">
            My Questions
          </TabsTrigger>
        </TabsList>
        <TabsContent value="available" className="mt-6">
          <AvailableQuestionsList />
        </TabsContent>
        <TabsContent value="my-questions" className="mt-6">
          <MyQuestionsPanel />
        </TabsContent>
      </Tabs>
    </div>
  );
}
