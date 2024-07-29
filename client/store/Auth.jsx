// in store folder

import React, { createContext, useContext } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

//  AppProvider take children and wrap it in prowider
export const AppProvider = ({ children }) => {
  const [token, setToken] = React.useState(localStorage.getItem("token"));
  const [userdata, setUserData] = React.useState({});

  // storeTokenInLs take token and storeit in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };
  let isLoggedIn = !!token;

  // logout remove token from localstorage and setToken to empty
  const logout = () => {
    setToken("");
    console.log("logOut succesfully");
    localStorage.removeItem("token");
    setUserData({});
  };

  // notify make toast
  const notify = (str) => {
    toast.success(str);
  };
  const notifyW = (str) => {
    toast.error(str);
  };
  const base_url = "https://panelpro.onrender.com/";
  
// userData funtion login user if all data is correct
  const userData = async () => {
    try {
      const responce = await fetch(`${base_url}user/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (responce.ok) {
        const result = await responce.json();
        console.log("login response SUCCES", result);

        setUserData(result);
      } else {
        console.log("error inside response ", "error");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log("userData", userdata);
  React.useEffect(() => {
    token && userData();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLS,
        token,
        logout,
        isLoggedIn,
        userdata,
        notify,
        notifyW,
        base_url,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// useAuth  custom hook give access to AuthContext
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
