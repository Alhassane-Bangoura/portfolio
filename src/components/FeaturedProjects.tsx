"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function FeaturedProjects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="w-full py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center">
            Projets Phares
            <span className="hidden md:block w-32 h-[1px] bg-white/20 ml-6"></span>
          </h2>
          <p className="text-slate-400 text-lg">Sélection de mes réalisations les plus impactantes.</p>
        </div>

        <div className="space-y-24">
          {projects.map((project: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image / Phone mockup side */}
              <div className="w-full md:w-3/5 relative group flex items-center justify-center">
                {project.mobile ? (
                  /* ── PHONE MOCKUP ── */
                  <div className="relative mx-auto" style={{ width: "340px" }}>
                    {/* Outer shell */}
                    <div className="relative rounded-[52px] bg-gradient-to-b from-slate-600 to-slate-900 p-[3px] shadow-[0_40px_100px_rgba(0,0,0,0.7)] group-hover:shadow-[0_40px_100px_rgba(37,99,235,0.3)] transition-shadow duration-700">
                      {/* Side buttons — volume */}
                      <div className="absolute -left-[6px] top-[110px] w-[5px] h-[34px] bg-slate-600 rounded-l-full" />
                      <div className="absolute -left-[6px] top-[158px] w-[5px] h-[34px] bg-slate-600 rounded-l-full" />
                      {/* Side buttons — power */}
                      <div className="absolute -right-[6px] top-[136px] w-[5px] h-[60px] bg-slate-600 rounded-r-full" />

                      {/* Inner bezel */}
                      <div className="rounded-[50px] overflow-hidden bg-black relative">
                        {/* Dynamic Island / Notch */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[110px] h-[30px] bg-black rounded-full z-20 flex items-center justify-center gap-2">
                          <div className="w-[12px] h-[12px] rounded-full bg-slate-800 border border-slate-700" />
                          <div className="w-[7px] h-[7px] rounded-full bg-slate-700" />
                        </div>

                        {/* Screen */}
                        <div className="relative overflow-hidden bg-black">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-contain block"
                          />
                          {/* Screen glare overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Home indicator */}
                        <div className="flex items-center justify-center py-3 bg-black">
                          <div className="w-[120px] h-[5px] bg-white/25 rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Floating glow under the phone */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[220px] h-[40px] bg-blue-600/25 blur-3xl rounded-full" />
                  </div>
                ) : (
                  /* ── STANDARD LANDSCAPE IMAGE ── */
                  <>
                    <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors duration-500 z-10 rounded-2xl"></div>
                    <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-2xl w-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Content side */}
              <div className={`w-full md:w-2/5 flex flex-col justify-center ${idx % 2 !== 0 ? 'md:items-start' : 'md:items-end'} relative z-20`}>
                <p className="text-blue-400 font-medium mb-2 text-sm uppercase tracking-wider">Projet en vedette</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">{project.title}</h3>

                <div className={`glass-card p-6 md:p-8 mb-6 shadow-xl ${idx % 2 !== 0 ? 'md:-mr-12' : 'md:-ml-12'} w-full`}>
                  <p className="text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <ul className={`flex flex-wrap gap-3 mb-8 ${idx % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                  {project.tech.map((tech: string, i: number) => (
                    <li key={i} className="text-slate-400 text-sm font-mono bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 items-center">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                    <FaGithub className="w-6 h-6" />
                  </a>
                  {project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors p-2 hover:bg-blue-500/10 rounded-full">
                      <FiExternalLink className="w-6 h-6" />
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

