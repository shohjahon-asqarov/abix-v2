"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideInUp"
  delay?: number
}

export function ScrollAnimation({ children, className = "", animation = "fadeInUp", delay = 0 }: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in")
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const animationClasses = {
    fadeInUp: "opacity-0 translate-y-8",
    fadeInLeft: "opacity-0 -translate-x-8",
    fadeInRight: "opacity-0 translate-x-8",
    scaleIn: "opacity-0 scale-95",
    slideInUp: "opacity-0 translate-y-12",
  }

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  )
}

// Staggered animation for lists
interface StaggeredAnimationProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
}

export function StaggeredAnimation({ children, className = "", staggerDelay = 100 }: StaggeredAnimationProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollAnimation key={index} delay={index * staggerDelay} animation="fadeInUp">
          {child}
        </ScrollAnimation>
      ))}
    </div>
  )
}
