import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Palette, Search, BarChart3 } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Modern, responsive web applications with React.js and cutting-edge technologies." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Cross-platform mobile apps with Flutter for iOS and Android." },
  { icon: Palette, title: "UI/UX Design", desc: "Beautiful, intuitive interfaces designed in Figma with user-centered approach." },
  { icon: Search, title: "Digital Marketing & SEO", desc: "Search engine optimization, content strategy, and organic growth." },
  { icon: BarChart3, title: "Paid Ads Campaigns", desc: "Google Ads, Meta Ads (Facebook, Instagram, WhatsApp) campaign management." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            End-to-end solutions from design to deployment and marketing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: "0 0 50px hsla(250,80%,65%,0.12)" }}
              className="glass rounded-2xl p-8 text-center group cursor-default"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                style={{ background: "var(--gradient-primary)" }}
              >
                <service.icon className="text-primary-foreground" size={24} />
              </motion.div>
              <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
