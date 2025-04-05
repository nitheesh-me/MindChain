"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  role: string
  avatar: string
  content: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Computer Science Student",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "MindChain has been a game-changer for my academic journey. I was struggling with a complex ML project, and within hours of submitting my query, I was connected with a professor who provided exactly the guidance I needed.",
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    role: "Faculty, Electronics Department",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "As a faculty member, MindChain helps me efficiently assist students with their queries. The platform's intelligent matching ensures I only receive questions relevant to my expertise, saving time for everyone involved.",
  },
  {
    id: 3,
    name: "Aditya Patel",
    role: "Research Scholar",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "The real-time chat feature is brilliant! I was able to discuss my research methodology with a senior professor who suggested critical improvements that significantly enhanced my work. Highly recommended!",
  },
  {
    id: 4,
    name: "Dr. Meera Iyer",
    role: "Faculty, Computer Science",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "MindChain streamlines academic support in a way that respects everyone's time. The incremental notification system ensures I'm not overwhelmed with queries, while still being able to help students when they need it most.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-foreground/70">
            Hear from students, faculty, and staff who have experienced the benefits of MindChain.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <Card className="rounded-2xl border shadow-lg overflow-hidden">
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          <div className="flex-shrink-0">
                            <Avatar className="h-20 w-20 border-4 border-primary/20">
                              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                              <AvatarFallback>{testimonial.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                          </div>

                          <div className="flex-1">
                            <Quote className="h-8 w-8 text-primary/30 mb-4" />
                            <p className="text-lg mb-6 italic">{testimonial.content}</p>
                            <div>
                              <h4 className="text-xl font-bold">{testimonial.name}</h4>
                              <p className="text-foreground/70">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-primary/30"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
