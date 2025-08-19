"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Menu,
  X,
  ArrowRight,
  Star,
  Users,
  Award,
  Zap,
  Shield,
  Smartphone,
  Globe,
  Code,
  Palette,
  Search,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Clock,
  Target,
} from "lucide-react"
import { ProjectModal } from "@/components/project-modal"
import { LiveChat } from "@/components/live-chat"

export default function IqroAgencyLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Veb dasturlash",
      description: "Zamonaviy texnologiyalar asosida maxsus veb-saytlar va veb-ilovalar yaratish",
      features: ["React/Next.js", "Node.js", "Database", "API Integration"],
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobil ilovalar",
      description: "iOS va Android uchun mahalliy va cross-platform mobil ilovalar",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deploy"],
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX dizayn",
      description: "Foydalanuvchi tajribasini yaxshilaydigan chiroyli va intuitiv interfeys",
      features: ["Figma Design", "Prototyping", "User Research", "Design System"],
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Maxsus dasturlar",
      description: "Biznesingizning o'ziga xos ehtiyojlariga moslashtirilgan dasturiy yechimlar",
      features: ["Custom Development", "System Integration", "Automation", "Scalable Solutions"],
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO optimallashtirish",
      description: "Onlayn ko'rinishingizni va qidiruv tizimlaridagi reytingingizni yaxshilash",
      features: ["Technical SEO", "Content Strategy", "Analytics", "Performance Optimization"],
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Ma'lumotlar tahlili",
      description: "Asosli qarorlar qabul qilishga yordam beradigan ma'lumotlarga asoslangan tahlil",
      features: ["Data Analytics", "Business Intelligence", "Reporting", "Insights Dashboard"],
    },
  ]

  const whyChooseUs = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Mutaxassis jamoa",
      description: "Ko'p yillik tajribaga ega malakali mutaxassislar",
      metric: "50+ mutaxassis",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Sifat kafolati",
      description: "Qat'iy test va sifat nazorati jarayonlari",
      metric: "99.9% uptime",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Tez yetkazib berish",
      description: "Sifatni buzmasdan tez muddatlarda bajarish",
      metric: "30% tezroq",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Xavfsiz yechimlar",
      description: "Barcha ishlanmalarda xavfsizlik-birinchi yondashuv",
      metric: "100% xavfsiz",
    },
  ]

  const portfolio = [
    {
      id: 1,
      title: "E-commerce platformasi",
      category: "Veb dasturlash",
      image: "/placeholder.jpg",
      description: "Ilg'or funksiyalarga ega zamonaviy elektron tijorat platformasi",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      duration: "4 oy",
      client: "TechMart",
    },
    {
      id: 2,
      title: "Bank mobil ilovasi",
      category: "Mobil ilova",
      image: "/placeholder.jpg",
      description: "Xavfsiz va foydalanuvchi-do'st mobil bank ilovasi",
      technologies: ["React Native", "Biometric Auth", "Encryption", "Push Notifications"],
      duration: "6 oy",
      client: "FinanceBank",
    },
    {
      id: 3,
      title: "Brend identifikatsiyasi",
      category: "Dizayn",
      image: "/placeholder.jpg",
      description: "To'liq brend identifikatsiyasi va vizual dizayn tizimi",
      technologies: ["Figma", "Adobe Creative Suite", "Brand Guidelines", "Style Guide"],
      duration: "2 oy",
      client: "StartupCo",
    },
    {
      id: 4,
      title: "Analitika dashboard",
      category: "Veb dasturlash",
      image: "/placeholder.jpg",
      description: "Real vaqt analitikasi va hisobot dashboard",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      duration: "3 oy",
      client: "DataCorp",
    },
    {
      id: 5,
      title: "Oziq-ovqat yetkazib berish",
      category: "Mobil ilova",
      image: "/placeholder.jpg",
      description: "Talab bo'yicha oziq-ovqat yetkazib berish mobil ilovasi",
      technologies: ["Flutter", "Google Maps", "Payment Gateway", "Real-time Tracking"],
      duration: "5 oy",
      client: "FoodDelivery",
    },
    {
      id: 6,
      title: "Korporativ veb-sayt",
      category: "Veb dasturlash",
      image: "/placeholder.jpg",
      description: "CMS bilan professional korporativ veb-sayt",
      technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "Vercel"],
      duration: "2 oy",
      client: "BusinessCorp",
    },
  ]

  const testimonials = [
    {
      name: "Sardor Karimov",
      role: "Bosh direktor, TechStart",
      content:
        "Iqro Agency ajoyib natijalar berdi. Ularning jamoasining tajribasi va sadoqati bizning kutganimizdan ham oshdi.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
      company: "TechStart",
      project: "E-commerce platformasi",
    },
    {
      name: "Malika Abdullayeva",
      role: "Asoschisi, InnovateCorp",
      content: "Professional, ishonchli va innovatsion. Ular bizning raqamli mavjudligimizni butunlay o'zgartirdi.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
      company: "InnovateCorp",
      project: "Mobil ilova",
    },
    {
      name: "Bobur Rahimov",
      role: "Marketing direktori, GrowthCo",
      content: "Ajoyib ish sifati va loyiha davomida mukammal muloqot.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
      company: "GrowthCo",
      project: "Veb-sayt redesign",
    },
  ]

  const stats = [
    { number: "200+", label: "Muvaffaqiyatli loyihalar", icon: <CheckCircle className="w-5 h-5" /> },
    { number: "98%", label: "Mijozlar mamnunligi", icon: <TrendingUp className="w-5 h-5" /> },
    { number: "5+", label: "Yillik tajriba", icon: <Clock className="w-5 h-5" /> },
    { number: "24/7", label: "Qo'llab-quvvatlash", icon: <Target className="w-5 h-5" /> },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      {/* Professional Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-pro border-b border-gray-100 dark:border-gray-900">
        <div className="container-pro py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center transition-pro">
                <span className="text-white dark:text-black font-semibold text-lg">I</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-medium text-heading">Iqro Agency</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 text-caption">IT loyihalar va ta'lim</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="nav-link">
                Bosh sahifa
              </a>
              <a href="#services" className="nav-link">
                Xizmatlar
              </a>
              <a href="#portfolio" className="nav-link">
                Loyihalar
              </a>
              <a href="#about" className="nav-link">
                Biz haqimizda
              </a>
              <a href="#contact" className="nav-link">
                Bog'lanish
              </a>
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="ghost" className="text-sm font-light focus-pro">
                Kirish
              </Button>
              <Button className="btn-primary text-sm font-medium px-6 focus-pro">Boshlash</Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 focus-pro" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-6 py-6 border-t border-gray-100 dark:border-gray-900 animate-fade-in-up">
              <nav className="flex flex-col space-y-6">
                <a href="#home" className="nav-link">
                  Bosh sahifa
                </a>
                <a href="#services" className="nav-link">
                  Xizmatlar
                </a>
                <a href="#portfolio" className="nav-link">
                  Loyihalar
                </a>
                <a href="#about" className="nav-link">
                  Biz haqimizda
                </a>
                <a href="#contact" className="nav-link">
                  Bog'lanish
                </a>
                <div className="flex flex-col space-y-4 pt-6 border-t border-gray-100 dark:border-gray-900">
                  <ThemeToggle />
                  <Button variant="ghost" className="text-sm font-light justify-start focus-pro">
                    Kirish
                  </Button>
                  <Button className="btn-primary text-sm font-medium justify-start focus-pro">Boshlash</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="section-padding pt-32">
        <div className="container-pro text-center">
          <div className="animate-fade-in-up">
            <Badge className="badge-pro mb-8">✨ Raqamli kelajakka xush kelibsiz</Badge>
            <h1 className="text-display text-6xl md:text-8xl mb-8 gradient-text">
              IT loyihalar va
              <br />
              <span className="font-light">Ta'lim markazi</span>
            </h1>
            <p className="text-body text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto">
              Biz zamonaviy IT loyihalar va sifatli ta'lim xizmatlarini taqdim etamiz. Sizning raqamli mavjudligingizni
              yangi bosqichga olib chiqamiz va professional rivojlanishingizga hissa qo'shamiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="btn-primary px-8 py-4 text-base font-medium group focus-pro">
                Loyihani boshlash
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" className="btn-secondary px-8 py-4 text-base font-light focus-pro">
                Ishlarimizni ko'ring
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up delay-300">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-light mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50 dark:bg-gray-950">
        <div className="container-pro">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge className="badge-pro mb-6">Xizmatlarimiz</Badge>
            <h2 className="text-heading text-4xl md:text-6xl font-light mb-8">Nima bilan shug'ullanamiz</h2>
            <p className="text-body text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Biznesingizni rivojlantirish uchun keng qamrovli raqamli yechimlar va professional ta'lim dasturlarini
              taklif etamiz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-pro">
            {services.map((service, index) => (
              <div key={index} className={`card-pro animate-fade-in-up delay-${(index + 1) * 75}`}>
                <div className="w-14 h-14 bg-gray-100 dark:bg-gray-900 rounded-xl flex items-center justify-center mb-6 transition-pro hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-heading text-xl font-medium mb-4">{service.title}</h3>
                <p className="text-body text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="section-padding">
        <div className="container-pro">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-slide-in-left">
              <Badge className="badge-pro mb-6">Nima uchun bizni tanlaysiz</Badge>
              <h2 className="text-heading text-4xl md:text-5xl font-light mb-8">Mukammallikni yetkazib beramiz</h2>
              <p className="text-body text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                Ko'p yillik tajriba va innovatsiyaga bo'lgan ishtiyoq bilan, biz sizning kutganingizdan ham yuqori
                natijalar berishga sodiqmiz. Har bir loyihaga individual yondashuv va professional e'tibor beramiz.
              </p>

              <div className="space-y-8">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-pro">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-heading text-lg font-medium">{item.title}</h3>
                        <span className="text-sm font-medium text-green-600 dark:text-green-400">{item.metric}</span>
                      </div>
                      <p className="text-body text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-scale-in delay-300">
              <div className="glass-pro rounded-3xl p-12 border border-gray-100 dark:border-gray-900">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-light mb-3">200+</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm font-light">Loyihalar</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-light mb-3">98%</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm font-light">Mamnunlik</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-light mb-3">5+</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm font-light">Yil tajriba</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-light mb-3">24/7</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm font-light">Qo'llab-quvvatlash</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding bg-gray-50 dark:bg-gray-950">
        <div className="container-pro">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge className="badge-pro mb-6">Bizning ishlarimiz</Badge>
            <h2 className="text-heading text-4xl md:text-6xl font-light mb-8">Muvaffaqiyatli loyihalar</h2>
            <p className="text-body text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              So'nggi loyihalarimizga nazar tashlang va bizneslarning maqsadlariga erishishda qanday yordam
              berganligimizni ko'ring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-pro">
            {portfolio.map((project, index) => (
              <div
                key={project.id}
                className={`card-pro cursor-pointer animate-fade-in-up delay-${(index + 1) * 75}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-pro hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge className="badge-pro text-xs">{project.category}</Badge>
                    <span className="text-xs text-gray-500 dark:text-gray-500">{project.duration}</span>
                  </div>
                  <h3 className="text-heading text-xl font-medium">{project.title}</h3>
                  <p className="text-body text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded-md text-gray-600 dark:text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded-md text-gray-600 dark:text-gray-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-pro">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge className="badge-pro mb-6">Mijozlar fikri</Badge>
            <h2 className="text-heading text-4xl md:text-6xl font-light mb-8">Mijozlarimiz nima deyishadi</h2>
            <p className="text-body text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Bizning so'zlarimizga ishonmang, mijozlarimiz biz bilan ishlash haqida nima deyishganini eshiting.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="glass-pro rounded-2xl p-12 animate-scale-in">
              <div className="text-center">
                <div className="flex justify-center mb-8">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed text-body">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className="flex items-center justify-center space-x-6">
                  <img
                    src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-medium text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-gray-500 dark:text-gray-500 text-xs mt-1">
                      {testimonials[currentTestimonial].company} • {testimonials[currentTestimonial].project}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="btn-secondary focus-pro bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial ? "bg-black dark:bg-white" : "bg-gray-300 dark:bg-gray-700"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="btn-secondary focus-pro bg-transparent"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-950">
        <div className="container-pro">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge className="badge-pro mb-6">Bog'lanish</Badge>
            <h2 className="text-heading text-4xl md:text-6xl font-light mb-8">Loyihangizni boshlaylik</h2>
            <p className="text-body text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Raqamli mavjudligingizni o'zgartirishga tayyormisiz? Bugun biz bilan bog'laning va loyihangizni muhokama
              qilaylik.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            <div className="animate-slide-in-left">
              <div className="card-pro">
                <h3 className="text-heading text-2xl font-medium mb-8">Bizga xabar yuboring</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-600 dark:text-gray-400 mb-3 text-sm font-medium">Ism *</label>
                      <Input className="form-input-pro" placeholder="Ismingiz" required />
                    </div>
                    <div>
                      <label className="block text-gray-600 dark:text-gray-400 mb-3 text-sm font-medium">
                        Familiya *
                      </label>
                      <Input className="form-input-pro" placeholder="Familiyangiz" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-600 dark:text-gray-400 mb-3 text-sm font-medium">Email *</label>
                    <Input type="email" className="form-input-pro" placeholder="email@example.com" required />
                  </div>
                  <div>
                    <label className="block text-gray-600 dark:text-gray-400 mb-3 text-sm font-medium">
                      Telefon raqami
                    </label>
                    <Input type="tel" className="form-input-pro" placeholder="+998 90 123 45 67" />
                  </div>
                  <div>
                    <label className="block text-gray-600 dark:text-gray-400 mb-3 text-sm font-medium">
                      Loyiha turi
                    </label>
                    <select className="form-input-pro w-full">
                      <option value="">Loyiha turini tanlang</option>
                      <option value="web">Veb dasturlash</option>
                      <option value="mobile">Mobil ilova</option>
                      <option value="design">UI/UX Dizayn</option>
                      <option value="custom">Maxsus dastur</option>
                      <option value="seo">SEO xizmatlari</option>
                      <option value="analytics">Ma'lumotlar tahlili</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-600 dark:text-gray-400 mb-3 text-sm font-medium">
                      Loyiha haqida *
                    </label>
                    <Textarea
                      className="form-input-pro min-h-[120px]"
                      placeholder="Loyihangiz haqida batafsil ma'lumot bering..."
                      required
                    />
                  </div>
                  <Button type="submit" className="btn-primary w-full py-4 text-base font-medium focus-pro">
                    Xabar yuborish
                  </Button>
                </form>
              </div>
            </div>

            <div className="animate-fade-in-up delay-300">
              <div className="space-y-8">
                <div className="card-pro">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Email orqali bog'lanish</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        Bizga email yuboring, 24 soat ichida javob beramiz
                      </p>
                      <a
                        href="mailto:hello@iqroagency.com"
                        className="text-black dark:text-white font-medium hover:underline"
                      >
                        hello@iqroagency.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-pro">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Telefon orqali bog'lanish</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Dushanba-Juma: 9:00-18:00</p>
                      <a href="tel:+998901234567" className="text-black dark:text-white font-medium hover:underline">
                        +998 90 123 45 67
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-pro">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Ofisimizga tashrif</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Oldindan kelishib oling</p>
                      <address className="text-black dark:text-white not-italic">
                        Toshkent shahar, Yunusobod tumani
                        <br />
                        Amir Temur ko'chasi, 123-uy
                      </address>
                    </div>
                  </div>
                </div>

                <div className="card-pro">
                  <h4 className="font-medium mb-4">Ijtimoiy tarmoqlarda</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:scale-110 transition-pro"
                    >
                      <span className="text-sm font-medium">Tg</span>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:scale-110 transition-pro"
                    >
                      <span className="text-sm font-medium">In</span>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:scale-110 transition-pro"
                    >
                      <span className="text-sm font-medium">Fb</span>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:scale-110 transition-pro"
                    >
                      <span className="text-sm font-medium">Yt</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-gray-100 dark:border-gray-900">
        <div className="container-pro">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                  <span className="text-white dark:text-black font-semibold text-sm">I</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">Iqro Agency</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">IT loyihalar va ta'lim</span>
                </div>
              </div>
              <p className="text-body text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                IT loyihalar va ta'lim orqali bizneslarni innovatsion raqamli yechimlarga olib borish va professional
                kadrlar tayyorlash.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  <span className="sr-only">Telegram</span>
                  <div className="w-6 h-6 bg-gray-200 dark:bg-gray-800 rounded"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <div className="w-6 h-6 bg-gray-200 dark:bg-gray-800 rounded"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-6 h-6 bg-gray-200 dark:bg-gray-800 rounded"></div>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-6">Xizmatlar</h4>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400 text-sm">
                <li>
                  <a href="#" className="nav-link">
                    Veb dasturlash
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Mobil ilovalar
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    UI/UX dizayn
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    SEO xizmatlari
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Ta'lim kurslari
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-6">Kompaniya</h4>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400 text-sm">
                <li>
                  <a href="#" className="nav-link">
                    Biz haqimizda
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Jamoa
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Karyera
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Yangiliklar
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Bog'lanish
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-6">Qo'llab-quvvatlash</h4>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400 text-sm">
                <li>
                  <a href="#" className="nav-link">
                    Yordam markazi
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Hujjatlar
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Maxfiylik siyosati
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Foydalanish shartlari
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Cookie siyosati
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-900 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                &copy; 2024 Iqro Agency. Barcha huquqlar himoyalangan.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <span className="text-xs text-gray-500 dark:text-gray-500">Toshkent, O'zbekiston</span>
                <div className="flex items-center space-x-2">
                  <div className="status-online"></div>
                  <span className="text-xs text-gray-500 dark:text-gray-500">Onlayn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals and Components */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      <LiveChat />
    </div>
  )
}
