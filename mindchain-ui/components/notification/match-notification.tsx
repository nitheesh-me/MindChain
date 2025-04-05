"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface MatchNotificationProps {
  match: {
    id: string
    queryId: string
    title: string
    student: string
    matchScore: number
    matchCriteria: string[]
    timeToExpire: number // in seconds
  }
  onAccept: (id: string) => void
  onDecline: (id: string) => void
}

export function MatchNotification({ match, onAccept, onDecline }: MatchNotificationProps) {
  const [timeLeft, setTimeLeft] = useState(match.timeToExpire)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          // Auto-decline after timer expires
          setTimeout(() => {
            setIsVisible(false)
            onDecline(match.id)
          }, 500)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [match.id, onDecline])

  const handleAccept = () => {
    setIsVisible(false)
    setTimeout(() => onAccept(match.id), 300)
  }

  const handleDecline = () => {
    setIsVisible(false)
    setTimeout(() => onDecline(match.id), 300)
  }

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 75) return "text-yellow-600"
    return "text-orange-600"
  }

  const formatTimeLeft = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-24 right-6 z-50 max-w-md"
        >
          <Card className="rounded-xl shadow-lg border-2 border-primary/20">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg">New Question Match!</h3>
                  <p className="text-sm text-muted-foreground">From {match.student}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-lg font-bold ${getMatchScoreColor(match.matchScore)}`}>
                    {match.matchScore}%
                  </span>
                  <Badge variant="outline" className="rounded-full">
                    Match
                  </Badge>
                </div>
              </div>

              <h4 className="font-medium mb-2">{match.title}</h4>

              <div className="mb-3">
                <p className="text-xs text-muted-foreground mb-1">Match based on your expertise in:</p>
                <div className="flex flex-wrap gap-1">
                  {match.matchCriteria.map((criteria, index) => (
                    <Badge key={index} variant="secondary" className="text-xs rounded-full">
                      {criteria}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between items-center text-xs mb-1">
                  <span>Time to respond</span>
                  <span className={timeLeft < 30 ? "text-red-500 font-medium" : ""}>{formatTimeLeft(timeLeft)}</span>
                </div>
                <Progress
                  value={(timeLeft / match.timeToExpire) * 100}
                  className="h-1.5"
                  indicatorClassName={`${
                    timeLeft > match.timeToExpire * 0.6
                      ? "bg-green-500"
                      : timeLeft > match.timeToExpire * 0.3
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  }`}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between p-4 pt-0">
              <Button variant="outline" size="sm" onClick={handleDecline} className="rounded-full">
                <X className="mr-1 h-4 w-4" />
                Decline
              </Button>
              <Button size="sm" onClick={handleAccept} className="rounded-full">
                <CheckCircle className="mr-1 h-4 w-4" />
                Accept
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
