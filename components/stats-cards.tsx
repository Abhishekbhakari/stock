"use client";

import { CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const stats = [
  { number: 0, description: "Recieved during the month" },
  { number: 0, description: "At the beginning of the month" },
  { number: 0, description: "Resolved during the month" },
  { number: 0, description: "Pending at the end of the month" },
  { number: 0, description: "Reason of Pendency" },
];

export default function StatsCards() {
  return (
    <section className="relative py-16 bg-black overflow-hidden">
      {/* Title with Icon */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center flex flex-wrap justify-center items-center gap-2 px-3 text-2xl font-extrabold text-white md:text-3xl"
      >
        Number of Complaints
        <span className="text-lime-400">.</span>
        <svg className="h-8 w-20" width="100" height="32" viewBox="0 0 89 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.00366298 9.45249L0.0117188 12.1226L74.9997 11.8963L74.9916 9.22624L0.00366298 9.45249Z" fill="white"></path>
          <path d="M86.9609 10.2606L68.814 19.2435L68.6782 1.57178L86.9609 10.2606Z" fill="#FDCD00"></path>
          <path d="M67.7719 0.169433L88.9961 10.2611L67.9303 20.6696L67.7719 0.169433ZM84.9232 10.2837L69.5594 2.9752L69.6726 17.8186L84.9232 10.2837Z" fill="white"></path>
        </svg>
      </motion.h2>

      {/* Stats Grid */}
      <div className="container mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative p-6 bg-white rounded-xl shadow-xl border border-yellow-300 text-black h-[220px] flex flex-col justify-between overflow-hidden transition-all"
          >
            {/* Glow */}
            <div className="absolute -inset-2 bg-yellow-300 opacity-10 blur-3xl rounded-xl z-0"></div>

            {/* Card Content */}
            <CardContent className="relative z-10 flex flex-col items-center text-center">
              <motion.p
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="text-5xl font-extrabold text-yellow-500"
              >
                {stat.number}
              </motion.p>
              <p className="mt-4 text-base font-semibold text-gray-800 leading-tight">
                {stat.description}
              </p>
            </CardContent>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
