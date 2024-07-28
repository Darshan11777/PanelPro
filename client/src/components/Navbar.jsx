import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../store/Auth";
// import { FiAlignJustify } from "react-icons/fi";

export default function Navbar() {
  const { isLoggedIn, userdata } = useAuth();
  console.log("userdata.msg.admin", userdata?.msg?.admin);
  return (
    <>
      <div className="text-2xl bg-transparent wrapper mb-1 sm:hidden ">
        <div className=" container2  ">
          <div className="flex justify-between  text-white    py-2">
            <div className="navlogo text-blue-500 ">
              <Link to="/">
              PanelPro
              </Link>
              </div>
            <div className=" icon sm:hidden">
              <ul className="flex text-[0.9rem] gap-4  ">
                <li className="relative">
                  <NavLink
                    to="/"
                    // className='navLink '
                    // activeClassName="text-white "
                    // activeStyle={{ color: 'red', fontWeight: 'bold' }}
                    className={({ isActive }) =>
                      isActive ? " navLink  white after:w-[100%]" : "navLink"
                    }
                  >
                    home
                  </NavLink>
                </li>
                <li className="relative">
                  <NavLink
                    to="/about"
                    // className='navLink '
                    className={({ isActive }) =>
                      isActive ? " navLink  white after:w-[100%]" : "navLink"
                    }
                    // style={({ isActive }) => ({
                    //   fontWeight: isActive? 'bold' : '',
                    //   color: isActive? 'red' : '',
                    // })}
                  >
                    About{" "}
                  </NavLink>
                </li>
                <li className="relative">
                  {" "}
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? " navLink  white after:w-[100%]" : "navLink"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="relative">
                  <NavLink
                    to="/info"
                    className={({ isActive }) =>
                      isActive ? " navLink  white after:w-[100%]" : "navLink"
                    }
                  >
                    Info
                  </NavLink>
                </li>
                {isLoggedIn ? (
                  <li className="relative">
                    <NavLink
                      to="/logout"
                      className={({ isActive }) =>
                        isActive ? " navLink  white after:w-[100%]" : "navLink"
                      }
                    >
                      logout
                    </NavLink>
                  </li>
                ) : (
                  <>
                    <li className="relative">
                      <NavLink
                        to="/login"
                        className={({ isActive }) =>
                          isActive
                            ? " navLink  white after:w-[100%]"
                            : "navLink"
                        }
                      >
                        Login
                      </NavLink>
                    </li>
                    <li className="relative">
                      <NavLink
                        to="/register"
                        className={({ isActive }) =>
                          isActive
                            ? " navLink  white after:w-[100%]"
                            : "navLink"
                        }
                      >
                        Register
                      </NavLink>
                    </li>
                  </>
                )}
                {userdata?.msg?.admin && (
                  <li className="relative">
                    <NavLink
                      to="/admin/user"
                      className={({ isActive }) =>
                        isActive ? " navLink  white after:w-[100%]" : "navLink"
                      }
                    >
                      Admin
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
            <div className="sm:block hidden"> </div>
          </div>
        </div>
      </div>

      {/* new navbar */}
    </>
  );
}

{
  /* <div className='bg-sky-600'>

     
<div className="navbar bg-transparent  lg:container ">
  {/* <div className='lg:container'> */
}
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16" />
//         </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//         <li><a>Item 1</a></li>
//         <li><Link to="/about"

//         >About</Link></li>
//         <li>  <Link to="/contact">Contact</Link></li>
//         <li> <Link to="/info">Info</Link></li>
//         <li>
//           <a>Parent</a>
//           <ul className="p-2">
//             <li><Link to="/about" >About</Link></li>
//             <li>  <Link to="/contact"

//             >Contact</Link></li>
//             <li> <Link to="/info">Info</Link></li>
//           </ul>
//         </li>
//         <li><a>Item 3</a></li>
//       </ul>
//     </div>
//     <a className="btn btn-ghost text-xl">daisyUI</a>̥
//   </div>
//   <div className="  navbar-end hidden lg:flex ">
//     <ul className=" custom-item menu   menu-horizontal px-1">
//       {/* pc menu */}
//       <li className='me-2'><Link to="/"
//       className='navLink '
//       // activeClassName="text-white "
//       // activeStyle={{ color: 'red', fontWeight: 'bold' }}
//       // className={({ isActive }) => (isActive? 'active:!text-red-600 navLink active:!bg-transparent focus:bg-transparent !' : 'navLink ')}

//       >home</Link></li>

//       <li className='me-2'><Link to="/about"

//       className='navLink '
//       // activeStyle={{ color: 'red !important', fontWeight: 'bold' }}
//       >About</Link></li>
//       <li className='me-2'>  <Link to="/contact" className='navLink ' >Contact</Link></li>
//       <li className='me-2'> <Link to="/info" className='navLink' >Info</Link></li>

//       {isLoggedIn ?
//         <li className='me-2'>  <Link to="/logout" className='navLink '>logout</Link></li>

//         :
//         <>
//           <li className='me-2'>  <Link to="/login" className='navLink'>Login</Link></li>
//           <li className='me-2'>  <Link to="/register" className='navLink'>Register</Link></li>

//         </>

//       }
//       {userdata?.msg?.admin && <li className='me-2'>  <Link to="/admin/user" className='navLink'>Admin</Link></li>}
//       {/* <details>
//     <summary>Parent</summary>
//     <ul className="p-2">
//       <li className='after:h-2 after:w-2 after:bg-red-600'><Link to="/about" >Abo ut</Link></li>
//       <li>  <Link to="/contact">Contact</Link></li>
//       <li> <Link to="/info">Info</Link></li>

//     </ul>
//   </details> */}

//     </ul>
//   </div>
//   </div>
// </div> */}
