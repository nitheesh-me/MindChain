"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, Bell, MessageCircle, Database, UserCheck, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full card-hover rounded-2xl border shadow-lg">
        <CardContent className="p-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">{icon}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-foreground/70">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-foreground/70">
            MindChain combines intelligent matching, real-time communication, and contextual awareness to provide a
            seamless support experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Brain className="h-6 w-6 text-primary" />}
            title="Intelligent Query Matching"
            description="Our advanced algorithm matches your queries with the most relevant experts based on academic expertise and research interests."
            delay={0.1}
          />

          <FeatureCard
            icon={<Bell className="h-6 w-6 text-primary" />}
            title="Incremental Notifications"
            description="Smart notification system that minimizes disruption while ensuring your queries get the attention they need."
            delay={0.2}
          />

          <FeatureCard
            icon={<MessageCircle className="h-6 w-6 text-primary" />}
            title="Real-Time Chat Integration"
            description="Seamless communication with experts through an intuitive chat interface for immediate problem-solving."
            delay={0.3}
          />

          <FeatureCard
            icon={<Database className="h-6 w-6 text-primary" />}
            title="Institutional Knowledge"
            description="Leverages IIIT Hyderabad's data on courses, research, and events to provide contextually relevant support."
            delay={0.4}
          />

          <FeatureCard
            icon={<UserCheck className="h-6 w-6 text-primary" />}
            title="Expert Profiles"
            description="Detailed profiles of faculty and experienced students to help you find the right person for your specific needs."
            delay={0.5}
          />

          <FeatureCard
            icon={<Shield className="h-6 w-6 text-primary" />}
            title="Secure & Private"
            description="Your data and conversations are protected with enterprise-grade security and privacy controls."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  )
}
