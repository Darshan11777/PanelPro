// in store folder

import React,{ createContext ,useContext}  from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext()

// wrap app in AppProvider
export const AppProvider=({children})=>{
  const [token, setToken] = React.useState(localStorage.getItem("token"));
  const [userdata, setUserData] = React.useState({});
 
    // write function or data for accese 
    const storeTokenInLS = (serverToken) => {
      setToken(serverToken);
        return localStorage.setItem("token", serverToken);
      };
      let isLoggedIn=!!token
      
      const logout = () => {
        setToken("");
        console.log( "logOut succesfully");
        localStorage.removeItem("token");
        setUserData({});
        
      }
      const notify = (str)=> {toast.success(str);
      }
      const notifyW = (str)=> {toast.error(str);
      }
      // authentication user data

      const userData = async () => {
        
        try {
            const responce = await fetch("http://localhost:3000/user/user", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              }
            })
            if (responce.ok) {
              const result = await responce.json()
              console.log("login response SUCCES", result);
              setUserData(result)
           
            } else {
              console.log("error inside response ", "error");
            }
          } catch (error) {
            console.log("error", error);
          }
        
      }
      
      console.log("userData",userdata);
      React.useEffect(() => {
        token && userData()
      },[token])
      
    return <AuthContext.Provider value={{storeTokenInLS,token,logout,isLoggedIn,userdata,notify,notifyW }}>
        {children}
        
        </AuthContext.Provider>
}

// useAuth for destcure value
// const  {storeTokenInLS } = useAuth()
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
      throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
  }; 