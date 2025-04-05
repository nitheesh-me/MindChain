import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SubsystemsPage() {
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
        <h1 className="text-3xl font-bold mb-2">Subsystem Overview</h1>
        <p className="text-lg text-muted-foreground mb-4">
          Detailed breakdown of the main subsystems that make up the MindChain
          platform.
        </p>
        <Separator className="my-4" />
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">
            1. User Management Subsystem
          </h2>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl">Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The User Management Subsystem handles user authentication,
                profile management, and role-based access control. It integrates
                with IIIT Hyderabad&apos;s authentication system and maintains
                user profiles with academic expertise, research interests, and
                other relevant information.
              </p>

              <div>
                <h4 className="font-semibold mb-2">Key Components:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Authentication Service:</span>{" "}
                    Handles user login, session management, and integration with
                    institutional SSO
                  </li>
                  <li>
                    <span className="font-medium">Profile Manager:</span>{" "}
                    Manages user profiles, expertise data, and preferences
                  </li>
                  <li>
                    <span className="font-medium">Authorization Service:</span>{" "}
                    Implements role-based access control and permission
                    management
                  </li>
                  <li>
                    <span className="font-medium">User Data Store:</span>{" "}
                    Securely stores user information and credentials
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Interfaces:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">
                      To Authentication System:
                    </span>{" "}
                    OAuth/SAML integration with IIIT Hyderabad&apos;s
                    authentication
                  </li>
                  <li>
                    <span className="font-medium">
                      To Query Matching Subsystem:
                    </span>{" "}
                    Provides expertise data for matching algorithm
                  </li>
                  <li>
                    <span className="font-medium">
                      To Communication Subsystem:
                    </span>{" "}
                    Provides user identity and contact information
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            2. Query Management Subsystem
          </h2>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl">Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The Query Management Subsystem handles the creation, tracking,
                and resolution of user queries. It manages the lifecycle of
                queries from submission to resolution, including categorization,
                prioritization, and status tracking.
              </p>

              <div>
                <h4 className="font-semibold mb-2">Key Components:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">
                      Query Submission Service:
                    </span>{" "}
                    Processes query submissions from web and browser extension
                    interfaces
                  </li>
                  <li>
                    <span className="font-medium">Query Tracker:</span> Manages
                    query status and lifecycle
                  </li>
                  <li>
                    <span className="font-medium">Category Manager:</span>{" "}
                    Handles query categorization and tagging
                  </li>
                  <li>
                    <span className="font-medium">Query Data Store:</span>{" "}
                    Stores query details, status, and history
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Interfaces:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">To User Interface:</span>{" "}
                    Provides query submission and tracking functionality
                  </li>
                  <li>
                    <span className="font-medium">
                      To Expert Matching Subsystem:
                    </span>{" "}
                    Sends queries for expert matching
                  </li>
                  <li>
                    <span className="font-medium">To Analytics Subsystem:</span>{" "}
                    Provides query data for analysis
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            3. Expert Matching Subsystem
          </h2>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl">Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The Expert Matching Subsystem is the core intelligence of
                MindChain, matching queries to the most relevant experts based
                on expertise, research interests, and availability. It
                implements sophisticated algorithms to ensure optimal matching
                and handles expert notification and response management.
              </p>

              <div>
                <h4 className="font-semibold mb-2">Key Components:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Matching Engine:</span>{" "}
                    Implements the core matching algorithm
                  </li>
                  <li>
                    <span className="font-medium">Expertise Analyzer:</span>{" "}
                    Processes and indexes expertise data
                  </li>
                  <li>
                    <span className="font-medium">Expert Router:</span> Manages
                    the routing of queries to experts, including fallback
                    mechanisms
                  </li>
                  <li>
                    <span className="font-medium">Availability Manager:</span>{" "}
                    Tracks expert availability and workload
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Interfaces:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">
                      To Query Management Subsystem:
                    </span>{" "}
                    Receives queries for matching
                  </li>
                  <li>
                    <span className="font-medium">
                      To User Management Subsystem:
                    </span>{" "}
                    Accesses expertise data
                  </li>
                  <li>
                    <span className="font-medium">
                      To Notification Subsystem:
                    </span>{" "}
                    Triggers expert notifications
                  </li>
                  <li>
                    <span className="font-medium">To Analytics Subsystem:</span>{" "}
                    Provides matching performance data
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            4. Communication Subsystem
          </h2>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl">Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The Communication Subsystem handles all real-time and
                asynchronous communication between users and experts. It
                provides chat functionality, message delivery, and conversation
                management across the platform.
              </p>

              <div>
                <h4 className="font-semibold mb-2">Key Components:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Chat Service:</span> Manages
                    real-time messaging between users
                  </li>
                  <li>
                    <span className="font-medium">Message Store:</span> Persists
                    chat history and message data
                  </li>
                  <li>
                    <span className="font-medium">Conversation Manager:</span>{" "}
                    Handles conversation state and metadata
                  </li>
                  <li>
                    <span className="font-medium">Read Receipt Service:</span>{" "}
                    Tracks message delivery and read status
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Interfaces:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">To User Interface:</span>{" "}
                    Provides chat UI components and real-time updates
                  </li>
                  <li>
                    <span className="font-medium">
                      To Notification Subsystem:
                    </span>{" "}
                    Triggers message notifications
                  </li>
                  <li>
                    <span className="font-medium">
                      To Query Management Subsystem:
                    </span>{" "}
                    Updates query status based on communication
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. Notification Subsystem</h2>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl">Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The Notification Subsystem manages the delivery of notifications
                to users across multiple channels. It implements intelligent
                notification batching to minimize disruption while ensuring
                timely delivery of important information.
              </p>

              <div>
                <h4 className="font-semibold mb-2">Key Components:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Notification Manager:</span>{" "}
                    Coordinates notification creation and delivery
                  </li>
                  <li>
                    <span className="font-medium">Channel Adapters:</span>{" "}
                    Handles delivery through different channels (in-app, email)
                  </li>
                  <li>
                    <span className="font-medium">Batching Service:</span>{" "}
                    Implements intelligent notification grouping and timing
                  </li>
                  <li>
                    <span className="font-medium">Notification Store:</span>{" "}
                    Persists notification history and status
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Interfaces:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">To User Interface:</span>{" "}
                    Delivers in-app notifications
                  </li>
                  <li>
                    <span className="font-medium">
                      To Expert Matching Subsystem:
                    </span>{" "}
                    Receives expert match events
                  </li>
                  <li>
                    <span className="font-medium">
                      To Communication Subsystem:
                    </span>{" "}
                    Receives message events
                  </li>
                  <li>
                    <span className="font-medium">To External Services:</span>{" "}
                    Connects to email and push notification services
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            6. Analytics and Feedback Subsystem
          </h2>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl">Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The Analytics and Feedback Subsystem collects, processes, and
                visualizes data about system usage, query patterns, and user
                feedback. It provides insights for system improvement and helps
                measure the effectiveness of the platform.
              </p>

              <div>
                <h4 className="font-semibold mb-2">Key Components:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">
                      Data Collection Service:
                    </span>{" "}
                    Gathers usage and performance metrics
                  </li>
                  <li>
                    <span className="font-medium">Feedback Manager:</span>{" "}
                    Processes user ratings and feedback
                  </li>
                  <li>
                    <span className="font-medium">Analytics Engine:</span>{" "}
                    Analyzes collected data for insights
                  </li>
                  <li>
                    <span className="font-medium">Reporting Service:</span>{" "}
                    Generates dashboards and reports
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Interfaces:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">To User Interface:</span>{" "}
                    Provides analytics dashboards and feedback forms
                  </li>
                  <li>
                    <span className="font-medium">
                      To Query Management Subsystem:
                    </span>{" "}
                    Collects query data
                  </li>
                  <li>
                    <span className="font-medium">
                      To Expert Matching Subsystem:
                    </span>{" "}
                    Provides feedback for algorithm improvement
                  </li>
                  <li>
                    <span className="font-medium">
                      To Communication Subsystem:
                    </span>{" "}
                    Collects communication metrics
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. Integration Subsystem</h2>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The Integration Subsystem manages connections with external
                systems and services, including the browser extension,
                institutional databases, and third-party services. It provides
                APIs and adapters for seamless integration.
              </p>

              <div>
                <h4 className="font-semibold mb-2">Key Components:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">API Gateway:</span> Provides
                    unified access to system functionality
                  </li>
                  <li>
                    <span className="font-medium">
                      Browser Extension Service:
                    </span>{" "}
                    Handles communication with the browser extension
                  </li>
                  <li>
                    <span className="font-medium">
                      Institutional Data Connector:
                    </span>{" "}
                    Integrates with IIIT Hyderabad&apos;s academic databases
                  </li>
                  <li>
                    <span className="font-medium">
                      External Service Adapters:
                    </span>{" "}
                    Connects to third-party services as needed
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Interfaces:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">To Browser Extension:</span>{" "}
                    Provides API for query submission and notifications
                  </li>
                  <li>
                    <span className="font-medium">
                      To Institutional Systems:
                    </span>{" "}
                    Connects to academic databases and authentication systems
                  </li>
                  <li>
                    <span className="font-medium">To All Subsystems:</span>{" "}
                    Provides external data and services as needed
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <div className="flex justify-between items-center pt-4">
        <Button variant="outline" asChild className="rounded-full">
          <Link href="/docs/requirements/non-functional">
            <ArrowLeft className="mr-2 h-4 w-4" /> Non-functional Requirements
          </Link>
        </Button>
        <Button asChild className="rounded-full">
          <Link href="/docs/stakeholders">
            Stakeholder Identification <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
