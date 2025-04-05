import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function NonFunctionalRequirementsPage() {
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
        <h1 className="text-3xl font-bold mb-2">Non-Functional Requirements</h1>
        <p className="text-lg text-muted-foreground mb-4">
          Quality attributes and constraints that define how the MindChain system should operate.
        </p>
        <Separator className="my-4" />
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">Performance</h2>

          <Card className="mb-4">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">NFR1: Response Time</CardTitle>
                <Badge>Architecturally Significant</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>The system must respond to user interactions within 1 second under normal load conditions.</p>
              <div>
                <h4 className="font-semibold mb-2">Architectural Significance:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Impacts the choice of database technology and query optimization</li>
                  <li>Requires efficient client-server communication protocols</li>
                  <li>May necessitate caching strategies for frequently accessed data</li>
                  <li>Influences the overall system architecture and component distribution</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">NFR2: Scalability</CardTitle>
                <Badge>Architecturally Significant</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The system must support at least 5,000 concurrent users and scale horizontally to accommodate growth.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Architectural Significance:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Requires stateless design for horizontal scaling</li>
                  <li>Influences database sharding and partitioning strategies</li>
                  <li>Necessitates load balancing and distributed processing</li>
                  <li>Impacts the choice of cloud infrastructure and deployment model</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Reliability</h2>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-xl">NFR3: Availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The system must maintain 99.9% uptime during academic hours (8 AM to 8 PM) and 99% uptime during
                non-academic hours.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Details:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Maximum allowed downtime of 43.8 minutes per month during academic hours</li>
                  <li>Scheduled maintenance should be performed during non-academic hours</li>
                  <li>System must implement redundancy for critical components</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">NFR4: Data Durability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The system must ensure no data loss for completed transactions and maintain chat history for at least
                one academic year.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Details:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Regular database backups with point-in-time recovery</li>
                  <li>Transaction logging and replay capabilities</li>
                  <li>Data archiving strategy for older conversations</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Security</h2>

          <Card className="mb-4">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">NFR5: Data Privacy</CardTitle>
                <Badge>Architecturally Significant</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The system must protect user data according to institutional privacy policies and applicable
                regulations.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Architectural Significance:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Requires end-to-end encryption for sensitive communications</li>
                  <li>Necessitates secure data storage with appropriate access controls</li>
                  <li>Impacts authentication and authorization mechanisms</li>
                  <li>Requires careful handling of personal and academic information</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">NFR6: Authentication and Authorization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The system must implement secure authentication and role-based authorization with institutional SSO
                integration.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Details:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Support for IIIT Hyderabad's authentication system</li>
                  <li>Multi-factor authentication for administrative access</li>
                  <li>Fine-grained permission system based on user roles</li>
                  <li>Secure session management with appropriate timeouts</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Usability</h2>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-xl">NFR7: Accessibility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The system must comply with WCAG 2.1 AA standards to ensure accessibility for users with disabilities.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Details:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Keyboard navigation support for all features</li>
                  <li>Screen reader compatibility</li>
                  <li>Sufficient color contrast and text sizing</li>
                  <li>Alternative text for images and non-text content</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">NFR8: User Experience</CardTitle>
                <Badge>Architecturally Significant</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The system must provide an intuitive, responsive interface that minimizes cognitive load and supports
                efficient task completion.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Architectural Significance:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Requires responsive design and component-based UI architecture</li>
                  <li>Impacts the choice of frontend framework and state management</li>
                  <li>Necessitates efficient client-side rendering and data fetching</li>
                  <li>Influences the design of notification and chat systems</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Maintainability</h2>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-xl">NFR9: Extensibility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The system must be designed to easily incorporate new features and integrate with additional
                institutional systems.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Details:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Modular architecture with well-defined interfaces</li>
                  <li>API-first design for all core functionality</li>
                  <li>Plugin system for extending capabilities</li>
                  <li>Comprehensive documentation for developers</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">NFR10: Testability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The system must be designed to facilitate automated testing at unit, integration, and system levels.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Details:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Test coverage of at least 80% for core functionality</li>
                  <li>Support for mocking external dependencies</li>
                  <li>Continuous integration and automated test execution</li>
                  <li>Monitoring and logging for production issues</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <div className="flex justify-between items-center pt-4">
        <Button variant="outline" asChild className="rounded-full">
          <Link href="/docs/requirements/functional">
            <ArrowLeft className="mr-2 h-4 w-4" /> Functional Requirements
          </Link>
        </Button>
        <Button asChild className="rounded-full">
          <Link href="/docs/subsystems">
            Subsystem Overview <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

