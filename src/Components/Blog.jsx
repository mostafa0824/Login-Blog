import React, { useEffect, useState } from "react";
import Header from "./Header";
import Aside from "./Aside";
import Main from "./Main";
import Loading from "./Loading"
export default function Blog({}) {
  const [posts, setPosts] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    (async()=>{
      try {
     const res=await fetch('http://localhost:3000/posts')
     const data=await res.json()
     setPosts(data)
      } catch (error) {
        console.log(error)
      }
    })()
  },[])
  if(!posts) return <Loading/>
  const handlePost=(indexPost)=>{
    setCurrentIndex(indexPost)
  }

  return (
    <div className="text-gray-200">
      <Header/>
      <div className="container mx-auto px-4 flex">
        <Aside handlePost={handlePost} posts={posts}/>
        <Main post={posts[currentIndex]}/>
      </div>
    </div>
  );
}
