"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="w-full py-24 relative">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Parcours Professionnel</h2>
          <p className="text-slate-400 text-lg">Mon évolution dans l'écosystème tech.</p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0 space-y-12">
          {experience.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                <div className="md:col-span-1 md:text-right mb-2 md:mb-0 pt-1 hidden md:block">
                  <span className="text-slate-400 text-sm font-medium">{exp.period}</span>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-[-5px] md:left-[19%] top-1.5 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.8)] border-2 border-[#0F172A] z-10 hidden md:block" />
                <div className="absolute left-[-5px] top-1.5 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.8)] border-2 border-[#0F172A] z-10 md:hidden" />

                <div className="md:col-span-4 glass-card p-6 md:p-8 hover:bg-white/10 transition-colors group">
                  <div className="md:hidden mb-4">
                    <span className="text-blue-400 text-sm font-medium px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                  <h4 className="text-slate-300 font-medium mb-4">{exp.company}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  {(exp as any).certificateLink && (
                    <a 
                      href={(exp as any).certificateLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors"
                    >
                      Voir le certificat
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
