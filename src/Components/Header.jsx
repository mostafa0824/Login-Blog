import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function Header() {
  const {handleToken}=useContext(AuthContext)
  const question=()=>{
    alert('You have left the blog')
    handleToken(null)
  }
  return (
    <header className="gradient-bg shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <i className="fas fa-laptop-code text-2xl"></i>
            <h1 className="text-2xl font-bold">Tech Blog Hub</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={question} className="cursor-pointer bg-red-500  hover:bg-red-700 px-4 py-2 rounded-full font-semibold transition">
              Logout
            </button>
            <button className="cursor-pointer bg-secondary hover:bg-blue-800 px-4 py-2 rounded-full font-semibold transition">
              Subscribe
            </button>
          </div>
        </div>
      </header>
  )
}
