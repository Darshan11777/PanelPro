

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Logout from './pages/Logout'

import AdminPanel from './pages/AdminPanel'
import UserData from './pages/UserData'
import UserEdit from './pages/UserEdit'
import NavbarMobile from './components/NavbarMobile'
import Copywrite from './components/Copywrite'


export default function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
    <NavbarMobile/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} /> 
        <Route path="/admin" element={<AdminPanel />} >
          
        <Route path="user" element={<UserData />} /> 
        <Route path="user/edit/:id" element={<UserEdit />} /> 
          </Route> 
          
         
      </Routes> 
      <Copywrite/>
        {/* <div className="bottom-0 left-0 h-3 text-3xl font-bold text-center underline align-bottom bg-gray-950">thi  ds is  home page</div> */}
    </BrowserRouter>
  ) 
}


