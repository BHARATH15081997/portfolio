import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, MessageCircle, Send, Phone } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const whatsappUrl = `https://wa.me/916379541026?text=${encodeURIComponent("Hi Bharath, I'd like to discuss a project.")}`;

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Let's discuss your project and bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6"
          >
            {[
              { icon: Mail, label: "Email", value: "bharathdevfrontend@gmail.com", href: "mailto:bharathdevfrontend@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 6379541026", href: "tel:+916379541026" },
              { icon: MapPin, label: "Location", value: "Chennai, Tamil Nadu", href: undefined },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-primary/25"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <item.icon className="text-primary-foreground" size={20} />
                </motion.div>
                <div>
                  <p className="text-xs text-muted-foreground font-body">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-body text-foreground hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-body text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex flex-wrap gap-3 pt-2">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 30px -8px hsl(142 70% 45% / 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-semibold text-sm text-primary-foreground"
                style={{ background: "linear-gradient(135deg, hsl(142, 70%, 45%), hsl(142, 70%, 35%))" }}
              >
                <MessageCircle size={18} /> WhatsApp
              </motion.a>
              <motion.a
                href="tel:+916379541026"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 30px -8px hsl(var(--primary) / 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading font-semibold text-sm text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Phone size={18} /> Call Now
              </motion.a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-4"
          >
            {(["name", "email"] as const).map((field) => (
              <div key={field}>
                <input
                  type={field === "email" ? "email" : "text"}
                  placeholder={field === "name" ? "Your Name" : "Your Email"}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full glass rounded-xl px-5 py-3.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                {errors[field] && <p className="text-xs text-destructive mt-1 font-body">{errors[field]}</p>}
              </div>
            ))}
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full glass rounded-xl px-5 py-3.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              />
              {errors.message && <p className="text-xs text-destructive mt-1 font-body">{errors.message}</p>}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03, boxShadow: "0 8px 30px -8px hsl(var(--primary) / 0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 rounded-xl font-heading font-semibold text-primary-foreground flex items-center justify-center gap-2"
              style={{ background: "var(--gradient-primary)" }}
            >
              {submitted ? "Message Sent! ✓" : <><Send size={18} /> Send Message</>}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
