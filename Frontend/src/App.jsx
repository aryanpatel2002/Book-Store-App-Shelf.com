import React from 'react'
import Home from './home/home'
import Courses from './Courses/Courses'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'

const App = () => {
  return (
  <>
  <div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Course" element={<Courses/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/About" element={<About/>}/>
  </Routes>
  </div>
  </>
  )
}

export default App
