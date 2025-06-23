import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function InvestmentPhilosophy() {
  return (
    <div className="bg-[#f9f9f9] text-[#1a1a1a] font-serif">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#ffffff] text-center py-16 px-6 md:px-10 shadow-sm">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0a1c2d] tracking-wide mb-4">
          Investment Philosophy
        </h1>
        <div className="mx-auto w-24 h-[2px] bg-[#e6b800] mb-6" />
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Our philosophy is rooted in discipline, long-term value creation, and fundamental research to protect and grow capital.
        </p>
      </section>

      {/* Content Section */}
      <main className="max-w-4xl mx-auto px-6 md:px-10 py-16 space-y-8 text-justify text-[#333] leading-loose bg-white">
        <p>
          We believe in long-term value investing driven by a research-intensive process. Our core goal is to preserve and grow wealth sustainably,
          focusing on companies with strong fundamentals and scalable opportunities.
        </p>

        <p>
          Our investment framework is built upon these key pillars:
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li>Thorough fundamental analysis of businesses and sectors</li>
          <li>Assessment of management integrity and governance standards</li>
          <li>Investing in businesses with strong moats and growth visibility</li>
          <li>Disciplined approach to valuations with a margin of safety</li>
          <li>Diversified portfolio construction to mitigate risks</li>
        </ul>

        <p>
          We blend value and growth investing principles and avoid speculative trends. Our stock-picking strategy focuses on businesses
          with robust financials, free cash flows, and sustainable competitive advantages.
        </p>

        <p>
          Our transparent approach ensures alignment with client interests, and we aim to deliver consistent performance across market cycles.
        </p>

        {/* Visual Element */}
        <div className="mt-10">
          <Image
            src="/investment.png" // update with actual image
            alt="Our Investment Approach"
            width={800}
            height={400}
            className="rounded-lg mx-auto shadow-md"
          />
        </div>
      </main>

      {/* Quote or Callout */}
      <section className="bg-[#fdf7e3] py-10 px-6 md:px-10 text-center">
        <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto text-[#5a4d1d] italic">
          "The essence of investment management is the management of risks, not the management of returns." — Benjamin Graham
        </p>
      </section>

      <Footer />
    </div>
  );
}
