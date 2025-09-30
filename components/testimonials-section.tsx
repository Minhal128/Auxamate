"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "AUXAMATE revolutionized our customer support operations. Their AI agents handle complex product inquiries with remarkable accuracy, reducing response times by 75% while maintaining our high service standards. Our customers love the instant, knowledgeable responses.",
      author: "Scott McQuinn",
      role: "CEO",
      company: "GlassShowerDirect",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
    {
      quote:
        "Working with AUXAMATE has been transformative for our consulting practice. Their AI automation tools streamlined our client onboarding process and freed up valuable time for strategic advisory work. The multilingual capabilities are exceptional for our international clients.",
      author: "Leplat Marie",
      role: "Counsellor",
      company: "IAD France",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
    {
      quote:
        "The AI solutions from AUXAMATE have completely transformed how we manage operations. From automated scheduling to intelligent task prioritization, we've seen a 60% improvement in operational efficiency. The team's expertise and support throughout implementation was outstanding.",
      author: "MG Daniel",
      role: "Manager",
      company: "Carlos Castillo",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
    {
      quote:
        "AUXAMATE's AI voice agents have revolutionized our sales process. The intelligent lead qualification and 24/7 availability resulted in a 45% increase in qualified prospects. The natural conversation flow is so impressive that clients often don't realize they're speaking with AI initially.",
      author: "Odin Boonstra",
      role: "CEO",
      company: "GoMighty Ai",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
    {
      quote:
        "The implementation of AUXAMATE's AI automation has been seamless and transformative. Our document processing time decreased by 85%, and the accuracy improvements have eliminated costly errors. The ROI exceeded our expectations within just 3 months.",
      author: "Alexandra Chen",
      role: "Operations Manager",
      company: "TechFlow Industries",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
    {
      quote:
        "AUXAMATE's custom AI solutions perfectly aligned with our unique business requirements. Their team's expertise in machine learning and natural language processing delivered results that surpassed our initial goals. Highly recommended for any serious AI implementation.",
      author: "Roberto Martinez",
      role: "CTO",
      company: "Digital Innovations Ltd",
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Real results from real businesses that transformed their operations with our AI solutions
          </p>
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
            <div className="w-full">
              <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border/50 relative">
                <Quote className="h-10 w-10 text-auxamate-pink/20 absolute top-4 left-4" />

                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex]?.rating || 5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl relative z-10 mb-6 mt-4">
                  "{testimonials[currentIndex]?.quote || 'Loading testimonial...'}"
                </blockquote>

                <div className="flex items-center justify-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonials[currentIndex]?.avatar || "/placeholder.svg"} alt={testimonials[currentIndex]?.author || "User"} />
                    <AvatarFallback>{testimonials[currentIndex]?.author?.charAt(0) || "U"}</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <div className="font-medium">{testimonials[currentIndex]?.author || "Anonymous"}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[currentIndex]?.role || "User"}</div>
                    <div className="text-xs text-auxamate-pink">{testimonials[currentIndex]?.company || "Company"}</div>
                  </div>
                </div>
              </div>
            </div>
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
