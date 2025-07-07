import React, { useState } from "react";
import Blog from "./Components/Blog";
import Login from "./Components/Login";

export default function App() {
  const [token, setToken] = useState();
  const handleToken = (token) => {
    setToken(token);
  };
  const handleLogout=()=>{
    setToken(undefined)
  }
  return <>{token ? <Blog handleLogout={handleLogout}/> : <Login handleToken={handleToken} />}</>;
}
