"use client"

import { motion } from "framer-motion"
import {
  ShoppingCart,
  Home,
  Heart,
  Shield,
  Gamepad2,
  UtensilsCrossed,
  Phone,
  GraduationCap,
  DollarSign,
  Factory,
  Truck,
  Store,
  Briefcase,
  Building,
} from "lucide-react"

export function IndustriesSection() {
  const industries = [
    { name: "E-commerce", icon: <ShoppingCart className="h-6 w-6" /> },
    { name: "Real Estate", icon: <Home className="h-6 w-6" /> },
    { name: "Healthcare", icon: <Heart className="h-6 w-6" /> },
    { name: "Security Services", icon: <Shield className="h-6 w-6" /> },
    { name: "Gaming", icon: <Gamepad2 className="h-6 w-6" /> },
    { name: "Restaurants", icon: <UtensilsCrossed className="h-6 w-6" /> },
    { name: "Call Centers", icon: <Phone className="h-6 w-6" /> },
    { name: "Education", icon: <GraduationCap className="h-6 w-6" /> },
    { name: "Financial Services", icon: <DollarSign className="h-6 w-6" /> },
    { name: "Manufacturing", icon: <Factory className="h-6 w-6" /> },
    { name: "Logistics", icon: <Truck className="h-6 w-6" /> },
    { name: "Retail", icon: <Store className="h-6 w-6" /> },
    { name: "Professional Services", icon: <Briefcase className="h-6 w-6" /> },
    { name: "And Many More", icon: <Building className="h-6 w-6" /> },
  ]

  return (
    <section id="industries" className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Industries We <span className="gradient-text">have Served</span>
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            From healthcare to e-commerce, we provide AI solutions for businesses across all industries
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-auxamate-pink/50 transition-all duration-300 hover:scale-105 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-auxamate-pink/10 mb-3 text-auxamate-pink group-hover:bg-auxamate-pink group-hover:text-white transition-colors duration-300">
                {industry.icon}
              </div>
              <span className="text-sm font-medium text-center">{industry.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-muted-foreground">
            And many other businesses that need AI voice/chat agents and automations to streamline their operations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
