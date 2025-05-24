"use client"

import type React from "react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Linkedin, Instagram, Send } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSocialClick = (platform: string) => {
    const urls = {
      twitter: "https://twitter.com/auxamate",
      github: "https://github.com/auxamate",
      linkedin: "https://linkedin.com/company/auxamate",
      instagram: "https://instagram.com/auxamate",
    }
    window.open(urls[platform as keyof typeof urls], "_blank")
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for subscribing! We'll keep you updated with the latest AI innovations.")
  }

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
              <Logo />
              <span className="text-xl font-bold">AUXAMATE</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Advanced AI agents, tools, and services for modern businesses.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => handleSocialClick("twitter")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </button>
              <button
                onClick={() => handleSocialClick("github")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </button>
              <button
                onClick={() => handleSocialClick("linkedin")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </button>
              <button
                onClick={() => handleSocialClick("instagram")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI Agents
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI Tools
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Custom AI Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI Consulting
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert("Blog coming soon! Stay tuned for AI insights and updates.")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Subscribe</h3>
            <p className="text-sm text-muted-foreground mb-4">Stay updated with the latest AI innovations and news.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input placeholder="Enter your email" className="max-w-[220px]" type="email" required />
              <Button
                type="submit"
                size="icon"
                className="bg-gradient-to-r from-auxamate-pink to-auxamate-blue hover:opacity-90"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} AUXAMATE. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <button
              onClick={() =>
                alert(
                  "Privacy Policy: We respect your privacy and protect your data with industry-standard security measures.",
                )
              }
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => alert("Terms of Service: By using our services, you agree to our terms and conditions.")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={() =>
                alert("Cookie Policy: We use cookies to enhance your browsing experience and analyze site traffic.")
              }
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
