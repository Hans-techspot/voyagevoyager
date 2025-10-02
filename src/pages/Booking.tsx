import React, { useState } from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Calendar } from '../components/ui/calendar'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog'
import { Progress } from '../components/ui/progress'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { format } from 'date-fns'
import { CalendarIcon, CheckCircle } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover'
import { cn } from '../lib/utils'
import { motion } from 'framer-motion'

const bookingSchema = z.object({
 name: z.string().min(2, 'Name must be at least2 characters'),
 email: z.string().email('Invalid email'),
 destination: z.string().min(1, 'Please select a destination'),
 travelers: z.number().min(1, 'At least1 traveler'),
 date: z.date({ required_error: 'Please select a date' }),
 notes: z.string().optional(),
})

type BookingForm = z.infer<typeof bookingSchema>

const Booking = () => {
 const [step, setStep] = useState(1)
 const [isSubmitted, setIsSubmitted] = useState(false)

 const form = useForm<BookingForm>({
 resolver: zodResolver(bookingSchema),
 defaultValues: {
 name: '',
 email: '',
 destination: '',
 travelers:1,
 notes: '',
 },
 })

 const onSubmit = (data: BookingForm) => {
 console.log('Booking data:', data)
 setIsSubmitted(true)
 // Here you would typically send to backend
 }

 const nextStep = () => setStep(step +1)
 const prevStep = () => setStep(step -1)

 return (
 <div className="max-w-2xl mx-auto space-y-8">
 <div className="text-center">
 <h1 className="text-4xl font-bold mb-4">Book Your Trip</h1>
 <p className="text-xl text-gray-600 dark:text-gray-400">Fill out the form below to start planning your adventure.</p>
 </div>

 <Progress value={(step /3) *100} className="mb-6" />

 <Card>
 <CardHeader>
 <CardTitle>Step {step} of3: Trip Details</CardTitle>
 </CardHeader>
 <CardContent>
 <Form {...form}>
 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
 {step ===1 && (
 <motion.div
 initial={{ opacity:0, x:-20 }}
 animate={{ opacity:1, x:0 }}
 transition={{ duration:0.5 }}
 >
 <FormField
 control={form.control}
 name="name"
 render={({ field }) => (
 <FormItem>
 <FormLabel>Full Name</FormLabel>
 <FormControl>
 <Input placeholder="Enter your name" {...field} />
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
 <Input type="email" placeholder="Enter your email" {...field} />
 </FormControl>
 <FormMessage />
 </FormItem>
 )}
 />
 </motion.div>
 )}
 {step ===2 && (
 <motion.div
 initial={{ opacity:0, x:-20 }}
 animate={{ opacity:1, x:0 }}
 transition={{ duration:0.5 }}
 >
 <FormField
 control={form.control}
 name="destination"
 render={({ field }) => (
 <FormItem>
 <FormLabel>Destination</FormLabel>
 <FormControl>
 <Input placeholder="Where do you want to go?" {...field} />
 </FormControl>
 <FormMessage />
 </FormItem>
 )}
 />
 <FormField
 control={form.control}
 name="travelers"
 render={({ field }) => (
 <FormItem>
 <FormLabel>Number of Travelers</FormLabel>
 <FormControl>
 <Input
 type="number"
 min="1"
 {...field}
 onChange={(e) => field.onChange(parseInt(e.target.value))}
 />
 </FormControl>
 <FormMessage />
 </FormItem>
 )}
 />
 </motion.div>
 )}
 {step ===3 && (
 <motion.div
 initial={{ opacity:0, x:-20 }}
 animate={{ opacity:1, x:0 }}
 transition={{ duration:0.5 }}
 >
 <FormField
 control={form.control}
 name="date"
 render={({ field }) => (
 <FormItem className="flex flex-col">
 <FormLabel>Travel Date</FormLabel>
 <Popover>
 <PopoverTrigger asChild>
 <FormControl>
 <Button
 variant="outline"
 className={cn(
 'w-full pl-3 text-left font-normal',
 !field.value && 'text-muted-foreground'
 )}
 >
 {field.value ? (
 format(field.value, 'PPP')
 ) : (
 <span>Pick a date</span>
 )}
 <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
 </Button>
 </FormControl>
 </PopoverTrigger>
 <PopoverContent className="w-auto p-0" align="start">
 <Calendar
 mode="single"
 selected={field.value}
 onSelect={field.onChange}
 disabled={(date) => date < new Date()}
 initialFocus
 />
 </PopoverContent>
 </Popover>
 <FormMessage />
 </FormItem>
 )}
 />
 <FormField
 control={form.control}
 name="notes"
 render={({ field }) => (
 <FormItem>
 <FormLabel>Special Requests (Optional)</FormLabel>
 <FormControl>
 <Textarea placeholder="Any special requirements or notes..." {...field} />
 </FormControl>
 <FormMessage />
 </FormItem>
 )}
 />
 </motion.div>
 )}

 <div className="flex justify-between mt-6">
 {step >1 && <Button type="button" variant="outline" onClick={prevStep}>Previous</Button>}
 {step <3 ? (
 <Button type="button" onClick={nextStep}>Next</Button>
 ) : (
 <Button type="submit">Submit Booking</Button>
 )}
 </div>
 </form>
 </Form>
 </CardContent>
 </Card>

 <Dialog open={isSubmitted} onOpenChange={setIsSubmitted}>
 <DialogContent className="text-center">
 <DialogHeader>
 <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
 <DialogTitle>Booking Submitted!</DialogTitle>
 </DialogHeader>
 <p className="text-gray-600 dark:text-gray-400">We'll contact you soon with confirmation details.</p>
 <Button onClick={() => setIsSubmitted(false)}>Close</Button>
 </DialogContent>
 </Dialog>
 </div>
 )
}

export default Booking