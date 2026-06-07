"use client";

import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} {portfolioData.hero.name}. Tous droits réservés.
        </p>
        <p className="mt-2 md:mt-0">
          Conçu et développé avec <span className="text-blue-500">♥</span> et Next.js
        </p>
      </div>
    </footer>
  );
}
