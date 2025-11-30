"use client"

import { useState, useEffect } from "react"
import { Calendar, User, ArrowRight, Sparkles, ChevronRight } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    title: "Mahalaxmi Launches New Luxury Residential Complex",
    excerpt:
      "Introducing our latest project featuring smart homes and sustainable living spaces in the heart of the city.",
    fullContent:
      "The Mahalaxmi Luxury Residential Complex marks a new milestone in sustainable architecture. Each unit is designed with eco-conscious materials, smart home integration, and green terraces for a natural lifestyle. Residents can enjoy modern amenities, lush gardens, and easy access to urban hotspots. This launch redefines urban luxury with purpose and sustainability at its core.",
    date: "March 15, 2025",
    author: "Mahalaxmi Team",
    category: "Project Launch",
    image: "/luxury-residential-complex.png",
  },
  {
    id: 2,
    title: "Sustainable Development: Our Commitment to Green Living",
    excerpt:
      "Learn how Mahalaxmi Infra is pioneering eco-friendly construction practices and green spaces.",
    fullContent:
      "At Mahalaxmi Infra, sustainability isn't just a trend — it's a commitment. From solar energy integration to rainwater harvesting, every project embraces green building standards. Our mission is to create living spaces that harmonize with nature while minimizing carbon footprint, offering a healthier and cleaner future for generations to come.",
    date: "March 10, 2025",
    author: "Sustainability Team",
    category: "Sustainability",
    image: "/green-sustainable-residential-development.jpg",
  },
  {
    id: 3,
    title: "Customer Success Story: From Dream to Reality",
    excerpt:
      "Meet the families who found their perfect home with Mahalaxmi. Read their inspiring stories.",
    fullContent:
      "For many families, Mahalaxmi projects have turned their dream homes into reality. Our customer-first approach ensures personalized experiences — from choosing the right floor plan to post-possession support. Their heartfelt testimonials remind us why we build not just homes, but lifelong happiness.",
    date: "March 5, 2025",
    author: "Marketing Team",
    category: "Success Stories",
    image: "/happy-family-new-home.jpg",
  },
]

export default function NewsArticles() {
  const [selectedArticle, setSelectedArticle] = useState(newsArticles[0])

  return (
    <section id="news" className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Compact Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-bold uppercase tracking-wider">
              Latest Updates
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-3 leading-tight">
            News &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              Articles
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest news and insights
          </p>
        </div>

        {/* Featured Article + List Layout */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Left - Featured Article (Large) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              
              {/* Image */}
              <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Category */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold rounded-full">
                    {selectedArticle.category}
                  </span>
                </div>

                {/* Date */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-semibold">{selectedArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <User className="w-4 h-4" />
                    <span className="text-sm font-semibold">{selectedArticle.author}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 leading-tight">
                  {selectedArticle.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  {selectedArticle.excerpt}
                </p>

                <div className="p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 mb-6">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {selectedArticle.fullContent}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-sm hover:shadow-xl hover:scale-105 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Article List */}
          <div className="space-y-4">
            <h3 className="text-lg font-black text-gray-900 mb-4">All Articles</h3>
            
            {newsArticles.map((article) => (
              <button
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className={`w-full text-left bg-white rounded-xl p-4 transition-all duration-300 border-2 ${
                  selectedArticle.id === article.id
                    ? 'border-primary shadow-lg scale-105'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="flex gap-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs font-bold rounded mb-1">
                      {article.category}
                    </span>
                    <h4 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2">
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}

            {/* View All CTA */}
            <a
              href="#news"
              className="block w-full p-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-sm text-center hover:shadow-xl transition-all"
            >
              View All News
            </a>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-gray-900 rounded-2xl p-6 sm:p-8 text-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-sm text-gray-300">
                Get the latest updates delivered to your inbox
              </p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-gray-900 rounded-xl font-bold text-sm hover:scale-105 transition-all whitespace-nowrap flex items-center gap-2"
            >
              Subscribe Now
              <ChevronRight className="w-4 h-4" />
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