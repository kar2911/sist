"use client"

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { MessageCircle, X, Send, GraduationCap, RefreshCw } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { Message } from '@/types/chat'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { 
      type: 'bot', 
      text: 'Hello! I\'m your Sathyabama assistant. How can I help you today?',
      options: [
        'Admission Process',
        'Programs Offered',
        'Fee Structure',
        'Campus Life',
        'Contact Information'
      ]
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleRefresh = () => {
    setIsLoading(true)
    setMessages([
      { 
        type: 'bot', 
        text: 'Hello! I\'m your Sathyabama assistant. How can I help you today?',
        options: [
          'Admission Process',
          'Programs Offered',
          'Fee Structure',
          'Campus Life',
          'Contact Information'
        ]
      }
    ])
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  const fetchBotResponse = async (userInput: string): Promise<Message> => {
    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.href,
          'X-Title': 'Sathyabama University Chatbot'
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat-v3-0324:free",
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant for Sathyabama University. Provide concise, accurate information about admissions, programs, fees, campus life, and contact details. Use markdown formatting to structure your responses with headings, bullet points, and emphasis where appropriate. Strictly do not answer any personal information, just answer information about the University and nothing else. Keep responses under 5 - 10 lines."
            },
            {
              role: "user",
              content: userInput
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      const botText = data.choices[0]?.message?.content || "I couldn't process that request. Please try again.";

      // Determine if we should show options based on the context
      const showOptions = !userInput.toLowerCase().includes('specific') && 
                         !userInput.toLowerCase().includes('detail');

      return {
        type: 'bot',
        text: botText,
        options: showOptions ? [
          'Admission Process',
          'Programs Offered',
          'Fee Structure',
          'Campus Life',
          'Contact Information'
        ] : undefined
      };
    } catch (error) {
      console.error('Error fetching bot response:', error);
      return {
        type: 'bot',
        text: "I'm having trouble connecting to the information service. Please try again later or ask about:\n\n- Admission Process\n- Programs Offered\n- Fee Structure\n- Campus Life\n- Contact Information",
        options: [
          'Admission Process',
          'Programs Offered',
          'Fee Structure',
          'Campus Life',
          'Contact Information'
        ]
      };
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = { type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const botResponse = await fetchBotResponse(input);
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: "Sorry, I encountered an error. Please try again.", 
        options: [
          'Admission Process',
          'Programs Offered',
          'Fee Structure',
          'Campus Life',
          'Contact Information'
        ]
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickOption = async (option: string) => {
    const userMessage: Message = { type: 'user', text: option };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const botResponse = await fetchBotResponse(option);
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: "Sorry, I encountered an error. Please try again.", 
        options: [
          'Admission Process',
          'Programs Offered',
          'Fee Structure',
          'Campus Life',
          'Contact Information'
        ]
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Custom components for markdown rendering
  const MarkdownComponents = {
    // Override h1 rendering
    h1: ({ node, ...props }) => <h1 className="text-lg font-bold mb-2" {...props} />,
    // Override h2 rendering
    h2: ({ node, ...props }) => <h2 className="text-md font-bold mb-1" {...props} />,
    // Override p rendering
    p: ({ node, ...props }) => <p className="mb-2" {...props} />,
    // Override ul rendering
    ul: ({ node, ...props }) => <ul className="list-disc pl-4 mb-2" {...props} />,
    // Override ol rendering
    ol: ({ node, ...props }) => <ol className="list-decimal pl-4 mb-2" {...props} />,
    // Override li rendering
    li: ({ node, ...props }) => <li className="mb-1" {...props} />,
    // Override a rendering
    a: ({ node, ...props }) => <a className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" {...props} />,
    // Override strong rendering
    strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
    // Override em rendering
    em: ({ node, ...props }) => <em className="italic" {...props} />,
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-[#800000] hover:bg-[#600000] animate-bounce shadow-lg"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <div className="w-[450px] h-[550px] flex flex-col bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="flex flex-row items-center justify-between bg-[#800000] text-white p-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Sathyabama Assistant</h2>
            </div>
            <div className="flex space-x-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleRefresh}
                className="text-white hover:bg-[#600000] h-8 w-8"
                aria-label="Refresh chat"
                disabled={isLoading}
              >
                <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-[#600000] h-8 w-8"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
            {messages.map((message, index) => (
              <div key={index}>
                <div
                  className={`flex ${
                    message.type === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg p-3 ${
                      message.type === 'user'
                        ? 'bg-[#800000] text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.type === 'user' ? (
                      message.text.split('\n').map((line, i) => (
                        <p key={i} className="mb-1 last:mb-0">{line}</p>
                      ))
                    ) : (
                      <ReactMarkdown components={MarkdownComponents}>
                        {message.text}
                      </ReactMarkdown>
                    )}
                  </div>
                </div>
                {message.options && message.type === 'bot' && (
                  <div className="flex flex-wrap gap-2 mt-2 ml-1">
                    {message.options.map((option, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickOption(option)}
                        className="text-xs h-8 bg-white"
                        disabled={isLoading}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-lg p-3 bg-gray-100 text-gray-800">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-75"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 bg-white border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 rounded-md p-2 border focus:outline-none focus:ring-2 focus:ring-[#800000] text-sm"
                aria-label="Type your message"
                disabled={isLoading}
              />
              <Button
                onClick={handleSend}
                className="bg-[#800000] hover:bg-[#600000]"
                aria-label="Send message"
                disabled={isLoading}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Our assistant typically replies in under a minute
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatBot