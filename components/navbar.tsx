"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { useMediaQuery } from "@/hooks/use-media-query"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  useEffect(() => {
    if (isDesktop) {
      setIsMenuOpen(false)
    }
  }, [isDesktop])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const handleConsultationClick = () => {
    scrollToSection("contact")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
          <Logo />
          <span className="text-xl font-bold">AUXAMATE</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("industries")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Industries
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button
            className="hidden md:flex bg-gradient-to-r from-auxamate-pink to-auxamate-purple hover:opacity-90"
            onClick={handleConsultationClick}
          >
            Get Free Consultation
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4 flex flex-col gap-4">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium hover:text-primary transition-colors text-left"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium hover:text-primary transition-colors text-left"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("industries")}
            className="text-sm font-medium hover:text-primary transition-colors text-left"
          >
            Industries
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-sm font-medium hover:text-primary transition-colors text-left"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium hover:text-primary transition-colors text-left"
          >
            Contact
          </button>
          <Button
            className="w-full bg-gradient-to-r from-auxamate-pink to-auxamate-purple hover:opacity-90"
            onClick={handleConsultationClick}
          >
            Get Free Consultation
          </Button>
        </div>
      )}
    </header>
  )
}
