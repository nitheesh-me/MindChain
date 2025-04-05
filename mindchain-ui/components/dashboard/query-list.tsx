import type { Query } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"
import { MessageSquare, Clock, HelpCircle, CheckCircle, AlertOctagon } from "lucide-react"

interface QueryListProps {
  queries: Query[]
}

export function QueryList({ queries }: QueryListProps) {
  const getStatusIcon = (status: Query["status"]) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
      case "matching":
        return <HelpCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
      case "matched":
        return <MessageSquare className="h-4 w-4 text-green-600 dark:text-green-400" />
      case "resolved":
        return <CheckCircle className="h-4 w-4 text-purple-600 dark:text-purple-400" />
      case "closed":
        return <CheckCircle className="h-4 w-4 text-gray-600 dark:text-gray-400" />
      default:
        return <HelpCircle className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: Query["status"]) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
      case "matching":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "matched":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "resolved":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
      case "closed":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-300"
    }
  }

  const getUrgencyColor = (urgency: Query["urgency"]) => {
    switch (urgency) {
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-300"
    }
  }

  if (queries.length === 0) {
    return (
      <Card className="rounded-2xl border shadow-lg">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <p className="text-muted-foreground mb-4">No queries found</p>
          <Button asChild className="rounded-xl">
            <Link href="/dashboard">Submit a Query</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {queries.map((query) => (
        <Card key={query.id} className="rounded-2xl border shadow-md card-hover overflow-hidden">
          <CardContent className="p-0">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{query.title}</h3>
                  <p className="text-sm text-foreground/70">
                    {formatDistanceToNow(new Date(query.createdAt), { addSuffix: true })}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Badge className={"flex items-center gap-1 rounded-full px-3" + " " + getStatusColor(query.status)}>
                    {getStatusIcon(query.status)}
                    {query.status.charAt(0).toUpperCase() + query.status.slice(1)}
                  </Badge>
                  <Badge className={"flex items-center gap-1 rounded-full px-3" + " " + getUrgencyColor(query.urgency)}>
                    <AlertOctagon className="h-4 w-4" />
                    {query.urgency.charAt(0).toUpperCase() + query.urgency.slice(1)}
                  </Badge>
                </div>
              </div>
              <p className="text-sm mb-4 line-clamp-2">{query.description}</p>
              <div className="flex justify-between items-center">
                <Badge variant="outline" className="rounded-full">
                  {query.category.charAt(0).toUpperCase() + query.category.slice(1)}
                </Badge>
                <Button asChild size="sm" className="rounded-full">
                  <Link href={`/query/${query.id}`}>View Details</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
