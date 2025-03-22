"use client";

import { Brain, Cloud, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    name: "Knowledge and Expertise",
    description:
      "The Stockbox team consists of analysts with a strong understanding of the Stock market, Investment strategies, and financial analysis.",
    icon: Brain,
  },
  {
    name: "Comprehensive Market Coverage",
    description:
      "Our team provides thorough coverage of the stock market, including trends, analysis, and insights tailored to client goals.",
    icon: Cloud,
  },
  {
    name: "Investment Strategy",
    description:
      "We follow a scientific, disciplined approach to trading and investing, relying on strategy rather than speculation.",
    icon: Shield,
  },
  {
    name: "Knowledge and Expertise",
    description:
      "The Stockbox team consists of analysts with a strong understanding of the Stock market, Investment strategies, and financial analysis.",
    icon: Brain,
  },
  {
    name: "Comprehensive Market Coverage",
    description:
      "Our team provides thorough coverage of the stock market, including trends, analysis, and insights tailored to client goals.",
    icon: Cloud,
  },
  {
    name: "Investment Strategy",
    description:
      "We follow a scientific, disciplined approach to trading and investing, relying on strategy rather than speculation.",
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section className="container relative space-y-12 py-16 md:py-24  text-white text-center">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="text-4xl font-extrabold sm:text-5xl md:text-7xl">
          WHY TO JOIN <span className="text-yellow-400">US</span> ?
        </h2>
        <p className="mt-4 text-xl font-bold">WORK WITH REMOTION</p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, ease: "easeOut" },
          },
        }}
        className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.name}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`relative overflow-hidden rounded-xl p-6 shadow-lg md:p-8 bg-yellow-200 text-black text-left`}
          >
            <h3 className="text-lg font-bold md:text-xl text-yellow-700">
              {feature.name}
            </h3>
            <p className="mt-2 text-sm md:text-base font-medium">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
