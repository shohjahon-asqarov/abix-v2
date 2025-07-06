"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Mail, Gift, CheckCircle, Sparkles } from "lucide-react"

interface NewsletterPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function NewsletterPopup({ isOpen, onClose }: NewsletterPopupProps) {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <Card className="w-full max-w-md backdrop-blur-xl bg-slate-900/95 border border-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10" />

          <CardContent className="p-8 text-center relative z-10">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Welcome Aboard! 🎉</h3>
            <p className="text-gray-300 mb-6">
              Thank you for subscribing! You'll receive our latest insights and exclusive offers.
            </p>

            <Button
              onClick={onClose}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
            >
              Continue Exploring
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <Card className="w-full max-w-md backdrop-blur-xl bg-slate-900/95 border border-white/20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          <X className="h-5 w-5 text-gray-400" />
        </button>

        <CardContent className="p-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-white" />
            </div>

            <Badge className="mb-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-500/30">
              <Gift className="h-3 w-3 mr-1" />
              Exclusive Offer
            </Badge>

            <h3 className="text-2xl font-bold text-white mb-2">Get 20% Off Your First Project!</h3>
            <p className="text-gray-300">
              Subscribe to our newsletter and receive exclusive insights, tips, and special offers.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-3 mb-6">
            {[
              "Latest web development trends",
              "Exclusive project discounts",
              "Free consultation opportunities",
              "Industry insights and tips",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-indigo-400"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-3 font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Subscribing...
                </div>
              ) : (
                "Get My 20% Discount"
              )}
            </Button>
          </form>

          <p className="text-xs text-gray-400 text-center mt-4">
            No spam, unsubscribe at any time. By subscribing, you agree to our privacy policy.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
