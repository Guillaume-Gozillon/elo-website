import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [largeur, setLargeur] = useState(window.innerWidth)

  const toggleNavSmallScreen = () => setToggleMenu(!toggleMenu)
  const closeToggle = () => setToggleMenu(false)

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth)

      if (window.innerWidth > 800) {
        setToggleMenu(false)
      }
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <nav>
      {(toggleMenu || largeur > 800) && (
        <>
          <NavLink onClick={closeToggle} to='/'>
            HOME
          </NavLink>
          <NavLink onClick={closeToggle} to='/about'>
            ABOUT
          </NavLink>
          <div className='empty middle'></div>
          <NavLink
            onClick={closeToggle}
            activeclassname='active'
            to='/services'
          >
            SERVICES
          </NavLink>
          <NavLink
            onClick={closeToggle}
            activeclassname='active'
            to='/projects'
          >
            PROJECTS
          </NavLink>
          <NavLink onClick={closeToggle} activeclassname='active' to='/contact'>
            CONTACT
          </NavLink>
        </>
      )}
      {largeur < 800 && (
        <button onClick={toggleNavSmallScreen} className='btn'>
          BTN
        </button>
      )}
    </nav>
  )
}

export default NavBar
