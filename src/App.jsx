import { useState } from 'react'
import './App.css'
import { FaBeer } from 'react-icons/fa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 ">
      <h1 className="text-3xl  text-white font-bold ">Hello world!<FaBeer /></h1>       
    </div>
  )
}

export default App
