import { useState } from 'react'
import './App.css'
import HomePage from '../components/Homepage'
import About from '../components/About'
import Contact from '../components/Contact'
import {Toaster} from "react-hot-toast"
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Toaster />
      <HomePage />
    </>
  )
}

export default App
