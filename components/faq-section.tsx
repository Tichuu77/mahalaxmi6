"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, MessageCircle, Sparkles, Phone, Mail, Search, ArrowRight, CheckCircle } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "What types of properties do you offer?",
    answer: "We offer a wide range of residential and commercial plots in prime locations across Nagpur, including Besa, Beltarodi, Shankarpur, Wardha Road, and more. All properties are NMRDA sanctioned and RERA approved.",
    category: "Properties"
  },
  {
    id: 2,
    question: "What is the price range for your plots?",
    answer: "Our plots start from ₹22 Lakh onwards, depending on the location, size, and amenities. We offer flexible payment plans and financing options to suit various budgets.",
    category: "Pricing"
  },
  {
    id: 3,
    question: "Are all your projects RERA approved?",
    answer: "Yes, all our projects are 100% RERA approved and NMRDA sanctioned. We ensure complete legal compliance and transparency in all our dealings.",
    category: "Legal"
  },
  {
    id: 4,
    question: "What financing options are available?",
    answer: "We offer multiple financing options including bank loans, in-house payment plans, and EMI facilities. Our team will help you choose the best option based on your financial situation.",
    category: "Finance"
  },
  {
    id: 5,
    question: "How can I schedule a site visit?",
    answer: "You can schedule a site visit by contacting us through our website, calling our helpline, or using the WhatsApp button. Our team will confirm your visit within 24 hours and provide all necessary details.",
    category: "Visits"
  },
  {
    id: 6,
    question: "What amenities are included?",
    answer: "Our properties come with world-class amenities including 24/7 security, power backup, green spaces, community halls, and more. Specific amenities vary by project location.",
    category: "Amenities"
  },
]

export   function FAQSection() {
  const [openId, setOpenId] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-white relative overflow-hidden">
      
      <style>{`
        @keyframes expandDown {
          from {
            opacity: 0;
            transform: scaleY(0);
            transform-origin: top;
          }
          to {
            opacity: 1;
            transform: scaleY(1);
          }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Minimal Background Pattern */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Different Style */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-start gap-6 mb-8">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary blur-xl opacity-50" />
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-2xl animate-bounce-slow">
                  <HelpCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 mb-3 leading-tight">
                Frequently Asked
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Questions
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Everything you need to know about our properties and services
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-20" />
            <div className="relative flex items-center gap-3 bg-white border-2 border-gray-200 rounded-2xl px-5 py-4 shadow-xl focus-within:border-primary transition-colors">
              <Search className="w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search your question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none text-base"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="text-sm font-bold text-primary hover:text-secondary transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Grid - Two Column Layout */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openId === faq.id
              
              return (
                <div
                  key={faq.id}
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className={`cursor-pointer group relative bg-gradient-to-br transition-all duration-300 rounded-2xl overflow-hidden ${
                    isOpen 
                      ? "from-primary via-secondary to-primary shadow-2xl scale-[1.02] sm:col-span-2" 
                      : "from-gray-50 to-white border-2 border-gray-200 hover:border-primary/50 hover:shadow-lg"
                  }`}
                >
                  {/* Header Area */}
                  <div className={`p-5 sm:p-6 ${isOpen ? 'pb-4' : ''}`}>
                    <div className="flex items-start gap-4">
                      {/* Icon Circle */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isOpen 
                          ? "bg-white/20 backdrop-blur-sm" 
                          : "bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20"
                      }`}>
                        {isOpen ? (
                          <CheckCircle className="w-6 h-6 text-white" />
                        ) : (
                          <HelpCircle className="w-6 h-6 text-primary" />
                        )}
                      </div>

                      {/* Question */}
                      <div className="flex-1 min-w-0">
                        <h3
                          style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
                          className={`font-bold text-base sm:text-lg leading-snug mb-2 transition-colors ${
                            isOpen ? "text-white" : "text-gray-900 group-hover:text-primary"
                          }`}
                        >
                          {faq.question}
                        </h3>
                        
                        {/* Category Tag */}
                        <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                          isOpen 
                            ? "bg-white/20 text-white backdrop-blur-sm" 
                            : "bg-primary/10 text-primary"
                        }`}>
                          {faq.category}
                        </span>
                      </div>

                      {/* Arrow Icon */}
                      <ChevronDown
                        className={`w-6 h-6 flex-shrink-0 transition-all duration-300 ${
                          isOpen ? "rotate-180 text-white" : "text-gray-400 group-hover:text-primary"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Answer Area - Only shown when open */}
                  {isOpen && (
                    <div 
                      className="px-5 sm:px-6 pb-5 sm:pb-6"
                      style={{ animation: 'expandDown 0.3s ease-out' }}
                    >
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20">
                        <p className="text-white/95 leading-relaxed text-sm sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })
          ) : (
            <div className="sm:col-span-2 text-center py-16 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 font-semibold text-lg mb-2">No results found</p>
              <p className="text-gray-500 text-sm">Try a different search term</p>
            </div>
          )}
        </div>

        {/* Bottom Section - Horizontal Cards */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Contact Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full" />
              
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                  Still Need Help?
                </h3>
                <p className="text-white/80 text-sm mb-5">
                  Our team is available 24/7 to answer your questions
                </p>
                
                <div className="space-y-3">
                  <a
                    href="tel:+919168058124"
                    className="flex items-center gap-3 text-white hover:text-white/80 transition-colors group/link"
                  >
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover/link:bg-white/20 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-white/60">Call Us</div>
                      <div className="text-sm font-bold">+91 9168058124</div>
                    </div>
                  </a>
                  
                  <a
                    href="mailto:rajeshgingle@gmail.com"
                    className="flex items-center gap-3 text-white hover:text-white/80 transition-colors group/link"
                  >
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover/link:bg-white/20 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-white/60">Email Us</div>
                      <div className="text-sm font-bold">Get in Touch</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-gray-100 overflow-hidden">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-primary/5 to-transparent rounded-tr-full" />
              
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
                  Ready to Start?
                </h3>
                <p className="text-gray-600 text-sm mb-5">
                  Let's discuss your property investment journey today
                </p>
                
                <button 
                  onClick={() => {
                    const element = document.getElementById("contact")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-base hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  Contact Us Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Response within 24 hours guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}