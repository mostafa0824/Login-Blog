import React from 'react'
import Login from './Login'

export default function Header({handleLogout}) {
  const question=()=>{
    alert('You have left the blog')
    handleLogout()
  }
  return (
    <header className="gradient-bg shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <i className="fas fa-laptop-code text-2xl"></i>
            <h1 className="text-2xl font-bold">Tech Blog Hub</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={question} className="cursor-pointer bg-accent hover:bg-blue-500 px-4 py-2 rounded-full font-semibold transition">
              <i className="fas fa-user mr-2"></i>Log out
            </button>
            <button className="cursor-pointer bg-secondary hover:bg-blue-800 px-4 py-2 rounded-full font-semibold transition">
              <i className="fas fa-bell mr-2"></i>Subscribe
            </button>
          </div>
        </div>
      </header>
  )
}
