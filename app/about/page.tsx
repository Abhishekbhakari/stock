import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container py-12">
        <h1 className="text-4xl font-bold mb-6">About Stock</h1>
        <p className="text-lg mb-4">
        Stockbox Technologies is a SEBI-registered research analyst firm that provide in-depth market analysis and actionable investment recommendations to help our clients achieve their financial goals.
        We use cutting-edge tools and techniques to analyze stocks, commodities, and other financial instruments and offer a wide range of services including equity research, technical analysis, and stock recommendations.
        Our team of analysts has extensive experience in the stock market and has a deep understanding of the various sectors and industries. We also provide regular market updates and insights to keep our clients informed about the latest market trends.
        Our goal is to help our clients make informed decisions about their investments and achieve long-term success in the stock market. We strive to help you navigate the markets and make the most of your investments.
        Contact us to learn more about how we can help you to achieve your financial goals?
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
        <p className="text-lg mb-4">
        <ul className="list-disc pl-6 space-y-2">
          <li>INNOVATION: We at Stockbox create original investment ideas based on cutting-edge market research while delivering our clients with speed, flexibility, and cost effectiveness.</li>
          <li>RELIABILITY: Stockbox make no compromises when it comes to data quality.</li>
          <li>CONSULTANCY: Stockbox guarantees highest level of research service and attentive observation.</li>
          <li>TRUST: We will never make promises we can’t keep</li>
          <li>SOCIAL RESPONSIBILITY: We believe in a better community and every contribution can make a difference.</li>
        </ul>
        Stockbox is committed to maintaining the highest standards of integrity and transparency. We are dedicated to providing our clients with the best possible service and strive to build long-term relationships based on trust and mutual respect.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Innovation: We constantly push the boundaries of what's possible in software development.</li>
          <li>Integrity: We uphold the highest ethical standards in all our business practices.</li>
          <li>Collaboration: We believe in the power of teamwork and partnerships to achieve great results.</li>
          <li>
            Customer-Centric: Our clients' success is our top priority, and we tailor our solutions to meet their unique
            needs.
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}

