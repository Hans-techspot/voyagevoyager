import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
 return (
 <footer className="bg-gray-900 text-white py-12 dark:bg-gray-800">
 <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
 <div>
 <h3 className="text-xl font-bold mb-4">VoyageVoyager</h3>
 <p className="text-gray-400">Your gateway to unforgettable adventures. Book trips, explore destinations, and manage your travel plans with ease.</p>
 </div>
 <div>
 <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
 <ul className="space-y-2 text-gray-400">
 <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
 <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
 <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
 </ul>
 </div>
 <div>
 <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
 <div className="space-y-2 text-gray-400">
 <div className="flex items-center space-x-2">
 <Mail className="h-4 w-4" />
 <span>info@voyagevoyager.com</span>
 </div>
 <div className="flex items-center space-x-2">
 <Phone className="h-4 w-4" />
 <span>+1 (555)123-4567</span>
 </div>
 <div className="flex items-center space-x-2">
 <MapPin className="h-4 w-4" />
 <span>123 Travel St, Adventure City</span>
 </div>
 </div>
 </div>
 </div>
 <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
 <p>&copy;2025 VoyageVoyager. All rights reserved.</p>
 </div>
 </footer>
 )
}

export default Footer