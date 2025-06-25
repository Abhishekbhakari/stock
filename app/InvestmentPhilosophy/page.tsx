"use client";
import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function InvestmentPhilosophy() {
  // Pillars data for structured presentation
  const pillars = [
    {
      title: "Fundamental Analysis",
      description: "Thorough examination of business models, financials, and competitive positioning",
      icon: "📊"
    },
    {
      title: "Management Integrity",
      description: "Assessment of leadership quality and corporate governance",
      icon: "👥"
    },
    {
      title: "Sustainable Moats",
      description: "Focus on businesses with durable competitive advantages",
      icon: "🛡️"
    },
    {
      title: "Value Discipline",
      description: "Valuation focus with margin of safety",
      icon: "⚖️"
    },
    {
      title: "Risk Mitigation",
      description: "Diversified portfolio construction",
      icon: "🌐"
    }
  ];

  // Investment process steps
  const processSteps = [
    { step: 1, title: "Research", description: "Identify opportunities through fundamental analysis" },
    { step: 2, title: "Evaluate", description: "Assess management, competitive position, and growth potential" },
    { step: 3, title: "Value", description: "Determine intrinsic value with margin of safety" },
    { step: 4, title: "Construct", description: "Build diversified portfolio aligned with risk profile" },
    { step: 5, title: "Monitor", description: "Continuously review holdings and market conditions" }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Animated background elements */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-[#1a1333]" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px] animate-ping-slow" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section with Animation */}
        <section className="text-center py-20 px-6 md:px-10 relative">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-br from-yellow-400 via-white to-yellow-600 bg-clip-text text-transparent animate-gradient">
            Investment Philosophy
          </h1>
          <div className="mx-auto w-24 h-[3px] bg-yellow-400 mb-6 rounded-full" />
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Our disciplined approach combines fundamental research with long-term value creation to protect and grow capital sustainably
          </p>
          
          {/* Animated elements */}
          <div className="absolute top-1/4 right-10 w-8 h-8 bg-yellow-400 rounded-full animate-bounce" />
          <div className="absolute bottom-10 left-20 w-6 h-6 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
        </section>

        {/* Visual Philosophy Overview */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Philosophy Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black/80 rounded-2xl p-8 border border-gray-800 shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4 text-yellow-300">Core Principles</h2>
              <p className="mb-6 text-gray-200 leading-relaxed">
                We believe in long-term value investing driven by research-intensive processes. Our primary objective is wealth preservation 
                and sustainable growth through companies with strong fundamentals and scalable opportunities.
              </p>
              
              {/* Stats Visualization */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                  <div className="text-3xl font-bold text-yellow-400">15+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                  <div className="text-3xl font-bold text-yellow-400">98%</div>
                  <div className="text-sm text-gray-400">Client Retention</div>
                </div>
              </div>
              
              <p className="text-gray-200 leading-relaxed">
                We blend value and growth principles, avoiding speculative trends in favor of businesses with robust financials, 
                strong free cash flows, and sustainable competitive advantages.
              </p>
            </div>
            
            {/* Investment Approach Visualization */}
            <div className="relative bg-gradient-to-br from-[#1a1333] to-black/80 rounded-2xl p-8 border border-gray-800 shadow-2xl">
              <h2 className="text-2xl font-bold mb-6 text-yellow-300">Our Approach</h2>
              
              {/* Radial Chart */}
              <div className="relative w-full h-64 flex items-center justify-center">
                <div className="absolute w-48 h-48 rounded-full border-4 border-yellow-400/30 animate-pulse"></div>
                <div className="absolute w-40 h-40 rounded-full border-4 border-blue-400/30 animate-ping-slow"></div>
                <div className="absolute w-32 h-32 rounded-full border-4 border-purple-400/30"></div>
                
                <div className="absolute flex flex-col items-center">
                  <div className="text-4xl mb-2">📈</div>
                  <div className="text-lg font-bold text-yellow-300">Value + Growth</div>
                </div>
                
                {/* Radial labels */}
                <div className="absolute top-2 left-1/4 text-sm text-yellow-300 font-medium">Research</div>
                <div className="absolute top-1/4 right-4 text-sm text-blue-300 font-medium">Analysis</div>
                <div className="absolute bottom-1/4 right-4 text-sm text-purple-300 font-medium">Valuation</div>
                <div className="absolute bottom-2 left-1/4 text-sm text-yellow-300 font-medium">Execution</div>
              </div>
              
              <p className="text-center text-gray-300 mt-6">
                Our circular methodology ensures continuous evaluation and refinement of investment decisions
              </p>
            </div>
          </div>
        </div>

        {/* Investment Pillars Section */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mb-20">
          <h2 className="text-3xl font-bold text-center mb-4 text-yellow-300">Our Investment Pillars</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            The foundation of our investment framework built on five critical principles
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-b from-gray-900/80 to-black/60 rounded-2xl p-6 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{pillar.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors duration-300">{pillar.title}</h3>
                <p className="text-gray-300 text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Investment Process */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mb-20">
          <h2 className="text-3xl font-bold text-center mb-4 text-yellow-300">Our Investment Process</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            A disciplined approach to identifying and managing investment opportunities
          </p>
          
          <div className="relative">
            {/* Process line */}
            <div className="absolute left-4 md:left-1/2 top-12 bottom-12 w-0.5 bg-gradient-to-b from-yellow-500 via-purple-500 to-blue-500 md:left-4 md:top-4 md:h-0.5 md:w-[calc(100%-2rem)] md:bg-gradient-to-r"></div>
            
            <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-5">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative z-10 bg-gradient-to-br from-gray-900 to-black/80 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-yellow-500/10 ${
                    index % 2 === 0 ? 'md:mt-0' : 'md:mt-20'
                  }`}
                >
                  <div className="absolute -top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 flex items-center justify-center text-black font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-yellow-300">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Visualization */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mb-20 bg-gradient-to-r from-gray-900/50 to-[#1a1333]/50 rounded-2xl p-8 border border-gray-800">
          <h2 className="text-3xl font-bold text-center mb-4 text-yellow-300">Performance Through Discipline</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Our consistent approach delivers results across market cycles
          </p>
          
          {/* Simplified Performance Chart */}
          <div className="relative h-64 w-full bg-gray-900/50 rounded-xl p-4 border border-gray-700">
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-700"></div>
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-700"></div>
            
            {/* Chart line */}
            <div className="relative h-full">
              <div className="absolute bottom-8 left-8 w-4/5">
                <div className="relative h-40">
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 animate-draw-line"></div>
                  
                  {/* Data points */}
                  <div className="absolute bottom-0 left-0 w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="absolute bottom-12 left-1/4 w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="absolute bottom-24 left-1/2 w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="absolute bottom-32 left-3/4 w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-yellow-400"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-2 left-0 right-0 flex justify-between text-xs text-gray-500 px-4">
              <span>2019</span>
              <span>2020</span>
              <span>2021</span>
              <span>2022</span>
              <span>2023</span>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
              <div className="text-2xl font-bold text-yellow-400">+42%</div>
              <div className="text-sm text-gray-400">5-Year Return</div>
            </div>
            <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
              <div className="text-2xl font-bold text-yellow-400">-12%</div>
              <div className="text-sm text-gray-400">Max Drawdown</div>
            </div>
            <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
              <div className="text-2xl font-bold text-yellow-400">1.8</div>
              <div className="text-sm text-gray-400">Sharpe Ratio</div>
            </div>
            <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
              <div className="text-2xl font-bold text-yellow-400">85%</div>
              <div className="text-sm text-gray-400">Positive Quarters</div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="relative bg-gradient-to-r from-yellow-400/10 via-black/80 to-purple-800/10 py-16 px-6 md:px-10 text-center max-w-4xl mx-auto rounded-2xl shadow-lg border border-yellow-900 mb-20 overflow-hidden">
          {/* Animated elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
          
          <p className="text-xl md:text-2xl font-semibold max-w-2xl mx-auto text-yellow-200 italic relative z-10">
            "The essence of investment management is the management of risks, not the management of returns. Well-managed portfolios start with this precept."
          </p>
          <div className="mt-6 text-lg text-yellow-400 font-medium">— Benjamin Graham</div>
        </section>

        <Footer />
      </div>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
        
        @keyframes pulse-slow {
          0% { opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { opacity: 0.3; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        @keyframes ping-slow {
          0% { transform: scale(0.8); opacity: 0.8; }
          75%, 100% { transform: scale(1.2); opacity: 0; }
        }
        
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0,0,0.2,1) infinite;
        }
        
        @keyframes draw-line {
          to { stroke-dashoffset: 0; }
        }
        
        .animate-draw-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-line 3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}