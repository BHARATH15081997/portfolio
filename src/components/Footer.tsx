import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/bharath-p-305235385/",
      color: "#0077B5",
    },
    {
      icon: Github,
      href: "https://github.com/BHARATH15081997",
      color: "#ffffff",
    },
    {
      icon: Mail,
      href: "mailto:bharathdevfrontend@gmail.com",
      color: "#EA4335",
    },
  ];

  return (
    <footer className="relative py-20 border-t border-white/10 overflow-hidden">
      {/* 🔥 SOFT BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-black/40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* NAME */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold gradient-text tracking-wide mb-6"
        >
          Web Weave Studio
        </motion.h2>

        {/* TAGLINE */}
        <p className="text-sm text-gray-400 text-center max-w-md mb-8">
          Frontend Developer • Flutter Developer • Digital Marketer Building
          modern, scalable, and user-friendly applications.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-5 mb-10">
          {socialLinks.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.15 }}
              className="group relative w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300"
            >
              {/* 🔥 GLOW EFFECT */}
              <div
                className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition duration-300"
                style={{ background: s.color }}
              />

              <s.icon
                size={20}
                className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                style={{ color: s.color }}
              />
            </motion.a>
          ))}
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {/* HIRE ME */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-purple-500/30"
            style={{
              background: "linear-gradient(135deg,#7c3aed,#3b82f6)",
            }}
          >
            Hire Me
          </motion.a>

          {/* RESUME */}
          <motion.a
            href="/BHARATH_CV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full text-sm font-semibold border border-white/20 text-white flex items-center gap-2 hover:bg-white/10 transition"
          >
            <Download size={16} /> Download Resume
          </motion.a>
        </div>

        {/* DIVIDER */}
        <div className="w-full max-w-md h-px bg-white/10 mb-6" />

        {/* COPYRIGHT */}
        <p className="text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} Bharath P. All rights reserved.
        </p>
      </div>

      {/* 🔥 FLOATING LIGHTS (SUBTLE) */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
    </footer>
  );
};

export default Footer;
