"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What kinds of AI agents do you build?",
      answer:
        "We build AI voice and chat agents for sales, customer support, appointment bookings, lead qualification, order processing, and more. Our agents can handle complex conversations and integrate with your existing systems.",
    },
    {
      question: "Do you offer fixed monthly plans?",
      answer:
        "No, we provide custom pricing per client. Every business has unique needs, so we create tailored solutions and pricing based on your specific requirements, complexity, and scale.",
    },
    {
      question: "Can you integrate with my CRM?",
      answer:
        "Yes, we integrate with both custom and popular CRMs like Salesforce, HubSpot, Pipedrive, and many others. We also connect with various software systems to ensure seamless workflows.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We serve many industries including healthcare, real estate, e-commerce, security services, gaming, restaurants, call centers, education, financial services, manufacturing, logistics, retail, and professional services.",
    },
    {
      question: "How does automation help my business?",
      answer:
        "Automation saves time, reduces human errors, cuts operational costs, and frees your employees from repetitive tasks so they can focus on high-value activities that grow your business.",
    },
    {
      question: "How long does deployment take?",
      answer:
        "Deployment time depends on project size and complexity. Simple solutions can be ready in 1-2 weeks, while complex integrations may take 4-8 weeks. We aim to deliver quickly without compromising quality.",
    },
    {
      question: "Do AI agents handle only sales calls?",
      answer:
        "No, our AI agents handle all types of business calls and chats including customer support, technical assistance, appointment scheduling, order tracking, lead qualification, and much more.",
    },
    {
      question: "What support do you provide after deployment?",
      answer:
        "We provide continuous support including monitoring, maintenance, updates, performance optimization, and training. Our team ensures your AI solutions continue to perform at their best.",
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
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get answers to common questions about our AI solutions and services
          </motion.p>
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 px-6"
              >
                <AccordionTrigger className="text-left hover:text-auxamate-pink transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
