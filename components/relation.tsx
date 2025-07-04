"use client";
import React from "react";

const Relation: React.FC = () => {
  const content = "We are committed to build the long term relationship with the client by providing quality equity services.";
  
  return (
    <div className="overflow-hidden bg-black py-6 font-sans border-y border-white">
      <div 
        className="flex p-8 animate-marquee whitespace-nowrap"
        style={{ animationDuration: "10s" }} // Faster animation (reduced from 20s)
      >
        {/* Duplicated content for seamless looping */}
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-gray-300 font-bold font-sans capitalize text-2xl px-6 tracking-wide"
          >
            {content}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Relation;