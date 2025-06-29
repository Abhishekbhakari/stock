"use client";
import { useState } from "react";

export default function TestimonialSection() {
  const [showAll, setShowAll] = useState(false);

  const testimonials = [
    {
      title: "Knowledge and Expertise",
      quote:
        "Our team consists of analysts with a strong understanding of the Stock market, Investment strategies, and financial analysis.",
      author: "RONY VEXELMAN",
      company: "OPTIMOVE",
      color: "gold",
    },
    {
      title: "Comprehensive Market Coverage",
      quote:
        "Provide coverage of the markets and sectors that are relevant to clients’ investment goals. Our team of Research analysts provides thorough coverage of the stock market, including market trends and analysis.",
      author: "IDAN HERSHKOVICH",
      company: "CATO NETWORKS",
      color: "blue",
    },
    {
      title: "Investment strategy",
      quote:
        "We follow a Scientific approach toward stock market trading and investment. Along with this, we rely upon disciplined and systematic investment strategy, rather than on speculation or on market hype.",
      author: "STAV ELKAYAM",
      company: "DATORIOS",
      color: "gold",
    },
    {
      title: "In-depth analysis and insights",
      quote:
        "Our research goes beyond just presenting data and includes insightful analysis and interpretation. This helps you to make informed decisions and stay ahead of the market.",
      author: "RONY VEXELMAN",
      company: "OPTIMOVE",
      color: "pink",
    },
    {
      title: "Access to the team",
      quote:
        "We understand that every investor has unique needs and goals. That's why we offer customized research solutions tailored to client’s specific requirements.",
      author: "IDAN HERSHKOVICH",
      company: "CATO NETWORKS",
      color: "blue",
    },
    {
      title: "Track record",
      quote:
        "Our analysts hold a strong track record of providing highly accurate and profitable investment recommendations.",
      author: "STAV ELKAYAM",
      company: "DATORIOS",
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

  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="relative px-4 py-16 md:py-24 bg-black">
      <div className="absolute inset-0 -z-10 h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#1E003A_30%,#090A31_100%)]"></div>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-extrabold mb-10">
          <span className="text-white">WHY TO </span>
          <span className="text-yellow-400">JOIN</span>{" "}
          <span className="text-yellow-400">US</span>{" "}
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

        {/* Conditional Layout */}
        {!showAll ? (
          // Initial View with 3 cards stacked and overlapped, centered
          <div className="relative flex justify-center items-center md:flex h-[300px] mb-20">
            <div className="relative" style={{ width: "660px", height: "300px" }}>
              {displayedTestimonials.map((testimonial, index) => {
                const color = getColorClasses(testimonial.color);
                return (
                  <div>
                  
                    <div
                      key={index}
                      className={`absolute w-80 p-6  translate-x-2 translate-y-2 border bg-white border-black rounded-md  ${color.shadow}`}
                      style={{
                        top: index === 0 ? "50px" : index === 1 ? "0" : "60px",
                        left: index === 0 ? "0" : index === 1 ? "220px" : "440px",
                        zIndex: index === 1 ? 30 : 10,
                      }}
                    >
                      <p className={`text-2xl font-extrabold mb-2 ${color.heading}`}>{testimonial.title}</p>
                      <p className="text-black">{testimonial.quote}</p>
                      <p className="mt-4 text-sm font-semibold uppercase">{testimonial.author}</p>
                      <p className="text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          // Grid View after Load More
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => {
              const color = getColorClasses(testimonial.color);
              return (
                <div key={index} className="relative">
                  <div className={`absolute inset-0 ${color.shadow} translate-x-2 bg-${color.background} translate-y-2`} />
                  <div className="relative bg-white border border-black rounded-md shadow-md p-6 h-[280px] flex flex-col justify-between">
                    <p className={`text-2xl font-extrabold mb-2 ${color.heading}`}>{testimonial.title}</p>
                    <p className="text-black">{testimonial.quote}</p>
                    <div className="mt-4">
                      <p className="text-sm font-semibold uppercase">{testimonial.author}</p>
                      <p className="text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Load More Button */}
        {!showAll && (
          <div className="text-center mt-20">
            <button onClick={() => setShowAll(true)} className="text-white text-lg font-medium hover:underline focus:outline-none">
              LOAD MORE
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
