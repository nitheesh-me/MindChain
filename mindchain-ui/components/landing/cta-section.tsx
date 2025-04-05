"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>

          <div className="relative z-10 p-12 md:p-16 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started with MindChain?</h2>
                <p className="text-white/80 mb-8">
                  Join the IIIT Hyderabad community in revolutionizing how we connect, learn, and solve problems
                  together.
                </p>

                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-full bg-white text-primary hover:bg-white/90"
                >
                  <Link href="/me">
                    Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="hidden md:block">
                <div className="relative mx-auto w-full max-w-sm">
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl -z-10 transform rotate-6"></div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-white font-bold">?</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold">Have a Question?</h4>
                          <p className="text-white/80 text-sm">Get matched with experts</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-white font-bold">!</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold">Share Your Expertise</h4>
                          <p className="text-white/80 text-sm">Help others with your knowledge</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-white font-bold">+</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold">Build Connections</h4>
                          <p className="text-white/80 text-sm">Grow your academic network</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
        </motion.div>
      </div>
    </section>
  )
}
