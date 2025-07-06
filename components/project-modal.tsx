"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  X,
  ExternalLink,
  Github,
  Calendar,
  Users,
  TrendingUp,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

interface ProjectModalProps {
  project: any
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImage, setCurrentImage] = useState(0)

  if (!isOpen || !project) return null

  const projectImages = [
    project.image,
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % projectImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + projectImages.length) % projectImages.length)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-y-auto backdrop-blur-xl bg-slate-900/95 border border-white/20">
        <div className="sticky top-0 z-10 flex justify-between items-center p-6 bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/10 transition-colors">
            <X className="h-6 w-6 text-white" />
          </button>
        </div>

        <CardContent className="p-0">
          {/* Image Gallery */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={projectImages[currentImage] || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentImage ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Project Badge */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-gradient-to-r from-indigo-500/80 to-purple-500/80 text-white border-0">
                {project.category}
              </Badge>
            </div>
          </div>

          {/* Project Details */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {project.description ||
                      "This project showcases our expertise in creating modern, scalable solutions that drive business growth and enhance user experience."}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Challenge</h3>
                  <p className="text-gray-400 leading-relaxed">
                    The client needed a comprehensive solution that could handle complex business requirements while
                    maintaining excellent user experience and performance standards.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Solution</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We developed a custom solution using modern technologies and best practices, ensuring scalability,
                    security, and optimal performance across all devices.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Responsive Design",
                      "Real-time Updates",
                      "Advanced Security",
                      "API Integration",
                      "Performance Optimization",
                      "User Analytics",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                      <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">300%</div>
                      <div className="text-gray-400 text-sm">Performance Increase</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                      <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">50K+</div>
                      <div className="text-gray-400 text-sm">Active Users</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                      <TrendingUp className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">99.9%</div>
                      <div className="text-gray-400 text-sm">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="bg-white/5 border border-white/10 p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Project Info</h4>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="h-5 w-5 mr-3 text-indigo-400" />
                      <div>
                        <div className="text-sm text-gray-400">Duration</div>
                        <div>4 months</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="h-5 w-5 mr-3 text-green-400" />
                      <div>
                        <div className="text-sm text-gray-400">Team Size</div>
                        <div>6 developers</div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white/5 border border-white/10 p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "AWS"].map((tech, index) => (
                      <Badge key={index} variant="outline" className="border-white/20 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>

                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Project
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
