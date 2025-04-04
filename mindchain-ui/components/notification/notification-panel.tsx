"use client"

import { useEffect, useState } from "react"
import { getNotifications, markNotificationAsRead } from "@/lib/api"
import type { Notification } from "@/lib/types"
import { Card } from "@/components/ui/card"
import { NotificationItem } from "./notification-item"
import { Loader2 } from "lucide-react"

interface NotificationPanelProps {
  onClose: () => void
}

export function NotificationPanel({ onClose }: NotificationPanelProps) {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data = await getNotifications("u3") // Using the current user ID
        setNotifications(data)
      } catch (error) {
        console.error("Failed to fetch notifications:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchNotifications()

    // Add click outside handler
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".notification-panel") && !target.closest("button")) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  const handleMarkAsRead = async (id: string) => {
    try {
      await markNotificationAsRead(id)
      setNotifications((prev) =>
        prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
      )
    } catch (error) {
      console.error("Failed to mark notification as read:", error)
    }
  }

  return (
    <Card className="notification-panel absolute right-0 top-12 w-80 max-h-96 overflow-y-auto shadow-lg z-50 rounded-2xl border">
      <div className="p-4">
        <h3 className="text-lg font-bold mb-4">Notifications</h3>
        {loading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        ) : notifications.length === 0 ? (
          <p className="text-center py-8 text-muted-foreground">No notifications</p>
        ) : (
          <div className="space-y-3">
            {notifications.map((notification) => (
              <NotificationItem key={notification.id} notification={notification} onMarkAsRead={handleMarkAsRead} />
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}

