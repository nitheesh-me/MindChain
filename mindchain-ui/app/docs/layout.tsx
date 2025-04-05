import type React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/header";
import Link from "next/link";
import {
  Book,
  FileText,
  Layers,
  List,
  Settings,
  FileCode,
  GitPullRequest,
  BarChart,
} from "lucide-react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <SidebarProvider>
        <div className="flex">
          <Sidebar className="pt-16">
            <SidebarHeader className="p-4">
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-bold">MindChain Docs</h2>
              </div>
              <Separator className="my-2" />
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>
                  Task 1: Requirements & Subsystems
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/docs/requirements/functional">
                          <FileText className="h-4 w-4 mr-2" />
                          Functional Requirements
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/docs/requirements/non-functional">
                          <FileText className="h-4 w-4 mr-2" />
                          Non-functional Requirements
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/docs/subsystems">
                          <Layers className="h-4 w-4 mr-2" />
                          Subsystem Overview
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarGroup>
                <SidebarGroupLabel>
                  Task 2: Architecture Framework
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/docs/stakeholders">
                          <List className="h-4 w-4 mr-2" />
                          Stakeholder Identification
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/docs/design-decisions">
                          <Settings className="h-4 w-4 mr-2" />
                          Major Design Decisions
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarGroup>
                <SidebarGroupLabel>
                  Task 3: Tactics & Patterns
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/docs/tactics">
                          <GitPullRequest className="h-4 w-4 mr-2" />
                          Architectural Tactics
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/docs/patterns">
                          <FileCode className="h-4 w-4 mr-2" />
                          Implementation Patterns
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarGroup>
                <SidebarGroupLabel>
                  Task 4: Implementation & Analysis
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/docs/prototype">
                          <FileCode className="h-4 w-4 mr-2" />
                          Prototype Development
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/docs/analysis">
                          <BarChart className="h-4 w-4 mr-2" />
                          Architecture Analysis
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <div className="flex-1 pt-16 px-4 md:px-8 py-8 max-w-5xl mx-auto">
            {children}
          </div>
        </div>
      </SidebarProvider>
    </main>
  );
}
