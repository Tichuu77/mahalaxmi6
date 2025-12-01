"use client"

import { useState } from "react"
import { ArrowRight, MapPin, Phone, Building2, Sparkles, Star, ChevronRight } from "lucide-react"

type Project = {
  id: number
  title: string
  image: string
  description: string
  location: string
  status: string
}

const projects: {
  completed: Project[]
  ongoing: Project[]
  upcoming: Project[]
} = {
  ongoing: [
    {
      id: 2,
      title: "Mahalaxmi Nagar-31",
      image: "/ongoingProject8.webp",
      description: `This Project Ready to Move and Fully Residential Layout Are Located Besa-Pipla Road Opposite Zudio, Croma on Prime Location and upto 90% Bank Finance Available.`,
      location: `MOUZA - PIPLA`,
      status: "ongoing"
    },
    {
      id: 3,
      title: "Mahalaxmi Nagar-39",
      image: "/ongoingProject5.webp",
      description: `Katol Road Mahalaxmi Infra Launched Project Mahalaxmi Nagar-39 This Project Located Fetri (Chicholi) New Outer Ring Road Touch Layout.`,
      location: `MOUZA - CHICHOLI`,
      status: "ongoing"
    },
    {
      id: 4,
      title: "Mahalaxmi Nagar-41",
      image: "/ongoingProject3.webp",
      description: `Located Near Samruddhi Mahamarg on South Nagpur Premium Layout Mahalaxmi Nagar-41 This Premium Luxury Club House & Swimming Pool NMRDA & RL Project Aminities and Easy Bank Finance Available upto 90% 
A Prime Location in Nagpur for Smart Investment.`,
      location: `MOUZA - GOMGAON`,
      status: "ongoing"
    },
    {
      id: 5,
      title: "Mahalaxmi Nagar - 42",
      image: "/ongoingProject2.webp",
      description: `Mahalaxmi Nagar – 42, near Jamtha on Wardha Road, offers well-connected plots perfect for homes or businesses. Approved by NMRDA and equipped with RL, this project comes with excellent amenities and easy bank finance options.
Best for investment to buy plots in Nagpur.`,
      location: `MOUZA - JAMTHA`,
      status: "ongoing"
    },
    {
      id: 6,
      title: "Mahalaxmi Nagar - 43",
      image: "/ongoingProject10.webp",
      description: `Ready to Move Project by Mahalaxmi Nagar-43 offering Residential Plot With Aminities Behind Royal Gondwana School & Singapure City Shankarpur, Nagpur 
An Affordable Price & Fully Developed NMRDA & RL upto 90% Bank Finance Available.`,
      location: `MOUZA - SHANKARPUR`,
      status: "ongoing"
    },
    {
      id: 7,
      title: "Mahalaxmi Nagar - 45",
      image: "/ongoingProject11.webp",
      description: `Mahalaxmi Nagar-45 is a Premium Residential Plotted Development Project Located South Nagpur Near Samruddhi Mahamarg
Location - The Project is Situated in Mouza - Sumthana Behind Godrej Properties Close to D- Mart Connectivity - The Location Offers Excellent Connectivity to Major City Hubs, Including Nagpur Airport, AIIMS, IIM, TCS, INFOSYS,TECH MAHINDRA, Patanjali as soon as Mihan.`,
      location: `MOUZA - SHANKARPUR`,
      status: "ongoing"
    },
    {
      id: 11,
      title: "Mahalaxmi Nagar - 47",
      image: "/ongoingProject12.jpg",
      description: `Mahalaxmi Infra New Project Launch In Koradi Road,(Nanda) This Project Located are Behind Haldiram,AM Cinema,Rokde Jwellers & Naivedyam Hotel
This Project Fully NMRDA & RL Residential Plotted Project With upto 90% Bank Finance Available.`,
      location: `MOUZA - KORADI ROAD HALDIRAM & AM CINEMA BACKSIDE`,
      status: "ongoing"
    },
  ],
  completed: [
    {
      id: 12,
      title: "Mahalaxmi Nagar - 37",
      image: "/completedProject1.webp",
      description: `Mahalaxmi Infra launched the project Mahalaxmi Nagar 37. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
      location: `MOUZA - KOTEWADA`,
      status: "completed"
    },
    {
      id: 13,
      title: "Mahalaxmi Nagar - 35",
      image: "/completedProject2.webp",
      description: `Mahalaxmi Infra launched the project Mahalaxmi Nagar 35. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
      location: `MOUZA - KOTEWADA`,
      status: "completed"
    },
    {
      id: 14,
      title: "Mahalaxmi Nagar - 34",
      image: "/completedProject3.webp",
      description: `Mahalaxmi Infra launched the project Mahalaxmi Nagar 34. The layout is NIT / NMRDA sanctioned with RL. Bank finance is available 75% to 80% from any nationalized bank.`,
      location: `MOUZA - BAHADURA`,
      status: "completed"
    },
  ],
  upcoming: [
    {
      id: 15,
      title: "Mahalaxmi Nagar - 48",
      image: "/plotDef.avif",
      description: ``,
      location: ``,
      status: "upcoming"
    },
    {
      id: 16,
      title: "Mahalaxmi Nagar - 49",
      image: "/plotDef.avif",
      description: ``,
      location: ``,
      status: "upcoming"
    },
    {
      id: 17,
      title: "Mahalaxmi Nagar - 50",
      image: "/plotDef.avif",
      description: ``,
      location: ``,
      status: "upcoming"
    },
  ]
}

function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const statusConfig = {
    completed: { label: "Completed", color: "bg-primary" },
    ongoing: { label: "Ongoing", color: "bg-secondary" },
    upcoming: { label: "Upcoming", color: "bg-tcol" },
  }

  const config = statusConfig[project.status as keyof typeof statusConfig]

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${project.title}. Please share more details.`
    const url = `https://wa.me/+919168058124?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
      
      {/* Image Container - Top */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Status Badge - Top Right */}
        <div className="absolute top-3 right-3">
          <div className={`${config.color} text-white px-3 py-1 rounded-full text-xs font-bold uppercase`}>
            {config.label}
          </div>
        </div>

        {/* Project Number - Bottom Left */}
        <div className="absolute bottom-3 left-3">
          <div className="text-white text-4xl font-black">
            {project.title.split('-')[1] || project.id}
          </div>
        </div>
      </div>

      {/* Content - Below Image */}
      <div className="p-5 space-y-3">
        
        {/* Title */}
        <h3 className="text-xl font-black text-gray-900 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Location */}
        {project.location && (
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
            <span className="font-semibold line-clamp-1">{project.location}</span>
          </div>
        )}

        {/* Description */}
        {project.description && (
          <div>
            <p className={`text-sm text-gray-600 leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
              {project.description}
            </p>
            {project.description.length > 150 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-secondary text-xs font-bold mt-1 hover:underline"
              >
                {isExpanded ? 'Show less' : 'Read more'}
              </button>
            )}
          </div>
        )}

        {/* Tags */}
        <div className="flex gap-2 pt-2">
          <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded">NMRDA</span>
          <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded">90% Finance</span>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleWhatsApp}
          className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2 group-hover:gap-3"
        >
          <Phone className="w-4 h-4" />
          Contact Now
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export   function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "completed" | "ongoing" | "upcoming">("all")

  const allProjects = [
    ...projects.ongoing,
    ...projects.completed,
    ...projects.upcoming,
  ]

  const filteredProjects =
    activeTab === "all"
      ? allProjects
      : allProjects.filter((project) => project.status === activeTab)

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Top Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 mb-4">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-bold uppercase tracking-wider">
              Our Projects
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-3 leading-tight">
            Latest{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              Developments
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Premium residential projects across Nagpur's most sought-after locations
          </p>
        </div>

        {/* Stats + Filters Combined Row */}
        <div className="mb-10 sm:mb-12">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-3 sm:gap-4">
            
            {/* Stats Pills */}
            <div className="px-4 py-2 bg-white rounded-xl shadow-md border border-gray-200 text-center">
              <span className="text-xl sm:text-2xl font-black text-primary">{projects.ongoing.length}</span>
              <span className="text-xs text-gray-600 font-semibold ml-1">Ongoing</span>
            </div>
            <div className="px-4 py-2 bg-white rounded-xl shadow-md border border-gray-200 text-center">
              <span className="text-xl sm:text-2xl font-black text-secondary">{projects.completed.length}</span>
              <span className="text-xs text-gray-600 font-semibold ml-1">Completed</span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-8 w-px bg-gray-300"></div>

            {/* Filter Tabs */}
            {[
              { label: "All", value: "all" },
              { label: "Ongoing", value: "ongoing" },
              { label: "Completed", value: "completed" },
              { label: "Upcoming", value: "upcoming" }
            ].map(tab => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value as any)}
                className={`px-4 py-2 rounded-xl font-bold text-sm transition-all ${
                  activeTab === tab.value
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Simple 3-Column Grid */}
        <div>
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl">
              <div className="text-6xl mb-4">🏗️</div>
              <p className="text-gray-600 font-bold text-xl">No projects found</p>
            </div>
          )}
        </div>

        {/* Bottom CTA - Different Style */}
        <div className="mt-16 sm:mt-20">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border-2 border-gray-100 relative overflow-hidden">
            
            {/* Decorative gradient corner */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl sm:text-4xl font-black text-gray-900 mb-4">
                Ready to Find Your Perfect Plot?
              </h3>
              
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Connect with our expert team for personalized project recommendations and exclusive deals
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Get Started
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+919168058124"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary border-2 border-primary rounded-xl font-bold hover:bg-primary/5 transition-all"
                >
                  Call Now
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}