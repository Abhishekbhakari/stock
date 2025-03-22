import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import StatsCards from "@/components/stats-cards"
import Testimonials from "@/components/testimonials"
import TestimonialSection from "@/components/testimonialssection"
import InvestmentApproach from "@/components/investment-approach"

const tabContent = {
  marketDirection: {
    title: "Market",
    subtitle: "direction",
    description:
      "Understanding market direction is crucial for successful investing. We analyze trends to position your investments for maximum growth.",
    bulletPoints: [
      {
        title: "Trend analysis:",
        content:
          "We track market indicators to identify bullish or bearish trends before making investment decisions.",
      },
      {
        title: "Economic indicators:",
        content:
          "Our team monitors key economic data to anticipate market movements and adjust strategies accordingly.",
      },
    ],
    conclusion:
      "Aligning with the market's direction puts the wind at your back and increases your chances of investment success.",
  },
  industryRanking: {
    title: "Industry",
    subtitle: "ranking",
    description:
      "Not all industries perform equally. We identify the strongest sectors poised for growth to maximize your investment potential.",
    bulletPoints: [
      {
        title: "Sector rotation:",
        content: "We identify which industries are leading in the current economic cycle and which are lagging.",
      },
      {
        title: "Growth potential:",
        content:
          "Our analysis focuses on industries with sustainable competitive advantages and long-term growth prospects.",
      },
    ],
    conclusion: "Investing in leading industries significantly improves your odds of finding winning stocks.",
  },
  leadingStock: {
    title: "Leading",
    subtitle: "Stock",
    description:
      "Don't let past success blind you to the hidden gems of tomorrow's stock market. At stockaxis, we're all about identifying the real leaders.",
    bulletPoints: [
      {
        title: "Past / future:",
        content:
          "We get it. Yesterday's stars may lose their shine. That's why we focus on the future, not sentimentality.",
      },
      {
        title: "Seeds of growth:",
        content:
          "We select stocks with strong earnings and promising growth potential. These rising stars disrupt outdated players and introduce exciting innovations.",
      },
    ],
    conclusion: "Investing in them means riding the wave of their success and reaping the rewards.",
  },
  acceleration: {
    title: "Acceleration",
    subtitle: "in earnings",
    description:
      "Earnings acceleration is one of the most powerful indicators of stock price growth. We look for companies showing increasing rates of change in earnings.",
    bulletPoints: [
      {
        title: "Growth trajectory:",
        content: "We identify companies with accelerating, not just growing, earnings to find stocks with momentum.",
      },
      {
        title: "Sustainable advantage:",
        content:
          "Our analysis focuses on companies with business models that can sustain earnings growth over multiple quarters.",
      },
    ],
    conclusion:
      "Companies with accelerating earnings often see their stock prices follow the same upward trajectory.",
  },
  relativePrice: {
    title: "Relative Price",
    subtitle: "strength",
    description:
      "Strong stocks tend to remain strong. We identify stocks outperforming the market and their industry peers.",
    bulletPoints: [
      {
        title: "Momentum analysis:",
        content:
          "We track stocks that consistently outperform the broader market, indicating institutional accumulation.",
      },
      {
        title: "Technical patterns:",
        content:
          "Our team identifies constructive chart patterns that suggest continued price strength and momentum.",
      },
    ],
    conclusion:
      "Stocks showing relative strength tend to continue outperforming, creating opportunities for significant gains.",
  },
  sellingRules: {
    title: "Selling",
    subtitle: "rules",
    description:
      "Knowing when to sell is just as important as knowing what to buy. Our disciplined selling rules protect your capital and lock in gains.",
    bulletPoints: [
      {
        title: "Profit taking:",
        content:
          "We establish clear profit targets to help you capture gains at optimal points in a stock's growth cycle.",
      },
      {
        title: "Risk management:",
        content:
          "Our stop-loss strategies help minimize losses when a stock's fundamentals deteriorate or technical patterns break down.",
      },
    ],
    conclusion:
      "Disciplined selling rules are essential for preserving capital and maximizing returns over the long term.",
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
        <Hero />
        <TestimonialSection />
        {/* <Features /> */}
        <StatsCards />
        <InvestmentApproach
        marketDirection={tabContent.marketDirection}
        industryRanking={tabContent.industryRanking}
        leadingStock={tabContent.leadingStock}
        acceleration={tabContent.acceleration}
        relativePrice={tabContent.relativePrice}
        sellingRules={tabContent.sellingRules}
      />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

