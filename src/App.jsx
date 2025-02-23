import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="text-white"> 
    <Routes>
      <Route path="/" element={
        
        <Home />
        } />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
    </>
  )
}

export default App
