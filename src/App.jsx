
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import HeroSection from './components/HeroSection/HeroSection'
import Home from './components/Home'

function App() {


  return (<>

    <BrowserRouter>
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />}>

        </Route>
      </Routes>
    </BrowserRouter>

  </>

  )
}

export default App
