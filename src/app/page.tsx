"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import CV from "@/components/CV";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Hero />
      <About />
      <Stats />
      <Services />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <CV />
      <Contact />
    </main>
  );
}
