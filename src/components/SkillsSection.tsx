import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code, Smartphone, Cloud, Wrench, Megaphone,
} from "lucide-react";

const categories = [
  {
    icon: Code,
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript","TypeScript", "React.js", "Bootstrap", "Material UI"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    skills: ["Flutter", "Dart" ,"Firebase", "Google Maps API","Bloc Pattern", "Provider"],
  },
  {
    icon: Cloud,
    title: "Backend & Cloud",
    skills: ["Firebase Auth", "Firestore", "Cloud Storage", "REST APIs", "SQL"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Git", "GitHub", "Jira", "Figma", "VS Code"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    skills: ["SEO", "Email Marketing", "Social Media", "Google Ads", "Meta Ads"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            A diverse toolkit spanning frontend, mobile, backend, and marketing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <cat.icon className="text-primary-foreground" size={18} />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-body px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
