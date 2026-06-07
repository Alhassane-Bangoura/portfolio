"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="w-full py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 relative overflow-hidden"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
                <span className="w-12 h-[2px] bg-blue-600 mr-4"></span>
                {about.title}
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                {about.description}
              </p>
            </div>
            
            <div className="flex flex-col space-y-4">
              {about.highlights.map((highlight, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-200 font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
