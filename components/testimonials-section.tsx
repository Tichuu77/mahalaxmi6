"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote, Award, Heart, ThumbsUp } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "Investing in a by Maha Laxmi  Infra transparent process made effortless experience. The best decision I ever made. The local transparent process made it an effortless experience.",
    name: "Rajkumar Gharjale",
    location: "Nagpur",
    image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/1-9.png",
    rating: 5,
  },
  {
    id: 2,
    content:
      "I wanted to invest in a growing area, and plots in Nagpur Besa seemed perfect. Maha Laxmi  Infra exceeded my expectations. Highly recommended!",
    name: "Priya Shah",
    location: "Mumbai",
    image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/3-4.png",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Investing in residential plots with Mahalaxmi  Infra was one of my best decisions. Their transparency, clear titles, and prompt assistance gave me peace of mind.",
    name: "Karan Akojwar",
    location: "Pune",
    image: "https://pk.mahalaxmidevelopers.com/wp-content/uploads/2025/06/4-2.png",
    rating: 5,
  },
]

export   function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-32 bg-gray-50 relative overflow-hidden"
    >
      <style>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .animate-shimmer {
          background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      {/* Background Pattern - Different Style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Different Layout */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 sm:mb-16 lg:mb-20 gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-primary to-transparent" />
            </div>
            <h2
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 mb-3 leading-tight"
            >
              Client Stories
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl">
              Discover why hundreds of clients trust us with their property investments
            </p>
          </div>

          {/* Stats Mini Cards */}
          <div className="flex gap-3">
            <div className="px-5 py-3 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="text-2xl font-black text-primary">500+</div>
              <div className="text-xs text-gray-600">Reviews</div>
            </div>
            <div className="px-5 py-3 bg-white rounded-xl shadow-md border border-gray-200">
              <div className="text-2xl font-black text-secondary">4.9★</div>
              <div className="text-xs text-gray-600">Rating</div>
            </div>
          </div>
        </div>

        {/* Main Content - Vertical Stack on Mobile, Different Desktop Layout */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Left Sidebar - Thumbnail Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 px-2">
              Featured Reviews
            </h3>
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => {
                  setCurrent(index)
                  setAutoplay(false)
                }}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 border ${
                  index === current
                    ? "bg-gradient-to-br from-primary to-secondary text-white border-transparent shadow-xl scale-105"
                    : "bg-white text-gray-600 border-gray-200 hover:border-primary/50 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white/50"
                  />
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-bold truncate ${index === current ? 'text-white' : 'text-gray-900'}`}>
                      {testimonial.name}
                    </p>
                    <p className={`text-xs truncate ${index === current ? 'text-white/80' : 'text-gray-500'}`}>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${index === current ? 'fill-white text-white' : 'fill-amber-400 text-amber-400'}`} />
                  ))}
                </div>
              </button>
            ))}
          </div>

          {/* Center - Main Testimonial Display */}
          <div className="lg:col-span-9">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 ${
                    index === current ? "opacity-100" : "absolute opacity-0 pointer-events-none inset-0"
                  }`}
                  style={index === current ? { animation: 'scaleIn 0.5s ease-out' } : {}}
                >
                  {/* Main Card - Different Shape */}
                  <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                    
                    {/* Top Bar with Stars and Quote */}
                    <div className="bg-gradient-to-r from-primary to-secondary p-6 sm:p-8 relative overflow-hidden">
                      <div className="absolute inset-0 animate-shimmer" />
                      <div className="relative flex items-center justify-between">
                        <div className="flex gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white" />
                          ))}
                        </div>
                        <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-white/20" />
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 sm:p-8 lg:p-10">
                      <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed mb-8 font-medium">
                        "{testimonial.content}"
                      </p>

                      {/* Author Section - Horizontal Layout */}
                      <div className="flex items-center gap-6 pt-8 border-t-2 border-gray-100">
                        <div className="relative">
                          <div className="absolute -inset-2 bg-gradient-to-br from-primary to-secondary rounded-full blur-lg opacity-30" />
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white shadow-xl"
                          />
                          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                            <ThumbsUp className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p
                            style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
                            className="font-black text-gray-900 text-xl sm:text-2xl mb-1"
                          >
                            {testimonial.name}
                          </p>
                          <p className="text-gray-600 text-sm sm:text-base mb-2">
                            📍 {testimonial.location}
                          </p>
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                            <Award className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold text-primary">Verified Client</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation - Below Card on Mobile, Integrated on Desktop */}
                  <div className="flex items-center justify-center gap-4 mt-6 lg:mt-8">
                    <button
                      onClick={goToPrevious}
                      className="p-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-lg"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md border border-gray-200">
                      <span className="text-sm font-bold text-gray-900">
                        {current + 1} / {testimonials.length}
                      </span>
                      <div className="flex gap-1.5">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setCurrent(index)
                              setAutoplay(false)
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              index === current 
                                ? "bg-gradient-to-r from-primary to-secondary w-8" 
                                : "bg-gray-300 w-2 hover:bg-gray-400"
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={goToNext}
                      className="p-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-lg"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Different Stats Layout */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-3">
                  500+
                </div>
                <div className="text-white/90 text-sm sm:text-base font-semibold mb-1">Happy Clients</div>
                <div className="text-white/60 text-xs">Across India</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary mb-3">
                  4.9/5
                </div>
                <div className="text-white/90 text-sm sm:text-base font-semibold mb-1">Average Rating</div>
                <div className="text-white/60 text-xs">Verified Reviews</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-3">
                  98%
                </div>
                <div className="text-white/90 text-sm sm:text-base font-semibold mb-1">Satisfaction Rate</div>
                <div className="text-white/60 text-xs">Customer Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}