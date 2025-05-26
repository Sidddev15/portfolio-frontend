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
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20">
      <motion.div
        className="text-center w-full max-w-4xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h5
          variants={item}
          className="text-sm sm:text-base md:text-lg lg:text-xl pb-2"
        >
          👋🏻 Hello, I'm
        </motion.h5>

        <motion.h1
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pb-4 text-light"
        >
          Siddharth Singh
        </motion.h1>

        <motion.p
          variants={item}
          className="text-base sm:text-lg md:text-xl underline decoration-orange-500 pb-4"
        >
          Senior Software Developer | Performance Optimizer | UI Architect
        </motion.p>

        <motion.p
          variants={item}
          className="text-sm sm:text-base md:text-lg pb-10 px-2 sm:px-8"
        >
          I build blazing-fast UIs and scalable systems with Angular, React &
          Node.js. I love clean code, performance tuning, and animations that
          make users say "Whoa!"
        </motion.p>

        <motion.div
          variants={container}
          className="flex flex-wrap justify-center items-center gap-6"
        >
          <a
            href="https://github.com/Sidddev15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={28}
              className="hover:text-orange-400 transition-colors duration-300"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/siddharth1599/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={28}
              className="hover:text-orange-400 transition-colors duration-300"
            />
          </a>
          <a
            href="https://siddsr0015.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMedium
              size={28}
              className="hover:text-orange-400 transition-colors duration-300"
            />
          </a>
          <a href="/resume/siddharthmay25.pdf" download>
            <HiOutlineDocumentText
              size={28}
              className="hover:text-orange-400 transition-colors duration-300"
            />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
