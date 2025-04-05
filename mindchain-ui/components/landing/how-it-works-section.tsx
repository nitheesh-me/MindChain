"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, Users, Bell, MessageCircle, CheckCircle } from "lucide-react"

interface StepProps {
  number: number
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function Step({ number, icon, title, description, delay }: StepProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: number % 2 === 0 ? 50 : -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: number % 2 === 0 ? 50 : -50 }}
      transition={{ duration: 0.6, delay }}
      className="flex items-start gap-6"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
        {number}
      </div>

      <div>
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </div>
    </motion.div>
  )
}

export function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How MindChain Works</h2>
          <p className="text-lg text-foreground/70">
            Our platform simplifies the process of finding and connecting with the right experts at IIIT Hyderabad.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-16">
          <Step
            number={1}
            icon={<Search className="h-6 w-6 text-primary" />}
            title="Submit Your Query"
            description="Describe your question or problem through our web interface or browser extension. Add details about the category and urgency."
            delay={0.1}
          />

          <Step
            number={2}
            icon={<Users className="h-6 w-6 text-primary" />}
            title="AI-Powered Matching"
            description="Our intelligent algorithm analyzes your query and matches it with the most relevant experts based on their expertise, research interests, and availability."
            delay={0.2}
          />

          <Step
            number={3}
            icon={<Bell className="h-6 w-6 text-primary" />}
            title="Expert Notification"
            description="Selected experts receive incremental notifications about your query, ensuring that someone with the right knowledge will respond promptly."
            delay={0.3}
          />

          <Step
            number={4}
            icon={<MessageCircle className="h-6 w-6 text-primary" />}
            title="Real-Time Communication"
            description="Once an expert accepts your query, you'll be connected through our real-time chat interface for immediate assistance and problem-solving."
            delay={0.4}
          />

          <Step
            number={5}
            icon={<CheckCircle className="h-6 w-6 text-primary" />}
            title="Resolution & Feedback"
            description="After your query is resolved, you can provide feedback to help improve the system and build a knowledge base for future reference."
            delay={0.5}
          />
        </div>
      </div>
    </section>
  )
}
