"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export function LandingHeader() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-background rounded-full border-2 border-primary"></div>
            </div>
            <span className="text-xl font-bold font-inter">MindChain</span>
          </Link>

          {(!isMobile || isMenuOpen) && (
            <nav
              className={`${
                isMobile
                  ? "absolute top-16 left-0 w-full bg-background/95 backdrop-blur-md shadow-md p-4 border-b"
                  : "flex items-center gap-8"
              }`}
            >
              <ul className={`${isMobile ? "flex flex-col gap-4" : "flex items-center gap-8"}`}>
                <li>
                  <Link
                    href="#features"
                    className="text-foreground/80 hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="text-foreground/80 hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-foreground/80 hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </nav>
          )}

          <div className="flex items-center gap-4">
            <ModeToggle />

            <div className="hidden md:block">
              <Button asChild variant="default" size="sm" className="rounded-full">
                <Link href="/me">Get Started</Link>
              </Button>
            </div>

            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
