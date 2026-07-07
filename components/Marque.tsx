"use client";
import React, { useState } from "react";

const items: string[] = [
  "EQUITY RESEARCH",
  "FUNDAMENTAL ANALYSIS",
  "VALUATION ANALYSIS",
  "INVESTMENT STRATEGIES",
  "PORTFOLIO MANAGEMENT",
  "MARKET INSIGHTS",
];

const RunningStrip: React.FC = () => {
  const [paused, setPaused] = useState(false);

  return (
    <div className="relative overflow-hidden bg-white py-10 font-sans border-y border-gray-300">
      <div className="text-black font-light text-lg px-6 tracking-wide text-center">
        OUR EXPERTISE
      </div>
      <div
        className={`flex p-8 animate-marquee whitespace-nowrap motion-reduce:animate-none ${
          paused ? "[animation-play-state:paused]" : ""
        }`}
      >
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="text-black font-black capitalize text-5xl px-6 tracking-wide"
          >
            {item}
          </span>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        className="absolute bottom-2 right-2 rounded-md border border-gray-400 bg-white px-3 py-1 text-sm font-medium text-black hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
      >
        {paused ? "Play scrolling text" : "Pause scrolling text"}
      </button>
    </div>
  );
};

export default RunningStrip;
