"use client"

import { motion } from "framer-motion"
import { AIDashboardShowcase } from "@/components/ui/ai-dashboard-showcase"

export function DashboardShowcaseSection() {
  return (
    <section className="py-20 relative">
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
            Our <span className="gradient-text">AI Dashboard</span>
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Experience the power of our AI-driven analytics platform that transforms complex data into actionable
            insights
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <AIDashboardShowcase />
        </motion.div>
      </div>
    </section>
  )
}
