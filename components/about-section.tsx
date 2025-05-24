"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Target, Users } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Made Simple",
      description: "We make complex AI technology easy to understand and use for your business.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Automation Focus",
      description: "Remove repetitive manual work and let your team focus on high-value tasks.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Custom Solutions",
      description: "Every solution is tailored specifically to your business needs and workflows.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Empowerment",
      description: "Help your team become more productive by automating routine jobs.",
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 gradient-bg -z-10" />
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About <span className="gradient-text">AUXAMATE</span>
          </motion.h2>
          <motion.p
            className="max-w-[800px] text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            AUXAMATE makes AI easy and useful. We design custom AI agents and automations that help your business run
            smoothly and reduce manual work. Our goal is to help your team focus on important tasks by automating
            routine jobs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-auxamate-pink/50 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-auxamate-pink/10 mb-4 text-auxamate-pink">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
