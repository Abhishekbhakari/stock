"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image component

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-3.5rem)] w-full items-center justify-center text-center bg-black overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* FLEX CONTAINER - Text Left, Image Right */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 space-y-8 md:space-y-0">
        
        {/* LEFT SIDE - TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 text-white space-y-8 text-center md:text-left"
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-4xl text-center md:text-left font-black tracking-tight text-transparent sm:text-2xl md:text-6xl lg:text-7xl"
          ><span className="text-yellow-400">*INVEST*</span>
          <br />
             IN YOUR FUTURE <span className="text-lime-400">.</span>

          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mx-auto max-w-2xl text-center md:text-left text-xl text-gray-300 md:text-xl"
          >
            Gaurav Kulkarni is a SEBI Registered Research analyst.
            “We simplify Equity investment for the investor by doing fundamental analysis on the shares”
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4 }}
            className="flex flex-col gap-4 sm:flex-row justify-center md:justify-start"
          >
            <div
              
              className="relative items-center md:items-start flex bg-transparent hover:bg-transparent text-xl font-bold text-white transition duration-300 "
            >
              EXPLORE
             
              <svg className="md:w-48 h-8 ml-2 w-20" width="100" height="32" viewBox="0 0 89 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.00366298 9.45249L0.0117188 12.1226L74.9997 11.8963L74.9916 9.22624L0.00366298 9.45249Z" fill="white"></path>
              <path d="M86.9609 10.2606L68.814 19.2435L68.6782 1.57178L86.9609 10.2606Z" fill="#FDCD00"></path>
              <path d="M67.7719 0.169433L88.9961 10.2611L67.9303 20.6696L67.7719 0.169433ZM84.9232 10.2837L69.5594 2.9752L69.6726 17.8186L84.9232 10.2837Z" fill="white"></path>
              </svg>
            </div>
            {/* <Button
              variant="outline"
              size="lg"
              className="relative border border-neutral-50 px-6 py-3 text-lg font-semibold text-neutral-50 transition duration-300 hover:border-x-stone-50 hover:bg-stone-50 hover:text-black hover:shadow-lg hover:shadow-green-500/50"
            >
              Schedule a Demo
            </Button> */}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 flex justify-center items-center"
        >
          <Image 
            src="/banner5.png" // Make sure to place the image in the /public folder
            alt="Stock Market Illustration"
            width={600}
            height={600}
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}
