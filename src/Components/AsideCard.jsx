import React from "react";

export default function AsideCard({title,author,date,index,handlePost}) {
  return (
    <div onClick={()=>handlePost(index)} className="bg-gray-800 p-4 rounded-lg cursor-pointer transition hover:bg-gray-700 border-l-4 border-accent">
      <h3 className="font-semibold">{title}</h3>
      <div className="flex justify-between text-xs mt-2 text-gray-400">
        <span>{author}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}
