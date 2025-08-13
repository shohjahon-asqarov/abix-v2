"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const handleSend = () => {
    if (message.trim()) {
      // Handle message sending logic here
      setMessage("")
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 shadow-lg"
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 h-96 glass-minimal border-gray-100 dark:border-gray-900 shadow-xl">
          <CardHeader className="p-4 border-b border-gray-100 dark:border-gray-900">
            <h3 className="font-light">Live Chat</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-light">We're here to help</p>
          </CardHeader>
          <CardContent className="p-4 flex flex-col h-full">
            <div className="flex-1 mb-4">
              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3 mb-3">
                <p className="text-sm font-light">Hello! How can we help you today?</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="bg-transparent border-gray-200 dark:border-gray-800 text-sm"
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
              <Button
                onClick={handleSend}
                size="sm"
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
