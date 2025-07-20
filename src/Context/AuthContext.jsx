import { createContext, useState } from "react";

export const AuthContext=createContext()

export default function AuthContextProvaider({children}) {
    const get=localStorage.getItem('token')
    const [token, setToken]=useState(get)
    const handleToken=(tok)=>{
        token
        ?localStorage.removeItem('token')
        :localStorage.setItem('token',tok)
        setToken(tok)
    }
  return (
    <div>
      <AuthContext.Provider value={{token,handleToken}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}
