"use client"

import { ChevronDown, Home, Calendar, Briefcase, CheckCircle, ArrowRight, Sparkles, Play, Clock, Target } from "lucide-react"
import { useState } from "react"

const guides = [
  {
    number: "01",
    title: "Explore Properties",
    description: "Browse through our extensive collection of premium residential and commercial properties in Nagpur.",
    icon: Home,
    emoji: "🏠",
    details: [
      "Visit our website and create an account",
      "Filter properties by location, price, and amenities",
      "Save your favorite properties to a wishlist",
    ],
  },
  {
    number: "02",
    title: "Schedule Site Visit",
    description: "Book a personalized site visit with our expert consultants to experience the property firsthand.",
    icon: Calendar,
    emoji: "📅",
    details: [
      "Select your preferred date and time",
      "Our team will confirm your visit within 24 hours",
      "Receive directions and consultant contact details",
    ],
  },
  {
    number: "03",
    title: "Consultation & Financing",
    description: "Get expert advice on financing options and investment benefits from our experienced team.",
    icon: Briefcase,
    emoji: "💼",
    details: [
      "Discuss investment strategies with our experts",
      "Explore various financing and payment options",
      "Get personalized financial advice",
    ],
  },
  {
    number: "04",
    title: "Complete Purchase",
    description: "Finalize your investment with our transparent and hassle-free documentation process.",
    icon: CheckCircle,
    emoji: "✅",
    details: [
      "Sign all required legal documents",
      "Complete payment processing",
      "Receive your property documentation",
    ],
  },
]

export   function UserGuideSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="user-guide" className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-secondary rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Centered with Icon */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-xl opacity-50" />
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
            Simple. Clear.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-2">
              Effective.
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Four powerful steps to transform your property dreams into reality
          </p>
        </div>

        {/* Main Content - Horizontal Timeline Layout */}
        <div className="mb-16 sm:mb-20">
          {/* Timeline Connector - Hidden on mobile */}
          <div className="hidden lg:flex items-center justify-center mb-12 px-20">
            {guides.map((_, index) => (
              <div key={index} className="flex items-center flex-1">
                <div className={`w-4 h-4 rounded-full ${activeStep >= index ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-gray-300'} transition-all duration-500`} />
                {index < guides.length - 1 && (
                  <div className={`h-1 flex-1 ${activeStep > index ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-gray-300'} transition-all duration-500`} />
                )}
              </div>
            ))}
          </div>

          {/* Step Cards - Horizontal on desktop, vertical on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {guides.map((guide, index) => {
              const Icon = guide.icon
              const isActive = activeStep === index
              
              return (
                <div key={index} className="relative">
                  <div
                    onClick={() => setActiveStep(index)}
                    className={`cursor-pointer relative bg-gradient-to-br ${
                      isActive 
                        ? 'from-primary/10 via-secondary/5 to-white border-primary' 
                        : 'from-white to-gray-50 border-gray-200'
                    } rounded-3xl p-6 sm:p-8 border-2 transition-all duration-500 hover:shadow-2xl group`}
                  >
                    {/* Number Badge - Top Right */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-white font-black text-lg">{guide.number}</span>
                    </div>

                    {/* Icon Container */}
                    <div className={`mb-6 relative ${isActive ? 'scale-110' : 'scale-100'} transition-transform duration-500`}>
                      <div className={`w-20 h-20 rounded-2xl ${
                        isActive 
                          ? 'bg-gradient-to-br from-primary to-secondary' 
                          : 'bg-gray-100'
                      } flex items-center justify-center shadow-lg transition-all duration-500`}>
                        <Icon className={`w-10 h-10 ${isActive ? 'text-white' : 'text-gray-500'} transition-colors duration-500`} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl sm:text-2xl font-black mb-3 transition-colors duration-500 ${
                      isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary' : 'text-gray-900'
                    }`}>
                      {guide.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 min-h-[60px]">
                      {guide.description}
                    </p>

                    {/* Action Button */}
                    <button className={`flex items-center gap-2 text-sm font-bold ${
                      isActive ? 'text-primary' : 'text-gray-400'
                    } transition-colors duration-500 group-hover:gap-3`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-all duration-300" />
                    </button>
                  </div>

                  {/* Expandable Details Panel */}
                  {isActive && (
                    <div 
                      className="mt-6 bg-white rounded-2xl p-6 shadow-xl border-2 border-primary/20"
                      style={{ animation: 'slideUp 0.4s ease-out' }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                        <h4 className="text-lg font-black text-gray-900">Action Steps</h4>
                      </div>
                      <div className="space-y-3">
                        {guide.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start gap-3 group/item">
                            <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-md group-hover/item:scale-110 transition-transform">
                              <span className="text-white text-xs font-bold">{detailIndex + 1}</span>
                            </div>
                            <span className="text-sm text-gray-700 leading-relaxed pt-1">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Section - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left - Stats & Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl border-l-4 border-primary">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 shadow-lg">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-black text-gray-900 mb-1">Quick Process</h4>
                <p className="text-sm text-gray-600">Complete your journey in as little as 2-3 weeks with our streamlined approach</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-secondary/5 to-transparent rounded-2xl border-l-4 border-secondary">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 shadow-lg">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-black text-gray-900 mb-1">Expert Support</h4>
                <p className="text-sm text-gray-600">Dedicated team available 24/7 to guide you through every single step</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl border-l-4 border-primary">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-black text-gray-900 mb-1">Guaranteed Results</h4>
                <p className="text-sm text-gray-600">98% customer satisfaction rate with transparent processes</p>
              </div>
            </div>
          </div>

          {/* Right - CTA Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-2xl opacity-20" />
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-secondary/20 to-transparent rounded-tr-full" />
              
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                  <Play className="w-4 h-4 text-white" />
                  <span className="text-xs text-white font-bold uppercase tracking-wider">Let's Get Started</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
                  Ready to Take
                  <br />
                  the First Step?
                </h3>
                
                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
                  Join thousands of satisfied property owners who trusted us with their investment journey
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold text-base shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                    Start Now
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="#contact" className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-bold text-base hover:bg-white/20 transition-all duration-300">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}