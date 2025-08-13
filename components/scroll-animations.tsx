"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface StaggeredAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function StaggeredAnimation({ children, className = "", delay = 100 }: StaggeredAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.children
            Array.from(children).forEach((child, index) => {
              setTimeout(() => {
                child.classList.add("animate-in")
              }, index * delay)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
}

export function ScrollReveal({ children, className = "", direction = "up", delay = 0 }: ScrollRevealProps) {
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

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(50px)"
      case "down":
        return "translateY(-50px)"
      case "left":
        return "translateX(50px)"
      case "right":
        return "translateX(-50px)"
      default:
        return "translateY(50px)"
    }
  }

  return (
    <div
      ref={elementRef}
      className={`opacity-0 transition-all duration-700 ease-out ${className}`}
      style={{
        transform: getInitialTransform(),
      }}
    >
      {children}
    </div>
  )
}

interface ParallaxProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function Parallax({ children, speed = 0.5, className = "" }: ParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const scrolled = window.pageYOffset
        const parallax = scrolled * speed
        elementRef.current.style.transform = `translateY(${parallax}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={elementRef} className={`parallax ${className}`}>
      {children}
    </div>
  )
}
