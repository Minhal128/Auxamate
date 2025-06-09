import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { SponsorsSection } from "@/components/sponsors-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { IndustriesSection } from "@/components/industries-section"
import { PlatformsSection } from "@/components/platforms-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { IntegrationsSection } from "@/components/integrations-section"
// import { SecuritySection } from "@/components/security-section"
import { TeamSection } from "@/components/team-section"
import { WorldMapSection } from "@/components/world-map-section"
import { Footer } from "@/components/footer"
// import {DashboardShowcaseSection} from "@/components/dashboard-showcase-section"
export default function Home() {
  return (
    <main className="min-h-screen bg-background dot-pattern">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PlatformsSection />
      <SponsorsSection />
      <HowItWorksSection />
      <IndustriesSection />
      <IntegrationsSection />
      {/* <SecuritySection /> */}
      <PricingSection />
      {/* <DashboardShowcaseSection /> */}
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      {/* <WorldMapSection /> */}
      <Footer />
    </main>
  )
}
