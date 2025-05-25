"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { Bot, Zap, Settings, Building } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "AI Voice & Chat Agents",
      icon: <Bot className="h-10 w-10" />,
      description: "Custom AI agents for all business calls and chats, handling sales, support, and bookings 24/7",
      colors: [
        [236, 72, 153],
        [232, 121, 249],
      ],
    },
    {
      title: "Smart Automations",
      icon: <Zap className="h-10 w-10" />,
      description: "Remove repetitive manual work with intelligent automations that save time and reduce errors",
      colors: [
        [168, 85, 247],
        [236, 72, 103],
      ],
    },
    {
      title: "CRM & Software Integration",
      icon: <Settings className="h-10 w-10" />,
      description: "Seamless integrations with your existing CRM and software for smooth workflows",
      colors: [
        [6, 182, 212],
        [168, 85, 247],
      ],
    },
    {
      title: "Industry Solutions",
      icon: <Building className="h-10 w-10" />,
      description: "Tailored AI solutions designed specifically for your industry and business requirements",
      colors: [
        [59, 130, 246],
        [6, 182, 212],
      ],
    },
  ]

  return (
    <section id="services" className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive AI solutions designed to transform your business operations and boost productivity
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              colors={service.colors}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  title,
  icon,
  description,
  colors,
  index,
}: {
  title: string
  icon: React.ReactNode
  description: string
  colors: number[][]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="border border-border/50 group/canvas-card flex items-center justify-center h-[24rem] relative overflow-hidden">
        <div className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black">+</div>
        <div className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black">+</div>
        <div className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black">+</div>
        <div className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black">+</div>

        <div className="h-full w-full absolute inset-0 opacity-0 group-hover/canvas-card:opacity-100 transition-opacity duration-300">
          <CanvasRevealEffect animationSpeed={3} containerClassName="bg-black" colors={colors} dotSize={2} />
        </div>

        <div className="relative z-20 p-6 text-center">
          <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
            {icon}
          </div>
          <h3 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {title}
          </h3>
          <p className="mt-2 text-muted-foreground opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:text-white transition duration-200 text-sm">
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  )
}
