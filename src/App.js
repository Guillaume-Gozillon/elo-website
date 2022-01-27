import './styles/app.scss'
import { Routes, Route } from 'react-router'
import NavBar from './components/NavBar'
import Services from './components/Services'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'

import { projects } from './data'

const App = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/projects' element={<Projects projects={projects} />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Newsletter />
      <div className='line'></div>
      <Footer />
    </>
  )
}

export default App
