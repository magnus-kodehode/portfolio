import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

//Styles for the active page of the site
const navLinkStyles = ({ isActive }) => {
  return {
    color: '#fff',
    textDecoration: isActive ? 'overline' : 'none'
  }
}

const BurgerMenu = () => {
  //State to track the hamburger menu when used on mobile devices, and change the checked state of the menu button
  const [showMenu, setShowMenu] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
    setIsChecked(!isChecked)
  }
  
  //UseEffect to automatically close the hamburger menu and uncheck the toggle when a link takes you to a different url
  const location = useLocation()
  useEffect(() => {
    setIsChecked(false)
    setShowMenu(false)
  }, [location])

  // Framer Motion Animation Properties
  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '100%' }
  }

  const transition = {
    duration: 0.25,
  }

  return (
    <nav className='burger--container'>
      <div>
        <input type="checkbox" id="menuOnOff" checked={isChecked} />
        <label className='navbar--toggle' htmlFor='menuOnOff' onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </label>
        <AnimatePresence>
          {showMenu && (
            <motion.ul
              className="burger--options"
              variants={menuVariants}
              transition={transition}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <li className='links'>
                <NavLink to='/' style={navLinkStyles}>Hjem</NavLink>
              </li>
              <li className='links'>
                <NavLink to='om-meg' style={navLinkStyles}>Om meg</NavLink>
              </li>
              <li className='links'>
                <NavLink to='prosjekter' style={navLinkStyles}>Prosjekter</NavLink>
              </li>
              <li className='links'>
                <NavLink to='kontakt-meg' style={navLinkStyles}>Kontakt meg</NavLink>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default BurgerMenu
