"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Bot, Database, Settings } from "lucide-react"

export function PlatformsSection() {
  const platformCategories = [
    {
      title: "Automation Platforms",
      icon: <Zap className="h-6 w-6" />,
      description: "Creating powerful automation workflows",
      color: "from-auxamate-pink to-auxamate-purple",
      platforms: ["Zapier", "Make.com", "n8n", "Integromat", "Workato", "Automate.io", "Pabbly Connect","Many more"],
    },
    {
      title: "AI Voice & Chat Agent Platforms",
      icon: <Bot className="h-6 w-6" />,
      description: "Building natural-sounding AI voice agents and chatbots",
      color: "from-auxamate-purple to-auxamate-cyan",
      platforms: ["Retell", "Blend", "VAPI", "ManyChat", "CloseBot", "Dialogflow","Many more"],
    },
    {
      title: "CRM Platforms",
      icon: <Database className="h-6 w-6" />,
      description: "Seamless integration with AI and automation solutions",
      color: "from-auxamate-cyan to-auxamate-pink",
      platforms: ["GoHighLevel (GHL)", "Salesforce", "HubSpot", "Zoho", "Pipedrive", "Custom CRMs","Many more"],
    },
  ]

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
            Platforms We <span className="gradient-text">Use</span>
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            To build and deliver the best solutions, we use the following platforms categorized by their main purpose
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platformCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-auxamate-pink/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r ${category.color} text-white`}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{category.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6">{category.description}</p>

                  {/* Platform badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.platforms.map((platform, platformIndex) => (
                      <motion.div
                        key={platformIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + platformIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="outline"
                          className="bg-gradient-to-r from-auxamate-pink/10 to-auxamate-purple/10 border-auxamate-pink/30 text-white hover:bg-gradient-to-r hover:from-auxamate-pink/20 hover:to-auxamate-purple/20 transition-all duration-200 cursor-default"
                        >
                          {platform}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover effect overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg`}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional info section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-auxamate-pink/10 to-auxamate-purple/10 rounded-2xl border border-auxamate-pink/20 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Settings className="h-6 w-6 text-auxamate-pink" />
              <h3 className="text-xl font-bold">Why These Platforms?</h3>
            </div>
            <p className="text-muted-foreground">
              We carefully select the best tools for each project based on your specific requirements, existing systems,
              and business goals. Our expertise across multiple platforms ensures we can integrate with your current
              workflow and deliver the most effective AI and automation solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
