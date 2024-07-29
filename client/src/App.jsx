import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";

import AdminPanel from "./pages/AdminPanel";
import UserData from "./pages/UserData";
import UserEdit from "./pages/UserEdit";
import NavbarMobile from "./components/NavbarMobile";
import Copywrite from "./components/Copywrite";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <NavbarMobile />

      {/* <div className='md:min-h-[85vh]'> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/admin" element={<AdminPanel />}>
          <Route path="user" element={<UserData />} />
          <Route path="user/edit/:id" element={<UserEdit />} />
        </Route>
      </Routes>
      {/* </div> */}
      <Copywrite />
    </BrowserRouter>
  );
}
