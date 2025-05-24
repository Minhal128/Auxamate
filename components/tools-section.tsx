"use client"

import { motion } from "framer-motion"
import { HeroParallax } from "@/components/ui/hero-parallax"

export function ToolsSection() {
  const tools = [
    {
      title: "AI Text Generator",
      link: "#",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Image Recognition",
      link: "#",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Voice Assistant",
      link: "#",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Data Analysis",
      link: "#",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Sentiment Analysis",
      link: "#",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Code Generator",
      link: "#",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Chatbot Builder",
      link: "#",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Translation API",
      link: "#",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Document Parser",
      link: "#",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Speech Recognition",
      link: "#",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Recommendation Engine",
      link: "#",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Anomaly Detection",
      link: "#",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section id="tools" className="py-20 relative">
      <div className="container px-4 md:px-6 mb-12">
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            AI <span className="gradient-text">Tools</span> & Solutions
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our comprehensive suite of AI-powered tools
          </motion.p>
        </div>
      </div>

      <HeroParallax products={tools} />
    </section>
  )
}
