import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  MapPin,
  ShoppingCart,
  Package,
  GraduationCap,
  Play,
  Eye,
  ExternalLink,
  X,
} from "lucide-react";

// IMAGES
import projectInspire from "@/assets/project-inspire.jpg";
import projectMoboom from "@/assets/project-moboom.jpg";
import projectInventory from "@/assets/project-inventory.jpg";
import projectEducation from "@/assets/project-education.jpg";
import projectAdmin from "@/assets/inspire-adminpanel.png";
import projectTravel from "@/assets/traveler.png";
import projectPortfolio from "@/assets/portfolio.png";
import projectInspireWeb from "@/assets/inspire-website.png";

// const [filter, setFilter] = useState("ALL");
const projects = [
  {
    icon: MapPin,
    title: "Inspire Packers & Movers",
    tag: "LIVE PROJECT",
    desc: "Complete logistics ecosystem with booking & tracking.",
    features: [
      "Real-time booking",
      "Live tracking",
      "Google Maps",
      "Role-based auth",
    ],
    tech: ["Flutter", "React.js", "Firebase"],
    image: projectInspire,
    playStore:
      "https://play.google.com/store/apps/details?id=com.inspire.customer",
    website: "https://inspire-762dd.web.app/",
  },
  {
    icon: ShoppingCart,
    title: "MoBooM eCommerce",
    tag: "WEB PLATFORM",
    desc: "Complete eCommerce solution.",
    features: ["Authentication", "Cart", "Orders", "Search"],
    tech: ["React.js", "Firebase"],
    image: projectMoboom,
  },
  {
    icon: Package,
    title: "Inventory System",
    tag: "MOBILE APP",
    desc: "Inventory tracking system.",
    features: ["Barcode", "Stock alerts", "Dashboard"],
    tech: ["Flutter", "Firebase"],
    image: projectInventory,
  },
  {
    icon: GraduationCap,
    title: "Educational Website",
    tag: "WEB PLATFORM",
    desc: "SEO optimized website.",
    features: ["SEO", "Fast", "Dynamic pages"],
    tech: ["React.js", "Vite"],
    image: projectEducation,
  },
  {
    icon: ShoppingCart,
    title: "Admin Dashboard",
    tag: "DASHBOARD",
    desc: "Analytics dashboard.",
    features: ["Charts", "Users", "Roles"],
    tech: ["React", "MUI"],
    image: projectAdmin,
    website: "https://inspire-762dd.web.app/",
  },
  {
    icon: MapPin,
    title: "Booking Website",
    tag: "WEB APP",
    desc: "Booking system.",
    features: ["Booking", "Tracking", "Notifications"],
    tech: ["React", "Firebase"],
    image: projectInspireWeb,
    website: "https://inspire-762dd.web.app/",
  },
  {
    icon: Package,
    title: "Travel Website",
    tag: "WEBSITE",
    desc: "Travel UI platform.",
    features: ["Hotels", "Flights"],
    tech: ["HTML", "CSS"],
    image: projectTravel,
  },
  {
    icon: GraduationCap,
    title: "Portfolio Website",
    tag: "WEBSITE",
    desc: "Modern portfolio.",
    features: ["Projects", "Skills"],
    tech: ["React", "Tailwind"],
    image: projectPortfolio,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [selected, setSelected] = useState<any>(null);
  const [filter, setFilter] = useState("ALL");
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-foreground font-heading text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0f172a]/80 to-[#020617] shadow-xl group"
            >
              {/* IMAGE */}
              <div className="h-56 relative overflow-hidden">
                <img
                  src={project.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />

                {/* FIXED OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

                <span className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-purple-600 text-white">
                  {project.tag}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-300 mb-4">{project.desc}</p>

                {/* FEATURES */}
                <ul className="mb-4 space-y-1">
                  {project.features.map((f: string) => (
                    <li key={f} className="text-xs text-gray-400">
                      • {f}
                    </li>
                  ))}
                </ul>

                {/* BUTTONS */}
                <div className="flex gap-3 flex-wrap">
                  {project.playStore && (
                    <a
                      href={project.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 px-4 py-2 rounded bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs flex items-center gap-2"
                    >
                      <Play size={14} /> Play Store
                    </a>
                  )}

                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 px-4 py-2 border text-white text-xs rounded flex items-center gap-2"
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  )}

                  <button
                    onClick={() => setSelected(project)}
                    className="relative z-10 px-4 py-2 border text-purple-400 text-xs rounded flex items-center gap-2"
                  >
                    <Eye size={14} /> Details
                  </button>
                </div>
              </div>

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl bg-purple-500/10 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#020617] p-6 rounded-xl w-[90%] max-w-lg border border-white/10"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg text-white font-bold">
                  {selected.title}
                </h3>
                <button onClick={() => setSelected(null)}>
                  <X />
                </button>
              </div>

              <img src={selected.image} className="rounded mb-4" />

              <p className="text-gray-300 mb-4">{selected.desc}</p>

              <ul className="text-sm text-gray-400 space-y-1">
                {selected.features.map((f: string) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <div className="flex justify-center gap-4 mb-10">
//   {["ALL", "WEB", "MOBILE", "DASHBOARD"].map((f) => (
//     <button
//       key={f}
//       onClick={() => setFilter(f)}
//       className={`px-4 py-2 rounded-full text-sm ${
//         filter === f
//           ? "bg-purple-600 text-white"
//           : "bg-white/5 text-gray-400"
//       }`}
//     >
//       {f}
//     </button>
//   ))}
// </div> */}
    </section>
  );
};

export default ProjectsSection;
