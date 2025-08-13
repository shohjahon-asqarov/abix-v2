"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectModalProps {
  project: {
    id: number
    title: string
    category: string
    image: string
    description: string
  }
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <Card className="glass-minimal border-gray-100 dark:border-gray-900 max-w-2xl w-full max-h-[90vh] overflow-auto">
        <CardContent className="p-0">
          <div className="relative">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="p-8">
            <Badge className="mb-4 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-0 text-xs font-light">
              {project.category}
            </Badge>
            <h2 className="text-2xl font-light mb-4">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">{project.description}</p>
            <div className="mt-8 flex gap-4">
              <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 font-light">
                View Live
              </Button>
              <Button variant="outline" className="border-gray-300 dark:border-gray-700 font-light bg-transparent">
                View Code
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
