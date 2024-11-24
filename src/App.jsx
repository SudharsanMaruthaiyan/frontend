import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import MyProfile from './pages/Myprofile'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'

const App = () => {
  return (
    <>
        <div className=' mx-4 sm:mx-[10%]'>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/doctors' element={<Doctors/>}/>
                <Route path='/doctors/:speciality' element={<Doctors/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/my-profile' element={<MyProfile/>}/>
                <Route path='/my-appointments' element={<MyAppointment/>}/>
                <Route path='/appointment/:docId' element={<Appointment/>}/>
            </Routes>
            <Footer/>
        </div>
    </>
  )
}

export default App 