"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Check, MessageCircle, Users } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [viewMode, setViewMode] = useState<"seeker" | "expert">("seeker")

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.color = `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.1})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particlesArray: Particle[] = []
    const numberOfParticles = Math.min(100, Math.floor((window.innerWidth * window.innerHeight) / 10000))

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      // Connect particles with lines
      connectParticles()

      requestAnimationFrame(animate)
    }

    // Connect particles with lines if they are close enough
    const connectParticles = () => {
      if (!ctx) return
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.strokeStyle = `rgba(100, 100, 255, ${0.2 - distance / 500})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  // Chat messages for both views
  const seekerMessages = [
    {
      id: 1,
      sender: "student",
      name: "Rahul",
      content: "I need help with my Machine Learning project. I'm having issues with model accuracy.",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "expert",
      name: "Dr. Sharma",
      content: "I'd be happy to help! Let's look at your dataset first. Are you using proper validation techniques?",
      time: "10:32 AM",
    },
    {
      id: 3,
      sender: "student",
      name: "Rahul",
      content: "I'm using k-fold cross-validation, but I think I might be overfitting.",
      time: "10:33 AM",
    },
  ]

  const expertMessages = [
    {
      id: 1,
      sender: "student",
      name: "Priya",
      content:
        "Hello Dr. Sharma, I'm working on a research paper about NLP and need some guidance on transformer models.",
      time: "9:45 AM",
    },
    {
      id: 2,
      sender: "expert",
      name: "Dr. Sharma",
      content: "Hi Priya, I'd be glad to help. What specific aspect of transformer models are you struggling with?",
      time: "9:47 AM",
    },
    {
      id: 3,
      sender: "student",
      name: "Priya",
      content: "I'm trying to understand attention mechanisms and how they improve performance over RNNs.",
      time: "9:48 AM",
    },
  ]

  const messages = viewMode === "seeker" ? seekerMessages : expertMessages

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10 opacity-40 dark:opacity-20"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              IIIT Hyderabad's Smart Support Platform
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Connect with the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                right experts
              </span>{" "}
              for your queries
            </h1>

            <p className="text-lg text-foreground/80 max-w-xl">
              MindChain is a context-aware communication platform that connects students, faculty, and staff at IIIT
              Hyderabad by matching queries to the most relevant experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/dashboard">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="#how-it-works">Learn More</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-background border shadow-sm">
                <Brain className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm font-medium">Intelligent Matching</p>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-background border shadow-sm">
                <MessageCircle className="h-8 w-8 text-secondary mb-2" />
                <p className="text-sm font-medium">Real-time Chat</p>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-background border shadow-sm">
                <Users className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm font-medium">Community Expertise</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2.5rem] blur-3xl -z-10 transform rotate-6"></div>
              <div className="bg-card rounded-[2rem] border shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-secondary p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white">
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      <span className="text-sm ml-2">MindChain Interface</span>
                    </div>
                    <div className="flex items-center bg-white/20 rounded-full p-1">
                      <button
                        onClick={() => setViewMode("seeker")}
                        className={`px-3 py-1 text-xs rounded-full transition-all ${viewMode === "seeker"
                            ? "bg-white text-primary font-medium"
                            : "text-white/80 hover:text-white"
                          }`}
                      >
                        Seeker View
                      </button>
                      <button
                        onClick={() => setViewMode("expert")}
                        className={`px-3 py-1 text-xs rounded-full transition-all ${viewMode === "expert"
                            ? "bg-white text-primary font-medium"
                            : "text-white/80 hover:text-white"
                          }`}
                      >
                        Expert View
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="bg-card p-4 h-[320px] overflow-y-scroll shadow-inset inset-shadow-sidebar-accent-foreground">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex items-start mb-4 ${message.sender === (viewMode === "seeker" ? "student" : "expert") ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[80%] rounded-lg p-3 border-2 ${message.sender === "student"
                                ? "bg-gradient-to-r from-primary/95 to-primary/70 text-primary-foreground rounded-tl-none dark:from-primary/70 dark:to-primary/50 dark:text-primary-foreground/80"
                                : "bg-gradient-to-r from-secondary/95 to-secondary/70 text-secondary-foreground rounded-tr-none dark:from-secondary/70 dark:to-secondary/50 dark:text-secondary-foreground/80"
                              }`}
                          >
                            <div className={`font-bold scale-x-100 text-ellipsis text-foreground  ${
                              message.sender === "student"
                                ? "bg-primary/50 dark:bg-primary/70"
                                : "bg-secondary/50 dark:bg-secondary/70"
                            } rounded-2xl pl-0.5 text-xs mb-1`}>{message.name}</div>
                            <p className="text-sm text-foreground">{message.content}</p>
                            <div className="text-right mt-1">
                              <span className="text-xs opacity-70">{message.time}</span>
                              {message.sender === (viewMode === "seeker" ? "student" : "expert") && (
                                <Check className="inline-block ml-1 h-3 w-3" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="mt-6 relative">
                    <input
                      type="text"
                      placeholder={viewMode === "seeker" ? "Type your question..." : "Type your response..."}
                      className="w-full p-3 pr-12 rounded-full border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
