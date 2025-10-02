import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Booking from './pages/Booking'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingChatbot from './components/FloatingChatbot'

function App() {
 return (
 <Router>
 <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
 <Header />
 <main className="container mx-auto px-4 py-8">
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/destinations" element={<Destinations />} />
 <Route path="/booking" element={<Booking />} />
 <Route path="/about" element={<About />} />
 <Route path="/contact" element={<Contact />} />
 </Routes>
 </main>
 <Footer />
 <FloatingChatbot />
 </div>
 </Router>
 )
}

export default App