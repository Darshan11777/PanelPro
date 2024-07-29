import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../store/Auth";


export default function Navbar() {
  const { isLoggedIn, userdata } = useAuth();
  console.log("userdata.msg.admin", userdata?.msg?.admin);
  return (
    <>
      <div className="text-2xl bg-transparent wrapper mb-1 sm:hidden ">
        <div className=" container2  ">
          <div className="flex justify-between  text-white    py-2">
            <div className="navlogo text-blue-500 ">
              <Link to="/">PanelPro</Link>
            </div>
            <div className=" icon sm:hidden">
              <ul className="flex text-[0.9rem] gap-4  ">
                <li className="relative">
                  <NavLink
                    to="/"
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
                    className={({ isActive }) =>
                      isActive ? " navLink  white after:w-[100%]" : "navLink"
                    }
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

     
    </>
  );
}
