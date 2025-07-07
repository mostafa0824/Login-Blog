import React from "react";
import AsideCard from "./AsideCard";

export default function Aside({posts,handlePost}) {
    const postItems=posts?.map((e,index)=><AsideCard key={e.id} index={index} handlePost={handlePost} title={e.title} author={e.author} date={e.date}/>)
  return (
    <aside className="w-80 bg-dark shadow-xl rounded-lg mr-6 mt-6 p-6 sidebar hidden lg:block">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-accent">Latest Posts</h2>
        <span className="bg-secondary text-xs px-2 py-1 rounded-full">
          10 posts
        </span>
      </div>

      <div
        className="space-y-4 overflow-y-auto scrollbar-hide"
        style={{ maxHeight: "calc(100vh - 12rem)" }}>
        {postItems}
      </div>
    </aside>
  );
}
