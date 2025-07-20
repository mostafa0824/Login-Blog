import React, { useContext } from "react";
import Blog from "./Components/Blog";
import Login from "./Components/Login";
import { AuthContext } from "./Context/AuthContext";
import { Toaster } from "react-hot-toast";

export default function App() {
  const {token}=useContext(AuthContext)
  return(
    <>
  {token? <Blog/>:<Login/>}
  <Toaster/>
  </>
  )
}
