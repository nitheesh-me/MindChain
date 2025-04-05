import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatDistanceToNow } from "date-fns"
import { Clock, BookOpen, Calendar, Award, ChevronRight, User } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Progress } from "@/components/ui/progress"

interface QuestionCardProps {
  question: {
    id: string
    title: string
    description: string
    category: string
    subcategory: string
    urgency: string
    createdAt: string
    matchScore: number
    matchCriteria: string[]
    askedBy: string
  }
}

export function QuestionCard({ question }: QuestionCardProps) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "academic":
        return <BookOpen className="h-4 w-4" />
      case "research":
        return <Award className="h-4 w-4" />
      case "event":
        return <Calendar className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-300"
    }
  }

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 75) return "text-yellow-600"
    return "text-orange-600"
  }

  return (
    <Card className="rounded-xl hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold mb-1">{question.title}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>{question.askedBy}</span>
                <span>•</span>
                <Clock className="h-4 w-4" />
                <span>{formatDistanceToNow(new Date(question.createdAt), { addSuffix: true })}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2">
                      <span className={`text-lg font-bold ${getMatchScoreColor(question.matchScore)}`}>
                        {question.matchScore}%
                      </span>
                      <Badge variant="outline" className="rounded-full">
                        Match
                      </Badge>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-medium">Match Criteria:</p>
                    <ul className="text-xs mt-1">
                      {question.matchCriteria.map((criteria, index) => (
                        <li key={index}>• {criteria}</li>
                      ))}
                    </ul>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Progress
                value={question.matchScore}
                className="w-24 h-1.5 mt-1"
                indicatorClassName={`${
                  question.matchScore >= 90
                    ? "bg-green-500"
                    : question.matchScore >= 75
                      ? "bg-yellow-500"
                      : "bg-orange-500"
                }`}
              />
            </div>
          </div>

          <p className="text-sm mb-4 line-clamp-2">{question.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="flex items-center gap-1 rounded-full">
              {getCategoryIcon(question.category)}
              {question.category.charAt(0).toUpperCase() + question.category.slice(1)}
            </Badge>
            <Badge variant="outline" className="rounded-full">
              {question.subcategory}
            </Badge>
            <Badge className={`${getUrgencyColor(question.urgency)} rounded-full`}>
              {question.urgency.charAt(0).toUpperCase() + question.urgency.slice(1)} Urgency
            </Badge>
          </div>

          <div className="flex justify-end">
            <Button className="rounded-full">
              View Details <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

