import { BiAlignMiddle } from "react-icons/bi";

import { SiAdguard } from "react-icons/si";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/Auth";

export default function NavbarMobile() {
  const { isLoggedIn, userdata } = useAuth();
  const [showIcon, setShowIcon] = useState(false);
  console.log("showIcon", showIcon);
  return (
    <div className="wrapper  fixed top-0 left-0 w-full bg-white z-10 ">
      <div className=" hidden  w-full h-10 shadow-md sm:flex justify-between items-center container2">
        <div className=" text-blue-500 ">
          <Link to="/">PanelPro</Link>
        </div>
        <button onClick={() => setShowIcon((prev) => !prev)}>
          <BiAlignMiddle />
        </button>
      </div>

      <div
        className={`w-full  shadow-md h-[100vh] bg-white absolute top-10 left-0  translate-x-[-100%] transition duration-300 ease-in-out ${
          showIcon && "show"
        }`}
      >
        <ul
          className="grid grid-cols-1 w-full text-black bg-[#ffffff] font-bold tracking-wider "
          onClick={() => setShowIcon(false)}
        >
          <li className="h-12 shadow-sm flex justify-center items-center w-full border-[1px] border-black">
            <Link to="/" className="w-full text-center  ">
              Home
            </Link>
          </li>
          {/* <li className="h-10 shadow-sm flex justify-center items-center border-[1px] border-black">
            <Link
                    to="/about"
                   className="w-full text-center  "
                    
                  >
                    About
                  </Link>
            </li> */}
          <li className="h-10 shadow-sm flex justify-center items-center border-[1px] border-black">
            <Link to="/contact" className="w-full text-center  ">
              Contact
            </Link>
          </li>
          {/* <li className="h-10 shadow-sm flex justify-center items-center border-[1px] border-black">
            <Link
                    to="/info"
                    className="w-full text-center  "
                  >
                    Info
                  </Link>
            </li> */}
          {isLoggedIn ? (
            <li className="h-10 shadow-sm flex justify-center items-center border-[1px] border-black">
              <Link to="/logout" className="w-full text-center  ">
                logout
              </Link>
            </li>
          ) : (
            <>
              <li className="h-10 shadow-sm flex justify-center items-center border-[1px] border-black">
                <Link to={"/login"} className="w-full text-center  ">
                  Login
                </Link>
              </li>
              <li className="h-10 shadow-sm flex justify-center items-center border-[1px] border-black">
                <Link to="/register" className="w-full text-center  ">
                  Register
                </Link>
              </li>
            </>
          )}
          {userdata?.msg?.admin && (
            <li className="h-10 shadow-sm flex justify-center items-center border-[1px] border-black">
              <Link to="/admin/user" className="w-full text-center  ">
                Admin
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
