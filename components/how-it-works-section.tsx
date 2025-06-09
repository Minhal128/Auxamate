"use client"

import { motion } from "framer-motion"
import { MessageSquare, Lightbulb, Code, Rocket } from "lucide-react"
import React from "react"

export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Consultation",
      description: "We understand your business needs, challenges, and goals to create the perfect AI solution.",
      icon: <MessageSquare className="h-8 w-8" />,
      color: "from-auxamate-pink to-auxamate-purple",
    },
    {
      step: "02",
      title: "Design",
      description: "Create a custom AI and automation plan tailored specifically to your business requirements.",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "from-auxamate-purple to-auxamate-cyan",
    },
    {
      step: "03",
      title: "Build & Integrate",
      description: "Develop and seamlessly connect your AI agents and automations with existing systems.",
      icon: <Code className="h-8 w-8" />,
      color: "from-auxamate-cyan to-auxamate-pink",
    },
    {
      step: "04",
      title: "Deploy & Support",
      description: "Launch your solution and provide continuous support to ensure optimal performance.",
      icon: <Rocket className="h-8 w-8" />,
      color: "from-auxamate-pink to-auxamate-purple",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How It <span className="gradient-text">Works</span>
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our proven 4-step process ensures you get the perfect AI solution for your business
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-0 relative z-10">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                className="flex-1 flex flex-col items-center text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-auxamate-pink/50 transition-all duration-300 hover:scale-105 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r ${step.color} mb-4 text-white`}
                >
                  {step.icon}
                </div>
                <div className="text-3xl font-bold text-auxamate-pink mb-2">{step.step}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
              {/* Connector line, only between cards */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center h-full">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-auxamate-pink to-auxamate-purple" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
