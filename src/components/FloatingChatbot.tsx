import React, { useState, useRef, useEffect } from 'react'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import { MessageCircle, Send, Plane } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const FloatingChatbot = () => {
 const [isOpen, setIsOpen] = useState(false)
 const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean; quickReplies?: string[] }>>([
 { text: 'Hi! I\'m your travel assistant at VoyageVoyager. How can I help you plan your next adventure?', isUser: false, quickReplies: ['Show Destinations', 'Book Now', 'Travel Tips'] }
 ])
 const [input, setInput] = useState('')
 const [isTyping, setIsTyping] = useState(false)
 const messagesEndRef = useRef<HTMLDivElement>(null)

 const scrollToBottom = () => {
 messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
 }

 useEffect(() => {
 scrollToBottom()
 }, [messages])

 const callA0DevAPI = async (conversation: Array<{ role: 'user' | 'assistant'; content: string }>) => {
 const bodyPayload = {
 messages: [
 { role: 'system', content: 'You are a helpful travel assistant for VoyageVoyager, a travel agency. Provide concise, friendly responses about destinations, bookings, travel tips, and related topics. Keep answers professional and engaging.' },
 ...conversation
 ],
 temperature:0.7,
 max_tokens:150,
 }
 const res = await fetch('https://api.a0.dev/ai/llm', {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify(bodyPayload),
 })

 if (!res.ok) {
 const text = await res.text()
 throw new Error(`LLM non-streaming call failed: ${res.status} ${text}`)
 }

 const json = await res.json()
 const completion = json.completion ?? json.message ?? JSON.stringify(json)
 return completion
 }

 const handleSend = async (message?: string) => {
 const userMessage = message || input.trim()
 if (!userMessage) return
 const newUserMessage = { text: userMessage, isUser: true }
 setMessages(prev => [...prev, newUserMessage])
 setInput('')
 setIsTyping(true)

 try {
 // Prepare conversation history
 const conversation = messages
 .filter(msg => msg.text) // Filter out empty messages
 .map(msg => ({
 role: msg.isUser ? 'user' as const : 'assistant' as const,
 content: msg.text,
 }))
 conversation.push({ role: 'user', content: userMessage })

 const botResponse = await callA0DevAPI(conversation)

 setMessages(prev => [...prev, { text: botResponse, isUser: false, quickReplies: ['Tell me more', 'Book Now', 'Other Questions'] }])
 } catch (error) {
 console.error('API call failed:', error)
 setMessages(prev => [...prev, { text: 'Sorry, I\'m having trouble connecting right now. Please try again or contact support!', isUser: false }])
 } finally {
 setIsTyping(false)
 }
 }

 const handleQuickReply = (reply: string) => {
 handleSend(reply)
 }

 const handleKeyPress = (e: React.KeyboardEvent) => {
 if (e.key === 'Enter') handleSend()
 }

 return (
 <>
 {/* Floating Button */}
 <motion.div
 className="fixed bottom-6 right-6 z-50"
 whileHover={{ scale:1.1 }}
 whileTap={{ scale:0.95 }}
 >
 <Button
 onClick={() => setIsOpen(true)}
 className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-2xl transition-all duration-300 hover:shadow-indigo-500/50"
 size="icon"
 animate={{ scale: [1,1.05,1] }}
 transition={{ repeat: Infinity, duration:2 }}
 >
 <MessageCircle className="h-6 w-6" />
 </Button>
 </motion.div>

 {/* Chat Dialog */}
 <Dialog open={isOpen} onOpenChange={setIsOpen}>
 <DialogContent className="max-w-md h-[28rem] flex flex-col p-0 overflow-hidden bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-900 shadow-2xl border-0">
 <DialogHeader className="p-4 border-b bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-lg">
 <DialogTitle className="text-lg font-semibold flex items-center space-x-2">
 <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
 <Plane className="h-4 w-4" />
 </div>
 <span>Travel Assistant</span>
 </DialogTitle>
 </DialogHeader>
 <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-transparent">
 <AnimatePresence>
 {messages.map((msg, index) => (
 <motion.div
 key={index}
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 exit={{ opacity:0, y: -20 }}
 transition={{ duration:0.3 }}
 className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
 >
 <div
 className={`max-w-xs px-4 py-3 rounded-2xl text-sm shadow-lg backdrop-blur-sm ${msg.isUser ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' : 'bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600'}`}
 >
 {msg.isUser ? (
 <span>{msg.text}</span>
 ) : (
 <div className="flex items-start space-x-2">
 <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center flex-shrink-0">
 <Plane className="h-3 w-3 text-indigo-600" />
 </div>
 <div className="prose prose-sm max-w-none dark:prose-invert">
 <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
 </div>
 </div>
 )}
 </div>
 </motion.div>
 ))}
 {isTyping && (
 <motion.div
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 className="flex justify-start"
 >
 <div className="bg-white/80 dark:bg-gray-700/80 px-4 py-3 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-600">
 <div className="flex items-center space-x-2">
 <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center flex-shrink-0">
 <Plane className="h-3 w-3 text-indigo-600" />
 </div>
 <div className="flex space-x-1">
 <motion.div
 className="w-2 h-2 bg-indigo-600 rounded-full"
 animate={{ scale: [1,1.2,1] }}
 transition={{ repeat: Infinity, duration:0.8, delay:0 }}
 />
 <motion.div
 className="w-2 h-2 bg-indigo-600 rounded-full"
 animate={{ scale: [1,1.2,1] }}
 transition={{ repeat: Infinity, duration:0.8, delay:0.2 }}
 />
 <motion.div
 className="w-2 h-2 bg-indigo-600 rounded-full"
 animate={{ scale: [1,1.2,1] }}
 transition={{ repeat: Infinity, duration:0.8, delay:0.4 }}
 />
 </div>
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 <div ref={messagesEndRef} />
 </div>
 {messages[messages.length -1]?.quickReplies && !isTyping && (
 <div className="px-4 pb-2 flex flex-wrap gap-2">
 {messages[messages.length -1].quickReplies!.map((reply, idx) => (
 <motion.button
 key={idx}
 onClick={() => handleQuickReply(reply)}
 className="px-3 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300 rounded-full text-xs hover:bg-indigo-200 dark:hover:bg-indigo-700 transition-colors"
 whileHover={{ scale:1.05 }}
 whileTap={{ scale:0.95 }}
 >
 {reply}
 </motion.button>
 ))}
 </div>
 )}
 <div className="p-4 border-t bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm flex space-x-2">
 <Input
 value={input}
 onChange={(e) => setInput(e.target.value)}
 onKeyPress={handleKeyPress}
 placeholder="Ask about travel..."
 className="flex-1 bg-white/80 dark:bg-gray-700/80 border-gray-300 dark:border-gray-600 focus:ring-indigo-500"
 disabled={isTyping}
 />
 <Button onClick={() => handleSend()} size="icon" className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700" disabled={!input.trim() || isTyping}>
 <Send className="h-4 w-4" />
 </Button>
 </div>
 </DialogContent>
 </Dialog>
 </>
 )
}

export default FloatingChatbot