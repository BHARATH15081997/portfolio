import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Celes",
    role: "Owner, Inspire Packers & Movers",
    text: "Bharath built our entire logistics ecosystem from scratch. The apps are fast, reliable, and our customers love the real-time tracking feature.",
    stars: 5,
  },
  {
    name: "Priya",
    role: "Founder, MoBooM",
    text: "Exceptional work on our eCommerce platform. Bharath delivered a polished product that exceeded our expectations in both design and performance.",
    stars: 5,
  },
  {
    name: "Venkatesh",
    role: "Director, EduCampus Network",
    text: "The multi-branch website Bharath developed helped us significantly increase our online presence. SEO traffic grew by 300% in 6 months.",
    stars: 5,
  },
  {
    name: "Harshita",
    role: "Marketing Manager",
    text: "Bharath's digital marketing strategies transformed our ad campaigns. We saw a 4x return on ad spend within the first quarter.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            What our clients say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass rounded-2xl p-8 relative group"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" style={{ background: "var(--gradient-primary)", transform: "scale(0.95)" }} />
              
              <Quote className="text-primary/20 absolute top-6 right-6" size={36} />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={14} className="text-primary fill-primary" />
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground font-body mb-8 italic leading-relaxed">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm tracking-wide">{t.name}</p>
                  <p className="text-xs text-muted-foreground font-body">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
