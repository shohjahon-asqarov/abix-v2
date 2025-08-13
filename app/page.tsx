"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Software",
      description: "Tailored software solutions to meet your specific business needs",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO Optimization",
      description: "Improve your online visibility and search engine rankings",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics & Insights",
      description: "Data-driven insights to help you make informed business decisions",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Expert Team",
      description: "Skilled professionals with years of experience",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Secure Solutions",
      description: "Security-first approach in all our developments",
    },
  ]

  const portfolio = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      image: "/placeholder.jpg",
      description: "A modern e-commerce platform with advanced features",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile App",
      image: "/placeholder.jpg",
      description: "Secure and user-friendly mobile banking application",
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "Design",
      image: "/placeholder.jpg",
      description: "Complete brand identity and visual design system",
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      category: "Web Development",
      image: "/placeholder.jpg",
      description: "Real-time analytics and reporting dashboard",
    },
    {
      id: 5,
      title: "Food Delivery App",
      category: "Mobile App",
      image: "/placeholder.jpg",
      description: "On-demand food delivery mobile application",
    },
    {
      id: 6,
      title: "Corporate Website",
      category: "Web Development",
      image: "/placeholder.jpg",
      description: "Professional corporate website with CMS",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content:
        "Iqro Agency delivered exceptional results. Their team's expertise and dedication exceeded our expectations.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Michael Chen",
      role: "Founder, InnovateCorp",
      content: "Professional, reliable, and innovative. They transformed our digital presence completely.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content: "Outstanding work quality and excellent communication throughout the project.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
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
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-minimal border-b border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-sm">I</span>
              </div>
              <span className="text-lg font-light">Iqro Agency</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-12">
              <a
                href="#home"
                className="text-sm font-light hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-sm font-light hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-sm font-light hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#about"
                className="text-sm font-light hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-sm font-light hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="ghost" className="text-sm font-light">
                Login
              </Button>
              <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 text-sm font-light px-6">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-6 py-6 border-t border-gray-100 dark:border-gray-900">
              <nav className="flex flex-col space-y-6">
                <a href="#home" className="text-sm font-light">
                  Home
                </a>
                <a href="#services" className="text-sm font-light">
                  Services
                </a>
                <a href="#portfolio" className="text-sm font-light">
                  Portfolio
                </a>
                <a href="#about" className="text-sm font-light">
                  About
                </a>
                <a href="#contact" className="text-sm font-light">
                  Contact
                </a>
                <div className="flex flex-col space-y-4 pt-6 border-t border-gray-100 dark:border-gray-900">
                  <ThemeToggle />
                  <Button variant="ghost" className="text-sm font-light justify-start">
                    Login
                  </Button>
                  <Button className="bg-black dark:bg-white text-white dark:text-black text-sm font-light justify-start">
                    Get Started
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-32 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-extralight mb-8 leading-tight tracking-tight">
              IT loyihalar va
              <br />
              <span className="font-light">Ta'lim</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              Biz zamonaviy IT loyihalar va sifatli ta'lim xizmatlarini taqdim etamiz. Sizning raqamli mavjudligingizni
              yangi bosqichga olib chiqamiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-8 py-4 text-sm font-light group"
              >
                Loyihani boshlash
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 dark:border-gray-700 px-8 py-4 text-sm font-light hover:bg-gray-50 dark:hover:bg-gray-900 bg-transparent"
              >
                Ishlarimizni ko'ring
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-extralight mb-6">Xizmatlarimiz</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
              Biznesingizni rivojlantirish uchun keng qamrovli raqamli yechimlar taklif etamiz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`glass-minimal border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-800 transition-all duration-300 hover-minimal animate-fade-in delay-${(index + 1) * 100}`}
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-light mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-32 px-6 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-extralight mb-8">Nima uchun bizni tanlaysiz</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 font-light leading-relaxed">
                Ko'p yillik tajriba va innovatsiyaga bo'lgan ishtiyoq bilan, biz sizning kutganingizdan ham yuqori
                natijalar berishga sodiqmiz.
              </p>

              <div className="space-y-8">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-light mb-2">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 font-light text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in delay-200">
              <div className="glass-minimal rounded-2xl p-12 border-gray-100 dark:border-gray-900">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-extralight mb-2">150+</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm font-light">Loyihalar</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-extralight mb-2">98%</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm font-light">Mamnunlik</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-extralight mb-2">5+</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm font-light">Yil tajriba</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-extralight mb-2">24/7</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm font-light">Qo'llab-quvvatlash</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-extralight mb-6">Ishlarimiz</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
              So'nggi loyihalarimizga nazar tashlang va bizneslarning maqsadlariga erishishda qanday yordam
              berganligimizni ko'ring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card
                key={project.id}
                className={`glass-minimal border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-800 transition-all duration-300 cursor-pointer hover-minimal animate-fade-in delay-${(index + 1) * 100}`}
                onClick={() => setSelectedProject(project)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-0 text-xs font-light">
                      {project.category}
                    </Badge>
                    <h3 className="text-lg font-light mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-light text-sm">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-extralight mb-6">Mijozlar fikri</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
              Mijozlarimiz biz bilan ishlash haqida nima deyishadi.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="glass-minimal border-gray-100 dark:border-gray-900 animate-fade-in">
              <CardContent className="p-12 text-center">
                <div className="flex justify-center mb-8">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gray-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl font-extralight mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-light">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm font-light">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 bg-transparent"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-extralight mb-6">Bog'lanish</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
              Loyihangizni boshlashga tayyormisiz? Ehtiyojlaringizni muhokama qilaylik.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            <div className="animate-fade-in">
              <Card className="glass-minimal border-gray-100 dark:border-gray-900">
                <CardContent className="p-8">
                  <h3 className="text-xl font-light mb-8">Bizga xabar yuboring</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-600 dark:text-gray-400 mb-2 text-sm font-light">Ism</label>
                        <Input
                          className="bg-transparent border-gray-200 dark:border-gray-800 focus:border-gray-400 dark:focus:border-gray-600"
                          placeholder="Ismingiz"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-600 dark:text-gray-400 mb-2 text-sm font-light">
                          Familiya
                        </label>
                        <Input
                          className="bg-transparent border-gray-200 dark:border-gray-800 focus:border-gray-400 dark:focus:border-gray-600"
                          placeholder="Familiyangiz"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-600 dark:text-gray-400 mb-2 text-sm font-light">Email</label>
                      <Input
                        type="email"
                        className="bg-transparent border-gray-200 dark:border-gray-800 focus:border-gray-400 dark:focus:border-gray-600"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 dark:text-gray-400 mb-2 text-sm font-light">Mavzu</label>
                      <Input
                        className="bg-transparent border-gray-200 dark:border-gray-800 focus:border-gray-400 dark:focus:border-gray-600"
                        placeholder="Loyiha haqida so'rov"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 dark:text-gray-400 mb-2 text-sm font-light">Xabar</label>
                      <Textarea
                        className="bg-transparent border-gray-200 dark:border-gray-800 focus:border-gray-400 dark:focus:border-gray-600 min-h-[120px]"
                        placeholder="Loyihangiz haqida bizga ayting..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 py-3 font-light"
                    >
                      Xabar yuborish
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-in delay-200">
              <div className="space-y-8">
                <Card className="glass-minimal border-gray-100 dark:border-gray-900">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-light">Email</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">hello@iqroagency.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-minimal border-gray-100 dark:border-gray-900">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-light">Telefon</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">+998 90 123 45 67</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-minimal border-gray-100 dark:border-gray-900">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-light">Manzil</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Toshkent shahar, Yunusobod tumani
                          <br />
                          Amir Temur ko'chasi, 123-uy
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-100 dark:border-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-6 h-6 bg-black dark:bg-white rounded flex items-center justify-center">
                  <span className="text-white dark:text-black font-bold text-xs">I</span>
                </div>
                <span className="font-light">Iqro Agency</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed">
                IT loyihalar va ta'lim orqali bizneslarni innovatsion raqamli yechimlarga olib borish.
              </p>
            </div>

            <div>
              <h4 className="font-light mb-6">Xizmatlar</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-black dark:hover:text-white transition-colors font-light">
                    Veb dasturlash
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black dark:hover:text-white transition-colors font-light">
                    Mobil ilovalar
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black dark:hover:text-white transition-colors font-light">
                    UI/UX dizayn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black dark:hover:text-white transition-colors font-light">
                    SEO
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-light mb-6">Kompaniya</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-black dark:hover:text-white transition-colors font-light">
                    Biz haqimizda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black dark:hover:text-white transition-colors font-light">
                    Jamoa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black dark:hover:text-white transition-colors font-light">
                    Karyera
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black dark:hover:text-white transition-colors font-light">
                    Bog'lanish
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-light mb-6">Resurslar</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-black dark:hover:text-white transition-colors font-light">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black dark:hover:text-white transition-colors font-light">
                    Loyihalar
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black dark:hover:text-white transition-colors font-light">
                    Maxfiylik
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black dark:hover:text-white transition-colors font-light">
                    Shartlar
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-900 pt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm font-light">
              &copy; 2024 Iqro Agency. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals and Components */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      <LiveChat />
    </div>
  )
}
