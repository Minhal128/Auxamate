"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"

export function SponsorsSection() {
  const sponsors = [
    {
      name: "Zapier",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2ttj825j7wjwyfCs5maYJln9P7OFCv.png",
    },
    {
      name: "Make",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dVhvGqIs27G7tON2bdcEE2JBaoijv7.png",
    },
    {
      name: "n8n",
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
      name: "Retell",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RG7KNPWAfdsUaIBvVrj7XhhgXoRMM7.png",
    },
    {
      name: "ManyChat",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hsgyEJS08xgJssAyA5SMVjgpgGFw6e.png",
    },
    {
      name: "Vapi",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GFRro1d8HkhoprRScObsLQEOQaQnu8.png",
    },
    {
      name: "CloseBot",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8jOHjAllGQEEH76rQMzs81UgDCxaZQ.png",
    },
    {
      name: "Dialogflow",
      logo: "https://avatars.githubusercontent.com/u/8170782?s=280&v=4.jpg",
    },
    {
      name: "GoHighLevel",
      logo: "https://cdn.prod.website-files.com/5f15081919fdf673994ab5fd/6697e68b90253f000eed3a7c_HighLevel-Logo-(PNG).png",
    },
    {
      name: "Salesforce",
      logo: "https://icon2.cleanpng.com/20180626/rpy/aazwvpehz.webp",
    },
    {
      name: "Hubspot",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGKQNpE5KbwgQjYkdxK6sLoEyhPeacS7RKgw&s.jpg",
    },
    {
      name: "Zoho",
      logo: "https://logowik.com/content/uploads/images/zoho-new9282.logowik.com.webp",
    },
    {
      name: "Pipedrive",
      logo: "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/f2e2e04e-14be-474e-8d90-7162080c28b0.png?auto=format%2Ccompress&fit=max&w=256&q=75&ch=Width%2CDPR.jpg",
    },
    {
      name: "Automate.io",
      logo: "https://cdn.prod.website-files.com/5c06e16a5bdc7bce10059cc3/636fd0a4e3ca35635923c1f7_QokPx-A7eJ1q19cD9Kwhqz47IVyj_ADHIMsVw5lB-uM.png",
    },
  ]

  const rowRef = useRef(null)
  const [rowWidth, setRowWidth] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    if (rowRef.current) {
      setRowWidth(rowRef.current.scrollWidth / 2) // since it's duplicated
    }
  }, [rowRef])

  useEffect(() => {
    if (rowWidth === 0) return
    const animate = async () => {
      while (true) {
        await controls.start({
          x: -rowWidth,
          transition: {
            duration: 40,
            ease: "linear",
          },
        })
        controls.set({ x: 0 })
      }
    }
    animate()
  }, [rowWidth, controls])

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
            ref={rowRef}
            animate={controls}
            style={{ x: 0 }}
          >
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={index}
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
