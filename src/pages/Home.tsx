import React from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { Link } from 'react-router-dom'
import { MapPin, Calendar, Users, Star, Mail, BookOpen, HelpCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Home = () => {
 const featuredDestinations = [
 { id:1, name: 'Paris, France', image: 'https://api.a0.dev/assets/image?text=Paris%20Eiffel%20Tower&aspect=16:9&seed=1', description: 'The City of Light awaits.' },
 { id:2, name: 'Tokyo, Japan', image: 'https://api.a0.dev/assets/image?text=Tokyo%20Skyscrapers&aspect=16:9&seed=2', description: 'Modern meets tradition.' },
 { id:3, name: 'Bali, Indonesia', image: 'https://api.a0.dev/assets/image?text=Bali%20Beaches&aspect=16:9&seed=3', description: 'Tropical paradise.' },
 ]

 const testimonials = [
 { name: 'Sarah Johnson', location: 'New York, USA', review: 'VoyageVoyager made planning my European tour effortless. Highly recommend!', rating:5 },
 { name: 'Mike Chen', location: 'Toronto, Canada', review: 'Amazing destinations and top-notch service. Will book again!', rating:5 },
 { name: 'Emma Rodriguez', location: 'Madrid, Spain', review: 'The best travel agency I\'ve used. Professional and reliable.', rating:5 },
 ]

 const blogPosts = [
 { id:1, title: 'Top10 Hidden Gems in Europe', excerpt: 'Discover lesser-known spots that offer authentic experiences away from the crowds.', image: 'https://api.a0.dev/assets/image?text=European%20Hidden%20Gems&aspect=16:9&seed=10', date: 'Oct1,2025' },
 { id:2, title: 'Sustainable Travel Tips for2025', excerpt: 'Learn how to travel responsibly and minimize your environmental impact.', image: 'https://api.a0.dev/assets/image?text=Sustainable%20Travel&aspect=16:9&seed=11', date: 'Sep28,2025' },
 { id:3, title: 'Packing Essentials for Long Trips', excerpt: 'A comprehensive guide to what you really need for extended adventures.', image: 'https://api.a0.dev/assets/image?text=Packing%20Essentials&aspect=16:9&seed=12', date: 'Sep25,2025' },
 ]

 const faqs = [
 { question: 'How do I book a trip?', answer: 'Simply visit our Booking page, fill out the form with your details, and we\'ll contact you within24 hours to finalize your plans.' },
 { question: 'What destinations do you offer?', answer: 'We specialize in global destinations from Paris to Bali. Check our Destinations page for the full list and details.' },
 { question: 'Are there any hidden fees?', answer: 'No hidden fees! All costs are transparent, including flights, accommodations, and activities.' },
 { question: 'Can I customize my itinerary?', answer: 'Absolutely! We work with you to create personalized travel experiences tailored to your preferences.' },
 ]

 const [stats, setStats] = useState({ destinations:0, travelers:0, years:0 })

 useEffect(() => {
 const targetStats = { destinations:150, travelers:50000, years:10 }
 const duration =2000
 const steps =60
 const increment = {
 destinations: targetStats.destinations / steps,
 travelers: targetStats.travelers / steps,
 years: targetStats.years / steps,
 }

 const timer = setInterval(() => {
 setStats(prev => ({
 destinations: Math.min(prev.destinations + increment.destinations, targetStats.destinations),
 travelers: Math.min(prev.travelers + increment.travelers, targetStats.travelers),
 years: Math.min(prev.years + increment.years, targetStats.years),
 }))
 }, duration / steps)

 return () => clearInterval(timer)
 }, [])

 const [email, setEmail] = useState('')

 const handleNewsletterSubmit = (e: React.FormEvent) => {
 e.preventDefault()
 alert('Thanks for subscribing! We\'ll send you travel tips soon.')
 setEmail('')
 }

 return (
 <div className="space-y-16">
 {/* Hero Section */}
 <motion.section
 className="text-center py-24 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white rounded-3xl shadow-2xl relative overflow-hidden"
 initial={{ opacity:0, y:50 }}
 animate={{ opacity:1, y:0 }}
 transition={{ duration:0.8 }}
 >
 <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
 <div className="relative z-10">
 <motion.h1
 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent"
 initial={{ scale:0.8 }}
 animate={{ scale:1 }}
 transition={{ delay:0.2, duration:0.6 }}
 >
 Discover Your Next Adventure
 </motion.h1>
 <motion.p
 className="text-xl mb-10 max-w-2xl mx-auto opacity-90"
 initial={{ opacity:0 }}
 animate={{ opacity:1 }}
 transition={{ delay:0.4, duration:0.6 }}
 >
 Book unforgettable trips and explore the world's most beautiful destinations with expert guidance.
 </motion.p>
 <motion.div
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 transition={{ delay:0.6, duration:0.6 }}
 >
 <Link to="/booking">
 <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg px-8 py-3 text-lg font-semibold">Start Booking</Button>
 </Link>
 </motion.div>
 </div>
 </motion.section>

 {/* Stats Section */}
 <motion.section
 className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-16 rounded-2xl shadow-inner"
 initial={{ opacity:0 }}
 whileInView={{ opacity:1 }}
 viewport={{ once: true }}
 transition={{ duration:0.8 }}
 >
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white">Why Choose VoyageVoyager?</h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 <motion.div
 className="space-y-4"
 whileHover={{ scale:1.05 }}
 transition={{ type: 'spring', stiffness:300 }}
 >
 <MapPin className="h-16 w-16 mx-auto text-indigo-600" />
 <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{Math.floor(stats.destinations)}+ Destinations</h3>
 <p className="text-gray-600 dark:text-gray-400">Curated locations worldwide</p>
 </motion.div>
 <motion.div
 className="space-y-4"
 whileHover={{ scale:1.05 }}
 transition={{ type: 'spring', stiffness:300 }}
 >
 <Users className="h-16 w-16 mx-auto text-indigo-600" />
 <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{Math.floor(stats.travelers)}+ Happy Travelers</h3>
 <p className="text-gray-600 dark:text-gray-400">Satisfied customers globally</p>
 </motion.div>
 <motion.div
 className="space-y-4"
 whileHover={{ scale:1.05 }}
 transition={{ type: 'spring', stiffness:300 }}
 >
 <Calendar className="h-16 w-16 mx-auto text-indigo-600" />
 <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{Math.floor(stats.years)}+ Years Experience</h3>
 <p className="text-gray-600 dark:text-gray-400">Trusted travel expertise</p>
 </motion.div>
 </div>
 </div>
 </motion.section>

 {/* Featured Destinations */}
 <motion.section
 initial={{ opacity:0, y:50 }}
 whileInView={{ opacity:1, y:0 }}
 viewport={{ once: true }}
 transition={{ duration:0.8 }}
 >
 <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Popular Destinations</h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {featuredDestinations.map((dest, index) => (
 <motion.div
 key={dest.id}
 initial={{ opacity:0, y:30 }}
 whileInView={{ opacity:1, y:0 }}
 viewport={{ once: true }}
 transition={{ delay: index *0.2, duration:0.6 }}
 >
 <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800 border-0 shadow-lg">
 <img src={dest.image} alt={dest.name} className="w-full h-56 object-cover" />
 <CardHeader>
 <CardTitle className="flex items-center space-x-2 text-xl text-gray-800 dark:text-white">
 <MapPin className="h-6 w-6 text-indigo-600" />
 <span>{dest.name}</span>
 </CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">{dest.description}</p>
 <Button variant="outline" className="w-full hover:bg-indigo-50 hover:border-indigo-300 dark:hover:bg-indigo-900 dark:hover:border-indigo-600">Explore</Button>
 </CardContent>
 </Card>
 </motion.div>
 ))}
 </div>
 </motion.section>

 {/* Blog Preview */}
 <motion.section
 className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-16 rounded-2xl"
 initial={{ opacity:0 }}
 whileInView={{ opacity:1 }}
 viewport={{ once: true }}
 transition={{ duration:0.8 }}
 >
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white flex items-center justify-center space-x-2">
 <BookOpen className="h-8 w-8 text-indigo-600" />
 <span>Travel Blog</span>
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {blogPosts.map((post, index) => (
 <motion.div
 key={post.id}
 className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
 whileHover={{ scale:1.02 }}
 transition={{ type: 'spring', stiffness:300 }}
 >
 <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
 <div className="p-6">
 <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
 <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{post.title}</h3>
 <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
 <Button variant="link" className="p-0 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">Read More</Button>
 </div>
 </motion.div>
 ))}
 </div>
 <div className="mt-8">
 <Button variant="outline" size="lg">View All Posts</Button>
 </div>
 </div>
 </motion.section>

 {/* Testimonials */}
 <motion.section
 className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16 rounded-2xl"
 initial={{ opacity:0 }}
 whileInView={{ opacity:1 }}
 viewport={{ once: true }}
 transition={{ duration:0.8 }}
 >
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">What Our Travelers Say</h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {testimonials.map((testimonial, index) => (
 <motion.div
 key={index}
 className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
 whileHover={{ scale:1.02 }}
 transition={{ type: 'spring', stiffness:300 }}
 >
 <div className="flex items-center mb-4">
 {[...Array(testimonial.rating)].map((_, i) => (
 <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
 ))}
 </div>
 <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.review}"</p>
 <div className="text-sm text-gray-500 dark:text-gray-400">
 <strong className="text-gray-800 dark:text-white">{testimonial.name}</strong>, {testimonial.location}
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </motion.section>

 {/* FAQs */}
 <motion.section
 className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-16 rounded-2xl"
 initial={{ opacity:0 }}
 whileInView={{ opacity:1 }}
 viewport={{ once: true }}
 transition={{ duration:0.8 }}
 >
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white flex items-center justify-center space-x-2">
 <HelpCircle className="h-8 w-8 text-indigo-600" />
 <span>Frequently Asked Questions</span>
 </h2>
 <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
 {faqs.map((faq, index) => (
 <AccordionItem key={index} value={`item-${index}`} className="bg-white dark:bg-gray-700 rounded-lg shadow-md px-6">
 <AccordionTrigger className="text-left text-lg font-medium text-gray-800 dark:text-white hover:text-indigo-600 transition-colors">{faq.question}</AccordionTrigger>
 <AccordionContent className="text-gray-600 dark:text-gray-400 pb-4">{faq.answer}</AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>
 </div>
 </motion.section>

 {/* Newsletter Signup */}
 <motion.section
 className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 rounded-2xl shadow-2xl"
 initial={{ opacity:0, y:50 }}
 whileInView={{ opacity:1, y:0 }}
 viewport={{ once: true }}
 transition={{ duration:0.8 }}
 >
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
 <p className="text-xl mb-8 opacity-90">Get exclusive travel tips, destination guides, and special offers delivered to your inbox.</p>
 <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex space-x-4">
 <Input
 type="email"
 placeholder="Enter your email"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 required
 className="flex-1 bg-white/90 text-gray-900 placeholder-gray-500 border-0 focus:ring-2 focus:ring-yellow-400"
 />
 <Button type="submit" className="bg-yellow-400 text-indigo-900 hover:bg-yellow-300 hover:scale-105 transition-all duration-300 px-6 py-2 font-semibold">
 <Mail className="h-5 w-5 mr-2" />
 Subscribe
 </Button>
 </form>
 </div>
 </motion.section>
 </div>
 )
}

export default Home