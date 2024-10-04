import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Service from './Pages/Service'
import Doctor from './Pages/Doctor'
import Contact from './Pages/Contact'
import Nav from './shared/Nav'
import Number from './Component/HomeComponent/Number'
import Profession from './Component/HomeComponent/Profession'
import Servicess from './Component/HomeComponent/Servicess'
import Appointed from './Component/HomeComponent/Appointed'
import Testimonial from './Component/HomeComponent/Testimonial'
import Whychooseus from './Component/HomeComponent/Whychooseus'
import Meetourprof from './Component/HomeComponent/Meetourprof'
import Consultation from './Component/HomeComponent/Consultation'
import Blog from './Component/HomeComponent/Blog'


function App(){
  return(
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Service' element={<Service/>}/>
      <Route path='/Doctor' element={ <Doctor/>}/>
      <Route path='/Contact' element={ <Contact/>}/>
    </Routes>
    <Number/>
    <Profession/>
    <Servicess/>
    <Appointed/>
    <Testimonial/>
    <Whychooseus/>
    <Meetourprof/>
    <Consultation/>
    <Blog/>
    </>
  )
}
export default App
