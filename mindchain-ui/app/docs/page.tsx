import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Layers, Users, GitBranch, Cpu, BarChart3, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function DocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold mb-4">MindChain Documentation</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive documentation for the MindChain context-aware communication platform.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-muted/50 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Documentation Overview</h2>
        <p className="mb-6">
          This documentation portal provides comprehensive information on all aspects of the MindChain project,
          organized into four main tasks:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="#task1" className="flex items-center p-3 rounded-lg hover:bg-muted transition-colors">
            <div className="bg-primary/10 p-2 rounded-full mr-3">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Task 1: Requirements and Subsystems</h3>
              <p className="text-sm text-muted-foreground">
                Functional requirements, non-functional requirements, and subsystem overview
              </p>
            </div>
          </Link>
          <Link href="#task2" className="flex items-center p-3 rounded-lg hover:bg-muted transition-colors">
            <div className="bg-primary/10 p-2 rounded-full mr-3">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Task 2: Architecture Framework</h3>
              <p className="text-sm text-muted-foreground">
                Stakeholder identification and major design decisions (ADRs)
              </p>
            </div>
          </Link>
          <Link href="#task3" className="flex items-center p-3 rounded-lg hover:bg-muted transition-colors">
            <div className="bg-primary/10 p-2 rounded-full mr-3">
              <GitBranch className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Task 3: Architectural Tactics and Patterns</h3>
              <p className="text-sm text-muted-foreground">Architectural tactics and implementation patterns</p>
            </div>
          </Link>
          <Link href="#task4" className="flex items-center p-3 rounded-lg hover:bg-muted transition-colors">
            <div className="bg-primary/10 p-2 rounded-full mr-3">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Task 4: Prototype Implementation and Analysis</h3>
              <p className="text-sm text-muted-foreground">Prototype development and architecture analysis</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Task 1: Requirements and Subsystems */}
      <section id="task1" className="scroll-mt-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary/10 p-2 rounded-full">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Task 1: Requirements and Subsystems</h2>
        </div>
        <p className="text-lg mb-6">
          This section documents the specific functional and non-functional requirements of the MindChain system and
          provides an overview of its main subsystems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Requirements Documentation
              </CardTitle>
              <CardDescription>
                Detailed functional and non-functional requirements for the MindChain platform.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Explore the core requirements that drive the MindChain architecture.
              </p>
              <div className="flex gap-2">
                <Button asChild variant="outline" size="sm" className="rounded-full">
                  <Link href="/docs/requirements/functional">
                    Functional <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="rounded-full">
                  <Link href="/docs/requirements/non-functional">
                    Non-Functional <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-primary" />
                Subsystem Overview
              </CardTitle>
              <CardDescription>Breakdown of the main subsystems that make up the MindChain platform.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Understand how different components work together to create a cohesive system.
              </p>
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <Link href="/docs/subsystems">
                  View <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Task 2: Architecture Framework */}
      <section id="task2" className="scroll-mt-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary/10 p-2 rounded-full">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Task 2: Architecture Framework</h2>
        </div>
        <p className="text-lg mb-6">
          This section outlines the architectural framework of MindChain, including stakeholder identification following
          IEEE 42010 and major design decisions documented as Architecture Decision Records (ADRs).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Stakeholder Identification
              </CardTitle>
              <CardDescription>
                Comprehensive identification of stakeholders and their concerns following IEEE 42010.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Explore the stakeholders involved in the MindChain project and how their concerns are addressed.
              </p>
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <Link href="/docs/stakeholders">
                  View <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="h-5 w-5 text-primary" />
                Major Design Decisions
              </CardTitle>
              <CardDescription>
                Key architectural decisions documented as Architecture Decision Records (ADRs).
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Understand the rationale behind major architectural decisions and their implications.
              </p>
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <Link href="/docs/design-decisions">
                  View <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Task 3: Architectural Tactics and Patterns */}
      <section id="task3" className="scroll-mt-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary/10 p-2 rounded-full">
            <GitBranch className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Task 3: Architectural Tactics and Patterns</h2>
        </div>
        <p className="text-lg mb-6">
          This section details the architectural tactics employed to address quality attributes and the design patterns
          implemented in the MindChain system.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-primary" />
                Architectural Tactics
              </CardTitle>
              <CardDescription>Tactics implemented to address specific non-functional requirements.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Explore how architectural tactics are used to enhance performance, security, scalability, and
                maintainability.
              </p>
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <Link href="/docs/tactics">
                  View <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="h-5 w-5 text-primary" />
                Implementation Patterns
              </CardTitle>
              <CardDescription>Design patterns utilized in the system's implementation.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Understand the design patterns used and how they contribute to the overall architecture.
              </p>
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <Link href="/docs/patterns">
                  View <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Task 4: Prototype Implementation and Analysis */}
      <section id="task4" className="scroll-mt-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary/10 p-2 rounded-full">
            <BarChart3 className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Task 4: Prototype Implementation and Analysis</h2>
        </div>
        <p className="text-lg mb-6">
          This section covers the development of the MindChain prototype and provides a comparative analysis of the
          implemented architecture against alternatives.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-primary" />
                Prototype Development
              </CardTitle>
              <CardDescription>Details of the prototype development process and core functionality.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Learn about the development process, key workflows, and technologies used in the prototype.
              </p>
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <Link href="/docs/prototype">
                  View <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Architecture Analysis
              </CardTitle>
              <CardDescription>
                Comparative analysis of architectural approaches with quantitative data.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Explore the trade-offs between different architectural approaches and their performance implications.
              </p>
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <Link href="/docs/analysis">
                  View <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Access Section */}
      <div className="bg-muted p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Quick Access</h2>
        <p className="mb-4">Access all documentation sections from this comprehensive list:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <Button asChild variant="outline" className="justify-start">
            <Link href="/docs/requirements/functional">
              <FileText className="mr-2 h-4 w-4" /> Functional Requirements
            </Link>
          </Button>
          <Button asChild variant="outline" className="justify-start">
            <Link href="/docs/requirements/non-functional">
              <FileText className="mr-2 h-4 w-4" /> Non-Functional Requirements
            </Link>
          </Button>
          <Button asChild variant="outline" className="justify-start">
            <Link href="/docs/subsystems">
              <Layers className="mr-2 h-4 w-4" /> Subsystem Overview
            </Link>
          </Button>
          <Button asChild variant="outline" className="justify-start">
            <Link href="/docs/stakeholders">
              <Users className="mr-2 h-4 w-4" /> Stakeholder Identification
            </Link>
          </Button>
          <Button asChild variant="outline" className="justify-start">
            <Link href="/docs/design-decisions">
              <GitBranch className="mr-2 h-4 w-4" /> Design Decisions (ADRs)
            </Link>
          </Button>
          <Button asChild variant="outline" className="justify-start">
            <Link href="/docs/tactics">
              <Cpu className="mr-2 h-4 w-4" /> Architectural Tactics
            </Link>
          </Button>
          <Button asChild variant="outline" className="justify-start">
            <Link href="/docs/patterns">
              <GitBranch className="mr-2 h-4 w-4" /> Implementation Patterns
            </Link>
          </Button>
          <Button asChild variant="outline" className="justify-start">
            <Link href="/docs/prototype">
              <Cpu className="mr-2 h-4 w-4" /> Prototype Development
            </Link>
          </Button>
          <Button asChild variant="outline" className="justify-start">
            <Link href="/docs/analysis">
              <BarChart3 className="mr-2 h-4 w-4" /> Architecture Analysis
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

