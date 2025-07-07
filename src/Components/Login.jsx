import React, { useState } from 'react'

export default function Login({handleToken}) {
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const [loading, setLoading]=useState(false)
   const handlesubmit= async(e)=>{
        e.preventDefault()
        setLoading(true)
        try {
            const res=await fetch('https://fakestoreapi.com/auth/login',{
             method:'POST',
             headers:{
                'content-type':'application/json'
             },
             body:JSON.stringify({username,password}),
            })
            const data=await res.json()
            handleToken(data?.token)
            if(!data?.token){ throw Error('The username or password is incorrect!');}
        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }
    // flex flex-col items-center justify-center gap-3 my-30
  return (
    <div className='min-h-screen flex flex-col gap-3 items-center justify-center bg-gradient-to-br to-purple-100 p-4'>
      <h2 className='text-white text-[24px]'>Welcome to The Blog</h2>
    <form onSubmit={handlesubmit} className="flex flex-col justify-center gap-5 max-w-sm p-6 w-[400px] h-80 bg-gradient-to-br from-indigo-100 to-purple-80 shadow-md rounded-lg space-y-4">
  <div>
    <label className="block text-gray-700 font-semibold mb-2">
      Username:
    </label>
    <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div>
    <label className="block text-gray-700 font-semibold mb-2">
      Password:
    </label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <button
    type="submit"
    disabled={loading}
    className={`cursor-pointer w-full py-2 px-4 rounded-md text-white font-semibold transition-colors duration-300 ${
      loading
        ? 'bg-gray-400 cursor-not-allowed'
        : 'bg-blue-600 hover:bg-blue-700'
    }`}
  >
    {loading ? 'Loading...' : 'Sign in'}
  </button>
</form>
</div>
  )
}