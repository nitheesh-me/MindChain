import type { User, MatchedExpert } from "@/lib/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatDistanceToNow } from "date-fns"

interface ExpertListProps {
  experts: User[]
  matches: MatchedExpert[]
}

export function ExpertList({ experts, matches }: ExpertListProps) {
  // Combine experts with their match data
  const expertsWithMatches = experts
    .map((expert) => {
      const match = matches.find((m) => m.userId === expert.id)
      return {
        ...expert,
        match,
      }
    })
    .sort((a, b) => {
      if (!a.match || !b.match) return 0
      return b.match.score - a.match.score
    })

  const getStatusBadge = (status: MatchedExpert["status"]) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline">Pending</Badge>
      case "notified":
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Notified</Badge>
      case "accepted":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Accepted</Badge>
      case "declined":
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">Declined</Badge>
      default:
        return null
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Matched Experts</h2>
      {expertsWithMatches.length === 0 ? (
        <Card>
          <CardContent className="py-10 text-center">
            <p className="text-muted-foreground">No experts matched yet</p>
          </CardContent>
        </Card>
      ) : (
        expertsWithMatches.map((expert) => (
          <Card key={expert.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">{expert.name}</CardTitle>
                {expert.match && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Match Score: {Math.round(expert.match.score * 100)}%</span>
                    {getStatusBadge(expert.match.status)}
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={expert.profileImage} alt={expert.name} />
                  <AvatarFallback>{expert.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm mb-1">
                    <span className="font-medium">Role:</span>{" "}
                    {expert.role.charAt(0).toUpperCase() + expert.role.slice(1)}
                  </p>
                  <p className="text-sm mb-1">
                    <span className="font-medium">Department:</span> {expert.department}
                  </p>
                  <p className="text-sm mb-1">
                    <span className="font-medium">Expertise:</span> {expert.expertise.join(", ")}
                  </p>
                  {expert.researchInterests && (
                    <p className="text-sm mb-1">
                      <span className="font-medium">Research:</span> {expert.researchInterests.join(", ")}
                    </p>
                  )}
                  {expert.match?.notifiedAt && (
                    <p className="text-xs text-muted-foreground mt-2">
                      Notified {formatDistanceToNow(new Date(expert.match.notifiedAt), { addSuffix: true })}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}

