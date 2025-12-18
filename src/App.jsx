import './App.css'
import Home from './components/home/Home.jsx'
import Products from './components/products/Products.jsx'
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Navbar from './components/shared/Navbar.jsx'
import About from './components/About.jsx'

function App() {

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  )
}

export default App
