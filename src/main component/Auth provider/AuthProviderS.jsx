/* eslint-disable react/prop-types */
// src/context/AuthProvider.jsx
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const AuthProviderS = ({children}) => {
     const [users, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 reload / first load user fetch
  useEffect(() => {


    const apiHit= setInterval(() => {


        axios.get("http://localhost:5020/me",
        {withCredentials:true}
      )
      .then(res => {
        setUser(res.data);
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
        
    }, 5000);
    
     return () => clearInterval(apiHit); 
  }, []);

// logout
const logout = async () => {
  try {
    await axios.post(
      "http://localhost:5020/logout",
      null, // 👈 data
      { withCredentials: true } // 👈 config
    );

    setUser(null);
  } catch (err) {
    console.error("Logout failed", err);
  }
};



// logout


  const authInfo = {
    users,
    setUser,
    loading,
    logout,
    isAuthenticated: !!users,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviderS;