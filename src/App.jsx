import {useState} from 'react'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { MotionGallery } from './components/sections/MotionGallery'
import { Contact } from './components/sections/Contract'


const App = () => {
  const [isloaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
     {!isloaded && <LoadingScreen onComplete ={()=> setIsLoaded(true)}/>}
      <div className={`min-h-screen transition-opacity duration-700 ${isloaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100 `} >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />

        <MotionGallery/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    
    </>
  )
}

export default App