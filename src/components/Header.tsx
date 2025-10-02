import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Plane, Menu, X } from 'lucide-react'

const Header = () => {
 const [isMenuOpen, setIsMenuOpen] = React.useState(false)

 return (
 <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 dark:bg-gray-900/80">
 <div className="container mx-auto px-4 py-4 flex items-center justify-between">
 <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-indigo-600 dark:text-indigo-400" onClick={() => setIsMenuOpen(false)}>
 <Plane className="h-8 w-8" />
 <span>VoyageVoyager</span>
 </Link>
 <nav className="hidden md:flex space-x-6">
 <Link to="/" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">Home</Link>
 <Link to="/destinations" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">Destinations</Link>
 <Link to="/booking" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">Book Trip</Link>
 <Link to="/about" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">About</Link>
 <Link to="/contact" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors">Contact</Link>
 </nav>
 <Button variant="outline" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
 {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
 </Button>
 </div>
 {/* Mobile Menu */}
 {isMenuOpen && (
 <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-t dark:border-gray-700">
 <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
 <Link to="/" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
 <Link to="/destinations" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Destinations</Link>
 <Link to="/booking" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Book Trip</Link>
 <Link to="/about" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
 <Link to="/contact" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
 </nav>
 </div>
 )}
 </header>
 )
}

export default Header