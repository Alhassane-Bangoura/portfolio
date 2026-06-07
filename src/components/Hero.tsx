"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { hero } = portfolioData;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
          >
            Disponible pour de nouveaux projets
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-tight">
            {hero.name}
          </h1>
          <h2 className="text-2xl md:text-4xl text-slate-400 font-light mb-6">
            {hero.title1} <br/>
            <span className="text-gradient font-medium">{hero.title2}</span>
          </h2>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            {hero.description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-1"
            >
              Voir mes projets
            </a>
            <a 
              href="#services"
              className="px-8 py-4 glass-card hover:bg-white/10 text-white rounded-full font-medium transition-all transform hover:-translate-y-1 flex items-center gap-2"
            >
              Découvrir mes services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative hidden md:block"
        >
          {/* Abstract Tech Representation instead of direct photo for futuristic feel, or use a placeholder styled professionally */}
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-blue-500/20 border-dashed animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-full blur-2xl" />
            
            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-white/10 bg-[#0F172A] flex items-center justify-center p-2">
              <img 
                src="/profile.jpg" 
                alt="Alhassane Bangoura"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Floating badges */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 glass-card p-4 rounded-2xl"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 left-4 glass-card p-4 rounded-2xl"
            >
              <span className="text-2xl">💡</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
