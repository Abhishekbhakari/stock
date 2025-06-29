// "use client";
// import Image from "next/image";
// import Footer from "@/components/footer";
// import Navbar from "@/components/navbar";

// export default function InvestmentPhilosophy() {
//   // Pillars data for structured presentation
//   const pillars = [
//     {
//       title: "Fundamental Analysis",
//       description: "Thorough examination of business models, financials, and competitive positioning",
//       icon: "📊"
//     },
//     {
//       title: "Management Integrity",
//       description: "Assessment of leadership quality and corporate governance",
//       icon: "👥"
//     },
//     {
//       title: "Sustainable Moats",
//       description: "Focus on businesses with durable competitive advantages",
//       icon: "🛡️"
//     },
//     {
//       title: "Value Discipline",
//       description: "Valuation focus with margin of safety",
//       icon: "⚖️"
//     },
//     {
//       title: "Risk Mitigation",
//       description: "Diversified portfolio construction",
//       icon: "🌐"
//     }
//   ];

//   // Investment process steps
//   const processSteps = [
//     { step: 1, title: "Research (buy)", description: "Identify opportunities through fundamental analysis" },
//     { step: 2, title: "Monitoring", description: "Continuously review holdings and market conditions" },
//     { step: 3, title: "Research (sell)", description: "Giving sell call based on fundamental Changes" },
//   ];

//   return (
//     <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
//       {/* Animated background elements */}
//       <div className="pointer-events-none fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-[#1a1333]" />
//         <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px] animate-pulse-slow" />
//         <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px] animate-pulse-slow" />
//         <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px] animate-ping-slow" />
//       </div>

//       <div className="relative z-10">
//         <Navbar />

//         {/* Hero Section with Animation */}
//         <section className="text-center py-20 px-6 md:px-10 relative">
//           <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
//           <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-br from-yellow-400 via-white to-yellow-600 bg-clip-text text-transparent animate-gradient">
//             Investment Philosophy
//           </h1>
//           <div className="mx-auto w-24 h-[3px] bg-yellow-400 mb-6 rounded-full" />
//           <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
//             Our investment philosophy is completely based on data. We do the fundamental analysis. We analyze Profit loss statement, Balance sheet, Cash flow statement and different Valuation ratios. 
//           </p>
          
//           {/* Animated elements */}
//           <div className="absolute top-1/4 right-10 w-8 h-8 bg-yellow-400 rounded-full animate-bounce" />
//           <div className="absolute bottom-10 left-20 w-6 h-6 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
//         </section>

//         {/* Visual Philosophy Overview */}
//         <div className="max-w-6xl mx-auto px-6 md:px-10 mb-16">
//           <div className="flex justify-center gap-10">
//             {/* Philosophy Card */}
//             {/* <div className="bg-gradient-to-br from-gray-900 to-black/80 rounded-2xl p-8 border border-gray-800 shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300">
//               <h2 className="text-2xl font-bold mb-4 text-yellow-300">Core Principles</h2>
//               <p className="mb-6 text-gray-200 leading-relaxed">
//                 We believe in long-term value investing driven by research-intensive processes. Our primary objective is wealth preservation 
//                 and sustainable growth through companies with strong fundamentals and scalable opportunities.
//               </p> */}
              
//               {/* Stats Visualization */}
//               {/* <div className="grid grid-cols-2 gap-4 mb-6">
//                 <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
//                   <div className="text-3xl font-bold text-yellow-400">15+</div>
//                   <div className="text-sm text-gray-400">Years Experience</div>
//                 </div>
//                 <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
//                   <div className="text-3xl font-bold text-yellow-400">98%</div>
//                   <div className="text-sm text-gray-400">Client Retention</div>
//                 </div>
//               </div>
              
//               <p className="text-gray-200 leading-relaxed">
//                 We blend value and growth principles, avoiding speculative trends in favor of businesses with robust financials, 
//                 strong free cash flows, and sustainable competitive advantages.
//               </p>
//             </div> */}
            
//             {/* Investment Approach Visualization */}
//             <div className="relative bg-gradient-to-br from-[#1a1333] to-black/80 rounded-2xl p-8 border border-gray-800 shadow-2xl">
//               <h2 className="text-2xl font-bold mb-6 text-yellow-300">Our Approach</h2>
              
//               {/* Radial Chart */}
//               <div className="relative w-full h-64 flex items-center justify-center">
//                 <div className="absolute w-48 h-48 rounded-full border-4 border-yellow-400/30 animate-pulse"></div>
//                 <div className="absolute w-40 h-40 rounded-full border-4 border-blue-400/30 animate-ping-slow"></div>
//                 <div className="absolute w-32 h-32 rounded-full border-4 border-purple-400/30"></div>
                
//                 <div className="absolute flex flex-col items-center">
//                   <div className="text-4xl mb-2">📈</div>
//                   <div className="text-lg font-bold text-yellow-300">Value + Growth</div>
//                 </div>
                
//                 {/* Radial labels */}
//                 <div className="absolute top-2 left-1/4 text-sm text-yellow-300 font-medium">Research</div>
//                 <div className="absolute top-1/4 right-4 text-sm text-blue-300 font-medium">Analysis</div>
//                 <div className="absolute bottom-1/4 right-4 text-sm text-purple-300 font-medium">Valuation</div>
//                 {/* <div className="absolute bottom-2 left-1/4 text-sm text-yellow-300 font-medium">Execution</div> */}
//               </div>
              
//               <p className="text-center text-gray-300 mt-6">
//                 Our  methodology ensures continuous evaluation and refinement of investment decisions
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Investment Pillars Section */}


// {/* Bottom-Up Philosophy Section */}
// <section className="max-w-6xl mx-auto px-6 md:px-10 mb-20">
//   <div className="flex flex-col md:flex-row items-center gap-10">
//     {/* Text Content */}
//     <div className="flex-1">
//       <h2 className="text-3xl font-bold mb-4 text-yellow-300">Bottom-Up Investment Approach</h2>
//       <p className="text-gray-300 leading-relaxed mb-4">
//        We use bottom up investment philosophy. More importance is given to individual share’s fundamentals rather than sector and the economic data
//       </p>
//       <ul className="space-y-2 text-gray-300 mb-6">
//         <li className="flex items-start">
//           <span className="text-yellow-400 mr-2">✓</span>
//           <span>Deep analysis of company financials and business models</span>
//         </li>
//         <li className="flex items-start">
//           <span className="text-yellow-400 mr-2">✓</span>
//           <span>Management quality and corporate governance</span>
//         </li>
//         <li className="flex items-start">
//           <span className="text-yellow-400 mr-2">✓</span>
//           <span>Sustainable competitive advantages</span>
//         </li>
//         <li className="flex items-start">
//           <span className="text-yellow-400 mr-2">✓</span>
//           <span>Valuation metrics and margin of safety</span>
//         </li>
//       </ul>
//       <p className="text-gray-300 leading-relaxed">
//         This approach allows us to uncover undervalued companies with strong fundamentals, 
//         regardless of broader market trends.
//       </p>
//     </div>

//     {/* Visual Representation */}
//     <div className="flex-1 flex justify-center">
//       <div className="relative w-full max-w-md">
//         {/* Bottom-up pyramid visualization */}
//         <div className="flex flex-col items-center">
//           {/* Individual company - base of pyramid */}
//           <div className="w-64 h-20 bg-gradient-to-r from-yellow-500/20 to-yellow-700/30 rounded-lg border border-yellow-500/40 flex items-center justify-center mb-2 transition-all duration-300 hover:scale-105">
//             <div className="text-center">
//               <div className="text-lg font-bold text-yellow-300">Individual Company</div>
//               <div className="text-sm text-yellow-200">Financial Statements, Ratios</div>
//             </div>
//           </div>
          
//           {/* Analysis arrow */}
//           <div className="mb-2">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//             </svg>
//           </div>
          
//           {/* Sector - middle of pyramid */}
//           <div className="w-48 h-16 bg-gradient-to-r from-purple-500/20 to-purple-700/30 rounded-lg border border-purple-500/40 flex items-center justify-center mb-2 transition-all duration-300 hover:scale-105">
//             <div className="text-center">
//               <div className="font-bold text-purple-300">Sector Analysis</div>
//             </div>
//           </div>
          
//           {/* Analysis arrow */}
//           <div className="mb-2">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//             </svg>
//           </div>
          
//           {/* Economy - top of pyramid */}
//           <div className="w-32 h-12 bg-gradient-to-r from-blue-500/20 to-blue-700/30 rounded-lg border border-blue-500/40 flex items-center justify-center transition-all duration-300 hover:scale-105">
//             <div className="text-center">
//               <div className="text-sm font-bold text-blue-300">Economy</div>
//             </div>
//           </div>
//         </div>

//         {/* Floating analysis elements */}
//         <div className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center border border-yellow-500/30 animate-pulse">
//           <span className="text-xl">📊</span>
//         </div>
//         <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/30 animate-pulse">
//           <span className="text-xl">📈</span>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>



//         {/* Investment Process */}
//         <section className="max-w-6xl mx-auto px-6 md:px-10 mb-20">
//           <h2 className="text-3xl font-bold text-center mb-4 text-yellow-300">Our Investment Process</h2>
//           <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
//             A disciplined approach to identifying and managing investment opportunities
//           </p>
          
//           <div className="relative">
//             {/* Process line */}
//             <div className="absolute left-4 md:left-1/2 top-12 bottom-12 w-0.5 bg-gradient-to-b from-yellow-500 via-purple-500 to-blue-500 md:left-4 md:top-4 md:h-0.5 md:w-[calc(100%-2rem)] md:bg-gradient-to-r"></div>
            
//             <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-5">
//               {processSteps.map((step, index) => (
//                 <div 
//                   key={index} 
//                   className={`relative z-10 bg-gradient-to-br from-gray-900 to-black/80 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-yellow-500/10 ${
//                     index % 2 === 0 ? 'md:mt-0' : 'md:mt-20'
//                   }`}
//                 >
//                   <div className="absolute -top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 flex items-center justify-center text-black font-bold">
//                     {step.step}
//                   </div>
//                   <h3 className="text-xl font-bold mb-2 text-yellow-300">{step.title}</h3>
//                   <p className="text-gray-300 text-sm">{step.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Performance Visualization */}
//         {/* <section className="max-w-6xl mx-auto px-6 md:px-10 mb-20 bg-gradient-to-r from-gray-900/50 to-[#1a1333]/50 rounded-2xl p-8 border border-gray-800">
//           <h2 className="text-3xl font-bold text-center mb-4 text-yellow-300">Performance Through Discipline</h2>
//           <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
//             Our consistent approach delivers results across market cycles
//           </p> */}
          
//           {/* Simplified Performance Chart */}
//           {/* <div className="relative h-64 w-full bg-gray-900/50 rounded-xl p-4 border border-gray-700">
//             <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-700"></div>
//             <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-700"></div> */}
            
//             {/* Chart line */}
//             {/* <div className="relative h-full">
//               <div className="absolute bottom-8 left-8 w-4/5">
//                 <div className="relative h-40">
//                   <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700"></div>
//                   <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 animate-draw-line"></div> */}
                  
//                   {/* Data points */}
//                   {/* <div className="absolute bottom-0 left-0 w-3 h-3 rounded-full bg-yellow-400"></div>
//                   <div className="absolute bottom-12 left-1/4 w-3 h-3 rounded-full bg-yellow-400"></div>
//                   <div className="absolute bottom-24 left-1/2 w-3 h-3 rounded-full bg-yellow-400"></div>
//                   <div className="absolute bottom-32 left-3/4 w-3 h-3 rounded-full bg-yellow-400"></div>
//                   <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-yellow-400"></div>
//                 </div>
//               </div>
//             </div> */}
            
//             {/* <div className="absolute bottom-2 left-0 right-0 flex justify-between text-xs text-gray-500 px-4">
//               <span>2019</span>
//               <span>2020</span>
//               <span>2021</span>
//               <span>2022</span>
//               <span>2023</span>
//             </div>
//           </div> */}
          
//           {/* <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
//             <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
//               <div className="text-2xl font-bold text-yellow-400">+42%</div>
//               <div className="text-sm text-gray-400">5-Year Return</div>
//             </div>
//             <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
//               <div className="text-2xl font-bold text-yellow-400">-12%</div>
//               <div className="text-sm text-gray-400">Max Drawdown</div>
//             </div>
//             <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
//               <div className="text-2xl font-bold text-yellow-400">1.8</div>
//               <div className="text-sm text-gray-400">Sharpe Ratio</div>
//             </div>
//             <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
//               <div className="text-2xl font-bold text-yellow-400">85%</div>
//               <div className="text-sm text-gray-400">Positive Quarters</div>
//             </div>
//           </div>
//         </section> */}

//         {/* Quote Section */}
//         <section className="relative bg-gradient-to-r from-yellow-400/10 via-black/80 to-purple-800/10 py-16 px-6 md:px-10 text-center max-w-4xl mx-auto rounded-2xl shadow-lg border border-yellow-900 mb-20 overflow-hidden">
//           {/* Animated elements */}
//           <div className="absolute -top-20 -left-20 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
//           <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
          
//           <p className="text-xl md:text-2xl font-semibold max-w-2xl mx-auto text-yellow-200 italic relative z-10">
//             "The essence of investment management is the management of risks, not the management of returns. Well-managed portfolios start with this precept."
//           </p>
//           <div className="mt-6 text-lg text-yellow-400 font-medium">— Benjamin Graham</div>
//         </section>

//         <Footer />
//       </div>

//       {/* Global Animations */}
//       <style jsx global>{`
//         @keyframes gradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
        
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 6s ease infinite;
//         }
        
//         @keyframes pulse-slow {
//           0% { opacity: 0.3; }
//           50% { opacity: 0.6; }
//           100% { opacity: 0.3; }
//         }
        
//         .animate-pulse-slow {
//           animation: pulse-slow 8s ease-in-out infinite;
//         }
        
//         @keyframes ping-slow {
//           0% { transform: scale(0.8); opacity: 0.8; }
//           75%, 100% { transform: scale(1.2); opacity: 0; }
//         }
        
//         .animate-ping-slow {
//           animation: ping-slow 4s cubic-bezier(0,0,0.2,1) infinite;
//         }
        
//         @keyframes draw-line {
//           to { stroke-dashoffset: 0; }
//         }
        
//         .animate-draw-line {
//           stroke-dasharray: 1000;
//           stroke-dashoffset: 1000;
//           animation: draw-line 3s ease-in-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// }
"use client";
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
    { step: 1, title: "Research (buy)", description: "Identify opportunities through fundamental analysis" },
    { step: 2, title: "Monitoring", description: "Continuously review holdings and market conditions" },
    { step: 3, title: "Research (sell)", description: "Giving sell call based on fundamental Changes" },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Enhanced background elements */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-[#0d0a1a]" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px] animate-ping-slow" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] animate-pulse-slow" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Enhanced Hero Section */}
        <section className="text-center py-24 px-6 md:px-10 relative">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-yellow-500/15 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-br from-yellow-400 via-white to-yellow-600 bg-clip-text text-transparent animate-gradient">
            Investment Philosophy
          </h1>
          <div className="mx-auto w-24 h-[3px] bg-gradient-to-r from-yellow-400 to-amber-500 mb-6 rounded-full" />
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
            Our investment approach is fundamentally data-driven. We meticulously analyze Profit & Loss statements, 
            Balance Sheets, Cash Flow statements, and key valuation ratios to uncover sustainable value.
          </p>
          
          {/* Animated elements */}
          <div className="absolute top-1/4 right-10 w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full animate-bounce" />
          <div className="absolute bottom-10 left-20 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
          <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }} />
        </section>

        {/* Enhanced Investment Approach */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 mb-20">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2 bg-gradient-to-br from-[#1a1333]/90 to-black/80 rounded-2xl p-8 border border-gray-800 shadow-2xl backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 text-yellow-300">Our Core Approach</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We blend <span className="text-yellow-300 font-medium">value investing</span> principles with 
                <span className="text-purple-300 font-medium"> growth potential</span> analysis, focusing on 
                companies with strong fundamentals and sustainable competitive advantages.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-xl text-yellow-400">✓</div>
                  <div>
                    <h3 className="font-bold text-gray-200">Research-Intensive Process</h3>
                    <p className="text-gray-400 text-sm">Deep fundamental analysis of each investment opportunity</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-xl text-yellow-400">✓</div>
                  <div>
                    <h3 className="font-bold text-gray-200">Long-Term Perspective</h3>
                    <p className="text-gray-400 text-sm">Focus on multi-year growth potential rather than short-term fluctuations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-xl text-yellow-400">✓</div>
                  <div>
                    <h3 className="font-bold text-gray-200">Risk-Adjusted Returns</h3>
                    <p className="text-gray-400 text-sm">Prioritizing capital preservation alongside growth objectives</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative w-full h-80 flex items-center justify-center">
                <div className="absolute w-48 h-48 rounded-full border-4 border-yellow-400/30 animate-pulse"></div>
                <div className="absolute w-40 h-40 rounded-full border-4 border-blue-400/30 animate-ping-slow"></div>
                <div className="absolute w-32 h-32 rounded-full border-4 border-purple-400/30"></div>
                
                <div className="absolute flex flex-col items-center">
                  <div className="text-5xl mb-2 animate-pulse">📈</div>
                  <div className="text-xl font-bold text-yellow-300">Value + Growth</div>
                </div>
                
                {/* Radial labels */}
                <div className="absolute top-2 left-1/4 text-sm text-yellow-300 font-medium bg-black/40 px-2 py-1 rounded-full">Research</div>
                <div className="absolute top-1/4 right-4 text-sm text-blue-300 font-medium bg-black/40 px-2 py-1 rounded-full">Analysis</div>
                {/* <div className="absolute bottom-1/4 right-4 text-sm text-purple-300 font-medium bg-black/40 px-2 py-1 rounded-full">Valuation</div> */}
                <div className="absolute bottom-2 left-1/3 text-sm text-cyan-300 font-medium bg-black/40 px-2 py-1 rounded-full">Valuation</div>
              </div>
              
              <p className="text-center text-gray-300 mt-6 italic">
                "Our methodology ensures continuous evaluation and refinement of investment decisions"
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom-Up Philosophy Section */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mb-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 text-yellow-300">
                Bottom-Up Investment Approach
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mt-2 rounded-full"></div>
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-6 bg-black/30 backdrop-blur-sm p-5 rounded-xl border border-gray-800">
                We prioritize individual company fundamentals over sector trends or macroeconomic factors. 
                Our bottom-up philosophy focuses on in-depth analysis of specific companies rather than top-down 
                economic forecasting.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-5 rounded-xl border border-gray-800">
                  <h3 className="font-bold text-gray-200 flex items-center mb-2">
                    <span className="text-yellow-400 mr-2 text-xl">✓</span> Company-Centric Analysis
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Deep examination of financials, management quality, and competitive positioning
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-5 rounded-xl border border-gray-800">
                  <h3 className="font-bold text-gray-200 flex items-center mb-2">
                    <span className="text-yellow-400 mr-2 text-xl">✓</span> Quality Over Quantity
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Focus on businesses with sustainable advantages and strong cash flows
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-5 rounded-xl border border-gray-800">
                  <h3 className="font-bold text-gray-200 flex items-center mb-2">
                    <span className="text-yellow-400 mr-2 text-xl">✓</span> Valuation Discipline
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Strict adherence to valuation metrics with margin of safety
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-5 rounded-xl border border-gray-800">
                  <h3 className="font-bold text-gray-200 flex items-center mb-2">
                    <span className="text-yellow-400 mr-2 text-xl">✓</span> Sector Agnostic
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Opportunities identified across all sectors based on individual merit
                  </p>
                </div>
              </div>
            </div>

<div className="flex-1 flex justify-center">
  <div className="relative w-full max-w-md">
    <div className="flex flex-col items-center">
      {/* Economy - top of pyramid */}
      <div className="w-32 h-12 bg-gradient-to-r from-blue-500/20 to-blue-700/30 rounded-lg border border-blue-500/40 flex items-center justify-center transition-all duration-300 hover:scale-105 group">
        <div className="text-center">
          <div className="text-sm font-bold text-blue-300 group-hover:text-blue-200 transition-colors">Economy</div>
        </div>
      </div>
      
      {/* Analysis arrow */}
      <div className="mb-2 animate-bounce" style={{ animationDelay: '0.2s' }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </div>
      
      {/* Sector - middle of pyramid */}
      <div className="w-48 h-16 bg-gradient-to-r from-purple-500/20 to-purple-700/30 rounded-lg border border-purple-500/40 flex items-center justify-center mb-2 transition-all duration-300 hover:scale-105 group">
        <div className="text-center">
          <div className="font-bold text-purple-300 group-hover:text-purple-200 transition-colors">Sector Analysis</div>
        </div>
        <div className="absolute -bottom-2 w-4 h-4 bg-purple-500 rotate-45"></div>
      </div>
      
      {/* Analysis arrow */}
      <div className="mb-2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </div>
      
      {/* Individual company - base of pyramid */}
      <div className="w-64 h-20 bg-gradient-to-r from-yellow-500/20 to-yellow-700/30 rounded-lg border border-yellow-500/40 flex items-center justify-center mb-2 transition-all duration-300 hover:scale-105 group">
        <div className="text-center">
          <div className="text-lg font-bold text-yellow-300 group-hover:text-yellow-200 transition-colors">Individual Company</div>
          <div className="text-sm text-yellow-200/80">Financial Statements, Valuation Ratios</div>
        </div>
        <div className="absolute -top-2 w-4 h-4 bg-yellow-500 rotate-45"></div>
      </div>
    </div>

    {/* Floating analysis elements */}
    <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/30 animate-pulse">
      <span className="text-xl">📉</span>
    </div>
    <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center border border-yellow-500/30 animate-pulse">
      <span className="text-xl">📊</span>
    </div>
    <div className="absolute top-1/2 -right-8 w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/30 animate-pulse">
      <span className="text-xl">📈</span>
    </div>
  </div>
</div>
          </div>
        </section>

        {/* Enhanced Investment Pillars */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-yellow-300">Our Investment Pillars</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              The foundation of our investment decision-making process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-b from-gray-900/80 to-black/60 rounded-2xl p-6 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 group hover:shadow-lg hover:shadow-yellow-500/10 flex flex-col"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{pillar.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors duration-300">{pillar.title}</h3>
                <p className="text-gray-300 text-sm mt-auto">{pillar.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-800/50 group-hover:border-yellow-400/30 transition-colors">
                  <div className="text-xs text-gray-500 group-hover:text-yellow-500/80 transition-colors">
                    Core Principle {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Investment Process */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-yellow-300">Our Investment Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              A disciplined approach to identifying and managing investment opportunities
            </p>
          </div>
          
          <div className="relative">
            {/* Process line */}
            <div className="absolute left-4 md:left-1/2 top-12 bottom-12 w-0.5 bg-gradient-to-b from-yellow-500 via-purple-500 to-blue-500 md:left-4 md:top-4 md:h-0.5 md:w-[calc(100%-2rem)] md:bg-gradient-to-r"></div>
            
            <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="relative z-10 bg-gradient-to-br from-gray-900 to-black/80 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-yellow-500/10"
                >
                  <div className="absolute -top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 flex items-center justify-center text-black font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-yellow-300">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                  
                  {/* Connection dots */}
                  {index < processSteps.length - 1 && (
                    <>
                      <div className="hidden md:block absolute top-1/2 right-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform translate-x-1/2"></div>
                      <div className="md:hidden absolute bottom-0 left-1/2 w-4 h-4 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Quote Section */}
        <section className="relative bg-gradient-to-r from-yellow-400/10 via-black/80 to-purple-800/10 py-20 px-6 md:px-10 text-center max-w-4xl mx-auto rounded-2xl shadow-lg border border-yellow-900 mb-20 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-amber-500"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
          
          <div className="text-6xl absolute top-6 left-6 opacity-10">❝</div>
          <div className="text-6xl absolute bottom-6 right-6 opacity-10">❞</div>
          
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto text-yellow-100 relative z-10 leading-relaxed">
            "The essence of investment management is the management of risks, not the management of returns. 
            Well-managed portfolios start with this precept."
          </p>
          <div className="mt-8 flex items-center justify-center">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
            <div className="mx-4 text-lg text-yellow-400 font-medium">Benjamin Graham</div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
          </div>
          <div className="text-gray-500 text-sm mt-2">The Father of Value Investing</div>
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