import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FunctionalRequirementsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild className="rounded-full">
          <Link href="/docs">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Docs
          </Link>
        </Button>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">Functional Requirements</h1>
        <p className="text-lg text-muted-foreground mb-4">
          Core functional requirements that define what the MindChain system must do.
        </p>
        <Separator className="my-4" />
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">User Management</h2>

          <Card className="mb-4">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">FR1: User Registration and Authentication</CardTitle>
                <Badge>Architecturally Significant</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The system must allow users to register with their institutional credentials and authenticate using IIIT
                Hyderabad's authentication system.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Architectural Significance:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Integration with existing institutional authentication systems impacts security architecture</li>
                  <li>User identity is fundamental to the matching algorithm and permission system</li>
                  <li>Requires secure data handling for personal and academic information</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-xl">FR2: User Profile Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Users must be able to create and manage profiles containing their academic expertise, research
                interests, courses, and event coordination experience.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Details:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Faculty profiles must include teaching areas, research interests, and office hours</li>
                  <li>Student profiles must include courses taken, research interests, and technical skills</li>
                  <li>Staff profiles must include administrative roles and event coordination experience</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">FR3: Role-Based Access Control</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The system must implement role-based access control with distinct permissions for students, faculty, and
                staff.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Details:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Faculty can view all queries in their domain of expertise</li>
                  <li>Students can only view their own queries and responses</li>
                  <li>Administrators can manage user accounts and system settings</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Query Management</h2>

          <Card className="mb-4">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">FR4: Query Submission</CardTitle>
                <Badge>Architecturally Significant</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Users must be able to submit queries through both the web interface and browser extension, specifying
                category, urgency, and detailed description.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Architectural Significance:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Requires multi-platform integration (web and browser extension)</li>
                  <li>Query structure directly impacts the matching algorithm's effectiveness</li>
                  <li>Must support real-time submission and processing</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">FR5: Expert Matching Algorithm</CardTitle>
                <Badge>Architecturally Significant</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The system must automatically match queries to the most relevant experts based on expertise, research
                interests, and availability.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Architectural Significance:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Core functionality that defines the system's value proposition</li>
                  <li>Requires complex algorithm design and optimization</li>
                  <li>Must balance accuracy with performance considerations</li>
                  <li>Needs to adapt and improve based on feedback and usage patterns</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">FR6: Query Status Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Users must be able to track the status of their queries (pending, matching, matched, resolved, closed).
              </p>
              <div>
                <h4 className="font-semibold mb-2">Details:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Status updates must be provided in real-time</li>
                  <li>Users should receive notifications when their query status changes</li>
                  <li>Query history must be maintained for future reference</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Communication</h2>

          <Card className="mb-4">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">FR7: Real-time Chat</CardTitle>
                <Badge>Architecturally Significant</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>The system must provide a real-time chat interface for communication between users and experts.</p>
              <div>
                <h4 className="font-semibold mb-2">Architectural Significance:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Requires real-time messaging infrastructure</li>
                  <li>Must support persistent conversations across sessions</li>
                  <li>Needs to handle message delivery, read receipts, and notifications</li>
                  <li>Must be accessible across all pages of the application</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">FR8: Notification System</CardTitle>
                <Badge>Architecturally Significant</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The system must provide incremental notifications to experts about matched queries and to users about
                expert responses.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Architectural Significance:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Requires real-time notification delivery system</li>
                  <li>Must support multiple notification channels (in-app, email)</li>
                  <li>Needs to implement intelligent notification batching to minimize disruption</li>
                  <li>Critical for the expert routing system to function effectively</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">FR9: Expert Response Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Experts must be able to view, accept, decline, or defer queries matched to them.</p>
              <div>
                <h4 className="font-semibold mb-2">Details:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Experts should see match percentage and criteria for each query</li>
                  <li>
                    System must automatically route queries to the next expert if declined or not responded to within a
                    time limit
                  </li>
                  <li>Experts should be able to manage multiple active conversations</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Analytics and Feedback</h2>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-xl">FR10: Query Analytics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>The system must provide analytics on query patterns, response times, and resolution rates.</p>
              <div>
                <h4 className="font-semibold mb-2">Details:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Dashboard for administrators showing system-wide metrics</li>
                  <li>Personal analytics for experts showing their response rates and feedback</li>
                  <li>Query trend analysis to identify common issues and knowledge gaps</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">FR11: Feedback System</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Users must be able to provide feedback on expert responses and the overall query resolution process.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Details:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Rating system for expert responses</li>
                  <li>Feedback forms for the query resolution process</li>
                  <li>Mechanism to improve the matching algorithm based on feedback</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <div className="flex justify-between items-center pt-4">
        <Button variant="outline" asChild className="rounded-full">
          <Link href="/docs">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Docs
          </Link>
        </Button>
        <Button asChild className="rounded-full">
          <Link href="/docs/requirements/non-functional">
            Non-functional Requirements <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

