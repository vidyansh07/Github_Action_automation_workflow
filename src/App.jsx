import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-gray-900 text-white"> 
    <Navbar />  
       <HeroSection />
    <Footer />
    </div>
    </>
  )
}

export default App
