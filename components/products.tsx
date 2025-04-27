import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function OurProducts() {
  return (
    <section className="py-16 bg-[#faf9f5]">
      <div className="container mx-auto">
        <div className="flex items-start mb-8">
          <div className="relative">
            <div className="absolute -left-12 top-4 border-t border-l border-[#5d7a5d] h-12 w-12"></div>
            <div className="flex items-center gap-3">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Leaf icon"
                width={24}
                height={24}
                className="text-[#5d7a5d]"
              />
              <h2 className="text-2xl font-medium text-[#5d7a5d]">Our Products</h2>
            </div>
          </div>
          <div className="ml-auto max-w-md">
            <p className="text-right text-gray-700">
              Connecting to Serve Your Needs.
              <br />
              Priced to Match Your Goals
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-300 bg-white p-6 rounded-sm">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Leaf icon"
                width={24}
                height={24}
                className="text-[#5d7a5d]"
              />
              <h3 className="text-xl font-medium">Focus</h3>
            </div>
            <div className="border-b border-gray-200 pb-2 mb-4">
              <p className="text-lg font-medium">
                15,000 <span className="text-sm text-gray-500">USD / Year</span>
              </p>
            </div>
            <p className="text-sm text-gray-700 mb-8">
              EVM recommendations from large and mid cap companies only. Focus stocks are selected for their potential
              to deliver market beating returns with lower volatility. Stocks are rebalanced annually.
            </p>
            <Button
              variant="outline"
              className="w-full border-[#5d7a5d] text-[#5d7a5d] hover:bg-[#5d7a5d] hover:text-white"
            >
              Subscribe Now
            </Button>
          </div>

          <div className="border border-gray-300 bg-white p-6 rounded-sm relative">
            <div className="absolute top-0 left-0 right-0 bg-[#b8994e] text-white text-center py-1 text-sm">
              MOST POPULAR
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Leaf icon"
                  width={24}
                  height={24}
                  className="text-[#5d7a5d]"
                />
                <h3 className="text-xl font-medium">Feast</h3>
              </div>
              <div className="border-b border-gray-200 pb-2 mb-4">
                <p className="text-lg font-medium">
                  20,000 <span className="text-sm text-gray-500">USD / Year</span>
                </p>
              </div>
              <p className="text-sm text-gray-700 mb-8">
                EVM recommendations from the entire listed companies universe. Aims for better returns with higher risk.
                Includes companies albeit with higher volatility and risk. Stocks are rebalanced monthly.
              </p>
              <Button
                variant="outline"
                className="w-full border-[#5d7a5d] text-[#5d7a5d] hover:bg-[#5d7a5d] hover:text-white"
              >
                Subscribe Now
              </Button>
            </div>
          </div>

          <div className="border border-gray-300 bg-white p-6 rounded-sm">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Leaf icon"
                width={24}
                height={24}
                className="text-[#5d7a5d]"
              />
              <h3 className="text-xl font-medium">Strength of Index</h3>
            </div>
            <div className="border-b border-gray-200 pb-2 mb-4">
              <p className="text-sm">
                Price available on <span className="underline">emailsales@evm.com</span>
              </p>
            </div>
            <p className="text-sm text-gray-700 mb-8">
              Strength of Index recommendations include stocks from the Nifty50 Index only. Aims to outperform the
              Nifty50 and ETFs/Index Funds. It uses a tailored version of EVM to use quarterly results data.
            </p>
            <Button
              variant="outline"
              className="w-full border-[#5d7a5d] text-[#5d7a5d] hover:bg-[#5d7a5d] hover:text-white"
            >
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
