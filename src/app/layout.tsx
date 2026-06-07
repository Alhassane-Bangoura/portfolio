import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Alhassane Bangoura | Développeur Full Stack & Entrepreneur Technologique",
  description: "Portfolio de Alhassane Bangoura, Développeur Full Stack et Entrepreneur Technologique créant des solutions adaptées aux réalités africaines.",
  keywords: ["Alhassane Bangoura", "Portfolio", "Développeur Full Stack", "Entrepreneur Technologique", "Guinée", "Afrique", "React", "Next.js", "Flutter"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#0F172A] text-white selection:bg-blue-500/30`}>
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0F172A] to-[#0F172A]"></div>
        <div className="fixed top-0 left-0 right-0 h-[500px] bg-blue-600/10 blur-[120px] rounded-full z-[-1] pointer-events-none transform -translate-y-1/2"></div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
