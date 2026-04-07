import dynamic from "next/dynamic"

const Navigation = dynamic(() => import("@/components/navigation").then((mod) => mod.Navigation))
const HeroSection = dynamic(() => import("@/components/hero-section"))
const AboutSection = dynamic(() => import("@/components/about-section"))
const AmenitiesSection = dynamic(() => import("@/components/amenities-section").then((mod) => mod.AmenitiesSection))
const ProjectsSection = dynamic(() => import("@/components/projects-section").then((mod) => mod.ProjectsSection))
const GallerySection = dynamic(() => import("@/components/gallery-section").then((mod) => mod.GallerySection))
const WhyChooseUsSection = dynamic(() => import("@/components/why-choose-us-section").then((mod) => mod.WhyChooseUsSection))
const UserGuideSection = dynamic(() => import("@/components/user-guide-section").then((mod) => mod.UserGuideSection))
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section").then((mod) => mod.TestimonialsSection))
const NewsArticles = dynamic(() => import("@/components/news-articals"))
const FAQSection = dynamic(() => import("@/components/faq-section").then((mod) => mod.FAQSection))
const ContactSection = dynamic(() => import("@/components/contact-section"))
const Footer = dynamic(() => import("@/components/footer").then((mod) => mod.Footer))
const CallButton = dynamic(() => import("@/components/call-button"))
const WhatsappButton = dynamic(() => import("@/components/whatsapp-button"))

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
