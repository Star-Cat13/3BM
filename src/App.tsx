import { useState } from 'react'
import './App.css'
import MainLayout from './layout/MainLayout'
import Home from './pages/homepage'
import './scripts/gallery.js'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div>

      <Home />

    </div>
  )
}

export default App
