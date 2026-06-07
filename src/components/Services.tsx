"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Développement Web & Applications",
    shortTitle: "Dev Web & Mobile",
    description:
      "Sites web professionnels, applications mobiles Flutter, plateformes de réservation et outils de gestion sur mesure. Code propre, performances optimales.",
    items: ["Applications Flutter", "Sites Web Pro", "Outils de gestion", "APIs REST"],
    accent: "#3B82F6",
    accentLight: "rgba(59,130,246,0.12)",
    accentBorder: "rgba(59,130,246,0.25)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="4" y="8" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M13 19l4 4 10-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 32h32" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M15 32l2.5 4M25 32l-2.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Création de Pages Facebook Professionnelles",
    shortTitle: "Pages Facebook Pro",
    description:
      "Configuration complète, optimisation du profil, paramétrage professionnel et intégration WhatsApp Business pour une présence en ligne irréprochable.",
    items: ["Setup complet", "WhatsApp Business", "Optimisation SEO", "Paramétrage avancé"],
    accent: "#6366F1",
    accentLight: "rgba(99,102,241,0.12)",
    accentBorder: "rgba(99,102,241,0.25)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.8" />
        <path d="M22 28v-8h3l0.5-3H22v-2c0-0.8 0.4-1.5 1.5-1.5H26V11s-1.3-0.2-2.6-0.2c-2.6 0-4.4 1.6-4.4 4.5V17h-3v3h3v8h3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Création de Logos & Identité Visuelle",
    shortTitle: "Branding & Identité",
    description:
      "Logos uniques, charte graphique, couleurs de marque et cartes de visite. Une identité visuelle forte qui inspire confiance et vous différencie.",
    items: ["Logo professionnel", "Charte graphique", "Carte de visite", "Image de marque"],
    accent: "#A855F7",
    accentLight: "rgba(168,85,247,0.12)",
    accentBorder: "rgba(168,85,247,0.25)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M20 6v4M20 30v4M6 20h4M30 20h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M10.1 10.1l2.8 2.8M27.1 27.1l2.8 2.8M10.1 29.9l2.8-2.8M27.1 12.9l2.8-2.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Affiches Publicitaires & Visuels Marketing",
    shortTitle: "Visuels Marketing",
    description:
      "Affiches promotionnelles, flyers digitaux, publications réseaux sociaux et bannières qui captent l'attention et incitent à l'action.",
    items: ["Affiches promo", "Flyers digitaux", "Posts réseaux sociaux", "Bannières"],
    accent: "#F59E0B",
    accentLight: "rgba(245,158,11,0.12)",
    accentBorder: "rgba(245,158,11,0.25)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="4" y="6" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="14" cy="15" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 26l9-7 7 5.5 5-4 11 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Facebook Ads & TikTok Ads",
    shortTitle: "Publicité Digitale",
    description:
      "Campagnes publicitaires ciblées sur Facebook et TikTok. Ciblage précis, optimisation du budget et génération de prospects qualifiés pour booster vos ventes.",
    items: ["Campagnes Facebook", "TikTok Ads", "Ciblage audience", "Optimisation ROI"],
    accent: "#EF4444",
    accentLight: "rgba(239,68,68,0.12)",
    accentBorder: "rgba(239,68,68,0.25)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M8 28l7-10 5 6 4-5 8 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 12l2 2-2 2M32 14H24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Community Management",
    shortTitle: "Community Manager",
    description:
      "Gestion quotidienne de vos pages Facebook et TikTok. Planification des publications, réponses aux messages et développement actif de votre communauté.",
    items: ["Gestion Facebook", "Gestion TikTok", "Planning éditorial", "Engagement"],
    accent: "#10B981",
    accentLight: "rgba(16,185,129,0.12)",
    accentBorder: "rgba(16,185,129,0.25)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M8 30V10a2 2 0 012-2h20a2 2 0 012 2v14a2 2 0 01-2 2H14L8 30z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M14 16h12M14 21h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "07",
    title: "Comptes TikTok Monétisables",
    shortTitle: "TikTok Monétisation",
    description:
      "Création, paramétrage et stratégie de croissance pour votre compte TikTok. Optimisation du profil et accompagnement vers la monétisation.",
    items: ["Création compte", "Stratégie contenu", "Croissance abonnés", "Monétisation"],
    accent: "#EC4899",
    accentLight: "rgba(236,72,153,0.12)",
    accentBorder: "rgba(236,72,153,0.25)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M24 8c0 5 3.5 7.5 7 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M24 8v18a6 6 0 11-6-6c.7 0 1.4.1 2 .3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "08",
    title: "Accompagnement Digital des Entreprises",
    shortTitle: "Accompagnement Digital",
    description:
      "Transformation digitale clé en main pour hôtels, restaurants, boutiques, écoles, PME et entrepreneurs. Je suis votre partenaire digital de confiance.",
    items: ["Hôtels & Restaurants", "Boutiques", "PME & Startups", "Entrepreneurs"],
    accent: "#06B6D4",
    accentLight: "rgba(6,182,212,0.12)",
    accentBorder: "rgba(6,182,212,0.25)",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M6 34V18l14-12 14 12v16" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <rect x="14" y="24" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M20 24v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-24 md:py-36 w-full overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-blue-400/60" />
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-[0.2em]">
              Comment je peux vous aider
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Mes <span className="text-gradient">Services</span>
            </h2>
            <p className="text-slate-400 max-w-md text-base leading-relaxed md:text-right">
              Du développement d'applications à la gestion de votre présence digitale — votre succès en ligne commence ici.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col rounded-2xl overflow-hidden cursor-default"
              style={{
                background: `linear-gradient(145deg, ${service.accentLight}, rgba(255,255,255,0.02))`,
                border: `1px solid ${service.accentBorder}`,
              }}
            >
              {/* Top accent line */}
              <div
                className="h-[2px] w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${service.accent}, transparent)` }}
              />

              <div className="flex flex-col flex-1 p-6">
                {/* Number + Icon row */}
                <div className="flex items-start justify-between mb-5">
                  <span
                    className="text-5xl font-black leading-none select-none"
                    style={{ color: service.accent, opacity: 0.15 }}
                  >
                    {service.number}
                  </span>
                  <div
                    className="p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                    style={{ color: service.accent, background: service.accentLight }}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-[15px] leading-snug mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-[13px] leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.items.map((item, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                      style={{
                        color: service.accent,
                        background: service.accentLight,
                        border: `1px solid ${service.accentBorder}`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="group/btn flex items-center justify-between w-full px-4 py-3 rounded-xl text-[13px] font-semibold transition-all duration-300"
                  style={{
                    color: service.accent,
                    background: service.accentLight,
                    border: `1px solid ${service.accentBorder}`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = service.accent;
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = service.accentLight;
                    (e.currentTarget as HTMLElement).style.color = service.accent;
                  }}
                >
                  <span>Demander ce service</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  boxShadow: `inset 0 0 40px ${service.accentLight}`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 relative overflow-hidden rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(99,102,241,0.1) 50%, rgba(168,85,247,0.1) 100%)",
            border: "1px solid rgba(37,99,235,0.2)",
          }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">Prêt à démarrer ?</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Votre projet mérite le meilleur.
            </h3>
            <p className="text-slate-400 text-sm max-w-lg">
              Discutons ensemble de vos besoins et construisons quelque chose qui fait vraiment la différence pour votre entreprise.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 flex items-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            Explorer mes services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
