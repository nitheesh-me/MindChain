"use client"

import { useState, useEffect } from "react"
import { LandingHeader } from "./landing-header"
import { HeroSection } from "./hero-section"
import { FeaturesSection } from "./features-section"
import { HowItWorksSection } from "./how-it-works-section"
import { TestimonialsSection } from "./testimonials-section"
import { CtaSection } from "./cta-section"
import { Footer } from "./footer"

export function LandingPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

