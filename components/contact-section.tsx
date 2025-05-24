"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
      duration: 5000,
    })

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
    setIsSubmitting(false)
  }

  const handlePhoneClick = () => {
    window.open("tel:+15551234567", "_self")
  }

  const handleEmailClick = () => {
    window.open("mailto:hello@auxamate.com", "_self")
  }

  const handleLocationClick = () => {
    window.open("https://maps.google.com/?q=123+AI+Street,+Tech+City,+TC+12345", "_blank")
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contact <span className="gradient-text">Us</span>
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ready to transform your business with AI? Get in touch for a free consultation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border border-border/50">
              <h3 className="text-2xl font-bold mb-6">Get Your Free Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your business needs and how we can help..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-auxamate-pink to-auxamate-purple hover:opacity-90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                Ready to revolutionize your business with AI? Contact us today for a free consultation and discover how
                our custom AI solutions can transform your operations.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 cursor-pointer hover:border-auxamate-pink/50 transition-colors"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={handlePhoneClick}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-auxamate-pink/10">
                  <Phone className="h-6 w-6 text-auxamate-pink" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 cursor-pointer hover:border-auxamate-purple/50 transition-colors"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={handleEmailClick}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-auxamate-purple/10">
                  <Mail className="h-6 w-6 text-auxamate-purple" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">hello@auxamate.com</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 cursor-pointer hover:border-auxamate-cyan/50 transition-colors"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={handleLocationClick}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-auxamate-cyan/10">
                  <MapPin className="h-6 w-6 text-auxamate-cyan" />
                </div>
                <div>
                  <h4 className="font-medium">Office</h4>
                  <p className="text-muted-foreground">123 AI Street, Tech City, TC 12345</p>
                </div>
              </motion.div>
            </div>

            <div className="p-6 bg-gradient-to-r from-auxamate-pink/10 to-auxamate-purple/10 rounded-lg border border-auxamate-pink/20">
              <h4 className="font-bold mb-2">Why Choose AUXAMATE?</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Custom AI solutions tailored to your business</li>
                <li>• No fixed plans - pay only for what you need</li>
                <li>• Expert team with proven track record</li>
                <li>• 24/7 support and continuous optimization</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
