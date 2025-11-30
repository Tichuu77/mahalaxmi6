"use client"

import { Wifi, Dumbbell, Trees, Zap, Shield, Users, Sparkles, Star, ChevronRight, ArrowRight } from "lucide-react"
import { useState } from "react"

const amenities = [
  {
    icon: Wifi,
    title: "Smart Home",
    description: "Advanced IoT integration",
    category: "facilities"
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art gym",
    category: "wellness"
  },
  {
    icon: Trees,
    title: "Green Spaces",
    description: "Lush landscaping",
    category: "wellness"
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "24/7 power supply",
    category: "facilities"
  },
  {
    icon: Shield,
    title: "Security",
    description: "CCTV surveillance",
    category: "facilities"
  },
  {
    icon: Users,
    title: "Community",
    description: "Social gathering spaces",
    category: "entertainment"
  },
  {
    emoji: "🏊",
    title: "Swimming Pool",
    description: "Olympic-sized pool",
    category: "wellness"
  },
  {
    emoji: "🎮",
    title: "Gaming Zone",
    description: "Indoor entertainment",
    category: "entertainment"
  },
  {
    emoji: "🧘",
    title: "Yoga & Meditation",
    description: "Wellness activities",
    category: "wellness"
  },
  {
    emoji: "🚗",
    title: "Covered Parking",
    description: "Multi-level parking",
    category: "facilities"
  },
  {
    emoji: "🎪",
    title: "Banquet Hall",
    description: "Event spaces",
    category: "entertainment"
  },
  {
    emoji: "👶",
    title: "Kids Play Area",
    description: "Safe playground",
    category: "entertainment"
  },
]

export   function AmenitiesSection() {
  const [activeTab, setActiveTab] = useState("all")
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const filteredAmenities = amenities.filter(amenity => {
    if (activeTab === "all") return true
    return amenity.category === activeTab
  })

  const categories = [
    { id: "all", label: "All", icon: Star, color: "from-primary to-secondary" },
    { id: "wellness", label: "Wellness", icon: Trees, color: "from-primary to-tcol" },
    { id: "entertainment", label: "Entertainment", icon: Users, color: "from-secondary to-primary" },
    { id: "facilities", label: "Facilities", icon: Shield, color: "from-tcol to-secondary" }
  ]

  return (
    <section id="amenities" className="py-12 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Mobile Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 rounded-full mb-3">
                <Sparkles className="w-3 h-3 text-primary" />
                <span className="text-xs text-primary font-bold uppercase tracking-wide">
                  Amenities
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-2">
                Luxury{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Lifestyle
                </span>
              </h2>
              
              <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                World-class facilities for modern living
              </p>
            </div>

            {/* Mobile Stats Badge */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-3 sm:p-4 shadow-xl text-white text-center min-w-[70px] sm:min-w-[90px]">
              <div className="text-2xl sm:text-3xl font-black">12+</div>
              <div className="text-[10px] sm:text-xs font-semibold opacity-90">Features</div>
            </div>
          </div>
        </div>

        {/* Scrollable Category Tabs - Mobile Optimized */}
        <div className="mb-8 sm:mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide sm:justify-center">
            {categories.map(tab => {
              const TabIcon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`snap-start flex-shrink-0 px-4 py-2.5 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <TabIcon className={`w-4 h-4 ${activeTab === tab.id ? "text-white" : "text-primary"}`} />
                  <span className="text-sm whitespace-nowrap">{tab.label}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    activeTab === tab.id 
                      ? "bg-white/20 text-white" 
                      : "bg-white text-gray-600"
                  }`}>
                    {amenities.filter(a => tab.id === "all" || a.category === tab.id).length}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Horizontal Scroll Cards - Mobile First */}
        <div className="mb-10 sm:mb-12">
          <div className="lg:hidden -mx-4 px-4">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {filteredAmenities.map((amenity, index) => {
                const Icon = amenity.icon
                
                return (
                  <div
                    key={index}
                    className="snap-start flex-shrink-0 w-[160px] bg-white rounded-2xl p-4 shadow-lg border-2 border-gray-100"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      {amenity.emoji ? (
                        <span className="text-2xl">{amenity.emoji}</span>
                      ) : (
                        <Icon className="w-6 h-6 text-white" />
                      )}
                    </div>
                    
                    <h3 className="text-sm font-black text-gray-900 mb-1 text-center line-clamp-1">
                      {amenity.title}
                    </h3>
                    <p className="text-xs text-gray-600 text-center line-clamp-2 mb-2">
                      {amenity.description}
                    </p>

                    <div className="h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-4 gap-5">
            {filteredAmenities.map((amenity, index) => {
              const Icon = amenity.icon
              const isHovered = hoveredIndex === index
              
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-primary/30"
                >
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center transition-transform duration-500 ${
                    isHovered ? "scale-110 rotate-6" : "scale-100"
                  }`}>
                    {amenity.emoji ? (
                      <span className="text-3xl">{amenity.emoji}</span>
                    ) : (
                      <Icon className="w-8 h-8 text-white" />
                    )}
                  </div>
                  
                  <h3 className="text-base font-black text-gray-900 mb-1 text-center group-hover:text-primary transition-colors">
                    {amenity.title}
                  </h3>
                  <p className="text-xs text-gray-600 text-center mb-3">
                    {amenity.description}
                  </p>

                  <span className="inline-flex w-full justify-center items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-xs font-bold rounded-full">
                    {amenity.category.charAt(0).toUpperCase() + amenity.category.slice(1)}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stacked Bottom Section - Mobile Optimized */}
        <div className="space-y-6">
          
          {/* CTA First on Mobile */}
          <div className="bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl sm:text-3xl font-black text-white mb-2 sm:mb-3">
                Want to Know More?
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Get detailed information about amenities
              </p>
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-2 px-5 py-3 bg-white text-primary rounded-xl font-bold text-sm sm:text-base shadow-xl hover:scale-105 transition-all"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Feature Grid - 2x2 on Mobile */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              { label: "Vastu Compliant", value: "100%", gradient: "from-primary to-secondary" },
              { label: "Security", value: "24/7", gradient: "from-secondary to-primary" },
              { label: "Maintenance", value: "Premium", gradient: "from-primary to-tcol" },
              { label: "Warranty", value: "Assured", gradient: "from-tcol to-secondary" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 sm:p-5 shadow-lg border border-gray-200"
              >
                <div className={`text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${item.gradient} mb-1 sm:mb-2`}>
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-semibold">
                  {item.label}
                </div>
                <div className={`h-1 w-10 bg-gradient-to-r ${item.gradient} rounded-full mt-2`}></div>
              </div>
            ))}
          </div>

          {/* Bottom Stats - Horizontal on Mobile */}
          <div className="flex gap-3 sm:grid sm:grid-cols-3 sm:gap-4">
            <div className="flex-1 bg-white rounded-xl p-4 shadow-lg border border-gray-200 text-center">
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary mb-1">12+</div>
              <div className="text-xs sm:text-sm text-gray-600 font-semibold">Amenities</div>
            </div>
            <div className="flex-1 bg-white rounded-xl p-4 shadow-lg border border-gray-200 text-center">
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-secondary to-primary mb-1">24/7</div>
              <div className="text-xs sm:text-sm text-gray-600 font-semibold">Available</div>
            </div>
            <div className="flex-1 bg-white rounded-xl p-4 shadow-lg border border-gray-200 text-center">
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-tcol mb-1">100%</div>
              <div className="text-xs sm:text-sm text-gray-600 font-semibold">Premium</div>
            </div>
          </div>
        </div>
        
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}