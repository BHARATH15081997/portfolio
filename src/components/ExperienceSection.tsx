// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { Briefcase } from "lucide-react";

// const responsibilities = [
//   "Developed scalable mobile and web apps",
//   "Integrated Firebase services (Auth, Firestore, Storage)",
//   "Built reusable components and design systems",
//   "Optimized performance and database queries",
//   "Managed Play Store deployments",
// ];

// const ExperienceSection = () => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="experience" className="py-24 md:py-32 relative">
//       <div className="container mx-auto px-6 max-w-3xl" ref={ref}>
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground">
//             Work <span className="gradient-text">Experience</span>
//           </h2>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={inView ? { opacity: 1, x: 0 } : {}}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="relative pl-8 border-l-2 border-primary/30"
//         >
//           {/* Timeline dot */}
//           <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full" style={{ background: "var(--gradient-primary)" }} />

//           <div className="glass rounded-2xl p-8">
//             <div className="flex items-center gap-3 mb-2">
//               <Briefcase className="text-primary" size={20} />
//               <h3 className="font-heading font-bold text-xl text-foreground">
//                 Flutter & Frontend Developer
//               </h3>
//             </div>
//             <p className="text-sm text-primary font-body font-medium mb-1">
//               KMU TechGrid Solutions
//             </p>
//             <p className="text-xs text-muted-foreground font-body mb-6">May 2020 – Present</p>

//             <div className="space-y-3">
//               {responsibilities.map((r, i) => (
//                 <motion.div
//                   key={r}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={inView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
//                   className="flex items-start gap-3"
//                 >
//                   <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
//                   <p className="text-sm text-muted-foreground font-body">{r}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ExperienceSection;
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Globe, Smartphone, Briefcase } from "lucide-react";

// 1. Helper Component for Smartphone Icon
const MobileIcon = ({ className, size }: { className?: string; size?: number }) => (
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

// 2. Updated Data with KMU TechGrid Solutions
const experienceData = [
  {
    role: "Flutter & Mobile Developer",
    company: "KMU TechGrid Solutions",
    period: "2023 – Present",
    description: "Leading mobile innovation by architecting scalable Flutter ecosystems integrated with Firebase.",
    responsibilities: [
      "Developing 'Inspire Packers & Movers' ecosystem (Customer, Partner, and Admin apps).",
      "Implementing Clean Architecture, MVVM, and Repository patterns for production-grade reliability.",
      "Integrated complex Firestore schemas and real-time push notifications via FCM.",
      "Managing full app lifecycles including performance optimization and Play Store deployments."
    ],
    icon: <MobileIcon className="text-indigo-400" size={24} />,
    color: "from-indigo-500 to-cyan-400"
  },
  {
    role: "Frontend & Web Developer",
    company: "KMU TechGrid Solutions",
    period: "2021 – 2023",
    description: "Advanced into modern JavaScript development, focusing on React.js and high-performance web apps.",
    responsibilities: [
      "Built multi-branch educational web platforms with location-specific dynamic content.",
      "Created reusable UI component systems using React, Redux, and Tailwind CSS.",
      "Developed high-converting digital interfaces with a focus on Material UI and performance.",
      "Established robust authentication and database workflows using Firebase services."
    ],
    icon: <Code2 className="text-purple-400" size={24} />,
    color: "from-purple-500 to-pink-500"
  },
  {
    role: "WordPress Developer & SEO Specialist",
    company: "KMU TechGrid Solutions",
    period: "2020 – 2021",
    description: "Started the career journey optimizing web presence and technical SEO for diverse clients.",
    responsibilities: [
      "Engineered custom WordPress themes and optimized site indexing and crawling.",
      "Executed comprehensive technical SEO strategies to improve organic search rankings.",
      "Automated marketing workflows using Mailchimp and Sendinblue for lead generation.",
      "Delivered performance-tuned websites for improved core web vitals and user retention."
    ],
    icon: <Globe className="text-emerald-400" size={24} />,
    color: "from-emerald-500 to-teal-400"
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
            Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Journey</span>
          </h2>
          <p className="text-gray-400 font-light max-w-xl mx-auto italic">
            Growing and evolving within <span className="text-white font-medium">KMU TechGrid Solutions</span>
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent opacity-30" />

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

const TimelineItem = ({ exp, index }: { exp: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`relative flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Timeline Center Dot */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#030712] border-2 border-indigo-500 z-30 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className="w-full md:w-[45%] pl-8 md:pl-0"
      >
        <div className="group relative p-8 rounded-[32px] bg-white/[0.03] border border-white/10 hover:border-white/20 backdrop-blur-xl transition-all duration-500">
          {/* Period Badge */}
          <div className={`inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 bg-gradient-to-r ${exp.color} text-white shadow-lg`}>
            {exp.period}
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
              {exp.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white leading-none tracking-tight">{exp.role}</h3>
              <p className="text-sm text-indigo-400 mt-1 font-medium">{exp.company}</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-6 font-light leading-relaxed">
            {exp.description}
          </p>

          <div className="space-y-3">
            {exp.responsibilities.map((res: string, i: number) => (
              <div key={i} className="flex gap-3 items-start group/item">
                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${exp.color} group-hover/item:scale-150 transition-transform`} />
                <p className="text-xs text-gray-400 leading-relaxed group-hover/item:text-gray-200 transition-colors">{res}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Spacer for desktop layout */}
      <div className="hidden md:block w-[45%]" />
    </div>
  );
};

export default ExperienceSection;