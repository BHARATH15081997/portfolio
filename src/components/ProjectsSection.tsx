// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { ExternalLink, MapPin, ShoppingCart, Package, GraduationCap, Play, Eye } from "lucide-react";
// import projectInspire from "@/assets/project-inspire.jpg";
// import projectMoboom from "@/assets/project-moboom.jpg";
// import projectInventory from "@/assets/project-inventory.jpg";
// import projectEducation from "@/assets/project-education.jpg";

// const projects = [
//   {
//     icon: MapPin,
//     title: "Inspire Packers & Movers",
//     tag: "LIVE PROJECT",
//     desc: "Complete logistics ecosystem including Customer App, Partner App, Admin Dashboard, and Web Platform.",
//     features: ["Real-time booking", "Google Maps integration", "Live tracking", "Role-based auth", "Firebase real-time sync"],
//     tech: ["Flutter", "React.js", "Firebase", "Firestore", "Google Maps API"],
//     image: projectInspire,
//     playStoreUrl: "https://play.google.com/store/apps/details?id=com.inspire.customer&pli=1",
//     hasDetails: true,
//   },
//   {
//     icon: ShoppingCart,
//     title: "MoBooM eCommerce",
//     tag: "WEB PLATFORM",
//     desc: "Full-featured eCommerce platform with authentication, product listing, cart system, and order management.",
//     features: ["Secure authentication", "Product filtering & search", "Cart & checkout", "Performance optimized"],
//     tech: ["React.js", "Firebase", "REST APIs"],
//     image: projectMoboom,
//   },
//   {
//     icon: Package,
//     title: "Inventory Management System",
//     tag: "MOBILE APP",
//     desc: "Multi-role inventory system for managing stock and operations with barcode scanning.",
//     features: ["Barcode scanning", "Role-based dashboards", "Automated stock alerts", "Real-time updates"],
//     tech: ["Flutter", "Firebase"],
//     image: projectInventory,
//   },
//   {
//     icon: GraduationCap,
//     title: "Multi-Branch Educational Website",
//     tag: "WEB PLATFORM",
//     desc: "Scalable web platform for multiple branch locations with SEO optimization.",
//     features: ["Branch content management", "Location-based pages", "SEO optimized", "Fast loading"],
//     tech: ["React.js", "Vite", "SEO Optimization"],
//     image: projectEducation,
//   },
// ];

// const ProjectsSection = () => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="projects" className="py-24 md:py-32 relative">
//       <div className="container mx-auto px-6" ref={ref}>
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground">
//             Featured <span className="gradient-text">Projects</span>
//           </h2>
//           <p className="text-muted-foreground font-body max-w-xl mx-auto">
//             Real-world applications built with modern technologies.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, i) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 40 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: i * 0.15, duration: 0.5 }}
//               whileHover={{ y: -8, transition: { duration: 0.3 } }}
//               className="glass rounded-2xl overflow-hidden group relative"
//             >
//               {/* Banner Image with gradient overlay */}
//               <div className="h-56 relative overflow-hidden">
//                 <motion.img
//                   src={project.image}
//                   alt={project.title}
//                   loading="lazy"
//                   width={800}
//                   height={512}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 {/* Gradient overlay */}
//                 <div
//                   className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-500"
//                   style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.8), hsl(280 80% 40% / 0.8))" }}
//                 />
//                 {/* Glow effect on hover */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl" style={{ background: "var(--gradient-primary)" }} />

//                 {/* Tag badge */}
//                 <div className="absolute top-4 left-4 z-10">
//                   <span className="text-[10px] font-heading uppercase tracking-widest px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground font-semibold backdrop-blur-sm shadow-lg">
//                     {project.tag}
//                   </span>
//                 </div>

//                 {/* Centered icon */}
//                 <div className="absolute inset-0 flex items-center justify-center z-10">
//                   <motion.div
//                     className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-2xl"
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                   >
//                     <project.icon className="text-white" size={28} strokeWidth={1.5} />
//                   </motion.div>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="font-heading font-bold text-xl text-foreground mb-2">{project.title}</h3>
//                 <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">{project.desc}</p>

//                 <div className="space-y-1.5 mb-5">
//                   {project.features.map((f) => (
//                     <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground font-body">
//                       <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
//                       {f}
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex flex-wrap gap-1.5 mb-5">
//                   {project.tech.map((t) => (
//                     <span
//                       key={t}
//                       className="text-[10px] font-body px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/50"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Action buttons */}
//                 <div className="flex items-center gap-3">
//                   {project.playStoreUrl && (
//                     <motion.a
//                       href={project.playStoreUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-heading font-semibold text-primary-foreground"
//                       style={{ background: "var(--gradient-primary)" }}
//                     >
//                       <Play size={14} /> Play Store
//                     </motion.a>
//                   )}
//                   {project.hasDetails && (
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-heading font-semibold border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
//                     >
//                       <Eye size={14} /> View Details
//                     </motion.button>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;

// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import {
//   ExternalLink,
//   MapPin,
//   ShoppingCart,
//   Package,
//   GraduationCap,
//   Play,
//   Eye,
// } from "lucide-react";
// import projectInspire from "@/assets/project-inspire.jpg";
// import projectMoboom from "@/assets/project-moboom.jpg";
// import projectInventory from "@/assets/project-inventory.jpg";
// import projectEducation from "@/assets/project-education.jpg";
// import projectAdmin from "@src/assets/project-admin.jpg";
// import projectTravel from "@ src/assets/project-travel.jpg";
// import projectPortfolio from "@ src/assets/project-portfolio.jpg";
// import projectinspireWeb from "@ src/assets/project-inspire-web.jpg";

// const projects = [
//   {
//     icon: MapPin,
//     title: "Inspire Packers & Movers",
//     tag: "LIVE PROJECT",
//     desc: "Complete logistics ecosystem including Customer App, Partner App, Admin Dashboard, and Web Platform.",
//     features: [
//       "Real-time booking",
//       "Google Maps integration",
//       "Live tracking",
//       "Role-based auth",
//       "Firebase real-time sync",
//     ],
//     tech: ["Flutter", "React.js", "Firebase", "Firestore", "Google Maps API"],
//     image: projectInspire,
//     playStoreUrl:
//       "https://play.google.com/store/apps/details?id=com.inspire.customer&pli=1",
//     hasDetails: true,
//   },
//   {
//     icon: ShoppingCart,
//     title: "MoBooM eCommerce",
//     tag: "WEB PLATFORM",
//     desc: "Full-featured eCommerce platform with authentication, product listing, cart system, and order management.",
//     features: [
//       "Secure authentication",
//       "Product filtering & search",
//       "Cart & checkout",
//       "Performance optimized",
//     ],
//     tech: ["React.js", "Firebase", "REST APIs"],
//     image: projectMoboom,
//   },
//   {
//     icon: Package,
//     title: "Inventory Management System",
//     tag: "MOBILE APP",
//     desc: "Multi-role inventory system for managing stock and operations with barcode scanning.",
//     features: [
//       "Barcode scanning",
//       "Role-based dashboards",
//       "Automated stock alerts",
//       "Real-time updates",
//     ],
//     tech: ["Flutter", "Firebase"],
//     image: projectInventory,
//   },
//   {
//     icon: GraduationCap,
//     title: "Multi-Branch Educational Website",
//     tag: "WEB PLATFORM",
//     desc: "Scalable web platform for multiple branch locations with SEO optimization.",
//     features: [
//       "Branch content management",
//       "Location-based pages",
//       "SEO optimized",
//       "Fast loading",
//     ],
//     tech: ["React.js", "Vite", "SEO Optimization"],
//     image: projectEducation,
//   },

//   {
//     icon: ShoppingCart,
//     title: "Admin Dashboard System",
//     tag: "DASHBOARD",
//     desc: "Comprehensive admin dashboard for managing users, analytics, and system data.",
//     features: [
//       "User management",
//       "Analytics charts",
//       "Role-based access",
//       "Real-time updates",
//     ],
//     tech: ["React.js","CSS","Bootstrap","Material UI","jsx", "Firebase"],
//     image: projectAdmin,
//   },
//   {
//     icon: MapPin,
//     title: "Inspire Booking Service",
//     tag: "WEB PLATFORM",
//     desc: "Online booking platform for logistics services with real-time availability and automated notifications.",
//     features: [
//       "Service scheduling",
//       "Real-time availability",
//       "Automated reminders",
//       "User reviews",
//     ],
//     tech: ["React.js", "Firebase", "REST APIs"],
//     image: projectinspireWeb,
//   },
//   {
//     icon: Package,
//     title: "Travel website",
//     tag: "WEBSITE",
//     desc: "Complete travel booking platform with hotel reservations, flight search, and itinerary management.",
//     features: ["Booking hotels", "Flight search", "Itinerary management", "User reviews"],
//     tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
//     image: projectTravel,
//   },
//   {
//     icon: GraduationCap,
//     title: "Portfolio Website",
//     tag: "WEBSITE",
//     desc: "Personal portfolio showcasing projects, skills, and experience with a modern design and smooth animations.",
//     features: [
//       "Project showcase",
//       "Skills section",
//       "Experience timeline",
//       "Contact form",
//     ],
//     tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
//     image: projectPortfolio,
//   },
// ];

// const ProjectsSection = () => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="projects" className="py-24 md:py-32 relative">
//       <div className="container mx-auto px-6" ref={ref}>
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground">
//             Featured <span className="gradient-text">Projects</span>
//           </h2>
//           <p className="text-muted-foreground font-body max-w-xl mx-auto">
//             Real-world applications built with modern technologies.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, i) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 40 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: i * 0.15, duration: 0.5 }}
//               whileHover={{ y: -8, transition: { duration: 0.3 } }}
//               className="glass rounded-2xl overflow-hidden group relative"
//             >
//               <div className="h-56 relative overflow-hidden">
//                 <motion.img
//                   src={project.image}
//                   alt={project.title}
//                   loading="lazy"
//                   width={800}
//                   height={512}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div
//                   className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-500"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, hsl(var(--primary) / 0.8), hsl(280 80% 40% / 0.8))",
//                   }}
//                 />
//                 <div
//                   className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl"
//                   style={{ background: "var(--gradient-primary)" }}
//                 />

//                 <div className="absolute top-4 left-4 z-10">
//                   <span className="text-[10px] font-heading uppercase tracking-widest px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground font-semibold backdrop-blur-sm shadow-lg">
//                     {project.tag}
//                   </span>
//                 </div>

//                 <div className="absolute inset-0 flex items-center justify-center z-10">
//                   <motion.div
//                     className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-2xl"
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                   >
//                     <project.icon
//                       className="text-white"
//                       size={28}
//                       strokeWidth={1.5}
//                     />
//                   </motion.div>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="font-heading font-bold text-xl text-foreground mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">
//                   {project.desc}
//                 </p>

//                 <div className="space-y-1.5 mb-5">
//                   {project.features.map((f) => (
//                     <div
//                       key={f}
//                       className="flex items-center gap-2 text-xs text-muted-foreground font-body"
//                     >
//                       <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
//                       {f}
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex flex-wrap gap-1.5 mb-5">
//                   {project.tech.map((t) => (
//                     <span
//                       key={t}
//                       className="text-[10px] font-body px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/50"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex items-center gap-3">
//                   {project.playStoreUrl && (
//                     <motion.a
//                       href={project.playStoreUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-heading font-semibold text-primary-foreground"
//                       style={{ background: "var(--gradient-primary)" }}
//                     >
//                       <Play size={14} /> Play Store
//                     </motion.a>
//                   )}
//                   {project.hasDetails && (
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-heading font-semibold border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
//                     >
//                       <Eye size={14} /> View Details
//                     </motion.button>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import {
//   MapPin,
//   ShoppingCart,
//   Package,
//   GraduationCap,
//   Play,
//   Eye,
//   ExternalLink,
// } from "lucide-react";

// // ✅ IMAGES
// import projectInspire from "@/assets/project-inspire.jpg";
// import projectMoboom from "@/assets/project-moboom.jpg";
// import projectInventory from "@/assets/project-inventory.jpg";
// import projectEducation from "@/assets/project-education.jpg";

// import projectAdmin from "@/assets/inspire-adminpanel.png";
// import projectTravel from "@/assets/traveler.png";
// import projectPortfolio from "@/assets/portfolio.png";
// import projectInspireWeb from "@/assets/inspire-website.png";

// // ✅ PROJECT DATA
// const projects = [
//   {
//     icon: MapPin,
//     title: "Inspire Packers & Movers",
//     tag: "LIVE PROJECT",
//     desc: "Complete logistics ecosystem with booking & tracking.",
//     features: [
//       "Real-time booking",
//       "Live tracking",
//       "Google Maps",
//       "Role-based auth",
//     ],
//     tech: ["Flutter", "React.js", "Firebase", "Firestore", "Google Maps API"],
//     image: projectInspire,
//     playStore:
//       "https://play.google.com/store/apps/details?id=com.inspire.customer",
//     website: "https://inspire-762dd.web.app/",
//   },
//   {
//     icon: ShoppingCart,
//     title: "MoBooM eCommerce",
//     tag: "WEB PLATFORM",
//     desc: "Complete eCommerce solution with cart & checkout.",
//     features: ["Authentication", "Cart", "Orders", "Search", "Filters"],
//     tech: ["React.js", "Firebase"],
//     image: projectMoboom,
//   },
//   {
//     icon: Package,
//     title: "Inventory System",
//     tag: "MOBILE APP",
//     desc: "Inventory tracking with real-time updates.",
//     features: ["Barcode", "Stock alerts", "Dashboard", "Role-based access"],
//     tech: ["Flutter", "Firebase"],
//     image: projectInventory,
//   },
//   {
//     icon: GraduationCap,
//     title: "Educational Website",
//     tag: "WEB PLATFORM",
//     desc: "SEO optimized multi-branch website.",
//     features: ["SEO", "Fast loading", "Dynamic pages", "CMS"],
//     tech: ["React.js", "Vite"],
//     image: projectEducation,
//   },

//   // 🔥 EXTRA PROJECTS

//   {
//     icon: ShoppingCart,
//     title: "Admin Dashboard",
//     tag: "DASHBOARD",
//     desc: "Analytics & user management system.",
//     features: ["Analytics", "Users", "Roles", "Charts", "Realtime"],
//     tech: ["React.js", "Material UI"],
//     image: projectAdmin,
//      website: "https://inspire-762dd.web.app/",
//   },
//   {
//     icon: MapPin,
//     title: "Inspire Booking Website",
//     tag: "WEB APP",
//     desc: "Online booking system for logistics.",
//     features: ["Booking", "Tracking", "Notifications", "SEO"],
//     tech: ["React.js", "Firebase"],
//     image: projectInspireWeb,
//     website: "https://inspire-762dd.web.app/",
//   },
//   {
//     icon: Package,
//     title: "Traveler Website",
//     tag: "WEBSITE",
//     desc: "Travel booking platform UI.",
//     features: ["Hotels", "Flights", "Booking", "Reviews"],
//     tech: ["HTML", "CSS", "JavaScript"],
//     image: projectTravel,
//   },
//   {
//     icon: GraduationCap,
//     title: "Portfolio Website",
//     tag: "WEBSITE",
//     desc: "Modern personal portfolio.",
//     features: ["Projects", "Skills", "Contact", "Animations"],
//     tech: ["React", "Tailwind"],
//     image: projectPortfolio,
//   },
// ];

// const ProjectsSection = () => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });

//   return (
//     <section id="projects" className="py-24 md:py-32">
//       <div className="container mx-auto px-6" ref={ref}>
//         {/* TITLE */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold">
//             Featured <span className="gradient-text">Projects</span>
//           </h2>
//           <p className="text-gray-400 mt-2">
//             Real-world applications with modern tech & UI
//           </p>
//         </motion.div>

//         {/* PROJECT GRID */}
//         <div className="grid md:grid-cols-2 gap-10">
//           {projects.map((project, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: i * 0.1 }}
//               whileHover={{ y: -8 }}
//               className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0f172a]/80 to-[#020617] shadow-xl group"
//             >
//               {/* IMAGE */}
//               <div className="h-56 relative overflow-hidden">
//                 <img
//                   src={project.image}
//                   className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
//                 />

//                 {/* OVERLAY */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

//                 {/* TAG */}
//                 <span className="absolute top-4 left-4 text-[10px] px-3 py-1 rounded-full bg-purple-600 text-white font-semibold shadow-lg">
//                   {project.tag}
//                 </span>
//               </div>

//               {/* CONTENT */}
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-white mb-2">
//                   {project.title}
//                 </h3>

//                 <p className="text-sm text-gray-300 mb-4">{project.desc}</p>

//                 {/* FEATURES */}
//                 <ul className="mb-4 space-y-1">
//                   {project.features.map((f) => (
//                     <li key={f} className="text-xs text-gray-400 flex gap-2">
//                       <span className="text-purple-400">●</span> {f}
//                     </li>
//                   ))}
//                 </ul>

//                 {/* TECH */}
//                 <div className="flex flex-wrap gap-2 mb-5">
//                   {project.tech.map((t) => (
//                     <span
//                       key={t}
//                       className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-purple-600/20 transition"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 {/* BUTTONS */}
//                 <div className="flex flex-wrap gap-3">
//                   {project.playStore && (
//                     <a
//                       href={project.playStore}
//                       target="_blank"
//                       className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white shadow-lg hover:scale-105 transition"
//                       style={{
//                         background: "linear-gradient(135deg,#7c3aed,#3b82f6)",
//                       }}
//                     >
//                       <Play size={14} /> Play Store
//                     </a>
//                   )}

//                   {project.website && (
//                     <a
//                       href={project.website}
//                       target="_blank"
//                       className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border border-white/20 text-white hover:bg-white/10 transition"
//                     >
//                       <ExternalLink size={14} /> Live
//                     </a>
//                   )}

//                   <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 transition">
//                     <Eye size={14} /> Details
//                   </button>
//                 </div>
//               </div>

//               {/* GLOW EFFECT */}
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-purple-500/10" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
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

                <p className="text-sm text-gray-300 mb-4">
                  {project.desc}
                </p>

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

              <img
                src={selected.image}
                className="rounded mb-4"
              />

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