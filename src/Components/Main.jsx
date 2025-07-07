import React,{useEffect,useState} from "react";
import Comment from "./Comment";

export default function Main({post}) {
  const [comments, setComments]=useState()
    useEffect(()=>{
        (async()=>{
          try {
           const reccm=await fetch(`http://localhost:3000/comments?postId=${post.id}`) 
           const datacm=await reccm.json()
           setComments(datacm)
          } catch (error) {
            console.log(error)
          }
        })()
      },[post])
  const commentItems=comments?.map((e)=> <Comment key={e.id} author={e.author} comment={e.comment} date={e.date}/>)
  return (
    <main className="flex-1 mt-6 content-area">
      <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden
       mb-6 post-card">
        <div className="h-[300px] w-full rounded-2xl mb-4">
          <img className="w-full h-full" src={`assets/${post.image}`} alt="" />
        </div>

        <div className="p-5">
            <div className="h-full flex items-end">
            <div>
              <span className="bg-accent text-white text-sm px-3 
              py-1 rounded-full">
                Web Development
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mt-3">
                {post.title}
              </h1>
              <div className="flex items-center mt-4 text-sm">
                <div className="flex items-center mr-6">
                  <i className="fas fa-user mr-2"></i>
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-calendar mr-2"></i>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
           {post.description}
          </p>        
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl shadow-xl p-6">
        <div className="space-y-6">
          {commentItems}
        </div>
      </div>
    </main>
  );
}
