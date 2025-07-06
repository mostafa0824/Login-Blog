import React, { useState } from 'react'
import Blog from './Components/Blog'
import Login from './Components/Login'

export default function App() {
  const [token,setToken]=useState()
  const handleToken=(token)=>{
    setToken(token)
  }
  return (
    <>
      {token?<Blog/>:<Login handleToken={handleToken}/>}
    </>
  )
}
