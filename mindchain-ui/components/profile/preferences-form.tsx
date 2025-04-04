"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"

export function PreferencesForm() {
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    browserNotifications: true,
    notificationFrequency: "immediate",
    availabilityStatus: "available",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSwitchChange = (field: string) => {
    setPreferences((prev) => ({ ...prev, [field]: !prev[field as keyof typeof prev] }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setPreferences((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setLoading(false)
    setSuccess(true)

    // Reset success message after 3 seconds
    setTimeout(() => {
      setSuccess(false)
    }, 3000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>Manage how and when you receive notifications</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Notification Channels</h3>
            <div className="flex items-center justify-between">
              <Label htmlFor="emailNotifications" className="flex-1">
                Email Notifications
                <p className="text-sm text-muted-foreground">Receive notifications via email</p>
              </Label>
              <Switch
                id="emailNotifications"
                checked={preferences.emailNotifications}
                onCheckedChange={() => handleSwitchChange("emailNotifications")}
                disabled={loading}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="browserNotifications" className="flex-1">
                Browser Notifications
                <p className="text-sm text-muted-foreground">Receive notifications in your browser</p>
              </Label>
              <Switch
                id="browserNotifications"
                checked={preferences.browserNotifications}
                onCheckedChange={() => handleSwitchChange("browserNotifications")}
                disabled={loading}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Notification Settings</h3>
            <div className="space-y-2">
              <Label htmlFor="notificationFrequency">Notification Frequency</Label>
              <Select
                value={preferences.notificationFrequency}
                onValueChange={(value) => handleSelectChange("notificationFrequency", value)}
                disabled={loading}
              >
                <SelectTrigger id="notificationFrequency">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediate</SelectItem>
                  <SelectItem value="hourly">Hourly Digest</SelectItem>
                  <SelectItem value="daily">Daily Digest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Availability</h3>
            <div className="space-y-2">
              <Label htmlFor="availabilityStatus">Availability Status</Label>
              <Select
                value={preferences.availabilityStatus}
                onValueChange={(value) => handleSelectChange("availabilityStatus", value)}
                disabled={loading}
              >
                <SelectTrigger id="availabilityStatus">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="busy">Busy</SelectItem>
                  <SelectItem value="away">Away</SelectItem>
                  <SelectItem value="offline">Offline</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground mt-1">
                This affects how frequently you receive expert match requests
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              "Save Preferences"
            )}
          </Button>
          {success && <span className="ml-4 text-sm text-green-600">Preferences updated successfully!</span>}
        </CardFooter>
      </form>
    </Card>
  )
}

