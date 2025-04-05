import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function StakeholdersPage() {
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
        <h1 className="text-3xl font-bold mb-2">Stakeholder Identification</h1>
        <p className="text-lg text-muted-foreground mb-4">
          Following IEEE 42010 standard to identify stakeholders, their concerns, and the viewpoints and views
          addressing these concerns.
        </p>
        <Separator className="my-4" />
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">IEEE 42010 Framework</h2>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl">Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                IEEE 42010 is a standard for architecture description that provides a framework for identifying
                stakeholders, their concerns, and the viewpoints and views that address these concerns. This framework
                helps ensure that the architecture meets the needs of all stakeholders and addresses their specific
                concerns.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Components of IEEE 42010:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Stakeholders:</span> Individuals, groups, or organizations with
                    interests in or concerns about the system
                  </li>
                  <li>
                    <span className="font-medium">Concerns:</span> Interests or requirements that stakeholders have
                    regarding the system
                  </li>
                  <li>
                    <span className="font-medium">Viewpoints:</span> Perspectives from which to view the system that
                    address specific concerns
                  </li>
                  <li>
                    <span className="font-medium">Views:</span> Representations of the system from specific viewpoints
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Stakeholder Categories</h2>

          <Tabs defaultValue="users" className="w-full">
            <TabsList className="grid w-full grid-cols-4 rounded-xl">
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="operators">Operators</TabsTrigger>
              <TabsTrigger value="developers">Developers</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
            </TabsList>

            <TabsContent value="users" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>User Stakeholders</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Stakeholder</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Primary Concerns</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Students</TableCell>
                        <TableCell>
                          Undergraduate and graduate students at IIIT Hyderabad who seek academic and research support
                        </TableCell>
                        <TableCell>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Ease of submitting queries</li>
                            <li>Quick and accurate expert matching</li>
                            <li>Timely responses to questions</li>
                            <li>User-friendly interface</li>
                            <li>Privacy of academic information</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Faculty</TableCell>
                        <TableCell>
                          Professors and instructors who provide expertise and answer student queries
                        </TableCell>
                        <TableCell>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Relevant query matching based on expertise</li>
                            <li>Manageable workload and notification frequency</li>
                            <li>Efficient communication tools</li>
                            <li>Integration with existing workflows</li>
                            <li>Recognition for contributions</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Staff</TableCell>
                        <TableCell>
                          Administrative and support staff who assist with event coordination and administrative queries
                        </TableCell>
                        <TableCell>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Clear categorization of administrative queries</li>
                            <li>Integration with institutional systems</li>
                            <li>Efficient workflow management</li>
                            <li>Reporting and analytics</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="operators" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Operator Stakeholders</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Stakeholder</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Primary Concerns</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">System Administrators</TableCell>
                        <TableCell>IT staff responsible for maintaining and operating the MindChain platform</TableCell>
                        <TableCell>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>System reliability and uptime</li>
                            <li>Performance monitoring</li>
                            <li>Security management</li>
                            <li>Backup and recovery</li>
                            <li>Ease of maintenance</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Department Coordinators</TableCell>
                        <TableCell>Staff who oversee the use of MindChain within specific departments</TableCell>
                        <TableCell>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Department-specific analytics</li>
                            <li>Faculty workload management</li>
                            <li>Query routing and assignment</li>
                            <li>Integration with departmental processes</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">IT Support Staff</TableCell>
                        <TableCell>Personnel who provide technical support to users of the system</TableCell>
                        <TableCell>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Troubleshooting tools</li>
                            <li>User management capabilities</li>
                            <li>System diagnostics</li>
                            <li>Documentation and knowledge base</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="developers" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Developer Stakeholders</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Stakeholder</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Primary Concerns</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Software Developers</TableCell>
                        <TableCell>Engineers who build and maintain the MindChain platform</TableCell>
                        <TableCell>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Code maintainability and quality</li>
                            <li>Development efficiency</li>
                            <li>Technical documentation</li>
                            <li>Testing and debugging capabilities</li>
                            <li>Integration with development tools</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">UX/UI Designers</TableCell>
                        <TableCell>Designers responsible for the user experience and interface</TableCell>
                        <TableCell>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Design system consistency</li>
                            <li>Accessibility compliance</li>
                            <li>User flow optimization</li>
                            <li>Responsive design implementation</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Data Scientists</TableCell>
                        <TableCell>Specialists who develop and improve the matching algorithm</TableCell>
                        <TableCell>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Data quality and availability</li>
                            <li>Algorithm performance metrics</li>
                            <li>Model training and evaluation</li>
                            <li>Integration with the matching subsystem</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">QA Engineers</TableCell>
                        <TableCell>Quality assurance specialists who test the system</TableCell>
                        <TableCell>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Testability of components</li>
                            <li>Test automation support</li>
                            <li>Bug tracking and reporting</li>
                            <li>Performance testing capabilities</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="business" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Business Stakeholders</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Stakeholder</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Primary Concerns</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Institute Leadership</TableCell>
                        <TableCell>Directors, deans, and other leadership at IIIT Hyderabad</TableCell>
                        <TableCell>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Alignment with institutional goals</li>
                            <li>Return on investment</li>
                            <li>Reputation and image</li>
                            <li>Compliance with policies</li>
                            <li>Strategic value</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Project Sponsors</TableCell>
                        <TableCell>Individuals or groups funding the MindChain project</TableCell>
                        <TableCell>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Budget adherence</li>
                            <li>Timeline compliance</li>
                            <li>Feature delivery</li>
                            <li>Project success metrics</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Regulatory Compliance</TableCell>
                        <TableCell>Legal and compliance officers ensuring adherence to regulations</TableCell>
                        <TableCell>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Data privacy compliance</li>
                            <li>Security standards</li>
                            <li>Accessibility requirements</li>
                            <li>Audit trails and reporting</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Viewpoints and Views</h2>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl">Mapping Concerns to Viewpoints</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Viewpoint</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Addressed Concerns</TableHead>
                    <TableHead>Primary Stakeholders</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Functional Viewpoint</TableCell>
                    <TableCell>
                      Describes the system's functional elements, their responsibilities, interfaces, and interactions
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Feature completeness</li>
                        <li>System capabilities</li>
                        <li>Functional requirements</li>
                        <li>Integration points</li>
                      </ul>
                    </TableCell>
                    <TableCell>Students, Faculty, Staff, Developers</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Information Viewpoint</TableCell>
                    <TableCell>Describes how the system stores, manages, and manipulates data</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Data integrity</li>
                        <li>Data privacy</li>
                        <li>Information flow</li>
                        <li>Data persistence</li>
                      </ul>
                    </TableCell>
                    <TableCell>Data Scientists, System Administrators, Regulatory Compliance</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Deployment Viewpoint</TableCell>
                    <TableCell>
                      Describes the environment in which the system will be deployed and the dependencies on its
                      environment
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>System reliability</li>
                        <li>Scalability</li>
                        <li>Performance</li>
                        <li>Infrastructure requirements</li>
                      </ul>
                    </TableCell>
                    <TableCell>System Administrators, IT Support Staff, Developers</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Development Viewpoint</TableCell>
                    <TableCell>Describes the architecture that supports the software development process</TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Code maintainability</li>
                        <li>Development efficiency</li>
                        <li>Testing strategy</li>
                        <li>Module organization</li>
                      </ul>
                    </TableCell>
                    <TableCell>Software Developers, QA Engineers</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Usability Viewpoint</TableCell>
                    <TableCell>
                      Describes the user interface, user experience, and accessibility aspects of the system
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>User-friendly interface</li>
                        <li>Accessibility</li>
                        <li>User flow optimization</li>
                        <li>Responsive design</li>
                      </ul>
                    </TableCell>
                    <TableCell>Students, Faculty, Staff, UX/UI Designers</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Security Viewpoint</TableCell>
                    <TableCell>
                      Describes how the system protects sensitive data and prevents unauthorized access
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Data protection</li>
                        <li>Authentication</li>
                        <li>Authorization</li>
                        <li>Audit trails</li>
                      </ul>
                    </TableCell>
                    <TableCell>System Administrators, Regulatory Compliance, Institute Leadership</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Performance Viewpoint</TableCell>
                    <TableCell>
                      Describes the performance characteristics of the system and how they affect user experience
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Response time</li>
                        <li>Throughput</li>
                        <li>Resource utilization</li>
                        <li>Scalability</li>
                      </ul>
                    </TableCell>
                    <TableCell>Students, Faculty, System Administrators, Developers</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Architecture Views</h2>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl">Key Architecture Views</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. Logical View</h3>
                <p className="mb-2">
                  The logical view represents the functional elements of the system and their relationships. It
                  addresses concerns related to system functionality, organization, and structure.
                </p>
                <div className="bg-muted p-4 rounded-md">
                  <p className="font-medium mb-1">Key Diagrams:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Component diagram showing the main subsystems</li>
                    <li>Class diagrams for key domain models</li>
                    <li>Sequence diagrams for critical interactions</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">2. Process View</h3>
                <p className="mb-2">
                  The process view addresses concerns related to concurrency, distribution, performance, and
                  scalability. It shows how the runtime elements of the system interact.
                </p>
                <div className="bg-muted p-4 rounded-md">
                  <p className="font-medium mb-1">Key Diagrams:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Activity diagrams for key workflows</li>
                    <li>State diagrams for complex processes</li>
                    <li>Communication diagrams for real-time interactions</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">3. Development View</h3>
                <p className="mb-2">
                  The development view addresses concerns related to software management, reuse, constraints, and
                  development environment. It shows the organization of modules and components.
                </p>
                <div className="bg-muted p-4 rounded-md">
                  <p className="font-medium mb-1">Key Diagrams:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Package diagrams showing code organization</li>
                    <li>Module dependency diagrams</li>
                    <li>Build and deployment pipeline diagrams</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">4. Physical View</h3>
                <p className="mb-2">
                  The physical view addresses concerns related to system topology, distribution, and deployment. It
                  shows how software elements are mapped to hardware.
                </p>
                <div className="bg-muted p-4 rounded-md">
                  <p className="font-medium mb-1">Key Diagrams:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Deployment diagrams showing hardware configuration</li>
                    <li>Network topology diagrams</li>
                    <li>Infrastructure architecture diagrams</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">5. Scenarios</h3>
                <p className="mb-2">
                  Scenarios illustrate how the various architectural elements work together to fulfill key requirements.
                  They serve as a validation mechanism for the architecture.
                </p>
                <div className="bg-muted p-4 rounded-md">
                  <p className="font-medium mb-1">Key Diagrams:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Use case diagrams for main system functions</li>
                    <li>User journey maps for key workflows</li>
                    <li>Sequence diagrams for specific scenarios</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <div className="flex justify-between items-center pt-4">
        <Button variant="outline" asChild className="rounded-full">
          <Link href="/docs/subsystems">
            <ArrowLeft className="mr-2 h-4 w-4" /> Subsystem Overview
          </Link>
        </Button>
        <Button asChild className="rounded-full">
          <Link href="/docs/design-decisions">
            Major Design Decisions <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

