"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  Code,
  Smartphone,
  Palette,
  Database,
  MessageCircle,
  Search,
  Server,
  Clock,
  Star,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Play,
  CheckCircle,
  TrendingUp,
  Shield,
  Target,
  Rocket,
  Plus,
  Minus,
  Quote,
  Calendar,
  ExternalLink,
  Sparkles,
} from "lucide-react"
import { ProjectModal } from "@/components/project-modal"
import { LiveChat } from "@/components/live-chat"
import { NewsletterPopup } from "@/components/newsletter-popup"
import { StaggeredAnimation } from "@/components/scroll-animations"
import { Sun, Moon } from "lucide-react"

export default function AbixAgencyLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0)
  const [activeTab, setActiveTab] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    satisfaction: 0,
  })

  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [showModal, setShowModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [showChat, setShowChat] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [showNewsletter, setShowNewsletter] = useState(false)

  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Loading animation
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1000)
  }, [])

  // Counter animation
  useEffect(() => {
    const animateCounters = () => {
      const targets = { projects: 500, clients: 200, experience: 8, satisfaction: 99 }
      const duration = 2000
      const steps = 60
      const stepTime = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        const easeOut = 1 - Math.pow(1 - progress, 3)

        setCounters({
          projects: Math.floor(targets.projects * easeOut),
          clients: Math.floor(targets.clients * easeOut),
          experience: Math.floor(targets.experience * easeOut),
          satisfaction: Math.floor(targets.satisfaction * easeOut),
        })

        if (step >= steps) {
          clearInterval(timer)
          setCounters(targets)
        }
      }, stepTime)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Scroll detection and section tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Track active section
      const sections = ["home", "services", "about", "portfolio", "process", "team", "pricing", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Newsletter popup
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewsletter(true)
    }, 30000) // Show after 30 seconds
    return () => clearTimeout(timer)
  }, [])

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["React/Next.js", "Node.js", "Full-Stack", "E-commerce"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "iOS/Android", "Cross-platform"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design & Branding",
      description: "Beautiful, user-centered designs that enhance your brand identity",
      features: ["Figma", "Adobe Suite", "Prototyping", "Brand Identity"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "CRM/ERP Systems",
      description: "Streamline your business processes with custom management solutions",
      features: ["Custom CRM", "ERP Solutions", "Automation", "Integration"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: MessageCircle,
      title: "Telegram Bots",
      description: "Automated chatbots and integrations for enhanced customer engagement",
      features: ["Bot Development", "API Integration", "Automation", "Analytics"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      description: "Boost your online presence and drive targeted traffic to your business",
      features: ["SEO Optimization", "Content Marketing", "Social Media", "Analytics"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Server,
      title: "Hosting & IT Support",
      description: "Reliable hosting solutions and comprehensive technical support",
      features: ["Cloud Hosting", "24/7 Support", "Maintenance", "Security"],
      color: "from-teal-500 to-blue-500",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets with advanced security solutions",
      features: ["Security Audit", "Penetration Testing", "Compliance", "Monitoring"],
      color: "from-red-500 to-pink-500",
    },
  ]

  const technologies = [
    { name: "React", logo: "/placeholder.svg?height=60&width=60", category: "Frontend" },
    { name: "Next.js", logo: "/placeholder.svg?height=60&width=60", category: "Framework" },
    { name: "Node.js", logo: "/placeholder.svg?height=60&width=60", category: "Backend" },
    { name: "Python", logo: "/placeholder.svg?height=60&width=60", category: "Backend" },
    { name: "MongoDB", logo: "/placeholder.svg?height=60&width=60", category: "Database" },
    { name: "PostgreSQL", logo: "/placeholder.svg?height=60&width=60", category: "Database" },
    { name: "AWS", logo: "/placeholder.svg?height=60&width=60", category: "Cloud" },
    { name: "Docker", logo: "/placeholder.svg?height=60&width=60", category: "DevOps" },
    { name: "Kubernetes", logo: "/placeholder.svg?height=60&width=60", category: "DevOps" },
    { name: "TypeScript", logo: "/placeholder.svg?height=60&width=60", category: "Language" },
    { name: "GraphQL", logo: "/placeholder.svg?height=60&width=60", category: "API" },
    { name: "Redis", logo: "/placeholder.svg?height=60&width=60", category: "Cache" },
  ]

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "10+ years of experience in tech leadership and business development",
      skills: ["Leadership", "Strategy", "Business Development"],
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "Sarah Chen",
      role: "CTO & Lead Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Full-stack developer with expertise in modern web technologies",
      skills: ["React", "Node.js", "System Architecture"],
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Designer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Creative designer focused on user experience and brand identity",
      skills: ["UI/UX", "Branding", "Figma"],
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "Emily Davis",
      role: "Project Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Agile project management expert ensuring timely delivery",
      skills: ["Project Management", "Agile", "Communication"],
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "David Kim",
      role: "Mobile Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Specialized in React Native and Flutter development",
      skills: ["React Native", "Flutter", "iOS/Android"],
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "Lisa Wang",
      role: "Digital Marketing Specialist",
      image: "/placeholder.svg?height=300&width=300",
      bio: "SEO and digital marketing expert with proven results",
      skills: ["SEO", "Content Marketing", "Analytics"],
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap",
      icon: Target,
      duration: "1-2 weeks",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes, mockups, and interactive prototypes",
      icon: Palette,
      duration: "2-3 weeks",
    },
    {
      step: "03",
      title: "Development",
      description: "Building your solution with clean, scalable, and maintainable code",
      icon: Code,
      duration: "4-12 weeks",
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Comprehensive testing to ensure quality and performance",
      icon: CheckCircle,
      duration: "1-2 weeks",
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "Deployment and ongoing maintenance and support",
      icon: Rocket,
      duration: "Ongoing",
    },
  ]

  const caseStudies = [
    {
      title: "E-commerce Revolution",
      client: "TechMart Inc.",
      category: "E-commerce Platform",
      image: "/placeholder.svg?height=400&width=600",
      description: "Complete e-commerce solution with advanced features and integrations",
      challenge: "Client needed a scalable e-commerce platform to handle high traffic and complex inventory management",
      solution:
        "Built a custom Next.js application with microservices architecture, integrated payment gateways, and real-time inventory tracking",
      results: ["300% increase in sales", "50% faster page load times", "99.9% uptime achieved"],
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS"],
      duration: "4 months",
      testimonial:
        "Abix Agency transformed our online presence completely. Sales increased by 300% within the first quarter.",
    },
    {
      title: "Healthcare Management System",
      client: "MediCare Solutions",
      category: "Healthcare Platform",
      image: "/placeholder.svg?height=400&width=600",
      description: "Comprehensive patient management and telemedicine platform",
      challenge: "Healthcare provider needed a HIPAA-compliant system for patient management and virtual consultations",
      solution:
        "Developed a secure, scalable platform with video calling, appointment scheduling, and electronic health records",
      results: [
        "500+ healthcare providers onboarded",
        "10,000+ patients served",
        "40% reduction in administrative costs",
      ],
      technologies: ["React", "Python", "PostgreSQL", "WebRTC", "Docker"],
      duration: "6 months",
      testimonial: "The platform has revolutionized how we deliver healthcare services to our patients.",
    },
    {
      title: "FinTech Mobile App",
      client: "PayFlow Technologies",
      category: "Mobile Application",
      image: "/placeholder.svg?height=400&width=600",
      description: "Secure mobile banking and payment application",
      challenge:
        "Financial startup needed a secure, user-friendly mobile app for digital payments and banking services",
      solution:
        "Created a React Native app with biometric authentication, real-time transactions, and advanced security features",
      results: ["100,000+ downloads in first month", "4.8/5 app store rating", "Zero security incidents"],
      technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "AWS"],
      duration: "5 months",
      testimonial: "Abix Agency delivered a world-class mobile app that exceeded all our expectations.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content:
        "Abix Agency transformed our digital presence completely. Their attention to detail and technical expertise is unmatched. The team delivered beyond our expectations.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      company: "TechStart Inc.",
      project: "E-commerce Platform",
    },
    {
      name: "Michael Chen",
      role: "Founder, InnovateLab",
      content:
        "Working with Abix was a game-changer. They delivered our mobile app ahead of schedule and exceeded all expectations. The quality of work is outstanding.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      company: "InnovateLab",
      project: "Mobile Application",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content:
        "The SEO and digital marketing services provided by Abix increased our online visibility by 300%. Their strategic approach delivered measurable results.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      company: "GrowthCo",
      project: "Digital Marketing",
    },
    {
      name: "David Park",
      role: "CTO, DataFlow Systems",
      content:
        "Abix Agency built us a robust CRM system that streamlined our entire business process. The team's expertise in enterprise solutions is impressive.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      company: "DataFlow Systems",
      project: "CRM Development",
    },
  ]

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the planning phase.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support and maintenance packages. This includes regular updates, security patches, performance monitoring, and technical support.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in modern web technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS. We choose the best technology stack for each project.",
    },
    {
      question: "How do you ensure project quality?",
      answer:
        "We follow industry best practices including code reviews, automated testing, continuous integration, and thorough QA processes. Quality is our top priority.",
    },
    {
      question: "Can you work with our existing team?",
      answer:
        "We can integrate with your existing team or work as an extension of your development department. We're flexible with collaboration models.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer flexible pricing models including fixed-price projects, hourly rates, and dedicated team arrangements. Pricing depends on project scope and requirements.",
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "per project",
      description: "Perfect for small businesses and startups",
      features: [
        "Responsive Website Design",
        "Up to 5 Pages",
        "Basic SEO Setup",
        "Contact Form Integration",
        "1 Month Support",
        "Mobile Optimization",
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "per project",
      description: "Ideal for growing businesses",
      features: [
        "Custom Web Application",
        "Database Integration",
        "User Authentication",
        "Admin Dashboard",
        "API Development",
        "3 Months Support",
        "Performance Optimization",
        "Security Implementation",
      ],
      popular: true,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "For large-scale applications",
      features: [
        "Complex System Architecture",
        "Microservices Development",
        "Third-party Integrations",
        "Advanced Security",
        "Scalability Planning",
        "12 Months Support",
        "DevOps & CI/CD",
        "Dedicated Team",
      ],
      popular: false,
      color: "from-orange-500 to-red-500",
    },
  ]

  const clientLogos = [
    { name: "TechCorp", logo: "/placeholder.svg?height=60&width=120" },
    { name: "InnovateLab", logo: "/placeholder.svg?height=60&width=120" },
    { name: "DataFlow", logo: "/placeholder.svg?height=60&width=120" },
    { name: "GrowthCo", logo: "/placeholder.svg?height=60&width=120" },
    { name: "StartupX", logo: "/placeholder.svg?height=60&width=120" },
    { name: "MediCare", logo: "/placeholder.svg?height=60&width=120" },
    { name: "FinanceFlow", logo: "/placeholder.svg?height=60&width=120" },
    { name: "EduTech", logo: "/placeholder.svg?height=60&width=120" },
  ]

  const blogPosts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the web development landscape and how they impact business growth.",
      image: "/placeholder.svg?height=200&width=300",
      date: "Dec 15, 2023",
      author: "Sarah Chen",
      category: "Web Development",
      readTime: "5 min read",
    },
    {
      title: "Mobile-First Design: Why It Matters More Than Ever",
      excerpt: "Understanding the importance of mobile-first approach in today's digital landscape.",
      image: "/placeholder.svg?height=200&width=300",
      date: "Dec 10, 2023",
      author: "Michael Rodriguez",
      category: "Design",
      readTime: "4 min read",
    },
    {
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Essential security measures every business should implement to protect their digital assets.",
      image: "/placeholder.svg?height=200&width=300",
      date: "Dec 5, 2023",
      author: "Alex Johnson",
      category: "Security",
      readTime: "6 min read",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCaseStudy((prev) => (prev + 1) % caseStudies.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [caseStudies.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const openProjectModal = (project: any) => {
    setSelectedProject(project)
    setShowModal(true)
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Loading Abix Agency...
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden relative">
      {/* Custom Cursor */}
      <div
        className="fixed w-4 h-4 bg-indigo-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
        }}
      />

      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900 pointer-events-none" />

      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-xl animate-float" />
        <div className="absolute top-3/4 right-10 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-xl animate-float-slow" />
      </div>

      {/* Sticky Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-md bg-slate-900/95 border-b border-white/20 shadow-lg"
            : "backdrop-blur-md bg-slate-900/80 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Abix Agency
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["Home", "Services", "About", "Portfolio", "Process", "Team", "Pricing", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg relative group ${
                      activeSection === item.toLowerCase()
                        ? "text-white bg-white/10"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 ${
                        activeSection === item.toLowerCase() ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-yellow-400" />
                ) : (
                  <Moon className="h-5 w-5 text-indigo-400" />
                )}
              </button>
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden backdrop-blur-md bg-slate-900/95 border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Home", "Services", "About", "Portfolio", "Process", "Team", "Pricing", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-white/10 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20" ref={heroRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 md:p-16 shadow-2xl relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 animate-gradient-x" />
            </div>

            <div className="relative z-10">
              <Badge className="mb-6 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-500/30 px-4 py-2 text-sm font-medium">
                🚀 Leading IT Solutions Provider
              </Badge>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent leading-tight animate-fade-in-up">
                Empowering Ideas
                <br />
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Through Technology
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
                Abix Agency delivers cutting-edge digital solutions tailored to your needs. We transform ideas into
                reality with innovative technology and creative expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-400">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                >
                  Let's Build Together
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 group bg-transparent"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {counters.projects}+
                </div>
                <div className="text-gray-300 font-medium">Projects Completed</div>
              </div>
            </div>

            <div className="text-center group">
              <div className="backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {counters.clients}+
                </div>
                <div className="text-gray-300 font-medium">Happy Clients</div>
              </div>
            </div>

            <div className="text-center group">
              <div className="backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                  {counters.experience}+
                </div>
                <div className="text-gray-300 font-medium">Years Experience</div>
              </div>
            </div>

            <div className="text-center group">
              <div className="backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2">
                  {counters.satisfaction}%
                </div>
                <div className="text-gray-300 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-400 text-lg">Trusted by leading companies worldwide</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="flex justify-center items-center opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-500/30 px-4 py-2 text-sm font-medium">
              Our Services
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What We Do Best
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions to transform your business and drive growth
            </p>
          </div>

          <StaggeredAnimation className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
              >
                {/* Animated Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <CardContent className="p-8 relative z-10">
                  <div
                    className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} bg-opacity-20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full mt-6 text-white hover:bg-white/10 group-hover:bg-gradient-to-r group-hover:from-indigo-500/20 group-hover:to-purple-500/20 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30 px-4 py-2 text-sm font-medium">
              Technologies
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Tech Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We use cutting-edge technologies to build scalable and robust solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-110 hover:shadow-xl group text-center"
              >
                <img
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-white font-semibold mb-1">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30 px-4 py-2 text-sm font-medium">
              Our Process
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              How We Work
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Our proven methodology ensures successful project delivery every time
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full hidden lg:block" />

            <div className="space-y-16">
              {process.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col lg:gap-16`}
                >
                  {/* Content */}
                  <div className="flex-1 lg:max-w-md">
                    <Card className="backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                            {step.step}
                          </div>
                          <Badge className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-500/30">
                            {step.duration}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Icon */}
                  <div className="flex-shrink-0 lg:order-none order-first mb-8 lg:mb-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border-orange-500/30 px-4 py-2 text-sm font-medium">
              Case Studies
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Real projects, real results. See how we've helped businesses achieve their goals.
            </p>
          </div>

          <div className="relative">
            <Card className="backdrop-blur-lg bg-white/5 border border-white/10 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={caseStudies[currentCaseStudy].image || "/placeholder.svg"}
                    alt={caseStudies[currentCaseStudy].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <Badge className="mb-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-500/30">
                    {caseStudies[currentCaseStudy].category}
                  </Badge>

                  <h3 className="text-3xl font-bold mb-4 text-white">{caseStudies[currentCaseStudy].title}</h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">{caseStudies[currentCaseStudy].description}</p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{caseStudies[currentCaseStudy].challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{caseStudies[currentCaseStudy].solution}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {caseStudies[currentCaseStudy].results.map((result, index) => (
                          <div key={index} className="flex items-center text-sm text-green-400">
                            <TrendingUp className="h-4 w-4 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudies[currentCaseStudy].technologies.map((tech, index) => (
                          <Badge key={index} variant="outline" className="border-white/20 text-gray-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white">
                    View Full Case Study
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCaseStudy(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentCaseStudy ? "bg-indigo-400 w-8" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-pink-500/20 to-rose-500/20 text-pink-300 border-pink-500/30 px-4 py-2 text-sm font-medium">
              Our Team
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Meet the Experts
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Talented professionals dedicated to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Twitter className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href={member.social.github}
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Github className="h-4 w-4 text-white" />
                    </a>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                  <p className="text-indigo-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>

                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="border-white/20 text-gray-300 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border-yellow-500/30 px-4 py-2 text-sm font-medium">
              Testimonials
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="relative">
            <Card className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 md:p-12 relative overflow-hidden">
              {/* Quote Icon */}
              <Quote className="absolute top-8 left-8 h-16 w-16 text-indigo-500/20" />

              <CardContent className="text-center relative z-10">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed italic font-light">
                  "{testimonials[currentTestimonial].content}"
                </p>

                <div className="flex items-center justify-center space-x-6">
                  <img
                    src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full border-2 border-indigo-400"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-white text-xl">{testimonials[currentTestimonial].name}</div>
                    <div className="text-indigo-400 font-medium">{testimonials[currentTestimonial].role}</div>
                    <div className="text-gray-400 text-sm">{testimonials[currentTestimonial].company}</div>
                  </div>
                </div>

                <Badge className="mt-6 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-500/30">
                  {testimonials[currentTestimonial].project}
                </Badge>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-200 group"
            >
              <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-200 group"
            >
              <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial ? "bg-indigo-400 w-8" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30 px-4 py-2 text-sm font-medium">
              Pricing
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Flexible pricing options to fit your budget and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 relative overflow-hidden ${
                  plan.popular ? "ring-2 ring-indigo-500 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <CardContent className={`p-8 ${plan.popular ? "pt-16" : ""}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full py-3 font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
                        : "border border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-300 border-violet-500/30 px-4 py-2 text-sm font-medium">
              FAQ
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about our services and process
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  >
                    <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <Minus className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                    ) : (
                      <Plus className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                    )}
                  </button>

                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-300 border-teal-500/30 px-4 py-2 text-sm font-medium">
              Latest Insights
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              From Our Blog
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends and insights in technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-indigo-500/80 to-purple-500/80 text-white border-0">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                    <span className="mx-2">•</span>
                    {post.readTime}
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-300 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-gray-300 text-sm">{post.author}</span>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-indigo-400 hover:text-white hover:bg-white/10 p-2"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-rose-500/20 to-pink-500/20 text-rose-300 border-rose-500/30 px-4 py-2 text-sm font-medium">
              Get In Touch
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let's Start Your Project
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your ideas into reality? Let's discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5" />
              <CardContent className="relative z-10">
                <h3 className="text-2xl font-semibold mb-6 text-white">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                      <Input
                        type="text"
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-indigo-400"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                      <Input
                        type="text"
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-indigo-400"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <Input
                      type="email"
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-indigo-400"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-indigo-400"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                    <select className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 focus:border-indigo-400 focus:ring-indigo-400">
                      <option value="">Select a service</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="design">UI/UX Design</option>
                      <option value="crm">CRM/ERP Systems</option>
                      <option value="bot">Telegram Bots</option>
                      <option value="seo">SEO & Marketing</option>
                      <option value="hosting">Hosting & Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Budget</label>
                    <select className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 focus:border-indigo-400 focus:ring-indigo-400">
                      <option value="">Select budget range</option>
                      <option value="5k">$5,000 - $10,000</option>
                      <option value="10k">$10,000 - $25,000</option>
                      <option value="25k">$25,000 - $50,000</option>
                      <option value="50k">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
                    <Textarea
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-indigo-400 focus:ring-indigo-400"
                      placeholder="Tell us about your project requirements, goals, and timeline..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">Get in touch</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  We're here to help you bring your ideas to life. Reach out to us through any of the following
                  channels, and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group">
                  <CardContent className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <Mail className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email Us</h4>
                      <p className="text-gray-400">hello@abixagency.com</p>
                      <p className="text-gray-400">support@abixagency.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group">
                  <CardContent className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                      <Phone className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Call Us</h4>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                      <p className="text-gray-400">+1 (555) 987-6543</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group">
                  <CardContent className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-300">
                      <MapPin className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Visit Us</h4>
                      <p className="text-gray-400">123 Tech Street</p>
                      <p className="text-gray-400">Digital City, DC 12345</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-lg bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group">
                  <CardContent className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                      <Clock className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                      <p className="text-gray-400">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-400">Sat - Sun: 10:00 AM - 4:00 PM</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center hover:from-indigo-500/30 hover:to-purple-500/30 transition-all duration-300 group"
                  >
                    <Github className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 group"
                  >
                    <Twitter className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-blue-600/20 to-blue-700/20 rounded-lg flex items-center justify-center hover:from-blue-600/30 hover:to-blue-700/30 transition-all duration-300 group"
                  >
                    <Linkedin className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-lg flex items-center justify-center hover:from-pink-500/30 hover:to-rose-500/30 transition-all duration-300 group"
                  >
                    <Instagram className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="backdrop-blur-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-white/20 p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5" />
            <CardContent className="relative z-10">
              <Sparkles className="h-16 w-16 text-indigo-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join hundreds of satisfied clients who have transformed their businesses with our solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                  <Rocket className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 bg-transparent"
                >
                  Schedule Consultation
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 backdrop-blur-lg bg-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Abix Agency
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Empowering businesses through innovative digital solutions. We transform ideas into reality with
                cutting-edge technology and creative expertise.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About", "Services", "Portfolio", "Team", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    CRM/ERP Systems
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} Abix Agency. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals and Popups */}
      <ProjectModal project={selectedProject} isOpen={showModal} onClose={() => setShowModal(false)} />

      <LiveChat isOpen={showChat} onToggle={() => setShowChat(!showChat)} />

      <NewsletterPopup isOpen={showNewsletter} onClose={() => setShowNewsletter(false)} />
    </div>
  )
}
