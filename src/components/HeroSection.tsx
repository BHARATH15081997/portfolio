import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Code2, Rocket } from "lucide-react";

const phrases = [
  "I build scalable mobile apps",
  "High-performance web platforms",
  "High-converting digital campaigns",
];

const HeroSection = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] pt-20">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-10 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: "radial-gradient(circle, #6366f1, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[100px]"
          style={{
            background: "radial-gradient(circle, #2dd4bf, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* --- LEFT CONTENT --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* --- FLOATING STATUS BADGE --- */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-white/80 uppercase tracking-widest">
                Available for Hire immediately joiner
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
              Bharath{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                P
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light max-w-xl leading-relaxed">
              Crafting{" "}
              <span className="text-white font-medium">
                next-gen mobile experiences
              </span>{" "}
              and high-performance digital ecosystems.
            </p>

            <div className="h-10 flex items-center mb-12 border-l-2 border-indigo-500 pl-6">
              <p className="text-lg text-indigo-300/90 font-mono tracking-tight">
                {text}
                <span className="inline-block w-[2px] h-5 bg-indigo-400 ml-2 animate-pulse" />
              </p>
            </div>

            <div className="flex flex-wrap gap-5">
              <motion.button
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("projects")}
                className="group relative px-8 py-4 bg-indigo-600 text-white rounded-2xl font-semibold overflow-hidden transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  Explore Work <ExternalLink size={18} />
                </span>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  background: "rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border border-white/10 text-white rounded-2xl font-semibold backdrop-blur-sm transition-all"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>

          {/* --- RIGHT CONTENT: PHOTO & GLOW --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[450px] h-[450px] md:w-[600px] md:h-[600px] rounded-full opacity-30 blur-[80px]"
              style={{
                background:
                  "conic-gradient(from 0deg, #6366f1, #2dd4bf, #a855f7, #6366f1)",
              }}
            />

            <div className="absolute w-[340px] h-[340px] md:w-[520px] md:h-[520px] rounded-full border border-white/10 backdrop-blur-[2px] z-10 animate-pulse" />

            <div className="relative w-72 h-[450px] md:w-[420px] md:h-[540px] z-20 group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-[40px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative h-full w-full rounded-[40px] overflow-hidden border border-white/20 shadow-2xl bg-[#0a0a0a]">
                <img
                  src="/BHARATH_P.jpg"
                  alt="Bharath P Portrait"
                  className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-6 -right-6 p-4 glass rounded-3xl border border-white/20 shadow-xl z-30"
              >
                <Code2 className="text-cyan-400" size={28} />
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 -left-10 p-4 glass rounded-3xl border border-white/20 shadow-xl z-30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
                    <Rocket className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
                      Experience
                    </p>
                    <p className="text-sm text-white font-bold italic">
                      5.8+ Years
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
          Scroll
        </span>
        <ArrowDown className="text-gray-600" size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
