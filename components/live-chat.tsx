"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Salom! Iqro Agency ga xush kelibsiz. Sizga qanday yordam bera olaman?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickReplies = ["Xizmatlar haqida ma'lumot", "Narxlar haqida", "Loyiha muddatlari", "Portfolio ko'rish"]

  const botResponses: { [key: string]: string } = {
    "xizmatlar haqida ma'lumot":
      "Biz veb dasturlash, mobil ilovalar, UI/UX dizayn, maxsus dasturlar, SEO va ma'lumotlar tahlili xizmatlarini taqdim etamiz. Qaysi xizmat sizni qiziqtiradi?",
    "narxlar haqida":
      "Narxlar loyiha murakkabligiga qarab belgilanadi. Bepul konsultatsiya uchun bog'laning: +998 90 123 45 67",
    "loyiha muddatlari":
      "Oddiy veb-saytlar 2-4 hafta, murakkab ilovalar 3-6 oy davom etadi. Aniq muddat loyihangizga bog'liq.",
    "portfolio ko'rish":
      "Bizning ishlarimizni sahifada ko'rishingiz mumkin. 200+ muvaffaqiyatli loyiha amalga oshirganmiz.",
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setMessage("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse =
        botResponses[text.toLowerCase()] ||
        "Rahmat! Tez orada mutaxassislarimiz siz bilan bog'lanadi. Qo'shimcha savollar bo'lsa, bemalol so'rang."

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply)
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full btn-primary shadow-lg hover:shadow-xl animate-float-subtle focus-pro"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    )
  }

  return (
    <Card className="fixed bottom-6 right-6 z-50 w-96 glass-pro border border-gray-100 dark:border-gray-900 shadow-2xl animate-scale-in">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 border-b border-gray-100 dark:border-gray-900">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
            <Bot className="w-4 h-4 text-white dark:text-black" />
          </div>
          <div>
            <h3 className="font-medium">Iqro Support</h3>
            <div className="flex items-center space-x-2">
              <div className="status-online"></div>
              <span className="text-xs text-gray-500 dark:text-gray-500">Onlayn</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(!isMinimized)}
            className="w-8 h-8 p-0 focus-pro"
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="w-8 h-8 p-0 focus-pro">
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="p-0">
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className="flex items-start space-x-2 max-w-[80%]">
                  {msg.sender === "bot" && (
                    <div className="w-6 h-6 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-3 h-3" />
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-lg text-sm ${
                      msg.sender === "user"
                        ? "bg-black dark:bg-white text-white dark:text-black"
                        : "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                  {msg.sender === "user" && (
                    <div className="w-6 h-6 bg-black dark:bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-3 h-3 text-white dark:text-black" />
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-3 h-3" />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-900 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="px-4 pb-2">
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs btn-secondary"
                >
                  {reply}
                </Button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-100 dark:border-gray-900">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage(message)
              }}
              className="flex space-x-2"
            >
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Xabar yozing..."
                className="form-input-pro flex-1"
              />
              <Button type="submit" disabled={!message.trim()} className="btn-primary focus-pro">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
