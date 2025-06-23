export default function TestimonialSection() {
  const testimonials = [
    {
      title: "Knowledge and Expertise",
      quote: "The Stockbox team consists of analysts with a strong understanding of the Stock market, Investment strategies, and financial analysis.",
      author: "RONY VEXELMAN",
      company: "OPTIMOVE",
      color: "gold",
    },
    {
      title: "Comprehensive Market Coverage",
      quote: "The Stockbox team consists of analysts with a strong understanding of the Stock market, Investment strategies, and financial analysis.",
      author: "IDAN HERSHKOVICH",
      company: "CATO NETWORKS",
      color: "peach",
    },
    {
      title: "Investment strategy",
      quote: "The Stockbox team consists of analysts with a strong understanding of the Stock market, Investment strategies, and financial analysis.",
      author: "STAV ELKAYAM",
      company: "DATORIOS",
      color: "gold",
    },
    {
      title: "In-depth analysis and insights",
      quote: "The Stockbox team consists of analysts with a strong understanding of the Stock market, Investment strategies, and financial analysis.",
      author: "RONY VEXELMAN",
      company: "OPTIMOVE",
      color: "peach",
    },
    {
      title: "Access to the team",
      quote: "The Stockbox team consists of analysts with a strong understanding of the Stock market, Investment strategies, and financial analysis.",
      author: "IDAN HERSHKOVICH",
      company: "CATO NETWORKS",
      color: "gold",
    },
    {
      title: "Track record",
      quote: "The Stockbox team consists of analysts with a strong understanding of the Stock market, Investment strategies, and financial analysis.",
      author: "STAV ELKAYAM",
      company: "DATORIOS",
      color: "peach",
    },
  ];

  return (
    <section className="relative px-4 py-16 md:py-24 bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#1E003A_30%,#090A31_100%)]"></div>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-extrabold mb-5 md:mb-5">
          <span className="text-white">WHY TO</span> <span className="text-yellow-400">JOIN</span> <span className="text-yellow-400">US</span> <span className="text-white">?</span>
        </h1>

        <div className="flex justify-center mb-8 md:mb-16">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20%" height="100" viewBox="0 0 21 94" fill="none">
  <path d="M11.715 0.557948L9.04492 0.566406L9.27116 79.3038L11.9412 79.2953L11.715 0.557948Z" fill="white"></path>
  <path d="M10.9089 91.8633L1.92589 72.809L19.5977 72.6664L10.9089 91.8633Z" fill="#ED89A6"></path>
  <path d="M21 71.7146L10.9083 94L0.499865 71.8809L21 71.7146ZM10.8857 89.7235L18.1942 73.5915L3.35087 73.7103L10.8857 89.7235Z" fill="white"></path>
</svg>
        </div>



        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              {/* Stacked card effect */}
              <div
                className={`absolute inset-0 ${
                  testimonial.color === "gold" ? "bg-[#FFC84A]" : "bg-[#FFB680]"
                } transform translate-x-2 translate-y-2`}
              />
              {/* <div
                className={`absolute inset-0 ${
                  testimonial.color === "gold" ? "bg-[#FFD966]" : "bg-[#FFD9A0]"
                } transform translate-x-1 translate-y-1`}
              /> */}

              {/* Main card */}
              <div
                className={`relative p-6 md:p-8 min-h-[280px] flex flex-col justify-between border-spacing-1 border-black ${
                  testimonial.color === "gold" ? "bg-[#fcfcfc] text-black" : "bg-[#f9f9f8] text-black"
                }`}
              >
                <p className={`text-lg md:text-2xl mb-6 font-bold${testimonial.color === "gold" ? " text-[#FFC84A]" : " text-[#FFB680]"}`}>{testimonial.title}</p>
                <p className="text-lg md:text-xl font-medium mb-6">{testimonial.quote}</p>
                {/* <div>
                  <p className="font-bold text-sm md:text-base">{testimonial.author}</p>
                  <p className="text-sm opacity-90">{testimonial.title}</p>
                  <p className="text-sm opacity-90">{testimonial.company}</p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
