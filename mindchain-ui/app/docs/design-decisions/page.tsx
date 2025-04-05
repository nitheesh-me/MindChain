import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function DesignDecisionsPage() {
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
        <h1 className="text-3xl font-bold mb-2">Major Design Decisions</h1>
        <p className="text-lg text-muted-foreground mb-4">
          Architecture Decision Records (ADRs) documenting significant design
          decisions for the MindChain platform.
        </p>
        <Separator className="my-4" />
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Architecture Decision Records (ADRs)
          </h2>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl">What are ADRs?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Architecture Decision Records (ADRs) are documents that capture
                important architectural decisions made along with their context
                and consequences. They provide a record of architectural
                decisions and the rationale behind them, serving as valuable
                documentation for current and future team members.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">
                  Key Components of an ADR:
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Title:</span> A descriptive
                    title for the decision
                  </li>
                  <li>
                    <span className="font-medium">Status:</span> The current
                    status of the decision (proposed, accepted, deprecated,
                    etc.)
                  </li>
                  <li>
                    <span className="font-medium">Context:</span> The background
                    and situation that led to the need for a decision
                  </li>
                  <li>
                    <span className="font-medium">Decision:</span> The specific
                    architectural decision that was made
                  </li>
                  <li>
                    <span className="font-medium">Consequences:</span> The
                    resulting effects of the decision, both positive and
                    negative
                  </li>
                  <li>
                    <span className="font-medium">Alternatives:</span> Other
                    options that were considered and why they were rejected
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            MindChain Architecture Decisions
          </h2>

          <Tabs defaultValue="adr1" className="w-full">
            <TabsList className="grid w-full grid-cols-4 rounded-xl">
              <TabsTrigger value="adr1">ADR 1</TabsTrigger>
              <TabsTrigger value="adr2">ADR 2</TabsTrigger>
              <TabsTrigger value="adr3">ADR 3</TabsTrigger>
              <TabsTrigger value="adr4">ADR 4</TabsTrigger>
            </TabsList>

            <TabsContent value="adr1" className="mt-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>
                      ADR 1: Microservices Architecture for MindChain
                    </CardTitle>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      Accepted
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Context</h3>
                    <p>
                      MindChain requires a scalable, maintainable architecture
                      that can support multiple distinct functionalities (user
                      management, query matching, real-time communication, etc.)
                      while allowing for independent development, deployment,
                      and scaling of different components. The system needs to
                      handle varying loads across different features and must be
                      able to evolve over time as new requirements emerge.
                    </p>
                    <p className="mt-2">
                      We need to decide on the overall architectural style for
                      the MindChain platform, considering factors such as
                      scalability, maintainability, development efficiency, and
                      deployment flexibility.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Decision</h3>
                    <p>
                      We will adopt a microservices architecture for the
                      MindChain platform, with the following key
                      characteristics:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>
                        The system will be decomposed into seven core
                        microservices aligned with the identified subsystems:
                        User Management, Query Management, Expert Matching,
                        Communication, Notification, Analytics, and Integration.
                      </li>
                      <li>
                        Each microservice will have its own database, following
                        the database-per-service pattern to ensure loose
                        coupling.
                      </li>
                      <li>
                        Services will communicate primarily through asynchronous
                        messaging using a message broker (RabbitMQ) for
                        event-driven interactions.
                      </li>
                      <li>
                        RESTful APIs will be used for synchronous
                        service-to-service communication when necessary.
                      </li>
                      <li>
                        An API Gateway will be implemented to provide a unified
                        entry point for client applications.
                      </li>
                      <li>
                        Services will be containerized using Docker and
                        orchestrated with Kubernetes for deployment and scaling.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Consequences</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Positive:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Independent scalability of services based on demand
                            (e.g., the Communication service can scale during
                            peak usage times)
                          </li>
                          <li>
                            Technology flexibility allowing different services
                            to use the most appropriate tech stack
                          </li>
                          <li>
                            Enhanced fault isolation preventing failures in one
                            service from cascading to others
                          </li>
                          <li>
                            Parallel development enabling multiple teams to work
                            on different services simultaneously
                          </li>
                          <li>
                            Easier maintenance and updates with the ability to
                            deploy changes to individual services
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium">Negative:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Increased operational complexity in deployment,
                            monitoring, and management
                          </li>
                          <li>
                            Potential performance overhead due to network
                            communication between services
                          </li>
                          <li>
                            Challenges in maintaining data consistency across
                            service boundaries
                          </li>
                          <li>More complex testing and debugging processes</li>
                          <li>
                            Higher initial development cost compared to a
                            monolithic approach
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Alternatives Considered
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">
                          Monolithic Architecture:
                        </h4>
                        <p className="mt-1">
                          A single, unified codebase containing all
                          functionality would be simpler to develop initially
                          and would avoid the complexity of service
                          communication. However, it was rejected due to
                          concerns about scalability, long-term maintainability,
                          and the ability to evolve different parts of the
                          system independently.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Modular Monolith:</h4>
                        <p className="mt-1">
                          A compromise approach with a single deployment unit
                          but clear internal module boundaries was considered.
                          While this would reduce operational complexity, it
                          would still limit independent scaling and technology
                          choices, which are important for the diverse
                          requirements of MindChain&apos;s subsystems.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Serverless Architecture:
                        </h4>
                        <p className="mt-1">
                          A fully serverless approach using
                          functions-as-a-service was evaluated for its scaling
                          benefits and reduced operational overhead. However, it
                          was deemed less suitable for the stateful,
                          long-running processes required by the real-time
                          communication and matching features of MindChain.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="adr2" className="mt-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>
                      ADR 2: Real-time Communication Implementation
                    </CardTitle>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      Accepted
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Context</h3>
                    <p>
                      MindChain requires robust real-time communication
                      capabilities for its chat interface and notification
                      system. The platform needs to support persistent
                      conversations between users and experts, real-time status
                      updates, and immediate delivery of notifications. The
                      solution must be scalable to handle thousands of
                      concurrent users while maintaining low latency.
                    </p>
                    <p className="mt-2">
                      We need to decide on the technology and approach for
                      implementing real-time communication features in
                      MindChain, considering factors such as performance,
                      reliability, scalability, and developer experience.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Decision</h3>
                    <p>
                      We will implement real-time communication using WebSockets
                      as the primary protocol, with Socket.IO as the
                      implementation library, supported by a Redis-based message
                      broker for scaling. Specifically:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>
                        Socket.IO will be used on both client and server sides
                        to provide WebSocket communication with automatic
                        fallback to HTTP long-polling when WebSockets are not
                        available.
                      </li>
                      <li>
                        A Redis pub/sub system will be implemented to enable
                        horizontal scaling of the WebSocket servers.
                      </li>
                      <li>
                        Messages will be persisted in a MongoDB database for
                        message history and offline delivery.
                      </li>
                      <li>
                        The system will implement room-based communication for
                        chat sessions and user-specific channels for
                        notifications.
                      </li>
                      <li>
                        A presence system will track online/offline status and
                        typing indicators.
                      </li>
                      <li>
                        Message delivery acknowledgments and read receipts will
                        be implemented to ensure reliability.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Consequences</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Positive:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Low-latency, bidirectional communication enabling
                            true real-time interactions
                          </li>
                          <li>
                            Reliable message delivery with acknowledgment
                            mechanisms
                          </li>
                          <li>
                            Scalable architecture that can handle thousands of
                            concurrent connections
                          </li>
                          <li>
                            Graceful degradation to HTTP long-polling when
                            WebSockets are not supported
                          </li>
                          <li>
                            Comprehensive feature set including presence
                            detection and typing indicators
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium">Negative:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Increased server resource usage compared to
                            request-response patterns
                          </li>
                          <li>
                            Additional complexity in deployment and scaling
                            WebSocket servers
                          </li>
                          <li>
                            Potential challenges with load balancers and proxies
                            that aren&apos;t configured for WebSockets
                          </li>
                          <li>
                            Need for careful connection management to prevent
                            resource leaks
                          </li>
                          <li>
                            Increased complexity in handling
                            offline/reconnection scenarios
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Alternatives Considered
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">HTTP Polling:</h4>
                        <p className="mt-1">
                          Regular HTTP requests to check for updates would be
                          simpler to implement but would create unnecessary
                          server load and wouldn&apos;t provide true real-time
                          capabilities. This approach was rejected due to
                          performance concerns and poor user experience.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Server-Sent Events (SSE):
                        </h4>
                        <p className="mt-1">
                          SSE would provide real-time updates from server to
                          client but lacks the bidirectional communication
                          needed for chat features. It was considered for
                          notifications only but rejected in favor of a unified
                          approach for all real-time features.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">GraphQL Subscriptions:</h4>
                        <p className="mt-1">
                          Using GraphQL subscriptions would integrate well with
                          a GraphQL API but would add complexity if the rest of
                          the API uses REST. This approach was considered but
                          deemed less mature and potentially more complex than
                          Socket.IO for our specific requirements.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">MQTT:</h4>
                        <p className="mt-1">
                          A lightweight publish-subscribe protocol designed for
                          IoT would be efficient but would require additional
                          client-side libraries and might be less suitable for
                          web applications. It was rejected as being optimized
                          for different use cases than ours.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="adr3" className="mt-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>
                      ADR 3: Expert Matching Algorithm Approach
                    </CardTitle>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      Accepted
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Context</h3>
                    <p>
                      The core value proposition of MindChain is its ability to
                      match queries to the most relevant experts based on
                      expertise, research interests, and availability. The
                      matching algorithm needs to be accurate, efficient, and
                      adaptable to different types of queries and expertise
                      domains. It must also consider factors such as expert
                      workload, availability, and past performance.
                    </p>
                    <p className="mt-2">
                      We need to decide on the approach and technology for
                      implementing the expert matching algorithm, considering
                      factors such as accuracy, performance, explainability, and
                      adaptability.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Decision</h3>
                    <p>
                      We will implement a hybrid matching algorithm that
                      combines vector embeddings for semantic matching with a
                      rule-based scoring system for contextual factors.
                      Specifically:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>
                        Query and expertise descriptions will be converted to
                        vector embeddings using a pre-trained language model
                        (BERT or similar) to capture semantic meaning.
                      </li>
                      <li>
                        Cosine similarity between query vectors and expert
                        expertise vectors will form the base matching score.
                      </li>
                      <li>
                        Additional rule-based factors will be applied to adjust
                        the base score, including:
                        <ul className="list-disc pl-5 mt-1">
                          <li>Expert availability and current workload</li>
                          <li>Historical response rate and quality</li>
                          <li>Specific keyword matching for technical terms</li>
                          <li>Departmental and course affiliations</li>
                        </ul>
                      </li>
                      <li>
                        The system will use a weighted scoring model that can be
                        tuned based on feedback and performance data.
                      </li>
                      <li>
                        Match explanations will be generated to show why a
                        particular expert was matched to a query.
                      </li>
                      <li>
                        The algorithm will be implemented as a separate
                        microservice with its own scaling capabilities.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Consequences</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Positive:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            High-quality semantic matching that understands the
                            meaning behind queries
                          </li>
                          <li>
                            Flexibility to incorporate multiple factors beyond
                            text similarity
                          </li>
                          <li>
                            Explainable results that can show why a match was
                            made
                          </li>
                          <li>
                            Ability to improve over time through feedback and
                            performance data
                          </li>
                          <li>
                            Scalable architecture that can handle complex
                            matching operations
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium">Negative:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Higher computational requirements for generating and
                            comparing vector embeddings
                          </li>
                          <li>
                            Complexity in tuning the weights for different
                            factors
                          </li>
                          <li>
                            Need for significant training data to optimize the
                            algorithm
                          </li>
                          <li>
                            Potential cold-start issues for new experts with
                            limited history
                          </li>
                          <li>
                            Challenges in maintaining the balance between
                            semantic and rule-based factors
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Alternatives Considered
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Keyword-Based Matching:</h4>
                        <p className="mt-1">
                          A simpler approach using keyword extraction and
                          matching would be less computationally intensive but
                          would miss semantic relationships and synonyms. This
                          approach was rejected due to its limited understanding
                          of natural language queries.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Pure Machine Learning Model:
                        </h4>
                        <p className="mt-1">
                          A fully ML-based approach using a trained classifier
                          could potentially provide high accuracy but would
                          require extensive training data and would be less
                          explainable. This approach was rejected due to the
                          initial lack of training data and the need for
                          explainability.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Graph-Based Matching:</h4>
                        <p className="mt-1">
                          Using a knowledge graph to represent expertise and
                          queries would capture complex relationships but would
                          be more complex to implement and maintain. This
                          approach was considered promising for future
                          iterations but too complex for the initial
                          implementation.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Manual Assignment:</h4>
                        <p className="mt-1">
                          Having department coordinators manually assign queries
                          would ensure human judgment but wouldn&apos;t scale
                          and would introduce delays. This approach was rejected
                          as it wouldn&apos;t fulfill the real-time matching
                          requirement.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="adr4" className="mt-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>ADR 4: Data Storage Strategy</CardTitle>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      Accepted
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Context</h3>
                    <p>
                      MindChain needs to store and manage various types of data,
                      including user profiles, queries, chat messages,
                      notifications, and analytics. Different data types have
                      different access patterns, consistency requirements, and
                      scaling needs. The data storage strategy must support the
                      microservices architecture while ensuring data integrity,
                      performance, and scalability.
                    </p>
                    <p className="mt-2">
                      We need to decide on the data storage technologies and
                      patterns for MindChain, considering factors such as data
                      model complexity, query patterns, consistency
                      requirements, and scaling needs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Decision</h3>
                    <p>
                      We will adopt a polyglot persistence approach, using
                      different database technologies for different services
                      based on their specific data requirements. Specifically:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>
                        User Management Service: PostgreSQL for structured user
                        profile data with complex relationships and strong
                        consistency requirements.
                      </li>
                      <li>
                        Query Management Service: PostgreSQL for structured
                        query data with transaction support and complex querying
                        needs.
                      </li>
                      <li>
                        Expert Matching Service: Elasticsearch for efficient
                        vector similarity searches and full-text query
                        capabilities.
                      </li>
                      <li>
                        Communication Service: MongoDB for flexible schema chat
                        messages with high write throughput and
                        document-oriented structure.
                      </li>
                      <li>
                        Notification Service: Redis for high-performance,
                        in-memory notification storage with time-to-live
                        support.
                      </li>
                      <li>
                        Analytics Service: ClickHouse for columnar storage
                        optimized for analytical queries and time-series data.
                      </li>
                      <li>
                        Integration Service: Redis for caching and temporary
                        storage of integration data.
                      </li>
                    </ul>
                    <p className="mt-2">
                      Each service will own its database, with no direct
                      database access from other services. Cross-service data
                      access will be handled through service APIs or
                      event-driven communication.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Consequences</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Positive:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Optimized data storage for different access patterns
                            and requirements
                          </li>
                          <li>
                            Independent scaling of databases based on service
                            needs
                          </li>
                          <li>
                            Improved performance through specialized database
                            technologies
                          </li>
                          <li>
                            Enhanced resilience with isolated database failures
                          </li>
                          <li>
                            Flexibility to evolve data models independently for
                            each service
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium">Negative:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>
                            Increased operational complexity in managing
                            multiple database technologies
                          </li>
                          <li>
                            Challenges in maintaining data consistency across
                            different databases
                          </li>
                          <li>
                            Need for specialized knowledge across different
                            database systems
                          </li>
                          <li>
                            More complex backup, monitoring, and disaster
                            recovery processes
                          </li>
                          <li>
                            Potential for data duplication across services
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Alternatives Considered
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">
                          Single Relational Database:
                        </h4>
                        <p className="mt-1">
                          Using a single PostgreSQL database for all services
                          would simplify operations and ensure strong
                          consistency but would create tight coupling between
                          services and limit scalability. This approach was
                          rejected due to its conflict with microservices
                          principles and scaling limitations.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Single NoSQL Database:</h4>
                        <p className="mt-1">
                          Using a single MongoDB or similar NoSQL database for
                          all services would provide schema flexibility but
                          would not be optimized for all access patterns and
                          would still create coupling. This approach was
                          rejected as it wouldn&apos;t provide the specialized
                          capabilities needed for different data types.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Database-per-Service with Same Technology:
                        </h4>
                        <p className="mt-1">
                          Using the same database technology (e.g., PostgreSQL)
                          for all services but with separate instances would
                          reduce operational complexity but wouldn&apos;t
                          optimize for different data requirements. This
                          approach was considered but rejected in favor of more
                          specialized optimization.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Shared Database with Schema-per-Service:
                        </h4>
                        <p className="mt-1">
                          Using a single database instance with separate schemas
                          for each service would reduce infrastructure costs but
                          would create potential coupling and scaling issues.
                          This approach was rejected as it wouldn&apos;t provide
                          true isolation between services.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </div>

      <div className="flex justify-between items-center pt-4">
        <Button variant="outline" asChild className="rounded-full">
          <Link href="/docs/stakeholders">
            <ArrowLeft className="mr-2 h-4 w-4" /> Stakeholder Identification
          </Link>
        </Button>
        <Button asChild className="rounded-full">
          <Link href="/docs/tactics">
            Architectural Tactics <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
