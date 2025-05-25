"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, ExternalLink, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TeamSection() {
  const team = [
   
    {
      name: "Mahad Mazhar",
      role: "CEO & Founder",
      bio: "Expert in developing and optimizing machine learning models for production environments and real-time applications.",
      phone: "+1 (555) 123-4567",
      portfolio: "https://priyapatel.ml",
      socialLinks: {
        twitter: "https://twitter.com/priyapatel",
        linkedin: "https://linkedin.com/in/priyapatel",
        github: "https://github.com/priyapatel",
      },
    },
  ]

  return (
    <section id="team" className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Meet Our <span className="gradient-text">Team</span>
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The brilliant minds behind our AI innovations and intelligent solutions
          </motion.p>
        </div>

        <div className="flex justify-center">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-auxamate-pink/10 to-auxamate-purple/10 border border-auxamate-pink/20 p-6 h-[400px] w-full max-w-sm flex flex-col hover:border-auxamate-pink/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                {/* Header with name and role */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-purple-300">{member.role}</p>
                </div>

                {/* Bio text */}
                <p className="text-sm text-muted-foreground mb-6 flex-grow">{member.bio}</p>

                {/* Phone number */}
                {member.phone && (
                  <div className="mb-4 p-3 bg-gradient-to-r from-auxamate-pink/10 to-auxamate-purple/10 rounded-lg border border-auxamate-pink/20">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-auxamate-pink" />
                      <a
                        href={`tel:${member.phone}`}
                        className="text-sm font-medium text-white hover:text-auxamate-pink transition-colors"
                      >
                        {member.phone}
                      </a>
                    </div>
                  </div>
                )}

                {/* Portfolio link */}
                <Button
                  variant="outline"
                  size="sm"
                  className="mb-4 w-full group-hover:bg-gradient-to-r group-hover:from-auxamate-pink/20 group-hover:to-auxamate-purple/20 group-hover:border-auxamate-pink/50 transition-all duration-300"
                  asChild
                >
                  <a href={member.portfolio} target="_blank" rel="noopener noreferrer">
                    View Portfolio <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>

                {/* Social links */}
                <div className="flex gap-3">
                  <a
                    href={member.socialLinks.twitter}
                    className="text-muted-foreground hover:text-auxamate-pink transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href={member.socialLinks.linkedin}
                    className="text-muted-foreground hover:text-auxamate-purple transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={member.socialLinks.github}
                    className="text-muted-foreground hover:text-auxamate-cyan transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>

                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-auxamate-pink/20 via-auxamate-purple/20 to-auxamate-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10 blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
