import React, { useState } from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const contactSchema = z.object({
 name: z.string().min(2, 'Name must be at least2 characters'),
 email: z.string().email('Invalid email'),
 subject: z.string().min(1, 'Subject is required'),
 message: z.string().min(10, 'Message must be at least10 characters'),
})

type ContactForm = z.infer<typeof contactSchema>

const Contact = () => {
 const [isSubmitted, setIsSubmitted] = useState(false)

 const form = useForm<ContactForm>({
 resolver: zodResolver(contactSchema),
 defaultValues: {
 name: '',
 email: '',
 subject: '',
 message: '',
 },
 })

 const onSubmit = (data: ContactForm) => {
 console.log('Contact data:', data)
 setIsSubmitted(true)
 // Here you would typically send to backend
 }

 return (
 <div className="max-w-4xl mx-auto space-y-12">
 <div className="text-center">
 <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
 <p className="text-xl text-gray-600 dark:text-gray-400">Have questions? We're here to help plan your perfect trip.</p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 <motion.div
 initial={{ opacity:0, x:-50 }}
 whileInView={{ opacity:1, x:0 }}
 viewport={{ once: true }}
 transition={{ duration:0.6 }}
 >
 <Card>
 <CardHeader>
 <CardTitle>Get in Touch</CardTitle>
 </CardHeader>
 <CardContent>
 <Form {...form}>
 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
 <FormField
 control={form.control}
 name="name"
 render={({ field }) => (
 <FormItem>
 <FormLabel>Name</FormLabel>
 <FormControl>
 <Input placeholder="Your name" {...field} />
 </FormControl>
 <FormMessage />
 </FormItem>
 )}
 />
 <FormField
 control={form.control}
 name="email"
 render={({ field }) => (
 <FormItem>
 <FormLabel>Email</FormLabel>
 <FormControl>
 <Input type="email" placeholder="your@email.com" {...field} />
 </FormControl>
 <FormMessage />
 </FormItem>
 )}
 />
 <FormField
 control={form.control}
 name="subject"
 render={({ field }) => (
 <FormItem>
 <FormLabel>Subject</FormLabel>
 <FormControl>
 <Input placeholder="What's this about?" {...field} />
 </FormControl>
 <FormMessage />
 </FormItem>
 )}
 />
 <FormField
 control={form.control}
 name="message"
 render={({ field }) => (
 <FormItem>
 <FormLabel>Message</FormLabel>
 <FormControl>
 <Textarea placeholder="Tell us more..." {...field} />
 </FormControl>
 <FormMessage />
 </FormItem>
 )}
 />
 <Button type="submit" className="w-full">Send Message</Button>
 </form>
 </Form>
 {isSubmitted && <p className="text-green-600 mt-4">Thank you! We'll get back to you soon.</p>}
 </CardContent>
 </Card>
 </motion.div>

 <motion.div
 initial={{ opacity:0, x:50 }}
 whileInView={{ opacity:1, x:0 }}
 viewport={{ once: true }}
 transition={{ duration:0.6 }}
 className="space-y-6"
 >
 <Card>
 <CardHeader>
 <CardTitle>Contact Information</CardTitle>
 </CardHeader>
 <CardContent className="space-y-4">
 <div className="flex items-center space-x-3">
 <Mail className="h-5 w-5 text-indigo-600" />
 <span>info@voyagevoyager.com</span>
 </div>
 <div className="flex items-center space-x-3">
 <Phone className="h-5 w-5 text-indigo-600" />
 <span>+1 (555)123-4567</span>
 </div>
 <div className="flex items-center space-x-3">
 <MapPin className="h-5 w-5 text-indigo-600" />
 <span>123 Travel St, Adventure City, AC12345</span>
 </div>
 </CardContent>
 </Card>

 <Card>
 <CardHeader>
 <CardTitle>Office Hours</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-gray-600 dark:text-gray-400">Monday - Friday:9 AM -6 PM</p>
 <p className="text-gray-600 dark:text-gray-400">Saturday:10 AM -4 PM</p>
 <p className="text-gray-600 dark:text-gray-400">Sunday: Closed</p>
 </CardContent>
 </Card>

 <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center">
 <p className="text-gray-500">Map Placeholder</p>
 </div>
 </motion.div>
 </div>
 </div>
 )
}

export default Contact