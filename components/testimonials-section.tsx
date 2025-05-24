"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "AUXAMATE's AI agents transformed our customer service. We now handle 3x more inquiries with the same team size, and customer satisfaction has increased by 40%. The ROI was evident within the first month.",
      author: "Sarah Johnson",
      role: "CEO, TechFlow Solutions",
      company: "E-commerce",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
    {
      quote:
        "The automation solutions from AUXAMATE eliminated 80% of our manual data entry work. Our team can now focus on strategic tasks instead of repetitive processes. It's been a game-changer for our productivity.",
      author: "Michael Chen",
      role: "Operations Director",
      company: "Healthcare Services",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
    {
      quote:
        "Our AI chat agent handles appointment bookings 24/7 without any human intervention. We've seen a 60% increase in bookings and zero missed opportunities. The integration was seamless and the support is outstanding.",
      author: "Emily Rodriguez",
      role: "Practice Manager",
      company: "Medical Clinic",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
    {
      quote:
        "AUXAMATE's custom pricing model worked perfectly for our startup. We got enterprise-level AI solutions without the enterprise price tag. The team understood our budget constraints and delivered exceptional value.",
      author: "David Park",
      role: "Founder",
      company: "Real Estate Tech",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

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
            What Our <span className="gradient-text">Clients Say</span>
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Real results from real businesses that transformed their operations with our AI solutions
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <Button variant="ghost" size="icon" onClick={prevTestimonial} className="mr-2">
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={nextTestimonial}>
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                x: `${-currentIndex * 100}%`,
              }}
              transition={{ duration: 0.5 }}
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full px-4" style={{ flex: `0 0 ${100 / testimonials.length}%` }}>
                  <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border/50 relative">
                    <Quote className="h-10 w-10 text-auxamate-pink/20 absolute top-4 left-4" />

                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-lg md:text-xl relative z-10 mb-6 mt-4">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center justify-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                        <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="text-center">
                        <div className="font-medium">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-xs text-auxamate-pink">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full mx-1 transition-colors ${
                  currentIndex === index ? "bg-auxamate-pink" : "bg-muted"
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <span className="sr-only">Testimonial {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
