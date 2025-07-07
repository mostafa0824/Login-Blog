import React from 'react'

export default function Comment({author,comment,date}) {
  
  return (
    <div className="bg-gray-700 p-5 rounded-xl comment-card">
            <div className="flex">
              <div className="mr-4">
                <div className="bg-gradient-to-br from-purple-500 to-indigo-700 w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="font-bold text-lg">B</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <h3 className="font-bold">{author}</h3>
                  <span className="text-gray-400 text-sm">
                    {date}
                  </span>
                </div>
                <p className="text-gray-300 mb-3">
                  {comment}
                </p>
              </div>
            </div>
          </div>
  )
}
