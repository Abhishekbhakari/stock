"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-3.5rem)] w-full items-center justify-center text-center bg-black">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container space-y-8 px-6 text-white"
      >
        {/* Title with crazy text animation */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-br from-green-400 via-white to-green-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Invest in Your Future With
          <br />
          SEBI Registered <span className="text-yellow-400">Research Analyst</span>
        </motion.h1>

        {/* Description with fade-in animation */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl"
        >
          We are a SEBI Registered Research Analyst firm that empowers your trading and investment 
          decisions with cutting-edge stock market research and algorithmic tools.
        </motion.p>

        {/* Buttons with cool hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="flex flex-col gap-4 sm:flex-row justify-center"
        >
          <Button
            size="lg"
            className="relative  px-6 py-3 text-lg font-semibold text-black transition duration-300 hover:bg-yellow-600 hover:shadow-lg hover:shadow-green-500/50"
          >
            Explore Solutions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="relative border border-neutral-50 px-6 py-3 text-lg font-semibold text-neutral-50 transition duration-300 hover:border-x-stone-50 hover:bg-stone-50 hover:text-black hover:shadow-lg hover:shadow-green-500/50"
          >
            Schedule a Demo
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}