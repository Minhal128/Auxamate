"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export function IntegrationsSection() {
  const integrations = [
    {
      title: "Unicommerce Integration",
      description:
        "Streamline your e-commerce workflow by connecting directly with Unicommerce. Automate inventory, orders, and catalog management with ease.",
    },
    {
      title: "Logistics Partner Integration",
      description:
        "Track deliveries and optimize shipping with real-time integrations to your logistics partners, ensuring faster and more reliable fulfillment.",
    },
    {
      title: "Customer Care Tools Integration",
      description:
        "Empower your support team with unified communication by integrating leading customer care platforms. Deliver faster, smarter assistance.",
    },
    {
      title: "Accounting & Finance Integration",
      description:
        "Automate financial reporting and sync data in real-time by connecting with top accounting software. Stay compliant and audit-ready effortlessly.",
    },
  ]

  const integrationTypes = [
    {
      title: "AI Chatbot & CRM",
      description: "Connect with AI chatbots to improve engagement.",
      icon: "🤖",
    },
    {
      title: "ERP System Integration",
      description: "Sync inventory with enterprise resource (ERP) systems.",
      icon: "🔄",
    },
    {
      title: "Supplier & Procurement",
      description: "Seamlessly connect with for automated restocking.",
      icon: "📦",
    },
    {
      title: "POS Integration",
      description: "Sync inventory with POS for real-time updates.",
      icon: "💳",
    },
  ]

  return (
    <section id="integrations" className="py-20 relative">
      <div className="absolute inset-0 gradient-bg -z-10" />
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-auxamate-pink/10 text-auxamate-pink mb-4">
                Integration
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
                Seamless <span className="gradient-text">Integrations</span>
              </h2>
              <p className="text-muted-foreground">
                Supercharge your operations with effortless integrations across essential platforms.
              </p>
            </motion.div>

            <div className="space-y-4">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <Check className="h-5 w-5 text-auxamate-pink mt-0.5" />
                  <div>
                    <h3 className="font-medium">{integration.title}</h3>
                    <p className="text-sm text-muted-foreground">{integration.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <iframe
                src="https://my.spline.design/aichip-F6nSJT5nengZpCdRbSTJU0jQ/"
                frameBorder="0"
                width="100%"
                height="100%"
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrationTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-auxamate-pink/10">
                <span className="text-2xl">{type.icon}</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{type.title}</h3>
              <p className="text-sm text-muted-foreground">{type.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
