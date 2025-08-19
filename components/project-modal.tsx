"use client"

import { X, ExternalLink, Github, Calendar, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  technologies: string[]
  duration: string
  client: string
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in-up">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-auto glass-pro border border-gray-100 dark:border-gray-900 animate-scale-in">
        <CardContent className="p-0">
          <div className="relative">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white focus-pro"
            >
              <X className="w-4 h-4" />
            </Button>
            <div className="absolute bottom-6 left-6 right-6">
              <Badge className="badge-pro mb-3">{project.category}</Badge>
              <h2 className="text-3xl font-light text-white mb-2">{project.title}</h2>
              <p className="text-white/80 text-sm">{project.client}</p>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-500">Davomiyligi</div>
                  <div className="font-medium">{project.duration}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-500">Mijoz</div>
                  <div className="font-medium">{project.client}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-500">Holati</div>
                  <div className="font-medium text-green-600 dark:text-green-400">Yakunlangan</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4">Loyiha haqida</h3>
              <p className="text-body text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{project.description}</p>

              <div className="mb-6">
                <h4 className="font-medium mb-3">Ishlatilgan texnologiyalar</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded-full text-sm text-gray-600 dark:text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="btn-primary focus-pro">
                <ExternalLink className="w-4 h-4 mr-2" />
                Loyihani ko'rish
              </Button>
              <Button className="btn-secondary focus-pro">
                <Github className="w-4 h-4 mr-2" />
                Kod ko'rish
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
