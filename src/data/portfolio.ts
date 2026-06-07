import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiFlutter, 
  SiNodedotjs, SiExpress, SiSupabase, SiPostgresql, SiMysql,
  SiOpenai, SiGooglegemini, SiSpringboot
} from "react-icons/si";
import { FaLinkedin, FaGithub, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export const portfolioData = {
  hero: {
    name: "ALHASSANE BANGOURA",
    title1: "Développeur Full Stack",
    title2: "& Entrepreneur Technologique",
    description: "Je construis des solutions numériques innovantes adaptées aux réalités africaines, alliant performance technique et impact entrepreneurial.",
    resumeLink: "#"
  },
  about: {
    title: "À propos de moi",
    description: "Développeur Full Stack spécialisé dans la création d'applications web et mobiles performantes, je suis avant tout un entrepreneur digital. J'ai accompagné 2 cabinets pendant 2 ans en leur apportant des solutions numériques concrètes. Alliant développement technique et vision business, je conçois des produits qui génèrent de la valeur réelle — pour mes clients, mes partenaires et le marché africain.",
    highlights: [
      "Développement Web & Mobile Full Stack",
      "Entrepreneur Digital & Vision Business",
      "2 ans d'accompagnement de cabinets professionnels"
    ]
  },
  skills: {
    frontend: [
      { name: "HTML", icon: SiReact, color: "#E34F26", level: 90 },
      { name: "CSS", icon: SiTailwindcss, color: "#1572B6", level: 85 },
      { name: "JavaScript", icon: SiNextdotjs, color: "#F7DF1E", level: 80 },
      { name: "Java", icon: SiFlutter, color: "#007396", level: 70 },
      { name: "React", icon: SiReact, color: "#61DAFB", level: 75 }
    ],
    backend: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 30 },
      { name: "Express.js", icon: SiExpress, color: "#888888", level: 50 },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", level: 30 },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", level: 20 }
    ],
    database: [
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", level: 80 },
      { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 90 },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: 50 },
      { name: "MongoDB", icon: SiNextdotjs, color: "#47A248", level: 20 }
    ],
    ai: [
      { name: "ChatGPT", icon: SiOpenai, color: "#10A37F", level: 90, desc: "Génération de code, débogage & architecture" },
      { name: "Gemini", icon: SiGooglegemini, color: "#4285F4", level: 75, desc: "Recherche, synthèse & assistance développement" },
      { name: "Antigravity", icon: SiOpenai, color: "#8B5CF6", level: 88, desc: "Éditeur de code IA — génération & complétion avancée" },
      { name: "Cursor", icon: SiOpenai, color: "#00D4FF", level: 85, desc: "Éditeur IA — refactoring, débogage & pair coding" }
    ]
  },
  projects: [
    {
      title: "GuineeTransport",
      description: "Une plateforme innovante pour faciliter et digitaliser le secteur du transport en Guinée. Optimisation des trajets, suivi en temps réel et réservation simplifiée. Développé en Flutter (langage Dart) pour l'application, avec Supabase pour la partie Backend et Base de données.",
      tech: ["Flutter", "Dart", "Supabase"],
      image: "/image guinee transport.jpeg",
      github: "https://github.com/Alhassane-Bangoura/transportGuinee2",
      demo: "/Demo_Guinee_transport.mp4"
    },
    {
      title: "Réservation d'hôtels (Labé)",
      description: "Plateforme de réservation hôtelière dédiée à la région de Labé (Projet en cours de conception). Architecture PERN modernisée avec un frontend Next.js interactif (Zustand, Framer Motion), une API Node.js/Express robuste et une base de données PostgreSQL structurée via Supabase.",
      tech: ["Next.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
      image: "/image_hotel.png",
      github: "https://github.com/Alhassane-Bangoura/hotel",
      demo: "https://hotel-self-seven.vercel.app/"
    },
    {
      title: "AIBusiness",
      description: "Boîte à outils SaaS Freemium propulsée par l'IA, conçue pour les entrepreneurs et créateurs de contenu. Génération d'idées de business, de posts marketing, de scripts TikTok et module Incubateur pour faire mûrir des projets. Modèle économique basé sur un système de crédits (500 offerts à l'inscription). Architecture Flutter multiplateforme (iOS, Android, Web) avec Supabase (Auth, PostgreSQL, RLS).",
      tech: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
      image: "/AIBusiness_image.png",
      mobile: true,
      github: "https://github.com/Alhassane-Bangoura/tout_en_un",
      demo: "/AIdemo.webm"
    },
    {
      title: "AideEtudiant",
      description: "Assistant pédagogique intelligent multiplateforme pour étudiants. Intègre l'IA IA-ALGE propulsée par Groq (llama-3.1-8b) pour des réponses ultra-rapides. Comprend la gestion complète des cours, des tâches, un calendrier et un tableau de bord. Architecture moderne 100% responsive avec Flutter, Riverpod, GoRouter et un backend sécurisé sur Supabase (PostgreSQL).",
      tech: ["Flutter", "Riverpod", "Supabase", "Groq API (Llama 3)"],
      image: "/aide_etudiant_image.png", // Pense à mettre l'image dans le dossier public/
      mobile: true,
      github: "https://github.com/Alhassane-Bangoura/monprojejetaideetudiant",
      demo: "#"
    },
    {
      title: "NOVA GENIX DIGITAL",
      description: "Système de gestion ERP Full-Stack sur-mesure pour entreprise. Architecture modulaire intégrant la gestion des stocks, comptabilité, analytics et traçabilité avancée. Frontend multiplateforme (orienté Desktop) développé en Flutter avec génération de PDF et Data Visualization. Backend robuste Node.js/Express couplé à une base de données SQLite.",
      tech: ["Flutter", "Node.js", "Express", "SQLite"],
      image: "/nova.png",
      github: "https://github.com/Alhassane-Bangoura/nova",
      demo: "#"
    }
  ],
  experience: [
    {
      role: "Formation en Développement Mobile",
      company: "Orange Digital Center",
      period: "01 au 05 Décembre 2025",
      description: "Formation pratique intensive axée sur le développement d'applications mobiles.",
      certificateLink: "/Formation_Orange_%20ALHASSANE_BANGOURA.pdf"
    },
    {
      role: "Formation sur la Sécurité Informatique",
      company: "Orange Digital Center",
      period: "17 au 19 Juin 2025",
      description: "Apprentissage des concepts fondamentaux et des bases de la sécurité informatique.",
      certificateLink: "/Formation_Orange_%20ALHASSANE_BANGOURA.pdf"
    },
    {
      role: "Certification Réseaux Informatiques",
      company: "Formation Professionnelle",
      period: "Récemment",
      description: "Apprentissage des bases fondamentales des réseaux informatiques, protocoles et configurations d'équipements. Organisé par le CJP.",
      certificateLink: "/reseau_certificat.pdf"
    }
  ],
  stats: [
    { value: "L2", label: "2ème année de Licence" },
    { value: "5+", label: "Projets réalisés" },
    { value: "9+", label: "Technologies maîtrisées" },
    { value: "En cours", label: "Startup technologique" }
  ],
  contact: {
    email: "alha6204@gmail.com",
    whatsapp: "+22462046582",
    linkedin: "https://www.linkedin.com/in/alhassane-bangoura-788134356",
    github: "https://github.com/Alhassane-Bangoura",
    facebook: "https://www.facebook.com/alhassane.bangoura.533661?locale=fr_FR",
    socials: [
      { name: "Email", icon: FiMail, link: "mailto:alha6204@gmail.com" },
      { name: "WhatsApp", icon: FaWhatsapp, link: "https://wa.me/22462046582" },
      { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/alhassane.bangoura.533661?locale=fr_FR" },
      { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/alhassane-bangoura-788134356" },
      { name: "GitHub", icon: FaGithub, link: "https://github.com/Alhassane-Bangoura" }
    ]
  }
};
