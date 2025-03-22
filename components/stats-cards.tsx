"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { number: 0, description: "Recieved during the month" },
  { number: 0, description: "At the beginning of the month" },
  { number: 0, description: "Resolved during the month" },
  { number: 0, description: "Pending at the end of the month" },
  { number: 0, description: "Reason of Pendency" },
];

export default function StatsCards() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(stats.map(() => Math.floor(Math.random() * 100)));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 -z-10 bg-black"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center text-4xl font-extrabold text-white sm:text-5xl"
      >
        Number of Complaints <span className="text-lime-400">.</span>
      </motion.h2>

      {/* Stats Cards */}
      <div className="container mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-yellow-400 p-6 rounded-lg
">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="relative overflow-hidden rounded-xl p-6 shadow-xl"
            style={{
              background: "bg-yellow-400",
              color: "Black",
            }}
          >
            <CardContent className="relative z-10 flex flex-col items-center">
              <motion.p
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-5xl font-extrabold"
              >
                {counts[index]}
              </motion.p>
              <p className="mt-2 text-center text-lg font-semibold opacity-80">
                {stat.description}
              </p>
            </CardContent>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-white/10 blur-2xl opacity-50"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
