"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MessageCircle, X, Send, Minimize2, Bot, Phone, Mail } from "lucide-react"

interface LiveChatProps {
  isOpen: boolean
  onToggle: () => void
}

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function LiveChat({ isOpen, onToggle }: LiveChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to Abix Agency. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages([...messages, newMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    if (message.includes("price") || message.includes("cost")) {
      return "Our pricing varies based on project requirements. We offer packages starting from $2,999. Would you like to schedule a consultation to discuss your specific needs?"
    }

    if (message.includes("service") || message.includes("what do you do")) {
      return "We offer web development, mobile apps, UI/UX design, CRM/ERP systems, digital marketing, and more. Which service interests you most?"
    }

    if (message.includes("contact") || message.includes("call") || message.includes("phone")) {
      return "You can reach us at +1 (555) 123-4567 or email hello@abixagency.com. Would you like me to connect you with our sales team?"
    }

    if (message.includes("time") || message.includes("how long")) {
      return "Project timelines vary: Simple websites take 2-4 weeks, complex applications 3-6 months. What type of project are you considering?"
    }

    return "Thank you for your message! Our team will get back to you shortly. Is there anything specific about our services you'd like to know more about?"
  }

  const quickReplies = [
    "What services do you offer?",
    "How much does it cost?",
    "How long does a project take?",
    "Can I see your portfolio?",
  ]

  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
      >
        <MessageCircle className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      </button>
    )
  }

  return (
    <Card className="fixed bottom-6 right-6 z-50 w-96 h-[500px] backdrop-blur-xl bg-slate-900/95 border border-white/20 shadow-2xl">
      {/* Header */}
      <CardHeader className="p-4 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Abix Support</h3>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs text-gray-400">Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 rounded hover:bg-white/10 transition-colors"
            >
              <Minimize2 className="h-4 w-4 text-gray-400" />
            </button>
            <button onClick={onToggle} className="p-1 rounded hover:bg-white/10 transition-colors">
              <X className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>
      </CardHeader>

      {!isMinimized && (
        <>
          {/* Messages */}
          <CardContent className="p-4 h-80 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                      : "bg-white/10 text-gray-300"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 text-gray-300 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </CardContent>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => setInputValue(reply)}
                    className="text-xs bg-white/10 hover:bg-white/20 text-gray-300 px-3 py-1 rounded-full transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your message..."
                className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-indigo-400"
              />
              <Button
                onClick={sendMessage}
                size="sm"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>

            {/* Contact Options */}
            <div className="flex justify-center space-x-4 mt-3">
              <button className="flex items-center space-x-1 text-xs text-gray-400 hover:text-white transition-colors">
                <Phone className="h-3 w-3" />
                <span>Call</span>
              </button>
              <button className="flex items-center space-x-1 text-xs text-gray-400 hover:text-white transition-colors">
                <Mail className="h-3 w-3" />
                <span>Email</span>
              </button>
            </div>
          </div>
        </>
      )}
    </Card>
  )
}
