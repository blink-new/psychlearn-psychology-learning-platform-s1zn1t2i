import React, { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Badge } from './ui/badge'
import { ScrollArea } from './ui/scroll-area'
import { Bot, User, Send, Sparkles, BookOpen, Brain, Lightbulb } from 'lucide-react'
import { blink } from '../blink/client'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface AIStudyAssistantProps {
  topicId?: string
  topicTitle?: string
}

export function AIStudyAssistant({ topicId, topicTitle }: AIStudyAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: `Hello! I'm your AI Psychology Study Assistant powered by Gemini. I can help you with:

• **Explaining complex concepts** in simple terms
• **Creating study materials** like flashcards and summaries  
• **Answering questions** about psychology topics
• **Providing examples** and real-world applications
• **Suggesting study strategies** for better retention

${topicTitle ? `I see you're studying "${topicTitle}". What would you like to explore about this topic?` : 'What psychology topic would you like to explore today?'}`,
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const quickPrompts = [
    { icon: BookOpen, text: 'Explain this concept simply', prompt: `Explain the concept of ${topicTitle || 'memory systems'} in simple terms that a beginner can understand.` },
    { icon: Brain, text: 'Create flashcards', prompt: `Create 5 flashcards for studying ${topicTitle || 'psychology concepts'} with questions on one side and answers on the other.` },
    { icon: Lightbulb, text: 'Real-world examples', prompt: `Give me 3 real-world examples of how ${topicTitle || 'psychological principles'} apply in everyday life.` },
    { icon: Sparkles, text: 'Study tips', prompt: `What are the best study strategies for mastering ${topicTitle || 'psychology topics'}?` }
  ]

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || input.trim()
    if (!text || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      // Create context-aware prompt
      let contextPrompt = `You are an expert psychology tutor and study assistant. You help students understand psychology concepts clearly and provide practical study guidance.

User's question: ${text}`

      if (topicTitle) {
        contextPrompt += `\n\nContext: The student is currently studying the topic "${topicTitle}".`
      }

      contextPrompt += `\n\nPlease provide a helpful, educational response that:
- Uses clear, accessible language
- Includes specific examples when relevant
- Suggests practical applications or study techniques
- Encourages further learning

Keep your response concise but comprehensive (aim for 2-4 paragraphs).`

      const response = await blink.ai.generateText({
        prompt: contextPrompt,
        model: 'gemini-1.5-pro',
        maxTokens: 500
      })

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.text,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])

      // Save conversation to database for user's study history
      try {
        const user = await blink.auth.me()
        if (user) {
          await blink.db.ai_conversations.create({
            id: `conv_${Date.now()}`,
            user_id: user.id,
            topic_id: topicId || null,
            user_message: text,
            ai_response: response.text,
            created_at: new Date().toISOString()
          })
        }
      } catch (dbError) {
        console.error('Failed to save conversation:', dbError)
      }

    } catch (error) {
      console.error('AI request failed:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'I apologize, but I encountered an error processing your request. Please try again or rephrase your question.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-blue-600" />
          AI Study Assistant
          <Badge variant="secondary" className="ml-auto">
            Powered by Gemini
          </Badge>
        </CardTitle>
        {topicTitle && (
          <p className="text-sm text-muted-foreground">
            Studying: {topicTitle}
          </p>
        )}
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-4 p-4">
        {/* Quick Prompts */}
        <div className="grid grid-cols-2 gap-2">
          {quickPrompts.map((prompt, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleSendMessage(prompt.prompt)}
              disabled={isLoading}
              className="h-auto p-2 text-xs justify-start"
            >
              <prompt.icon className="h-3 w-3 mr-1 flex-shrink-0" />
              <span className="truncate">{prompt.text}</span>
            </Button>
          ))}
        </div>

        {/* Messages */}
        <ScrollArea ref={scrollAreaRef} className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-blue-600" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <div className="text-sm whitespace-pre-wrap">
                    {message.content}
                  </div>
                  <div className={`text-xs mt-1 ${
                    message.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
                {message.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-blue-600" />
                </div>
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about psychology..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button
            onClick={() => handleSendMessage()}
            disabled={!input.trim() || isLoading}
            size="icon"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}