"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Cloud, AlertTriangle } from "lucide-react"

export function SecuritySection() {
  const securityFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Role-Based Control",
      description: "Limits data access to authorized users.",
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "AI Fraud Detection",
      description: "Stops suspicious transactions instantly.",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Secure Cloud",
      description: "Ensures safety with backups and compliance.",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "End-to-End Encryption",
      description: "Keeps data secure from unauthorized access.",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <motion.span
            className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-auxamate-pink/10 text-auxamate-pink"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Security
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Supremacy of <span className="gradient-text">Security</span>
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Advanced protection to keep your data, transactions, and business secure from threats and breaches.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-auxamate-pink/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <iframe
              src="https://my.spline.design/orbittriangle-F5Oil08CgXyjIsGIG6poptqO/"
              frameBorder="0"
              width="100%"
              height="100%"
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
