import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Globe } from "lucide-react";

// Mobile Icon SVG
const MobileIcon = ({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <line x1="12" x2="12.01" y1="18" y2="18" />
  </svg>
);

// DATA
const experienceData = [
  {
    role: "Flutter & Mobile Developer",
    company: "Bizturn Technologies",
    period: "2023 – Present",
    description:
      "Leading mobile innovation by architecting scalable Flutter ecosystems integrated with Firebase.",
    responsibilities: [
      "Developing Inspire Packers & Movers ecosystem (Customer, Partner, Admin apps)",
      "Clean Architecture & MVVM implementation",
      "Firestore real-time database & FCM push notifications",
      "Play Store deployment & performance optimization",
    ],
    icon: <MobileIcon className="text-indigo-400" size={24} />,
    color: "from-indigo-500 to-cyan-400",
  },
  {
    role: "Frontend Developer",
    company: "Bizturn Technologies",
    period: "2021 – 2023",
    description:
      "Focused on modern React development and scalable web applications.",
    responsibilities: [
      "Built multi-branch dynamic websites",
      "Reusable UI components using React & Tailwind",
      "Authentication & Firebase integration",
      "High-performance UI optimization",
    ],
    icon: <Code2 className="text-purple-400" size={24} />,
    color: "from-purple-500 to-pink-500",
  },
  {
    role: "SEO & WordPress Developer",
    company: "Bizturn Technologies",
    period: "2020 – 2021",
    description:
      "Started career with SEO optimization and WordPress development.",
    responsibilities: [
      "SEO optimization & ranking improvements",
      "Custom WordPress development",
      "Email marketing automation",
      "Performance optimization",
    ],
    icon: <Globe className="text-emerald-400" size={24} />,
    color: "from-emerald-500 to-teal-400",
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-[#030712] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Career{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Journey
            </span>
          </h2>
        </motion.div>

        {/* TIMELINE */}
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-indigo-500 to-transparent opacity-30" />

          <div className="space-y-16">
            {experienceData.map((exp, index) => (
              <TimelineItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ exp, index }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* DOT */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-indigo-500 z-30" />

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full md:w-[45%] pl-8 md:pl-0"
      >
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-white/20 transition">

          {/* PERIOD */}
          <div className={`mb-4 text-xs font-bold px-3 py-1 rounded-full inline-block bg-gradient-to-r ${exp.color}`}>
            {exp.period}
          </div>

          {/* HEADER */}
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/10 rounded-xl">{exp.icon}</div>

            <div>
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>

              {/* 🔥 COMPANY WITH LOGO */}
              <div className="flex items-center gap-2 mt-1">
                <img
                  src="/bizturn-logo.png"
                  alt="Bizturn"
                  className="w-7 h-7 object-contain"
                />
                <span className="text-sm text-indigo-400 font-medium">
                  {exp.company}
                </span>
              </div>
            </div>
          </div>

          {/* DESC */}
          <p className="text-gray-400 text-sm mb-4">{exp.description}</p>

          {/* RESPONSIBILITIES */}
          <ul className="space-y-2">
            {exp.responsibilities.map((r: string, i: number) => (
              <li key={i} className="text-xs text-gray-300 flex gap-2">
                <span className={`w-2 h-2 mt-1 rounded-full bg-gradient-to-r ${exp.color}`} />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <div className="hidden md:block w-[45%]" />
    </div>
  );
};

export default ExperienceSection;
