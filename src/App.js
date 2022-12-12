import './App.css';
import React from 'react'
import Header from './components/header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/main'
import { About } from './pages/About'
import Projects from './pages/prepProj'
import Contact from './pages/contact'
import { Technologies } from './pages/Tools'
import Footer from './components/footer'
import './style.css'

const App = () => {
  return (
    <div className='main'>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path = '/' element={<Home/>}/>
          <Route path = '/home' element={<Home />}/>
          <Route path = '/about' element={<About />}/>
          <Route path = '/project' element={<Projects />}/>
          <Route path = '/technologies' element={<Technologies />}/>
          <Route path = '/contact' element={<Contact  />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )

  }
export default App
   




