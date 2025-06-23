import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import StatsCards from "@/components/stats-cards"
import Testimonials from "@/components/testimonials"
import TestimonialSection from "@/components/testimonialssection"
import InvestmentApproach from "@/components/investment-approach"
import OurProducts from "@/components/products"
import RunningStrip from "@/components/Marque"

const tabContent = {
  marketDirection: {
    title: "Data-Driven Insights",
    subtitle: "Numbers Speak, We Listen",
    description:
      "Our investment decisions are rooted entirely in verifiable data — not opinions, hype, or market noise.",
    bulletPoints: [
      {
        title: "Analytical Backbone:",
        content:
          "We conduct in-depth analysis of key financial statements including the Profit & Loss, Balance Sheet, and Cash Flow statements.",
      },
      {
        title: "Quantitative Discipline:",
        content:
          "We leverage valuation ratios and metrics to uncover true stock value and avoid overhyped plays.",
      },
    ],
    conclusion:
      "Data is our compass — not guesswork. Every move we make is backed by factual, historical, and predictive financial evidence.",
  },
  industryRanking: {
    title: "Fundamental First Approach",
    subtitle: "Substance Over Sentiment",
    description:
      "We don’t just chase market trends or macro stories. Our focus lies in business fundamentals — the real story behind every ticker.",
    bulletPoints: [
      {
        title: "Company-Centric View:",
        content:
          "We assess each business on its own financial and operational merit.",
      },
      {
        title: "Valuation-Driven Decisions:",
        content:
          "Our entries are backed by value, not volatility.",
      },
    ],
    conclusion:
      "The stock market may be noisy — but fundamentals always speak clearly. We listen to them.",
  },
  leadingStock: {
    title: "Bottom-Up Selection",
    subtitle: "One Stock at a Time",
    description:
      "We don’t believe in buying sectors — we believe in buying businesses. Our selection starts from the stock level and builds upward.",
    bulletPoints: [
      {
        title: "Micro before Macro:",
        content:
          "Economic and sector data take a backseat — we prioritize each stock’s unique performance and potential.",
      },
      {
        title: "Independent Stock Stories:",
        content:
          "Each company we invest in is evaluated independently, without bias toward trends.",
      },
    ],
    conclusion:
      "We believe a strong company can outperform even in a weak sector — that’s where true opportunities lie.",
  },
  acceleration: {
    title: "Continuous Monitoring",
    subtitle: "Discipline After Purchase",
    description:
      "Our commitment doesn’t stop at buying. We consistently track every holding’s fundamentals and market behavior — and exit when the data tells us to.",
    bulletPoints: [
      {
        title: "Fundamental Tracking:",
        content:
          "We monitor earnings reports, cash flows, and balance sheet updates post-investment.",
      },
      {
        title: "Exit by Change, Not Emotion:",
        content:
          "If financial quality declines or price diverges from reality — we sell, fast and decisively.",
      },
    ],
    conclusion:
      "Holding without discipline can erode returns. That’s why we’re as focused on exits as we are on entries.",
  },
  relativePrice: {
    title: "Review & Re-Evaluation",
    subtitle: "Stay Dynamic",
    description:
      "We believe in ongoing reflection — revisiting each investment’s performance regularly ensures nothing is held out of habit.",
    bulletPoints: [
      {
        title: "Performance Check-ins:",
        content:
          "Periodic reassessments of earnings, ratios, and business outlook guide us toward staying or exiting.",
      },
      {
        title: "Adaptive Strategy:",
        content:
          "When the story changes, we adapt — quickly, with no emotional attachment.",
      },
    ],
    conclusion:
      "Re-evaluation protects capital. We grow by questioning even our best decisions.",
  },
  sellingRules: {
    title: "Exit Discipline",
    subtitle: "Sell When the Data Speaks",
    description:
      "We don't believe in buy-and-forget. Every investment has an exit strategy, triggered by data-driven signals.",
    bulletPoints: [
      {
        title: "Defined Exit Triggers:",
        content:
          "Fundamental deterioration or technical weakness means it's time to sell — without delay.",
      },
      {
        title: "Emotional Detachment:",
        content:
          "We follow data, not hope. Our exit rules are based on strategy, not attachment.",
      },
    ],
    conclusion:
      "Every great entry deserves a smart exit. That’s how we protect capital and keep compounding.",
  },
}


export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <div className="bg-black pb-16 md:pb-24">
          <Hero />
        </div>

              <RunningStrip />
        
        {/* Testimonial Section */}
        <div className=" bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <TestimonialSection />
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="py-16 md:py-12 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <StatsCards />
          </div>
        </div>
        
        {/* Investment Approach */}
        <div className="  bg-black dark:bg-gray-900">
          <div className="">
            <InvestmentApproach
              marketDirection={tabContent.marketDirection}
              industryRanking={tabContent.industryRanking}
              leadingStock={tabContent.leadingStock}
              acceleration={tabContent.acceleration}
            />
          </div>
        </div>
        
        {/* Products Section */}
        <div className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <OurProducts />
          </div>
        </div>

  
        
        {/* Testimonials */}
        <div className=" bg-black dark:bg-gray-900">
          <div className="">
            <Testimonials />
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <CTA />
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  )
}