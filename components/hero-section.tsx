"use client"

import { Button } from "@/components/ui/button"
import { PointerHighlight } from "@/components/ui/pointer-highlight"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handlePhoneCall = () => {
    window.open("tel:+15551234567", "_self")
  }

  return (
    <section id="hero" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-bg -z-10" />

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex flex-col items-center gap-2 mb-4">
              {/* AUXAMATE Logo */}
              <div className="relative">
                <Image
                  src="logo.png"
                  alt="AUXAMATE Logo"
                  width={200}
                  height={50}
                  className="object-contain"
                  priority
                />
              </div>
              {/* Tagline */}
              <Badge variant="outline" className="border-auxamate-pink/30 bg-background/50 backdrop-blur-sm">
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  AUXAMATE – AI Simplified
                </span>
              </Badge>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Smart <span className="gradient-text">AI Agents</span> <br />& Automations
          </motion.h1>

          <motion.div
            className="max-w-[800px] text-muted-foreground md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We create{" "}
            <PointerHighlight
              rectangleClassName="bg-auxamate-pink/10 dark:bg-auxamate-pink/20 border-auxamate-pink/30"
              pointerClassName="text-auxamate-pink"
            >
              <span className="relative z-10">smart AI voice & chat agents</span>
            </PointerHighlight>{" "}
            and automations to help your business save time and money by eliminating repetitive manual work.
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-6 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-auxamate-pink to-auxamate-purple hover:opacity-90"
              onClick={handlePhoneCall}
            >
              <Phone className="mr-2 h-4 w-4" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToContact}>
              <MessageCircle className="mr-2 h-4 w-4" />
              Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        <div className="relative mt-16 md:mt-24 flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            className="relative w-full md:w-1/2 h-[400px] md:h-[600px]"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="w-full h-full rounded-lg overflow-hidden bg-transparent">
              <iframe
                src="https://my.spline.design/greetingrobot-uDuGzxjCJu6R54sYQBThRRfb/"
                frameBorder="0"
                width="100%"
                height="100%"
                className="rounded-lg"
                style={{
                  background: "transparent",
                  backgroundColor: "transparent",
                  border: "none",
                }}
                allow="autoplay; camera; microphone; fullscreen"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-auxamate-purple/20 rounded-full blur-xl" />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 text-center md:text-left px-4 md:px-6"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 gradient-text">
              AI That Works For You
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg mx-auto md:mx-0 mb-6">
              Our custom AI agents handle sales calls, customer support, bookings, and more. Let your team focus on what
              matters most while AI handles the routine tasks.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-auxamate-pink animate-pulse" />
                <span>24/7 AI Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-auxamate-purple animate-pulse" />
                <span>Custom Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-auxamate-cyan animate-pulse" />
                <span>Easy Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-auxamate-pink animate-pulse" />
                <span>Cost Effective</span>
              </div>
            </div>
          </motion.div>

          <div className="absolute -top-6 -right-6 w-24 h-24 bg-auxamate-pink/20 rounded-full blur-xl" />
        </div>
      </div>
    </section>
  )
}
