import { motion } from "framer-motion";
import { projects } from "../data/projects.js";

const Projects = () => {
  return (
    <div className="w-full min-h-screen px-6 md:px-16 py-20 bg-[var(--light-bg)] text-[var(--light-txt)]">
      <h2 className="text-4xl font-bold pb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-[var(--highlight)] hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-semibold pb-3">{proj.title}</h3>
            <p className="text-base text-gray-700 pb-4">{proj.description}</p>

            <div className="flex flex-wrap gap-2 pb-4">
              {proj.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[var(--highlight)] text-white text-sm px-3 py-1 rounded-full font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-[var(--highlight)]"
                >
                  GitHub
                </a>
              )}
              {proj.liveDemo && (
                <a
                  href={proj.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-[var(--highlight)]"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
