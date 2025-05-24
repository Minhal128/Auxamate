"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap } from "lucide-react"

export function PricingSection() {
  const features = [
    "Custom AI voice & chat agents",
    "Tailored automation solutions",
    "CRM & software integrations",
    "Industry-specific customization",
    "24/7 support & maintenance",
    "Scalable architecture",
    "Performance analytics",
    "Continuous optimization",
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="py-20 relative">
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
            Custom <span className="gradient-text">Pricing</span>
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We do NOT offer fixed monthly or yearly plans. Every client gets a custom price based on their unique
            requirements and solution complexity.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative rounded-2xl overflow-hidden border-2 border-auxamate-pink bg-card/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 bg-auxamate-pink text-white text-xs font-bold px-4 py-2 rounded-bl-lg flex items-center gap-1">
              <Star className="h-3 w-3" />
              Custom Solution
            </div>

            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Pay Only For What You Use</h3>
                <p className="text-muted-foreground">
                  Every solution is uniquely designed for your business needs and requirements
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-auxamate-pink" />
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Check className="h-5 w-5 text-auxamate-pink shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="text-center p-6 bg-auxamate-pink/10 rounded-lg border border-auxamate-pink/20">
                    <h4 className="text-xl font-bold mb-2">Custom Quote</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Based on your specific requirements, complexity, and business size
                    </p>
                    <div className="text-3xl font-bold gradient-text mb-4">Contact Us</div>
                    <p className="text-xs text-muted-foreground">Free consultation to understand your needs</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-auxamate-pink to-auxamate-purple hover:opacity-90"
                  onClick={scrollToContact}
                >
                  Get Your Custom Quote
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
