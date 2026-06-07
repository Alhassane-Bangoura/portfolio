"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FiSend, FiUser, FiMail, FiMessageSquare, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

export default function Contact() {
  const { contact } = portfolioData;
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        "service_5rqj56v",
        "template_f1rrmkg",
        {
          name: form.name,
          email: form.email,
          message: form.message,
          title: `Message de ${form.name} via le Portfolio`,
          time: new Date().toLocaleString(),
        },
        "r2ysb3Ql3RDUSPNAk"
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="w-full py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-blue-400 font-medium tracking-widest text-sm uppercase mb-4 block">
            Quelle est la prochaine étape ?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Créons ensemble.</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Une idée de projet, une opportunité ou juste envie d&apos;échanger ? Envoyez-moi un message, je vous réponds sous 24h.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left — Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-all"
                />
              </div>

              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Votre email"
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-all"
                />
              </div>

              <div className="relative">
                <FiMessageSquare className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Votre message..."
                  required
                  rows={5}
                  className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-blue-500/25"
              >
                {status === "sending" ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    Envoyer le message
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400"
                  >
                    <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Message envoyé ! Je vous réponds bientôt.</span>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
                  >
                    <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Erreur d&apos;envoi. Contactez-moi directement sur WhatsApp.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Right — Infos + réseaux */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <p className="text-slate-400 text-sm uppercase tracking-widest mb-2">Email direct</p>
              <a href={`mailto:${contact.email}`} className="text-white font-medium hover:text-blue-400 transition-colors">
                {contact.email}
              </a>
            </div>
            <div className="glass-card p-6">
              <p className="text-slate-400 text-sm uppercase tracking-widest mb-2">WhatsApp</p>
              <a href={`https://wa.me/22462046582`} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-green-400 transition-colors">
                +224 620 46 5582
              </a>
            </div>

            <div className="glass-card p-6">
              <p className="text-slate-400 text-sm uppercase tracking-widest mb-4">Retrouvez-moi sur</p>
              <div className="flex flex-wrap gap-3">
                {contact.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-3 glass-card rounded-xl text-slate-400 hover:text-white hover:-translate-y-1 transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
