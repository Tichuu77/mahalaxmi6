"use client"

import { Check, Zap, Trophy, Users, Heart, Lightbulb, Star, Award, Sparkles, ArrowRight, ChevronDown } from "lucide-react"
import { useState } from "react"

const reasons = [
  {
    icon: Trophy,
    title: "Proven Excellence",
    description: "Award-winning solutions trusted by industry leaders",
    stat: "10+"
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Cutting-edge technology and forward-thinking approach",
    stat: "100%"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals with years of experience",
    stat: "50+"
  },
  {
    icon: Heart,
    title: "Customer Focused",
    description: "Your satisfaction is our top priority always",
    stat: "24/7"
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description: "Tailored approaches for unique challenges",
    stat: "500+"
  },
  {
    icon: Check,
    title: "Quality Assured",
    description: "Rigorous standards and quality control processes",
    stat: "98%"
  },
]

export   function WhyChooseUsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="why-choose-us" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      
      {/* Split Background - Full gradient on mobile, half on desktop */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary lg:w-1/2"></div>
      <div className="absolute inset-0 bg-white lg:left-1/2 hidden lg:block"></div>
      <div className="absolute inset-0 bg-white top-1/2 lg:hidden"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Layout - Content Left, Visual Right */}
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-12 items-center">
          
          {/* Left Side - Content on Gradient Background */}
          <div className="text-white py-8 lg:py-12 px-4 sm:px-0">
            
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full mb-4">
                <Star className="w-4 h-4 text-white" />
                <span className="text-xs text-white font-bold uppercase tracking-wider">
                  Why Choose Us
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">
                We Don't Just Build,
                <br />
                We Build Dreams
              </h2>
              
              <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6">
                Experience excellence with every interaction. Here's why we're different.
              </p>

              {/* Stats Pills */}
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg">
                  <span className="text-2xl font-black text-white">10+</span>
                  <span className="text-xs text-white/80 ml-1">Years</span>
                </div>
                <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg">
                  <span className="text-2xl font-black text-white">500+</span>
                  <span className="text-xs text-white/80 ml-1">Clients</span>
                </div>
                <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg">
                  <span className="text-2xl font-black text-white">98%</span>
                  <span className="text-xs text-white/80 ml-1">Satisfaction</span>
                </div>
              </div>
            </div>

            {/* Key Points - Vertical List */}
            <div className="space-y-3">
              {[
                "Award-winning solutions trusted globally",
                "24/7 dedicated support team",
                "Innovative technology & approach",
                "Guaranteed quality standards",
                "Regular updates & training",
                "Proven track record of excellence"
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-white/90 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-xl font-bold text-sm mt-8 hover:scale-105 transition-all shadow-xl"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Side - Interactive Cards */}
          <div className="bg-white py-8 lg:py-12 px-4 sm:px-0">
            
            {/* Tab Navigation */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {reasons.slice(0, 3).map((reason, idx) => {
                const Icon = reason.icon
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`p-3 rounded-xl transition-all ${
                      activeIndex === idx
                        ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-5 h-5 mx-auto mb-1" />
                    <div className="text-xs font-bold">{reason.stat}</div>
                  </button>
                )
              })}
            </div>

            {/* Active Card Display */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-xl border-2 border-gray-100 min-h-[200px]">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  {reasons[activeIndex] && (() => {
                    const Icon = reasons[activeIndex].icon
                    return <Icon className="w-7 h-7 text-white" />
                  })()}
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-1">
                    {reasons[activeIndex]?.title}
                  </h3>
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    {reasons[activeIndex]?.stat}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {reasons[activeIndex]?.description}
              </p>
            </div>

            {/* Bottom Quick Links */}
            <div className="grid grid-cols-3 gap-2 mt-6">
              {reasons.slice(3).map((reason, idx) => {
                const Icon = reason.icon
                return (
                  <button
                    key={idx + 3}
                    onClick={() => setActiveIndex(idx + 3)}
                    className={`p-3 rounded-xl transition-all ${
                      activeIndex === idx + 3
                        ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-5 h-5 mx-auto mb-1" />
                    <div className="text-xs font-bold">{reason.stat}</div>
                  </button>
                )
              })}
            </div>

            {/* Testimonial Style Quote */}
            <div className="mt-6 p-4 bg-gray-50 rounded-xl border-l-4 border-primary">
              <p className="text-sm text-gray-700 italic mb-2">
                "Outstanding service and dedication. They truly care about their clients."
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary"></div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Sarah Johnson</div>
                  <div className="text-xs text-gray-500">Happy Client</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Banner */}
        <div className="mt-12 bg-gray-900 rounded-2xl p-6 sm:p-8 text-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-black mb-2">
                Ready to Experience the Difference?
              </h3>
              <p className="text-sm text-gray-300">
                Join hundreds of satisfied clients today
              </p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-sm hover:scale-105 transition-all shadow-xl whitespace-nowrap"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}