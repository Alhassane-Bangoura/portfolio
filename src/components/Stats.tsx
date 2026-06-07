"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Stats() {
  const { stats } = portfolioData;

  return (
    <section className="w-full py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 md:p-8 text-center flex flex-col items-center justify-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors duration-500" />
              
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 relative z-10 group-hover:text-blue-400 transition-colors">
                {stat.value}
              </h3>
              <p className="text-slate-400 text-sm md:text-base font-medium relative z-10">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
