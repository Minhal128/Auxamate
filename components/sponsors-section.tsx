"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function SponsorsSection() {
  const sponsors = [
    {
      name: "Zapier",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2ttj825j7wjwyfCs5maYJln9P7OFCv.png",
    },
    {
      name: "Make.com",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dVhvGqIs27G7tON2bdcEE2JBaoijv7.png",
    },
    {
      name: "Pabbly Connect",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K4swTEKCqpSaAOVOcpSv8pguAGoCUh.png",
    },
    {
      name: "Integromat",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jMSZaiWMQmfIPnA2X0U7DYvBIvlX2J.png",
    },
    {
      name: "Workato",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TvYmSMH1pZnmQRSVjsfu2hoDfE9MAL.png",
    },
    {
      name: "Pabbly",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qkKN6g6W612bftTq3USKf89hCJJYLM.png",
    },
    {
      name: "Automate.io",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RG7KNPWAfdsUaIBvVrj7XhhgXoRMM7.png",
    },
    {
      name: "Microsoft Power Automate",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hsgyEJS08xgJssAyA5SMVjgpgGFw6e.png",
    },
    {
      name: "Voiceflow",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GFRro1d8HkhoprRScObsLQEOQaQnu8.png",
    },
    {
      name: "n8n",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8jOHjAllGQEEH76rQMzs81UgDCxaZQ.png",
    },
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
          Trusted platforms we integrate with to deliver powerful automation solutions
        </motion.p>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {/* First set of sponsors */}
            {sponsors.map((sponsor, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center gap-4 px-6 py-4 rounded-full bg-gradient-to-r from-auxamate-pink/10 to-auxamate-purple/10 border border-auxamate-pink/20 backdrop-blur-sm whitespace-nowrap min-w-fit"
              >
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={`${sponsor.name} logo`}
                    width={40}
                    height={40}
                    className="object-contain rounded-full"
                  />
                </div>
                <span className="font-medium text-foreground text-sm">{sponsor.name}</span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {sponsors.map((sponsor, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center gap-4 px-6 py-4 rounded-full bg-gradient-to-r from-auxamate-pink/10 to-auxamate-purple/10 border border-auxamate-pink/20 backdrop-blur-sm whitespace-nowrap min-w-fit"
              >
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={`${sponsor.name} logo`}
                    width={40}
                    height={40}
                    className="object-contain rounded-full"
                  />
                </div>
                <span className="font-medium text-foreground text-sm">{sponsor.name}</span>
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
