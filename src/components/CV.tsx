"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const roles = [
  { label: "Développeur Full Stack", icon: "💻" },
  { label: "Entrepreneur Technologique", icon: "🚀" },
  { label: "Consultant Marketing Digital", icon: "📈" },
];

const formations = [
  {
    year: "2025",
    title: "Formation Sécurité Informatique",
    org: "Orange Digital Center",
    detail: "Concepts fondamentaux et bases de la sécurité des systèmes et réseaux.",
    cert: "/Formation_Orange_%20ALHASSANE_BANGOURA.pdf",
    color: "#F59E0B",
  },
  {
    year: "2025",
    title: "Formation Développement Mobile",
    org: "Orange Digital Center",
    detail: "Développement d'applications mobiles — pratiques et techniques avancées.",
    cert: "/Formation_Orange_%20ALHASSANE_BANGOURA.pdf",
    color: "#3B82F6",
  },
  {
    year: "2025",
    title: "Certification Réseaux Informatiques",
    org: "CJP — Formation Professionnelle",
    detail: "Protocoles réseau, configurations et bases fondamentales des infrastructures.",
    cert: "/reseau_certificat.pdf",
    color: "#10B981",
  },
  {
    year: "En cours",
    title: "Licence 2 — Informatique",
    org: "Université",
    detail: "Parcours académique en Sciences Informatiques — 2ème année de Licence.",
    cert: null,
    color: "#A855F7",
  },
  {
    year: "2026",
    title: "Hackathon — Université de Labé",
    org: "Université de Labé",
    detail: "Création d'une plateforme de mise en relation entre producteurs et acheteurs locaux pour résoudre les problèmes d'approvisionnement de la ville.",
    cert: null,
    color: "#F59E0B",
  },
  {
    year: "2025",
    title: "Hackathon — Université de Labé",
    org: "Université de Labé",
    detail: "Développement d'une plateforme de signalement des déchets pour proposer une solution écologique à l'insalubrité en Guinée.",
    cert: null,
    color: "#EC4899",
  },
];

const techSkills = [
  { name: "Flutter / Dart", level: 88, color: "#54C5F8" },
  { name: "Next.js / React", level: 78, color: "#61DAFB" },
  { name: "Node.js / Express", level: 65, color: "#68A063" },
  { name: "Supabase / PostgreSQL", level: 82, color: "#3ECF8E" },
  { name: "MySQL", level: 88, color: "#4479A1" },
  { name: "Git & GitHub", level: 85, color: "#F05032" },
  { name: "Spring Boot", level: 20, color: "#6DB33F" },
];

const bizSkills = [
  "Facebook Ads",
  "TikTok Ads",
  "Community Management",
  "Pages Facebook Pro",
  "Branding & Identité",
  "Création de Logos",
  "Design Publicitaire",
  "Stratégie Digitale",
];

const projects = [
  { name: "GuineeTransport", desc: "Plateforme de transport digital", tech: "Flutter · Supabase", emoji: "🚌" },
  { name: "Réservation d'Hôtels", desc: "Plateforme hôtelière — Labé", tech: "Next.js · PostgreSQL", emoji: "🏨" },
  { name: "AIBusiness", desc: "SaaS IA pour entrepreneurs", tech: "Flutter · Groq · Supabase", emoji: "🤖" },
  { name: "AideEtudiant", desc: "Assistant pédagogique IA", tech: "Flutter · Riverpod · Groq", emoji: "🎓" },
  { name: "NOVA GENIX DIGITAL", desc: "ERP Full Stack sur mesure", tech: "Flutter · Node.js · SQLite", emoji: "🏢" },
];

const achievements = [
  { value: "5+", label: "Projets livrés", icon: "📦" },
  { value: "2 ans", label: "Accompagnement cabinets", icon: "🤝" },
  { value: "L2", label: "Licence Informatique", icon: "🎓" },
  { value: "9+", label: "Technologies maîtrisées", icon: "⚡" },
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
export default function CV() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="cv" className="relative py-28 md:py-36 w-full overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-blue-400/60" />
              <p className="text-blue-400 font-semibold text-sm uppercase tracking-[0.2em]">Curriculum Vitae</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Mon <span className="text-gradient">Parcours</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {roles.map((r, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  <span>{r.icon}</span>{r.label}
                </span>
              ))}
            </div>
          </div>

          {/* Download button */}
          <a
            href="/cv.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-shrink-0 flex items-center gap-3 px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-1 self-start md:self-auto"
          >
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Télécharger mon CV
          </a>
        </motion.div>

        {/* ── STATS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {achievements.map((a, i) => (
            <div key={i} className="glass-card p-6 text-center hover:bg-white/10 transition-colors group">
              <div className="text-3xl mb-2">{a.icon}</div>
              <div className="text-3xl md:text-4xl font-black text-white mb-1 group-hover:text-blue-400 transition-colors">{a.value}</div>
              <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">{a.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ── MAIN 2-COL GRID ── */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* LEFT COL — Timeline + Projects */}
          <div className="lg:col-span-3 space-y-8">

            {/* Formation timeline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-base">🎓</span>
                Formation & Certifications
              </h3>

              <div className="relative">
                {/* vertical line */}
                <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/60 via-purple-500/30 to-transparent" />

                <div className="space-y-8">
                  {formations.map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="relative pl-10"
                    >
                      {/* dot */}
                      <div
                        className="absolute left-0 top-1 w-[30px] h-[30px] rounded-full border-2 border-[#0F172A] flex items-center justify-center text-[10px] font-black"
                        style={{ background: f.color, boxShadow: `0 0 12px ${f.color}60` }}
                      >
                        ✓
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <span
                            className="text-[11px] font-bold uppercase tracking-widest mb-1 inline-block"
                            style={{ color: f.color }}
                          >
                            {f.year}
                          </span>
                          <h4 className="text-white font-bold text-base leading-snug mb-1">{f.title}</h4>
                          <p className="text-blue-400 text-sm font-medium mb-2">{f.org}</p>
                          <p className="text-slate-400 text-sm leading-relaxed">{f.detail}</p>
                        </div>
                        {f.cert && (
                          <a
                            href={f.cert}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/25 transition-all"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Certificat
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Projects list */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-base">📁</span>
                Projets Réalisés
              </h3>
              <div className="space-y-3">
                {projects.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/3 hover:bg-white/8 border border-white/5 hover:border-white/15 transition-all group"
                  >
                    <span className="text-2xl">{p.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-bold text-sm group-hover:text-blue-400 transition-colors">{p.name}</p>
                      <p className="text-slate-400 text-xs truncate">{p.desc}</p>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 hidden md:block whitespace-nowrap">{p.tech}</span>
                    <a href="#projects" className="text-slate-600 hover:text-blue-400 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COL — Skills */}
          <div className="lg:col-span-2 space-y-8">

            {/* Tech skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-base">⚙️</span>
                Compétences Techniques
              </h3>
              <div className="space-y-5">
                {techSkills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.07 }}
                  >
                    <div className="flex justify-between mb-1.5">
                      <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-xs font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)` }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.08, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Business skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-base">📊</span>
                Business & Marketing
              </h3>
              <div className="flex flex-wrap gap-2">
                {bizSkills.map((s, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="text-sm font-medium px-3.5 py-2 rounded-xl bg-orange-500/10 text-orange-300 border border-orange-500/20 hover:bg-orange-500/20 transition-colors cursor-default"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative overflow-hidden rounded-2xl p-7 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(37,99,235,0.2) 0%, rgba(99,102,241,0.15) 100%)",
                border: "1px solid rgba(37,99,235,0.25)",
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              <p className="text-4xl mb-3">🤝</p>
              <h4 className="text-white font-bold text-base mb-2">Disponible pour collaboration</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Freelance, projet de startup ou emploi — discutons de votre besoin.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-blue-600/25 hover:-translate-y-0.5"
              >
                Me contacter
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
