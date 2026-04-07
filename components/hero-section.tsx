"use client"

import { useEffect, useState } from "react"
import { ArrowRight, MapPin, Phone, CheckCircle, Sparkles } from "lucide-react"

const HERO_VIDEO_URL = "https://res.cloudinary.com/dxujnm2sl/video/upload/f_auto,q_auto/Mahalaxmi_1_1_v6khvx"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/slider1.webp"
          aria-label="Mahalaxmi Infra hero video"
        >
          <source src={`${HERO_VIDEO_URL}.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-end">
            <div className={`flex-1 space-y-5 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wide">RERA • NMRDA Approved</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-3">
                  Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">Dream Home</span>
                </h1>
                <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-2xl">
                  Premium Residential & Commercial Plots in Heart of Nagpur
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleScrollToSection("contact")}
                  className="group px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-bold text-sm flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Contact Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => handleScrollToSection("projects")}
                  className="px-6 py-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-lg font-bold text-sm border border-white/30 hover:border-white/50 transition-all"
                >
                  Explore Projects
                </button>
              </div>
            </div>

            <div className={`transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex flex-wrap lg:flex-nowrap gap-3">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 min-w-[140px]">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-xs text-white/70 font-medium">Starting From</span>
                  </div>
                  <div className="text-2xl font-black text-white">₹22L</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 min-w-[140px]">
                  <div className="text-3xl font-black text-primary mb-1">70+</div>
                  <div className="text-xs text-white/80 font-medium">Projects Completed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 min-w-[140px]">
                  <div className="text-3xl font-black text-secondary mb-1">17000+</div>
                  <div className="text-xs text-white/80 font-medium">Happy Clients</div>
                </div>
                <div className="bg-gradient-to-r from-secondary to-primary backdrop-blur-md border border-white/20 rounded-xl p-4 min-w-[140px]">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-white" />
                    <span className="text-xs text-white font-medium">Location</span>
                  </div>
                  <div className="text-sm font-bold text-white">Nagpur Prime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
