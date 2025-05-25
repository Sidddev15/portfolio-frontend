import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col px-6">
      <motion.div
        className="text-center max-w-3xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h5 variants={item} className="magic-hover">
          👋🏻 Hello, I'm
        </motion.h5>

        <motion.h1
          variants={container}
          className="pb-4 font-bold whitespace-nowrap"
        >
          Siddharth Singh
        </motion.h1>

        <motion.p
          variants={container}
          className="text-lg pb-6 underline decoration-orange-500"
        >
          Senior Software Developer | Performance Optimizer | UI Architect
        </motion.p>

        <motion.p variants={container} className="text-base pb-10">
          I build blazing-fast UIs and scalable systems with Angular, React &
          Node.js. I love clean code, performance tuning, and animations that
          make users say "Whoa!"
        </motion.p>

        <motion.div variants={container} className="flex justify-center gap-6">
          <a
            href="https://github.com/Sidddev15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={28}
              className="hover:text-orange-400 transition-colors duration-300 ease-in-out"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/siddharth1599/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={28}
              className="hover:text-orange-400 transition-colors duration-300 ease-in-out"
            />
          </a>
          <a
            href="https://siddsr0015.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMedium
              size={28}
              className="hover:text-orange-400 transition-colors duration-300 ease-in-out"
            />
          </a>
          <a href="/resume/siddharthmay25.pdf" download>
            <HiOutlineDocumentText
              size={28}
              className="hover:text-orange-400 transition-colors duration-300 ease-in-out"
            />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
