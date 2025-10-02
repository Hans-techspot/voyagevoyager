import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { MapPin, Star, Filter } from 'lucide-react'
import { motion } from 'framer-motion'

const Destinations = () => {
 const [searchTerm, setSearchTerm] = useState('')
 const [sortBy, setSortBy] = useState('name')
 const [filterRating, setFilterRating] = useState('all')

 const destinations = [
 { id:1, name: 'Paris, France', image: 'https://api.a0.dev/assets/image?text=Paris%20Eiffel%20Tower&aspect=16:9&seed=1', price: '$1,200', rating:4.8, description: 'The City of Light awaits with iconic landmarks and romantic vibes.' },
 { id:2, name: 'Tokyo, Japan', image: 'https://api.a0.dev/assets/image?text=Tokyo%20Skyscrapers&aspect=16:9&seed=2', price: '$1,500', rating:4.9, description: 'Blend tradition and modernity in this vibrant metropolis.' },
 { id:3, name: 'Bali, Indonesia', image: 'https://api.a0.dev/assets/image?text=Bali%20Beaches&aspect=16:9&seed=3', price: '$900', rating:4.7, description: 'Tropical paradise with stunning beaches and culture.' },
 { id:4, name: 'New York, USA', image: 'https://api.a0.dev/assets/image?text=New%20York%20Skyline&aspect=16:9&seed=4', price: '$1,100', rating:4.6, description: 'The city that never sleeps—endless energy and sights.' },
 { id:5, name: 'Rome, Italy', image: 'https://api.a0.dev/assets/image?text=Rome%20Colosseum&aspect=16:9&seed=5', price: '$1,300', rating:4.8, description: 'Ancient history meets Italian charm.' },
 { id:6, name: 'Sydney, Australia', image: 'https://api.a0.dev/assets/image?text=Sydney%20Opera%20House&aspect=16:9&seed=6', price: '$1,800', rating:4.9, description: 'Harbor views and outdoor adventures await.' },
 ]

 const filteredDestinations = destinations
 .filter(dest => dest.name.toLowerCase().includes(searchTerm.toLowerCase()))
 .filter(dest => filterRating === 'all' || dest.rating >= parseFloat(filterRating))
 .sort((a, b) => {
 if (sortBy === 'price') return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''))
 if (sortBy === 'rating') return b.rating - a.rating
 return a.name.localeCompare(b.name)
 })

 return (
 <div className="space-y-8">
 <div className="text-center">
 <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Explore Destinations</h1>
 <p className="text-xl text-gray-600 dark:text-gray-400">Find your perfect getaway from our curated list.</p>
 </div>

 {/* Filters and Search */}
 <motion.div
 className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
 initial={{ opacity:0, y:20 }}
 animate={{ opacity:1, y:0 }}
 transition={{ duration:0.6 }}
 >
 <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
 <Input
 placeholder="Search destinations..."
 value={searchTerm}
 onChange={(e) => setSearchTerm(e.target.value)}
 className="w-full md:w-1/3"
 />
 <div className="flex gap-4 items-center">
 <Select value={sortBy} onValueChange={setSortBy}>
 <SelectTrigger className="w-32">
 <SelectValue placeholder="Sort by" />
 </SelectTrigger>
 <SelectContent>
 <SelectItem value="name">Name</SelectItem>
 <SelectItem value="price">Price</SelectItem>
 <SelectItem value="rating">Rating</SelectItem>
 </SelectContent>
 </Select>
 <Select value={filterRating} onValueChange={setFilterRating}>
 <SelectTrigger className="w-32">
 <SelectValue placeholder="Rating" />
 </SelectTrigger>
 <SelectContent>
 <SelectItem value="all">All</SelectItem>
 <SelectItem value="4.5">4.5+</SelectItem>
 <SelectItem value="4.8">4.8+</SelectItem>
 </SelectContent>
 </Select>
 <Filter className="h-5 w-5 text-gray-500" />
 </div>
 </div>
 </motion.div>

 {/* Destinations Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {filteredDestinations.map((dest, index) => (
 <motion.div
 key={dest.id}
 initial={{ opacity:0, y:30 }}
 whileInView={{ opacity:1, y:0 }}
 viewport={{ once: true }}
 transition={{ delay: index *0.1, duration:0.6 }}
 >
 <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800 border-0 shadow-lg group">
 <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
 <CardHeader>
 <CardTitle className="flex items-center justify-between text-xl text-gray-800 dark:text-white">
 <div className="flex items-center space-x-2">
 <MapPin className="h-5 w-5 text-indigo-600" />
 <span>{dest.name}</span>
 </div>
 <span className="text-lg font-bold text-indigo-600">{dest.price}</span>
 </CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{dest.description}</p>
 <div className="flex items-center justify-between mb-4">
 <div className="flex items-center space-x-1">
 <Star className="h-4 w-4 text-yellow-500 fill-current" />
 <span className="text-sm text-gray-700 dark:text-gray-300">{dest.rating}</span>
 </div>
 <span className="text-sm text-gray-500 dark:text-gray-400">7 days</span>
 </div>
 <Button className="w-full">Book Now</Button>
 </CardContent>
 </Card>
 </motion.div>
 ))}
 </div>
 </div>
 )
}

export default Destinations