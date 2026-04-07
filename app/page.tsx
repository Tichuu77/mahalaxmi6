import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import { AmenitiesSection } from "@/components/amenities-section"
import { ProjectsSection } from "@/components/projects-section"
import { GallerySection } from "@/components/gallery-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { UserGuideSection } from "@/components/user-guide-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import CallButton from "@/components/call-button"
import WhatsappButton from "@/components/whatsapp-button"

const AboutSection = dynamic(() => import("@/components/about-section"))
const ContactSection = dynamic(() => import("@/components/contact-section"))
const NewsArticles = dynamic(() => import("@/components/news-articals"))

export default function Home() {
  return (
    <main>
        <Navigation />
        <HeroSection />
        <AboutSection />
        <AmenitiesSection />
        <ProjectsSection />
        <GallerySection />
        <WhyChooseUsSection />
        <UserGuideSection />
        <TestimonialsSection />
        <NewsArticles />
        <FAQSection />
        <ContactSection />
        <CallButton />
        <WhatsappButton />
        <Footer />
    </main>
  )
}
