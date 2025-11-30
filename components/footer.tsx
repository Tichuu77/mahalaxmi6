import { Mail, Phone, MapPin, Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export   function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 relative overflow-hidden">
      
      <style>{`
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
      `}</style>

      {/* Top Accent Line */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">
          
          {/* Brand Column - Spans 4 columns */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-26 h-26   rounded-xl p-2 shadow-xl">
                <img src="/Malaxmi-Final-Logo.-2png.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span
                  style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
                  className="font-black text-white text-xl block leading-tight"
                >
                  Mahalaxmi Infra
                </span>
                <span className="text-white/60 text-xs">Premium Real Estate</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Delivering premium real estate solutions with excellence and innovation. Your trusted partner in property investment.
            </p>
            
        
          </div>

          {/* Quick Links - Spans 2 columns */}
          <div className="lg:col-span-2">
            <h4
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="font-black text-white text-base mb-5"
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                {href : "#about", label : "About Us"}, 
                {href : "#amenities", label : "Amenities"}, 
                {href : "#projects", label : "Projects"}, 
                {label: "Gallery", href: "#gallery"},
                {label: "User Guide", href: "#user-guide"},
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="group flex items-center gap-2 text-white/60 hover:text-white transition-all text-sm"
                  >
                    <div className="w-1 h-1 rounded-full bg-primary group-hover:w-2 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources - Spans 2 columns */}
          <div className="lg:col-span-2">
            <h4
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="font-black text-white text-base mb-5"
            >
              Resources
            </h4>
            <ul className="space-y-2.5">
              {[
                {label: "News & Updates", href: "#news"}, 
                {href: "#testimonials", label: "Testimonials"}, 
                {href: "#faq", label: "FAQ"},
                {href: "#contact", label: "Contact Us"},
                {href: "#why-choose-us", label: "Why Choose Us"},
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="group flex items-center gap-2 text-white/60 hover:text-white transition-all text-sm"
                  >
                    <div className="w-1 h-1 rounded-full bg-secondary group-hover:w-2 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Spans 4 columns */}
          <div className="lg:col-span-4">
            <h4
              style={{ fontFamily: "var(--font-heading, Poppins, sans-serif)" }}
              className="font-black text-white text-base mb-5"
            >
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="text-white/90 text-sm font-semibold mb-3">
                Rajesh Ingle
              </div>
              
              <a 
                href="tel:+919822172379"
                className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-secondary transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-white/50">Phone</p>
                  <p className="text-sm font-semibold">+91 9822172379</p>
                </div>
              </a>
              
              <a 
                href="mailto:rajeshgingle@gmail.com"
                className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-secondary transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-white/50">Email</p>
                  <p className="text-sm font-semibold break-all">rajeshgingle@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-3 text-white/60">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-white/50">Location</p>
                  <p className="text-sm font-semibold">Nagpur, Maharashtra, India 441106</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with Gradient */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <p className="flex items-center gap-1.5">
            © {currentYear} Mahalaxmi Infra. All rights reserved.
          </p>
          
          <p className="flex items-center gap-1.5">
            Made with 
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-heartbeat" /> 
            in India
          </p>
        </div>
      </div>
    </footer>
  )
}