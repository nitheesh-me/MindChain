import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, MessageSquare, Star } from "lucide-react"

export function ExpertStatsPanel() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="rounded-2xl border shadow-md card-hover">
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-foreground/70 text-sm mb-1">Response Rate</p>
              <h3 className="text-3xl font-bold">92%</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">You've responded to 92% of matched questions</p>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border shadow-md card-hover">
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-foreground/70 text-sm mb-1">Avg. Response Time</p>
              <h3 className="text-3xl font-bold">1.5h</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Average time to respond to questions</p>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border shadow-md card-hover">
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-foreground/70 text-sm mb-1">Questions Answered</p>
              <h3 className="text-3xl font-bold">24</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <MessageSquare className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Total questions answered this month</p>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border shadow-md card-hover">
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-foreground/70 text-sm mb-1">Rating</p>
              <h3 className="text-3xl font-bold">4.8</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
              <Star className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Average rating from students</p>
        </CardContent>
      </Card>
    </div>
  )
}

