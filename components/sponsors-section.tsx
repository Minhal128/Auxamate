"use client"

import { motion } from "framer-motion"

export function SponsorsSection() {
  const sponsors = [
    { name: "OpenAI", logo: "🤖" },
    { name: "Google AI", logo: "🧠" },
    { name: "Microsoft", logo: "💜" },
    { name: "Amazon", logo: "🔮" },
    { name: "Meta AI", logo: "🌟" },
    { name: "NVIDIA", logo: "⚡" },
    { name: "Tesla", logo: "🚀" },
    { name: "Apple", logo: "🍎" },
    { name: "IBM", logo: "💎" },
    { name: "Salesforce", logo: "☁️" },
  ]

  return (
    <section className="py-12 border-y border-border/20 bg-background/50 backdrop-blur-sm overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.p
          className="text-center text-sm text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by leading AI companies worldwide
        </motion.p>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* First set of sponsors */}
            {sponsors.map((sponsor, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-auxamate-pink/10 to-auxamate-purple/10 border border-auxamate-pink/20 backdrop-blur-sm whitespace-nowrap"
              >
                <span className="text-2xl">{sponsor.logo}</span>
                <span className="font-medium text-foreground">{sponsor.name}</span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {sponsors.map((sponsor, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-auxamate-pink/10 to-auxamate-purple/10 border border-auxamate-pink/20 backdrop-blur-sm whitespace-nowrap"
              >
                <span className="text-2xl">{sponsor.logo}</span>
                <span className="font-medium text-foreground">{sponsor.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  )
}
