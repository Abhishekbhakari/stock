"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Define types for tab content
type TabContent = {
  title: string
  subtitle: string
  description: string
  bulletPoints: {
    title: string
    content: string
  }[]
  conclusion: string
}

type InvestmentApproachProps = {
  marketDirection: TabContent
  industryRanking: TabContent
  leadingStock: TabContent
  acceleration: TabContent
  relativePrice: TabContent
  sellingRules: TabContent
}

export default function InvestmentApproach({
  marketDirection,
  industryRanking,
  leadingStock,
  acceleration,
  relativePrice,
  sellingRules,
}: InvestmentApproachProps) {
  // Default to "L" tab as shown in the screenshot
  const [activeTab, setActiveTab] = useState<"M" | "I" | "L" | "A" | "R" | "S">("L")

  // Get the active content based on the selected tab
  const getActiveContent = () => {
    switch (activeTab) {
      case "M":
        return marketDirection
      case "I":
        return industryRanking
      case "L":
        return leadingStock
      case "A":
        return acceleration
      case "R":
        return relativePrice
      case "S":
        return sellingRules
    }
  }

  const activeContent = getActiveContent()

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">A successful investment approach</h1>

        <div className="bg-yellow-400 rounded-lg shadow-sm overflow-hidden">
          {/* MILARS Navigation */}
          <div className="grid grid-cols-6 text-center border-b">
            <button
              onClick={() => setActiveTab("M")}
              className={`py-6 px-4 flex flex-col items-center ${activeTab === "M" ? "border-b-2 border-black" : ""}`}
            >
              <span className={`text-6xl font-light ${activeTab === "M" ? "text-black" : "text-gray-400"}`}>M</span>
              <span className={`mt-2 ${activeTab === "M" ? "text-black" : "text-gray-400"}`}>Market</span>
              <span className={activeTab === "M" ? "text-black" : "text-gray-400"}>direction</span>
            </button>

            <button
              onClick={() => setActiveTab("I")}
              className={`py-6 px-4 flex flex-col items-center ${activeTab === "I" ? "border-b-2 border-black" : ""}`}
            >
              <span className={`text-6xl font-light ${activeTab === "I" ? "text-black" : "text-gray-400"}`}>I</span>
              <span className={`mt-2 ${activeTab === "I" ? "text-black" : "text-gray-400"}`}>Industry</span>
              <span className={activeTab === "I" ? "text-black" : "text-gray-400"}>ranking</span>
            </button>

            <button
              onClick={() => setActiveTab("L")}
              className={`py-6 px-4 flex flex-col items-center ${activeTab === "L" ? "border-b-2 border-black" : ""}`}
            >
              <span className={`text-6xl font-light ${activeTab === "L" ? "text-black" : "text-gray-400"}`}>L</span>
              <span className={`mt-2 ${activeTab === "L" ? "text-black" : "text-gray-400"}`}>Leading</span>
              <span className={activeTab === "L" ? "text-black" : "text-gray-400"}>stock</span>
            </button>

            <button
              onClick={() => setActiveTab("A")}
              className={`py-6 px-4 flex flex-col items-center ${activeTab === "A" ? "border-b-2 border-black" : ""}`}
            >
              <span className={`text-6xl font-light ${activeTab === "A" ? "text-black" : "text-gray-400"}`}>A</span>
              <span className={`mt-2 ${activeTab === "A" ? "text-black" : "text-gray-400"}`}>Acceleration</span>
              <span className={activeTab === "A" ? "text-black" : "text-gray-400"}>in earnings</span>
            </button>

            <button
              onClick={() => setActiveTab("R")}
              className={`py-6 px-4 flex flex-col items-center ${activeTab === "R" ? "border-b-2 border-black" : ""}`}
            >
              <span className={`text-6xl font-light ${activeTab === "R" ? "text-black" : "text-gray-400"}`}>R</span>
              <span className={`mt-2 ${activeTab === "R" ? "text-black" : "text-gray-400"}`}>Relative Price</span>
              <span className={activeTab === "R" ? "text-black" : "text-gray-400"}>strength</span>
            </button>

            <button
              onClick={() => setActiveTab("S")}
              className={`py-6 px-4 flex flex-col items-center ${activeTab === "S" ? "border-b-2 border-black" : ""}`}
            >
              <span className={`text-6xl font-light ${activeTab === "S" ? "text-black" : "text-gray-400"}`}>S</span>
              <span className={`mt-2 ${activeTab === "S" ? "text-black" : "text-gray-400"}`}>Selling</span>
              <span className={activeTab === "S" ? "text-black" : "text-gray-400"}>rules</span>
            </button>
          </div>

          {/* Content Area */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Left Column - Icon */}
            <div className="md:col-span-1">
              <div className="bg-gray-50 p-8 flex flex-col items-center justify-center h-full">
                <span className="text-8xl font-bold">{activeTab}</span>
                <span className="font-semibold mt-2">{activeContent.title}</span>
                <span className="font-semibold">{activeContent.subtitle}</span>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="md:col-span-3">
              <p className="text-gray-700 mb-6 text-lg">{activeContent.description}</p>

              <ul className="space-y-6">
                {activeContent.bulletPoints.map((point, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-black font-bold">•</span>
                    <div>
                      <span className="font-semibold">{point.title}</span> {point.content}
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-gray-700">{activeContent.conclusion}</p>

              <div className="mt-8">
                <Link href="#" className="text-blue-800 font-semibold inline-flex items-center">
                  Service Catalog <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

