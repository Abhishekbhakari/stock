"use client";
import { useState } from "react";

export default function WhatWeDoSection() {
  const [showAll, setShowAll] = useState(false);

  const whatWeDoItems = [
    {
      title: "Fundamental Analysis",
      description: "We conduct thorough examination of business models, financials, and competitive positioning to identify strong investment opportunities.",
      color: "gold",
    },
    {
      title: "Management Assessment",
      description: "We evaluate leadership quality and corporate governance to ensure we invest in companies with ethical and capable management.",
      color: "blue",
    },
    {
      title: "Sustainable Competitive Advantages",
      description: "We focus on businesses with durable competitive advantages that protect their market position and profits.",
      color: "gold",
    },
    {
      title: "Value Investing with Margin of Safety",
      description: "We adhere to strict valuation metrics and always seek a margin of safety to protect your investments.",
      color: "pink",
    },
    {
      title: "Risk Management",
      description: "We mitigate risk through diversified portfolio construction and continuous monitoring of market conditions.",
      color: "blue",
    },
    {
      title: "Bottom-Up Investment Approach",
      description: "We prioritize individual company fundamentals over sector or economic trends to uncover hidden gems.",
      color: "red",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "gold":
        return {
          shadow: "bg-[#F5C11E]",
          heading: "text-[#F5C11E]",
          background: "bg-[#F5C11E]/10",
        };
      case "blue":
        return {
          shadow: "bg-[#2E3C81]",
          heading: "text-[#2E3C81]",
          background: "bg-[#2E3C81]/10",
        };
      case "pink":
        return {
          shadow: "bg-[#E23E57]",
          heading: "text-[#E23E57]",
          background: "bg-[#E23E57]/10",
        };
      case "red":
        return {
          shadow: "bg-[#B61C1C]",
          heading: "text-[#B61C1C]",
          background: "bg-[#B61C1C]/10",
        };
      default:
        return {
          shadow: "bg-black",
          heading: "text-black",
        };
    }
  };

  const displayedItems = showAll ? whatWeDoItems : whatWeDoItems.slice(0, 3);

  return (
    <section className="relative px-4 py-16 md:py-24 bg-black">
      <div className="absolute inset-0 -z-10 h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#1E003A_30%,#090A31_100%)]"></div>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-extrabold mb-10">
          <span className="text-white">WHAT </span>
          <span className="text-yellow-400">WE</span>{" "}
          <span className="text-yellow-400">DO</span>{" "}
          <span className="text-white">?</span>
        </h1>

        <div className="flex justify-center mb-8 md:mb-16">
          <svg xmlns="http://www.w3.org/2000/svg" width="20%" height="100" viewBox="0 0 21 94" fill="none">
            <path d="M11.715 0.557948L9.04492 0.566406L9.27116 79.3038L11.9412 79.2953L11.715 0.557948Z" fill="white"></path>
            <path d="M10.9089 91.8633L1.92589 72.809L19.5977 72.6664L10.9089 91.8633Z" fill="#ED89A6"></path>
            <path
              d="M21 71.7146L10.9083 94L0.499865 71.8809L21 71.7146ZM10.8857 89.7235L18.1942 73.5915L3.35087 73.7103L10.8857 89.7235Z"
              fill="white"
            ></path>
          </svg>
        </div>

        <div className="mb-16 max-w-5xl mx-auto text-center px-4">
          <p className="text-xl md:text-xl text-gray-300 leading-relaxed">
            Because of time constraints and lack of market knowledge, many investors struggle to invest effectively. 
          </p>
          <p className="mt-4 text-xl font-bold text-yellow-400">
            "We simplify Equity investment by doing fundamental analysis on shares"
          </p>
        </div>

        {!showAll ? (
          <div className="relative flex justify-center items-center md:flex h-[300px] mb-20">
            <div className="relative" style={{ width: "660px", height: "300px" }}>
              {displayedItems.map((item, index) => {
                const color = getColorClasses(item.color);
                return (
                  <div
                    key={index}
                    className={`absolute w-80 p-6 translate-x-2 translate-y-2 border bg-white border-black rounded-md ${color.shadow}`}
                    style={{
                      top: index === 0 ? "50px" : index === 1 ? "0" : "60px",
                      left: index === 0 ? "0" : index === 1 ? "220px" : "440px",
                      zIndex: index === 1 ? 30 : 10,
                    }}
                  >
                    <p className={`text-2xl font-extrabold mb-2 ${color.heading}`}>{item.title}</p>
                    <p className="text-black">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {whatWeDoItems.map((item, index) => {
              const color = getColorClasses(item.color);
              return (
                <div key={index} className="relative">
                  <div className={`absolute inset-0 ${color.shadow} translate-x-2 bg-${color.background} translate-y-2`} />
                  <div className="relative bg-white border border-black rounded-md shadow-md p-6 h-full flex flex-col">
                    <p className={`text-2xl font-extrabold mb-2 ${color.heading}`}>{item.title}</p>
                    <p className="text-black">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {!showAll && (
          <div className="text-center mt-20">
            <button 
              onClick={() => setShowAll(true)} 
              className="text-white text-lg font-medium hover:underline "
            >
              LOAD MORE
            </button>
          </div>
        )}
      </div>
    </section>
  );
}