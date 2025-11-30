"use client"

import { useEffect, useState } from "react"
import { Award, Users, Building2, CheckCircle2, TrendingUp, Shield, Home, Target, Sparkles } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0, sqft: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            animateCounters()
          }
        })
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById("about")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const targets = { projects: 50, clients: 1000, years: 20, sqft: 500 }
    const duration = 2000
    const steps = 60
    const increment = duration / steps

    let current = { projects: 0, clients: 0, years: 0, sqft: 0 }

    const timer = setInterval(() => {
      current.projects = Math.min(current.projects + targets.projects / steps, targets.projects)
      current.clients = Math.min(current.clients + targets.clients / steps, targets.clients)
      current.years = Math.min(current.years + targets.years / steps, targets.years)
      current.sqft = Math.min(current.sqft + targets.sqft / steps, targets.sqft)

      setCounters({
        projects: Math.floor(current.projects),
        clients: Math.floor(current.clients),
        years: Math.floor(current.years),
        sqft: Math.floor(current.sqft)
      })

      if (
        current.projects >= targets.projects &&
        current.clients >= targets.clients &&
        current.years >= targets.years &&
        current.sqft >= targets.sqft
      ) {
        clearInterval(timer)
        setCounters(targets)
      }
    }, increment)
  }

  const stats = [
    { value: counters.projects, suffix: "+", label: "Completed Projects", icon: Building2, color: "from-primary to-secondary" },
    { value: counters.clients, suffix: "+", label: "Happy Families", icon: Users, color: "from-secondary to-primary" },
    { value: counters.years, suffix: "+", label: "Years of Trust", icon: Award, color: "from-primary to-tcol" },
    { value: counters.sqft, suffix: "K+", label: "Total Area", icon: TrendingUp, color: "from-tcol to-secondary" }
  ]

  const features = [
    { icon: Award, title: "Premium Quality", desc: "Top-grade materials and construction" },
    { icon: Shield, title: "Fully Legal", desc: "Complete documentation & approvals" },
    { icon: Target, title: "Prime Locations", desc: "Strategic & accessible locations" },
    { icon: Home, title: "Modern Design", desc: "Contemporary style & architecture" }
  ]

  const badges = [
    { icon: Shield, title: "NMRDA", subtitle: "Sanctioned" },
    { icon: CheckCircle2, title: "RERA", subtitle: "Approved" },
    { icon: Award, title: "ISO", subtitle: "Certified" }
  ]

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Top Stats Bar */}
        <div className={`mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <Icon className={`w-8 h-8 mb-3 text-transparent bg-clip-text bg-gradient-to-br ${stat.color}`} style={{filter: 'drop-shadow(0 0 8px rgba(255,107,107,0.3))'}} />
                  <div className="text-3xl font-black text-gray-900 mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Main Content - Reversed Layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Side - Content First */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-bold uppercase tracking-wider">
                About Mahalaxmi
              </span>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
                Building Dreams Into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                  Reality
                </span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-base text-gray-700 leading-relaxed">
                With <span className="font-bold text-primary">{counters.years}+ years of excellence</span>, Mahalaxmi Infra is a
                <span className="font-semibold text-secondary"> trusted name</span> delivering premium
                residential and commercial spaces across Nagpur.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                We ensure <span className="text-primary font-semibold">legal transparency</span> and unmatched value,
                helping <span className="font-bold text-secondary">{counters.clients}+ families</span> find their dream homes.
              </p>
            </div>

            {/* Features Grid - Horizontal */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{feature.title}</h4>
                      <p className="text-xs text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA Button */}
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary via-secondary to-primary text-white rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Explore Our Projects →
            </a>
          </div>

          {/* Right Side - Image with Overlay Cards */}
          <div className={`relative transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <img
                src="/aboutUs.webp"
                alt="About Mahalaxmi Infra"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating Badges - Different Position */}
            <div className="absolute -bottom-6 -left-6 right-6 grid grid-cols-3 gap-3">
              {badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-2`}>
                      <badge.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-black text-gray-900">{badge.title}</div>
                      <div className="text-xs text-gray-600">{badge.subtitle}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Years Badge - Top Left */}
            <div className="absolute top-6 left-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    {counters.years}+
                  </div>
                  <div className="text-xs text-gray-600 font-semibold">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}