import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code2, Globe, Smartphone } from "lucide-react";

const stats = [
  { label: "Years Experience", value: 5.8, suffix: "+" },
  { label: "Websites Delivered", value: 10, suffix: "+" },
  { label: "Mobile Apps Published", value: 3, suffix: "+" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Number(current.toFixed(1)));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span
      ref={ref}
      className="font-heading text-4xl md:text-5xl font-bold gradient-text"
    >
      {count % 1 === 0 ? Math.floor(count) : count}
      {suffix}
    </span>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-foreground font-heading text-3xl md:text-5xl font-bold mb-4 ">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Dynamic Mobile & Web Developer with 5.8+ years of experience in
            building scalable cross-platform applications using Flutter,
            React.js, and Firebase.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Code2,
              title: "Clean Architecture",
              desc: "Repository Pattern & scalable application design",
            },
            {
              icon: Smartphone,
              title: "Full Lifecycle",
              desc: "From UI design to deployment & maintenance",
            },
            {
              icon: Globe,
              title: "Digital Marketing",
              desc: "SEO, Paid Ads & conversion optimization",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              whileHover={{
                y: -5,
                boxShadow: "0 0 40px hsla(250,80%,65%,0.1)",
              }}
              className="glass rounded-2xl p-8 text-center group cursor-default"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300"
                style={{ background: "var(--gradient-primary)" }}
              >
                <item.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground font-body mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
