import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingContact = () => {
  const phoneNumber = "916379541026";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
      {/* 📞 CALL BUTTON */}
      <motion.a
        href={`tel:+${phoneNumber}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{
          background: "linear-gradient(135deg,#7c3aed,#3b82f6)",
        }}
      >
        {/* PULSE */}
        <span className="absolute inset-0 rounded-full animate-ping bg-purple-400 opacity-30" />

        <Phone size={24} className="text-white relative z-10" />
      </motion.a>
    </div>
  );
};

export default FloatingContact;