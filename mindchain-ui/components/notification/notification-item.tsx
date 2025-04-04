"use client"

import type { Notification } from "@/lib/types"
import { formatDistanceToNow } from "date-fns"
import { Bell, MessageSquare, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NotificationItemProps {
  notification: Notification
  onMarkAsRead: (id: string) => void
}

export function NotificationItem({ notification, onMarkAsRead }: NotificationItemProps) {
  const getIcon = () => {
    switch (notification.type) {
      case "query_match":
        return <User className="h-5 w-5 text-primary" />
      case "expert_response":
        return <User className="h-5 w-5 text-secondary" />
      case "chat_message":
        return <MessageSquare className="h-5 w-5 text-secondary" />
      default:
        return <Bell className="h-5 w-5 text-muted-foreground" />
    }
  }

  return (
    <div
      className={`p-3 rounded-xl border ${notification.read ? "bg-background" : "bg-primary/5"} transition-all duration-200 hover:shadow-md`}
    >
      <div className="flex items-start gap-3">
        <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          {getIcon()}
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-medium">{notification.title}</h4>
          <p className="text-xs text-muted-foreground">{notification.message}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
            </span>
            {!notification.read && (
              <Button
                variant="ghost"
                size="sm"
                className="h-6 text-xs rounded-full"
                onClick={() => onMarkAsRead(notification.id)}
              >
                Mark as read
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

