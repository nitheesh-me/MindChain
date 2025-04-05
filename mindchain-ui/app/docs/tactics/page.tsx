import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  InfoIcon,
  ShieldIcon,
  ZapIcon,
  ScaleIcon,
  RefreshCwIcon,
} from "lucide-react";

export default function ArchitecturalTacticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Architectural Tactics</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Key architectural tactics employed in the MindChain platform to
          address specific quality attributes.
        </p>

        <Alert className="mb-6 bg-blue-50 border-blue-200">
          <InfoIcon className="h-5 w-5 text-blue-600" />
          <AlertTitle className="text-blue-800">
            About Architectural Tactics
          </AlertTitle>
          <AlertDescription className="text-blue-700">
            Architectural tactics are design decisions that influence the
            achievement of a quality attribute response. They help address
            specific non-functional requirements and quality concerns in the
            system.
          </AlertDescription>
        </Alert>
      </div>

      <Tabs defaultValue="performance">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
          <TabsTrigger value="performance" className="flex items-center gap-2">
            <ZapIcon className="h-4 w-4" /> Performance
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <ShieldIcon className="h-4 w-4" /> Security
          </TabsTrigger>
          <TabsTrigger value="scalability" className="flex items-center gap-2">
            <ScaleIcon className="h-4 w-4" /> Scalability
          </TabsTrigger>
          <TabsTrigger
            value="maintainability"
            className="flex items-center gap-2"
          >
            <RefreshCwIcon className="h-4 w-4" /> Maintainability
          </TabsTrigger>
          <TabsTrigger value="summary" className="flex items-center gap-2">
            <InfoIcon className="h-4 w-4" /> Summary
          </TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Performance Tactics</CardTitle>
              <CardDescription>
                Tactics employed to optimize response time, throughput, and
                resource utilization.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  1. Caching Strategy
                </h3>
                <Badge className="mb-2">Response Time Optimization</Badge>

                <p className="mb-4">
                  MindChain implements a multi-level caching strategy to reduce
                  database load and improve response times for frequently
                  accessed data.
                </p>

                <div className="bg-muted p-4 rounded-md mb-4">
                  <h4 className="font-medium mb-2">Implementation Details</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      In-memory caching for user profiles and expertise data
                    </li>
                    <li>
                      Redis-based distributed caching for query matching results
                    </li>
                    <li>
                      Browser-side caching for static assets and UI components
                    </li>
                    <li>
                      Time-based cache invalidation strategies to maintain data
                      freshness
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">
                    Quality Attribute Addressed
                  </h4>
                  <p>
                    This tactic directly addresses NFR1 (Response Time) by
                    ensuring that frequently accessed data is available without
                    expensive database queries or computations, reducing average
                    response time by up to 70% for cached operations.
                  </p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  2. Asynchronous Processing
                </h3>
                <Badge className="mb-2">Resource Management</Badge>

                <p className="mb-4">
                  MindChain employs asynchronous processing for computationally
                  intensive operations to prevent blocking and improve overall
                  system responsiveness.
                </p>

                <div className="bg-muted p-4 rounded-md mb-4">
                  <h4 className="font-medium mb-2">Implementation Details</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Message queues for expert matching operations</li>
                    <li>
                      Background processing for notification batching and
                      delivery
                    </li>
                    <li>Scheduled tasks for analytics and data aggregation</li>
                    <li>
                      Event-driven architecture for decoupling time-intensive
                      operations
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">
                    Quality Attribute Addressed
                  </h4>
                  <p>
                    This tactic addresses both NFR1 (Response Time) and NFR2
                    (Scalability) by ensuring that resource-intensive operations
                    don&apos;t block the main request-response cycle, allowing
                    the system to remain responsive even under heavy
                    computational load.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Security Tactics</CardTitle>
              <CardDescription>
                Tactics employed to protect data, authenticate users, and
                prevent unauthorized access.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  1. Defense in Depth
                </h3>
                <Badge className="mb-2">Multi-layered Protection</Badge>

                <p className="mb-4">
                  MindChain implements multiple layers of security controls to
                  protect sensitive academic and personal data.
                </p>

                <div className="bg-muted p-4 rounded-md mb-4">
                  <h4 className="font-medium mb-2">Implementation Details</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Network-level protection with WAF and DDoS mitigation
                    </li>
                    <li>
                      Application-level security with input validation and
                      output encoding
                    </li>
                    <li>
                      Database-level security with encryption and access
                      controls
                    </li>
                    <li>Regular security audits and penetration testing</li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">
                    Quality Attribute Addressed
                  </h4>
                  <p>
                    This tactic addresses NFR5 (Data Privacy) and NFR6
                    (Authentication and Authorization) by creating multiple
                    security barriers that must be breached for an attacker to
                    access sensitive information.
                  </p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  2. Least Privilege
                </h3>
                <Badge className="mb-2">Access Control</Badge>

                <p className="mb-4">
                  MindChain enforces the principle of least privilege, ensuring
                  users and system components have only the minimum access
                  rights necessary.
                </p>

                <div className="bg-muted p-4 rounded-md mb-4">
                  <h4 className="font-medium mb-2">Implementation Details</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Role-based access control for different user types
                      (students, faculty, staff)
                    </li>
                    <li>Fine-grained permissions for system operations</li>
                    <li>
                      Contextual access controls based on query relevance and
                      expertise
                    </li>
                    <li>
                      Service-to-service authentication with limited scopes
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">
                    Quality Attribute Addressed
                  </h4>
                  <p>
                    This tactic addresses NFR6 (Authentication and
                    Authorization) by minimizing the potential damage from
                    compromised accounts or services, limiting access to only
                    what is necessary for each role or component.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scalability" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Scalability Tactics</CardTitle>
              <CardDescription>
                Tactics employed to handle growing workloads and user base
                efficiently.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  1. Horizontal Scaling
                </h3>
                <Badge className="mb-2">Capacity Management</Badge>

                <p className="mb-4">
                  MindChain is designed to scale horizontally by adding more
                  instances of services rather than increasing the capacity of
                  existing instances.
                </p>

                <div className="bg-muted p-4 rounded-md mb-4">
                  <h4 className="font-medium mb-2">Implementation Details</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Stateless microservices that can be replicated across
                      multiple instances
                    </li>
                    <li>
                      Load balancing to distribute requests across service
                      instances
                    </li>
                    <li>
                      Auto-scaling based on CPU utilization and request volume
                    </li>
                    <li>
                      Containerization for consistent deployment across
                      environments
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">
                    Quality Attribute Addressed
                  </h4>
                  <p>
                    This tactic addresses NFR2 (Scalability) by allowing the
                    system to handle increased load by adding more resources in
                    a linear fashion, without requiring architectural changes.
                  </p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  2. Data Partitioning
                </h3>
                <Badge className="mb-2">Database Scalability</Badge>

                <p className="mb-4">
                  MindChain implements data partitioning strategies to
                  distribute database load and improve query performance at
                  scale.
                </p>

                <div className="bg-muted p-4 rounded-md mb-4">
                  <h4 className="font-medium mb-2">Implementation Details</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Horizontal sharding of user data based on department or
                      faculty
                    </li>
                    <li>
                      Time-based partitioning for historical query and chat data
                    </li>
                    <li>Read replicas for analytics and reporting workloads</li>
                    <li>
                      Polyglot persistence with specialized databases for
                      different data types
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">
                    Quality Attribute Addressed
                  </h4>
                  <p>
                    This tactic addresses NFR2 (Scalability) and NFR1 (Response
                    Time) by ensuring that database operations remain efficient
                    even as data volumes grow, preventing database bottlenecks.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintainability" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Maintainability Tactics
              </CardTitle>
              <CardDescription>
                Tactics employed to facilitate system evolution, updates, and
                long-term maintenance.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  1. Service Isolation
                </h3>
                <Badge className="mb-2">Modularity</Badge>

                <p className="mb-4">
                  MindChain isolates functionality into independent services
                  that can be developed, tested, and deployed separately.
                </p>

                <div className="bg-muted p-4 rounded-md mb-4">
                  <h4 className="font-medium mb-2">Implementation Details</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Clear service boundaries with well-defined interfaces
                    </li>
                    <li>
                      Domain-driven design principles for service organization
                    </li>
                    <li>Independent deployment pipelines for each service</li>
                    <li>Versioned APIs to manage service evolution</li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">
                    Quality Attribute Addressed
                  </h4>
                  <p>
                    This tactic addresses NFR9 (Extensibility) and NFR10
                    (Testability) by allowing individual services to evolve
                    independently, reducing the risk and complexity of system
                    changes.
                  </p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  2. Comprehensive Monitoring
                </h3>
                <Badge className="mb-2">Observability</Badge>

                <p className="mb-4">
                  MindChain implements extensive monitoring and observability
                  features to facilitate troubleshooting and maintenance.
                </p>

                <div className="bg-muted p-4 rounded-md mb-4">
                  <h4 className="font-medium mb-2">Implementation Details</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Distributed tracing across service boundaries</li>
                    <li>Centralized logging with context-aware correlation</li>
                    <li>Real-time metrics and dashboards for system health</li>
                    <li>Automated alerting for anomaly detection</li>
                  </ul>
                </div>

                <div className="border rounded-md p-4">
                  <h4 className="font-medium mb-2">
                    Quality Attribute Addressed
                  </h4>
                  <p>
                    This tactic addresses NFR3 (Availability) and NFR10
                    (Testability) by providing visibility into system behavior,
                    enabling rapid identification and resolution of issues.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="summary" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Tactics Summary</CardTitle>
              <CardDescription>
                Overview of architectural tactics and their relationship to
                quality attributes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tactic</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Primary Quality Attributes</TableHead>
                    <TableHead>Implementation Approach</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Caching Strategy
                    </TableCell>
                    <TableCell>Performance</TableCell>
                    <TableCell>Response Time</TableCell>
                    <TableCell>
                      Multi-level caching with time-based invalidation
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Asynchronous Processing
                    </TableCell>
                    <TableCell>Performance</TableCell>
                    <TableCell>Response Time, Scalability</TableCell>
                    <TableCell>
                      Message queues and background processing
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Defense in Depth
                    </TableCell>
                    <TableCell>Security</TableCell>
                    <TableCell>Data Privacy, Authentication</TableCell>
                    <TableCell>Multi-layered security controls</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Least Privilege
                    </TableCell>
                    <TableCell>Security</TableCell>
                    <TableCell>Authentication and Authorization</TableCell>
                    <TableCell>
                      Role-based and contextual access controls
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Horizontal Scaling
                    </TableCell>
                    <TableCell>Scalability</TableCell>
                    <TableCell>Scalability</TableCell>
                    <TableCell>
                      Stateless services with load balancing
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Data Partitioning
                    </TableCell>
                    <TableCell>Scalability</TableCell>
                    <TableCell>Scalability, Response Time</TableCell>
                    <TableCell>Sharding and specialized databases</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Service Isolation
                    </TableCell>
                    <TableCell>Maintainability</TableCell>
                    <TableCell>Extensibility, Testability</TableCell>
                    <TableCell>Microservices with clear boundaries</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Comprehensive Monitoring
                    </TableCell>
                    <TableCell>Maintainability</TableCell>
                    <TableCell>Availability, Testability</TableCell>
                    <TableCell>
                      Distributed tracing and centralized logging
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
