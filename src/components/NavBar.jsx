import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>MENU</Link>
      <Link to='/about'>ABOUT</Link>
      <div className='empty middle'></div>
      <Link to='/services'>SERVICES</Link>
      <Link to='/projects'>PROJECTS</Link>
      <Link to='/contact'>CONTACT</Link>
    </nav>
  )
}

export default NavBar
