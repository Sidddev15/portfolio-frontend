import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Senior Software Developer 💻",
  "Tech Leader 💡",
  "Full-Stack Architect 🧱",
  "System Optimizer ⚙️",
  "SaaS Builder 💰",
];

const AnimatedRoles = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-2xl md:text-3xl font-semibold text-[var(--highlight)] h-[40px] overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute"
        >
          {roles[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoles;
