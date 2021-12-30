import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/'>MENU</NavLink>
      <NavLink to='/about'>ABOUT</NavLink>
      <div className='empty middle'></div>
      <NavLink activeclassname='active' to='/services'>
        SERVICES
      </NavLink>
      <NavLink activeclassname='active' to='/projects'>
        PROJECTS
      </NavLink>
      <NavLink activeclassname='active' to='/contact'>
        CONTACT
      </NavLink>
    </nav>
  )
}

export default NavBar
