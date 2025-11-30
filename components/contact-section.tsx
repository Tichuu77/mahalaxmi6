"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Award, Sparkles, User, MessageSquare } from "lucide-react"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("idle")

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    if (!formState.name || !formState.email || !formState.subject || !formState.message) {
      setSubmitStatus("error")
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 3000)
      return
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })

      if (res.ok) {
        setSubmitStatus("success")
        setFormState({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => setSubmitStatus("idle"), 3000)
      }
    } catch (error) {
      console.error(error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Left Aligned */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse-ring" />
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl">
                <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
            <div className="h-px flex-1 max-w-[150px] bg-gradient-to-r from-primary to-transparent" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
            Let's Connect
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Ready to start your property journey? Reach out and let's make it happen together.
          </p>
        </div>

        {/* Main Content - Form First on Mobile */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Form - Takes 3 columns on desktop, full width on mobile */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              {submitStatus === "success" ? (
                <div className="p-8 sm:p-12 text-center">
                  <div className="relative inline-flex mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-50" />
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl">
                      <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-3">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">We've received your message and will respond within 24 hours.</p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:scale-105 transition-all shadow-lg"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  {/* Form Header with Gradient */}
                  <div className="bg-gradient-to-r from-primary to-secondary p-6 sm:p-8">
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">Get In Touch</h3>
                    <p className="text-white/90 text-sm sm:text-base">We'd love to hear from you. Fill out the form below.</p>
                  </div>

                  {/* Form Fields */}
                  <div className="p-6 sm:p-8 space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="flex items-center gap-2 text-gray-900 font-bold text-sm">
                        <User className="w-4 h-4 text-primary" />
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="flex items-center gap-2 text-gray-900 font-bold text-sm">
                        <Mail className="w-4 h-4 text-primary" />
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="flex items-center gap-2 text-gray-900 font-bold text-sm">
                        <MessageSquare className="w-4 h-4 text-primary" />
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                        placeholder="How can we help?"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="flex items-center gap-2 text-gray-900 font-bold text-sm">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all resize-none outline-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    {/* Error Message */}
                    {submitStatus === "error" && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-red-600 font-bold text-xs">!</span>
                        </div>
                        <span>Please fill in all required fields correctly.</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full px-6 py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all hover:shadow-2xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Contact Info Sidebar - Takes 2 columns on desktop */}
          <div className="lg:col-span-2 order-1 lg:order-2 space-y-6">
            
            {/* Contact Info Stack */}
            <div className="space-y-4">
              {/* Phone */}
              <a 
                href="tel:+919822172379"
                className="block group"
                style={{ animation: 'slideInLeft 0.5s ease-out' }}
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-primary">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Call Us</div>
                      <div className="text-gray-900 font-bold text-lg group-hover:text-primary transition-colors">
                        +91 9822172379
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    Available Mon-Fri, 9am-6pm
                  </div>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:rajeshgingle@gmail.com"
                className="block group"
                style={{ animation: 'slideInLeft 0.5s ease-out', animationDelay: '0.1s' }}
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-secondary">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Email Us</div>
                      <div className="text-gray-900 font-bold text-sm group-hover:text-secondary transition-colors truncate">
                        rajeshgingle@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <CheckCircle className="w-3 h-3" />
                    Response within 24 hours
                  </div>
                </div>
              </a>

              {/* Location */}
              <div 
                className="bg-white border border-gray-200 rounded-2xl p-6"
                style={{ animation: 'slideInLeft 0.5s ease-out', animationDelay: '0.2s' }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Location</div>
                    <div className="text-gray-900 font-bold text-sm leading-snug">
                      Nagpur, Maharashtra<br />India 441106
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Card */}
            <div 
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
              style={{ animation: 'slideInLeft 0.5s ease-out', animationDelay: '0.3s' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/20 to-transparent rounded-tr-full" />
              
              <div className="relative">
                <Award className="w-10 h-10 text-white mb-4" />
                <h3 className="text-xl font-black text-white mb-4">
                  Why Choose Us?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">24/7 Support</p>
                      <p className="text-xs text-white/70">Always here when you need us</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">Expert Team</p>
                      <p className="text-xs text-white/70">Professional guidance guaranteed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">500+ Happy Clients</p>
                      <p className="text-xs text-white/70">Join our satisfied customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}