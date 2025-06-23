import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MotionConfig } from "framer-motion";
import { motion } from "framer-motion";

export default function OurProducts() {
  return (
    <section className="py-16 bg-black">
      <div className="container flex justify-center mx-auto">
        <div className="flex flex-col gap-3 justify-center items-center mb-8">
          <h2 className="text-start flex text-6xl font-extrabold text-white sm:text-6xl">
           The only product<br/> You Need <span className="text-lime-400">.</span>
            
          </h2>
          <div className="flex items-start justify-start w-full gap-2">
                      <svg className="md:w-38 h-8 ml-2 w-36 " width="100" height="32" viewBox="0 0 89 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.00366298 9.45249L0.0117188 12.1226L74.9997 11.8963L74.9916 9.22624L0.00366298 9.45249Z" fill="white"></path>
              <path d="M86.9609 10.2606L68.814 19.2435L68.6782 1.57178L86.9609 10.2606Z" fill="#FDCD00"></path>
              <path d="M67.7719 0.169433L88.9961 10.2611L67.9303 20.6696L67.7719 0.169433ZM84.9232 10.2837L69.5594 2.9752L69.6726 17.8186L84.9232 10.2837Z" fill="white"></path>
              </svg>
          </div>

        </div>
        

        <div className="flex justify-center items-center px-20 gap-6 flex-wrap">
          {/* Product Card 1 - Feast */}
          {/* <div className="relative">
            <div className="relative p-6 md:p-8 min-h-[280px] flex flex-col justify-between bg-[#fcfcfc] text-black w-[320px]">
              <div className="absolute top-0 left-0 right-0 bg-[#b8994e] text-white text-center py-1 text-lg rounded-t-sm">
                The only Product You Need
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl font-extrabold bg-yellow-500 p-1">Feast</h3>
                </div>
                <div className="border-b border-gray-200 pb-2 mb-4">
                  <p className="text-lg font-medium">
                    20,000{" "}
                    <span className="text-sm text-gray-500">USD / Year</span>
                  </p>
                </div>
                <p className="text-sm text-gray-700 mb-8">
                  EVM recommendations from the entire listed companies universe.
                  Aims for better returns with higher risk. Includes companies
                  albeit with higher volatility and risk. Stocks are rebalanced
                  monthly.
                </p>
              </div>
              <Button
                variant="outline"
                className="w-full border-[#5d7a5d] text-[#5d7a5d] hover:bg-[#5d7a5d] hover:text-white"
              >
                Subscribe Now
              </Button>
            </div>
          </div> */}

          {/* Product Card 2 - Yearly Subscription Model */}
          <div className="relative">
            <div className="relative p-6 md:p-8 min-h-[280px] flex flex-col justify-between bg-[#fcfcfc] text-black w-[320px]">
              <div className="absolute top-0 left-0 right-0 bg-[#b8994e] text-white text-center py-1 text-lg rounded-t-sm">
                Most Popular
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl font-extrabold bg-yellow-500 p-1">Investment Plan</h3>
                </div>
                
              
                <ul className="list-disc list-inside text-md text-gray-700 mb-8 space-y-1">
                  <li>Yearly subscription-based investment model.</li>
                  <li>Buying calls provided in each quarter.</li>
                  <li>Selling call triggered if fundamentals weaken or stock fully prices in positivity.</li>
                  <li>End-to-end service: from buying to monitoring to sell call.</li>
                </ul>
              </div>
              <Button
                variant="outline"
                className="w-full border-[#5d7a5d] text-[#5d7a5d] hover:bg-[#5d7a5d] hover:text-white"
              >
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
