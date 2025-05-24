"use client"

import { motion } from "framer-motion"
import { Activity, ShieldCheck, BarChart3, Zap, RefreshCw } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Activity className="h-10 w-10 text-auxamate-pink" />,
      title: "Real-Time Tracking",
      description: "Stay updated with live data levels across multiple locations.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-auxamate-purple" />,
      title: "Automated Stock",
      description: "Never run out of resources—AI detects low levels and automates restocking.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-auxamate-purple" />,
      title: "AI Forecasting",
      description: "Predict future needs with intelligent analytics and insights.",
    },
    {
      icon: <Zap className="h-10 w-10 text-auxamate-pink" />,
      title: "Multi-Channel Sync",
      description: "Seamlessly integrate and sync across e-commerce, POS, and warehouses.",
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-auxamate-purple" />,
      title: "AI Assistance",
      description: "Get AI-driven recommendations on purchasing, pricing, and optimization.",
    },
  ]

  return (
    <section id="features" className="py-20 relative">
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
            Powerful AI <span className="gradient-text">Features</span>
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our cutting-edge AI technology provides intelligent solutions for your business needs
          </motion.p>
        </div>

        { <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div> }
        
        <div className="mt-16">
          <motion.div
            className="relative rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WmMgLj6ukrEr3HpfTyYHYHpZVoneCW.png"
              alt="AUXAMATE Features"
              className="w-full h-auto object-cover rounded-lg"
            /> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
