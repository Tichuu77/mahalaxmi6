"use client"

import { useEffect, useState } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn, Grid3x3, Camera } from "lucide-react"

const galleryItems = [
  { id: 1, src: "/gallery1.jpg", alt: "Morning View", category: "exterior" },
  { id: 2, src: "/gallery2.jpg", alt: "Well Maintained Square", category: "amenities" },
  { id: 3, src: "/gallery3.jpg", alt: "Good Entrance", category: "exterior" },
  { id: 4, src: "/gallery4.jpg", alt: "Tree covered", category: "landscape" },
  { id: 5, src: "/gallery5.jpg", alt: "Night View", category: "exterior" },
  { id: 6, src: "/gallery6.jpg", alt: "Cozy Living Space", category: "interior" },
  { id: 7, src: "/gallery7.jpg", alt: "Designer Interiors", category: "interior" },
  { id: 8, src: "/gallery8.jpg", alt: "Premium Amenities", category: "amenities" },
  { id: 9, src: "/gallery9.jpg", alt: "Swimming Pool", category: "amenities" },
  { id: 10, src: "/gallery10.jpg", alt: "Evening View", category: "exterior" },
  { id: 11, src: "/gallery11.jpg", alt: "Playground", category: "amenities" },
  { id: 12, src: "/gallery12.jpg", alt: "Top View", category: "exterior" },
]

export   function GallerySection() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const categories = ["all", "exterior", "interior", "amenities", "landscape"]

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedId !== null) {
        const currentIndex = galleryItems.findIndex(item => item.id === selectedId)
        if (e.key === "ArrowRight") {
          const newIndex = currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1
          setSelectedId(galleryItems[newIndex].id)
        }
        if (e.key === "ArrowLeft") {
          const newIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1
          setSelectedId(galleryItems[newIndex].id)
        }
        if (e.key === "Escape") setSelectedId(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedId])

  const navigateModalImage = (direction: 'prev' | 'next') => {
    if (selectedId === null) return
    const currentIndex = galleryItems.findIndex(item => item.id === selectedId)
    let newIndex
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1
    }
    setSelectedId(galleryItems[newIndex].id)
  }

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Compact Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 mb-4">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-bold uppercase tracking-wider">
              Gallery
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-3 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Visual
            </span>{" "}
            Gallery
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Explore our stunning collection of projects and developments
          </p>
        </div>

        {/* Category Tabs + Stats Combined */}
        <div className="mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Category filter - scrollable on mobile */}
            <div className="-mx-4 px-4 sm:mx-0 sm:px-0 w-full sm:w-auto overflow-x-auto">
              <div className="flex gap-2 pb-2 sm:pb-0 snap-x snap-mandatory scrollbar-hide">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`snap-start flex-shrink-0 px-4 py-2 rounded-xl font-bold text-sm capitalize transition-all ${
                      activeCategory === cat
                        ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats - Side by side */}
            <div className="flex gap-3">
              <div className="px-4 py-2 bg-white rounded-xl shadow-md border border-gray-200 text-center">
                <span className="text-xl font-black text-primary">{galleryItems.length}</span>
                <span className="text-xs text-gray-600 font-semibold ml-1">Photos</span>
              </div>
              <div className="px-4 py-2 bg-white rounded-xl shadow-md border border-gray-200 text-center">
                <span className="text-xl font-black text-secondary">{categories.length - 1}</span>
                <span className="text-xs text-gray-600 font-semibold ml-1">Categories</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden -mx-4 mb-10">
          <div className="px-4">
            <div 
              id="gallery-slider"
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
              onScroll={(e) => {
                const slider = e.currentTarget
                const scrollLeft = slider.scrollLeft
                const cardWidth = slider.scrollWidth / filteredItems.length
                const activeIndex = Math.round(scrollLeft / cardWidth)
                
                // Update dots
                const dots = document.querySelectorAll('.gallery-dot')
                dots.forEach((dot, idx) => {
                  if (idx === activeIndex) {
                    dot.classList.add('w-6', 'bg-gradient-to-r', 'from-primary', 'to-secondary')
                    dot.classList.remove('w-1.5', 'bg-gray-300')
                  } else {
                    dot.classList.remove('w-6', 'bg-gradient-to-r', 'from-primary', 'to-secondary')
                    dot.classList.add('w-1.5', 'bg-gray-300')
                  }
                })
              }}
            >
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className="flex-shrink-0 w-[85vw] snap-center"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[400px]">
                    {/* Image */}
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                    {/* Content */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-between">
                      {/* Category badge - top */}
                      <div>
                        <span className="inline-block px-3 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase">
                          {item.category}
                        </span>
                      </div>

                      {/* Title - bottom */}
                      <div>
                        <h3 className="text-white font-black text-xl mb-2">
                          {item.alt}
                        </h3>
                        <div className="flex items-center gap-2 text-white/90 text-sm">
                          <ZoomIn className="w-4 h-4" />
                          <span className="font-semibold">Tap to expand</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll indicator dots */}
            <div className="flex justify-center gap-2 mt-4">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`gallery-dot h-1.5 rounded-full transition-all ${
                    index === 0 ? 'w-6 bg-gradient-to-r from-primary to-secondary' : 'w-1.5 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop/Tablet Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedId(item.id)}
              className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:shadow-2xl aspect-square"
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity ${
                hoveredId === item.id ? 'opacity-100' : 'opacity-60'
              }`}></div>

              {/* Content - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded uppercase">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-white font-bold text-sm sm:text-base line-clamp-1">
                  {item.alt}
                </h3>
                
                {/* Zoom indicator */}
                <div className={`mt-2 flex items-center gap-1 text-white text-xs transition-all ${
                  hoveredId === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <ZoomIn className="w-3 h-3" />
                  <span>View</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .line-clamp-1 {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>

        {/* Bottom CTA - Full Width */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left text-white">
              <h3 className="text-xl sm:text-2xl font-black mb-2">
                Love What You See?
              </h3>
              <p className="text-sm text-white/90">
                Visit our projects to experience the quality firsthand
              </p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-primary rounded-xl font-bold text-sm hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedId !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedId(null)}
        >
          <div className="relative max-w-6xl w-full h-[85vh]" onClick={(e) => e.stopPropagation()}>
            {/* Main image */}
            <img
              src={galleryItems.find((item) => item.id === selectedId)?.src}
              alt="Gallery"
              className="w-full h-full object-contain rounded-2xl"
            />
            
            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateModalImage('prev') }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110"
              aria-label="Previous"
            >
              <ChevronLeft size={28} className="text-white" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateModalImage('next') }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110"
              aria-label="Next"
            >
              <ChevronRight size={28} className="text-white" />
            </button>

            {/* Close button */}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110"
              aria-label="Close"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Image info bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent backdrop-blur-md rounded-b-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-black text-lg sm:text-xl mb-1">
                    {galleryItems.find((item) => item.id === selectedId)?.alt}
                  </p>
                  <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    {galleryItems.find((item) => item.id === selectedId)?.category}
                  </span>
                </div>
                <div className="text-white/60 text-sm font-bold">
                  {galleryItems.findIndex(item => item.id === selectedId) + 1} / {galleryItems.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}