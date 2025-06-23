"use client";
import React from "react";

const items: string[] = [
  "Facebook Ads",
  "Google Ads",
  "Instagram Ads",
  "LinkedIn Ads",
  "YouTube Ads",
  "Twitter Ads",
];

const RunningStrip: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white py-3 border-y border-gray-300">
        <div className="text-black font-light text-md px-6 tracking-wide text-center">OUR EXPERTISE</div>
      <div className="flex p-8 animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="text-black font-bold text-lg px-6 tracking-wide"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RunningStrip;
