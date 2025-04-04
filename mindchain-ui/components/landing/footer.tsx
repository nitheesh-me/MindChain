import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-background rounded-full border-2 border-indigo-500"></div>
              </div>
              <span className="text-xl font-bold font-inter">MindChain</span>
            </Link>

            <p className="text-foreground/70 mb-4">A context-aware communication platform for IIIT Hyderabad.</p>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild aria-label="GitHub">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild aria-label="Twitter">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild aria-label="Email">
                <Link href="mailto:info@mindchain.iiit.ac.in">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="text-foreground/70 hover:text-indigo-500 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/queries" className="text-foreground/70 hover:text-indigo-500 transition-colors">
                  My Queries
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-foreground/70 hover:text-indigo-500 transition-colors">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/extension" className="text-foreground/70 hover:text-indigo-500 transition-colors">
                  Browser Extension
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-foreground/70 hover:text-indigo-500 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-indigo-500 transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-indigo-500 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-indigo-500 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-foreground/70 hover:text-indigo-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-indigo-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-indigo-500 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-indigo-500 transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-foreground/70">
            &copy; {new Date().getFullYear()} MindChain. All rights reserved. A project of IIIT Hyderabad.
          </p>
        </div>
      </div>
    </footer>
  )
}

