import './styles/app.scss'
import { Routes, Route } from 'react-router'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
