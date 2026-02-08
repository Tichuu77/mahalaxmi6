"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, MapPin, Phone, CheckCircle, Sparkles } from "lucide-react"

export default function HeroSection() {
  const videoRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const script = document.createElement('script')
    script.src = 'https://unpkg.com/cloudinary-video-player@1.10.6/dist/cld-video-player.min.js'
    script.async = true
    document.body.appendChild(script)

    const link = document.createElement('link')
    link.href = 'https://unpkg.com/cloudinary-video-player@1.10.6/dist/cld-video-player.min.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    script.onload = () => {
      if (window.cloudinary && videoRef.current) {
        window.cloudinary.videoPlayer('cloudinary-player', {
          cloud_name: 'dxujnm2sl',
          publicId: 'Mahalaxmi_1_1_v6khvx',
          controls: false,
          autoplay: true,
          loop: true,
          muted: true,
          fluid: false,
          playsinline: true,
          bigPlayButton: false,
          showLogo: false,
          preload: 'auto',
        })
      }
    }

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script)
      if (document.head.contains(link)) document.head.removeChild(link)
    }
  }, [])

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div ref={videoRef} className="w-full h-full">
          <video
            id="cloudinary-player"
            className="cld-video-player"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              filter: 'brightness(0.8)'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Bottom Content Container */}
      <div className="relative z-10 w-full pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Content Row */}
          <div className="flex flex-col lg:flex-row gap-8 items-end">
            
            {/* Left Side - Heading & CTA */}
            <div className={`flex-1 space-y-5 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              
              {/* Heading */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wide">RERA • NMRDA Approved</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-3">
                  Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-float">Dream Home</span>
                </h1>
                <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-2xl">
                  Premium Residential & Commercial Plots in Heart of Nagpur
                </p>
              </div>

              {/* CTAs in Row */}
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

            {/* Right Side - Info Cards in Horizontal Row */}
            <div className={`transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex flex-wrap lg:flex-nowrap gap-3">
                
                {/* Price Card */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 min-w-[140px]">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-xs text-white/70 font-medium">Starting From</span>
                  </div>
                  <div className="text-2xl font-black text-white">₹22L</div>
                </div>

                {/* Projects Card */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 min-w-[140px]">
                  <div className="text-3xl font-black text-primary mb-1">70+</div>
                  <div className="text-xs text-white/80 font-medium">Projects Completed</div>
                </div>

                {/* Clients Card */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 min-w-[140px]">
                  <div className="text-3xl font-black text-secondary mb-1">17000+</div>
                  <div className="text-xs text-white/80 font-medium">Happy Clients</div>
                </div>

                {/* Location Card */}
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

          {/* Bottom Stats Bar */}
          <div className={`mt-8 transition-all duration-700 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-black text-primary mb-1">100%</div>
                  <div className="text-xs text-white/70">RERA Approved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-secondary mb-1">NMRDA</div>
                  <div className="text-xs text-white/70">Certified</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-primary mb-1">13+</div>
                  <div className="text-xs text-white/70">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-secondary mb-1">24/7</div>
                  <div className="text-xs text-white/70">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Top Position */}
      <div className={`absolute top-8 right-8 z-10 transition-all duration-700 delay-600 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2 bg-black/20 backdrop-blur-sm animate-bounce">
          <div className="w-1.5 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  )
}

declare global {
  interface Window {
    cloudinary: {
      videoPlayer: (elementId: string, options: any) => any;
    };
  }
}