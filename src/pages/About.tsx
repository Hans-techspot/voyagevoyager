import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Users, Award, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const About = () => {
 const team = [
 { name: 'Alice Johnson', role: 'Founder & CEO', image: 'https://api.a0.dev/assets/image?text=Alice%20Johnson&aspect=1:1&seed=1' },
 { name: 'Bob Smith', role: 'Travel Consultant', image: 'https://api.a0.dev/assets/image?text=Bob%20Smith&aspect=1:1&seed=2' },
 { name: 'Carol Lee', role: 'Marketing Director', image: 'https://api.a0.dev/assets/image?text=Carol%20Lee&aspect=1:1&seed=3' },
 ]

 return (
 <div className="space-y-12">
 <div className="text-center">
 <h1 className="text-4xl font-bold mb-4">About VoyageVoyager</h1>
 <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">We're passionate about creating unforgettable travel experiences, connecting you with the world's most beautiful destinations.</p>
 </div>

 <motion.section
 className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16 rounded-2xl"
 initial={{ opacity:0 }}
 whileInView={{ opacity:1 }}
 viewport={{ once: true }}
 transition={{ duration:0.8 }}
 >
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-3xl font-bold mb-8">Our Story</h2>
 <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">Founded in2015, VoyageVoyager started as a small team of travel enthusiasts with a dream to make exploring the world accessible to everyone. Today, we've helped thousands of travelers discover their perfect adventures, from romantic getaways to family vacations and solo journeys.</p>
 </div>
 </motion.section>

 <section>
 <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 <motion.div
 whileHover={{ scale:1.05 }}
 transition={{ type: 'spring', stiffness:300 }}
 >
 <Card className="text-center hover:shadow-lg transition-shadow duration-300">
 <CardHeader>
 <Award className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
 <CardTitle>Excellence</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-gray-600 dark:text-gray-400">We strive for the highest quality in every aspect of our service.</p>
 </CardContent>
 </Card>
 </motion.div>
 <motion.div
 whileHover={{ scale:1.05 }}
 transition={{ type: 'spring', stiffness:300 }}
 >
 <Card className="text-center hover:shadow-lg transition-shadow duration-300">
 <CardHeader>
 <Heart className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
 <CardTitle>Passion</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-gray-600 dark:text-gray-400">We're passionate about travel and sharing that joy with our clients.</p>
 </CardContent>
 </Card>
 </motion.div>
 <motion.div
 whileHover={{ scale:1.05 }}
 transition={{ type: 'spring', stiffness:300 }}
 >
 <Card className="text-center hover:shadow-lg transition-shadow duration-300">
 <CardHeader>
 <Users className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
 <CardTitle>Community</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-gray-600 dark:text-gray-400">We build lasting relationships and foster a community of travelers.</p>
 </CardContent>
 </Card>
 </motion.div>
 </div>
 </section>

 <motion.section
 initial={{ opacity:0, y:50 }}
 whileInView={{ opacity:1, y:0 }}
 viewport={{ once: true }}
 transition={{ duration:0.8 }}
 >
 <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {team.map((member, index) => (
 <motion.div
 key={index}
 initial={{ opacity:0, y:30 }}
 whileInView={{ opacity:1, y:0 }}
 viewport={{ once: true }}
 transition={{ delay: index *0.2, duration:0.6 }}
 >
 <Card className="text-center hover:shadow-lg transition-shadow duration-300">
 <CardHeader>
 <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
 <CardTitle>{member.name}</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
 </CardContent>
 </Card>
 </motion.div>
 ))}
 </div>
 </motion.section>
 </div>
 )
}

export default About