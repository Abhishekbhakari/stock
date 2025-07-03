"use client";
import React from "react";

const items: string[] = [
  "EQUITY RESEARCH",
  "FUNDAMENTAL ANALYSIS",
  "TECHNICAL ANALYSIS",
  "INVESTMENT STRATEGIES",
  "PORTFOLIO MANAGEMENT",
  "MARKET INSIGHTS",
];

const RunningStrip: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white py-10 font-sans border-y border-gray-300">
      <div className="text-black font-light text-lg px-6 tracking-wide text-center">
        OUR EXPERTISE
      </div>
      <div className="flex p-8 animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="text-black font-black capitalize text-5xl px-6 tracking-wide"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RunningStrip;
