import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {Register , Login , Dashboard} from './Components/index'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
</BrowserRouter>
  )
}

export default App
