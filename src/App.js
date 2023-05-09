import './App.css'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import BurgerMenu from './components/BurgerMenu'
import Intro from './pages/Intro'
import AboutMe from './pages/AboutMe'
import ProjectCards from './pages/ProjectCards'
import ContactMe from './pages/ContactMe'
import NotFound from './pages/NotFound'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='App'>
     {screenWidth < 768 ? <BurgerMenu /> : <Navbar />}
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname}>
          <Route path='/' element={<Intro />}  />
          <Route path='prosjekter' element={<ProjectCards />} />
          <Route path='om-meg' element={<AboutMe />} />
          <Route path='kontakt-meg' element={<ContactMe />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
