"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function OurProducts() {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Side Heading Section */}
        <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left z-10 w-full lg:w-1/2">
          <h2 className="text-6xl sm:text-5xl md:text-7xl font-extrabold text-white">
            THE <span className=" text-yellow-400">ONLY PRODUCT</span> YOU NEED <span className="text-lime-400">.</span>
          </h2>
          <div className="flex items-start justify-center lg:justify-start w-full gap-2">
            <svg className="h-8 w-36 md:w-38 ml-2" width="100" height="32" viewBox="0 0 89 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.00366298 9.45249L0.0117188 12.1226L74.9997 11.8963L74.9916 9.22624L0.00366298 9.45249Z" fill="white"></path>
              <path d="M86.9609 10.2606L68.814 19.2435L68.6782 1.57178L86.9609 10.2606Z" fill="#FDCD00"></path>
              <path d="M67.7719 0.169433L88.9961 10.2611L67.9303 20.6696L67.7719 0.169433ZM84.9232 10.2837L69.5594 2.9752L69.6726 17.8186L84.9232 10.2837Z" fill="white"></path>
            </svg>
          </div>
        </div>

        {/* Right Side Product Card */}
        <div className="w-full lg:w-1/2 flex justify-center z-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full max-w-sm"
          >
            <div className="relative p-6 sm:p-8 min-h-[320px] flex flex-col justify-between bg-[#fcfcfc] text-black shadow-xl rounded-md">
              {/* Ribbon */}
              <div className="absolute top-0 left-0 right-0 bg-[#b8994e] text-white text-center py-1 text-lg">
                Most Popular
              </div>

              {/* Card Content */}
              <div className="mt-10">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl font-extrabold bg-yellow-500 px-2 py-1 rounded">
                    Investment Plan
                  </h3>
                </div>
                <ul className="list-disc list-inside text-md text-gray-700 mb-6 space-y-1">
                  <li>Yearly subscription-based investment model.</li>
                  <li>Buying calls provided in each quarter.</li>
                  <li>Selling call triggered if fundamentals weaken or stock fully prices in positivity.</li>
                  <li>End-to-end service: from buying to monitoring to sell call.</li>
                </ul>
              </div>

              {/* Subscribe Button */}
              <Button
                variant="outline"
                className="w-full border-[#5d7a5d] text-[#5d7a5d] hover:bg-[#5d7a5d] hover:text-white"
              >
                Subscribe Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mouse-following gradient background */}
      <motion.div
        className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[420px] rounded-full z-0 pointer-events-none hidden lg:block"
        style={{
          background: "radial-gradient(circle at var(--x, 50%) var(--y, 50%), #a3e635 0%, #2563eb 100%)",
          opacity: 0.25,
          filter: "blur(60px)",
        }}
        animate={false}
        id="mouse-gradient-bg"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('mousemove', function(e) {
              const bg = document.getElementById('mouse-gradient-bg');
              if (bg) {
                const rect = bg.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                bg.style.setProperty('--x', x + '%');
                bg.style.setProperty('--y', y + '%');
              }
            });
          `,
        }}
      />
    </section>
  );
}
