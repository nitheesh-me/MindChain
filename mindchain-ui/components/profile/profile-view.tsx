"use client"

import { useState, useEffect } from "react"
import { getCurrentUser } from "@/lib/api"
import type { User } from "@/lib/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { ProfileForm } from "./profile-form"
import { PreferencesForm } from "./preferences-form"

export function ProfileView() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getCurrentUser()
        setUser(userData)
      } catch (error) {
        console.error("Failed to fetch user profile:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-12 w-32" />
        <Skeleton className="h-64 w-full" />
      </div>
    )
  }

  if (!user) {
    return (
      <Card>
        <CardContent className="py-10 text-center">
          <p className="text-muted-foreground">Failed to load profile</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Profile</h1>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user.profileImage} alt={user.name} />
              <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)} at {user.department}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm">
              <span className="font-medium">Email:</span> {user.email}
            </p>
            <p className="text-sm">
              <span className="font-medium">Expertise:</span> {user.expertise.join(", ")}
            </p>
            {user.researchInterests && (
              <p className="text-sm">
                <span className="font-medium">Research Interests:</span> {user.researchInterests.join(", ")}
              </p>
            )}
            {user.courses && (
              <p className="text-sm">
                <span className="font-medium">Courses:</span> {user.courses.join(", ")}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="profile">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="profile">Profile Information</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="mt-4">
          <ProfileForm user={user} />
        </TabsContent>
        <TabsContent value="preferences" className="mt-4">
          <PreferencesForm />
        </TabsContent>
      </Tabs>
    </div>
  )
}

