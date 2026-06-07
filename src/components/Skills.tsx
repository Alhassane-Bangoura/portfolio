"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const { skills } = portfolioData;

  const renderSkillCategory = (title: string, categoryData: any[]) => (
    <div className="mb-10">
      <h3 className="text-xl font-medium text-slate-300 mb-6 flex items-center">
        <span className="w-8 h-[1px] bg-slate-600 mr-3"></span>
        {title}
      </h3>
      <div className="space-y-4">
        {categoryData.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="glass-card p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <skill.icon className="w-6 h-6 flex-shrink-0" style={{ color: skill.color }} />
                <span className="text-slate-200 font-medium">{skill.name}</span>
              </div>
              <span className="text-blue-400 font-semibold text-sm">{skill.level}%</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.08, ease: "easeOut" }}
                className="h-2 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="w-full py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Expertise Technique</h2>
          <p className="text-slate-400 text-lg">Technologies que j&apos;utilise pour donner vie à mes projets.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div>{renderSkillCategory("Frontend", skills.frontend)}</div>
          <div>{renderSkillCategory("Backend", skills.backend)}</div>
          <div>{renderSkillCategory("Base de données", skills.database)}</div>
        </div>

        {/* AI Tools Section — Full width */}
        <div>
          <h3 className="text-xl font-medium text-slate-300 mb-2 flex items-center">
            <span className="w-8 h-[1px] bg-slate-600 mr-3"></span>
            Intelligence Artificielle — Outils utilisés au quotidien
          </h3>
          <p className="text-slate-500 text-sm mb-6 ml-11">
            J&apos;intègre l&apos;IA comme un co-pilote dans mon workflow de développement : génération de code, débogage, architecture et documentation.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.ai.map((tool: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card p-6 group cursor-default"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-2 rounded-xl"
                    style={{ backgroundColor: `${tool.color}20` }}
                  >
                    <tool.icon className="w-7 h-7" style={{ color: tool.color }} />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{tool.name}</p>
                    <p className="text-blue-400 text-xs font-medium">{tool.level}% maîtrise</p>
                  </div>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1.5 mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                    className="h-1.5 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${tool.color}88, ${tool.color})` }}
                  />
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
