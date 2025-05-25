import { motion } from "framer-motion";
import aboutMe from "../assets/about.jpg";
import AnimatedRoles from "./AnimatedRoles";

const About = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[var(--light-bg)] text-[var(--light-txt)] px-4 sm:px-8 md:px-10 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center h-full">
        {/* 👤 Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <motion.img
            src={aboutMe}
            alt="my-image"
            className="rounded-full shadow-lg w-[280px] h-[280px] object-cover border-4 border-[var(--highlight)]"
            whileHover={{
              scale: 1.05,
              rotate: 2,
              boxShadow: "0 0 25px var(--highlight)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>

        {/* 📝 Text Content */}
        <div className="w-full md:w-2/3 space-y-6">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <AnimatedRoles />
          <p className="text-lg leading-relaxed pb-5 pt-5">
            I’m{" "}
            <strong className="underline decoration-orange-500">
              Siddharth Singh
            </strong>{" "}
            — a passionate developer, tech leader, and system optimizer. With
            over{" "}
            <strong className="underline decoration-orange-500">
              4 years of hands-on experience
            </strong>
            , I specialize in building performance-driven, scalable applications
            using <span className="text-[var(--highlight)]">Angular</span>,
            <span className="text-[var(--highlight)]"> React</span>, and{" "}
            <span className="text-[var(--highlight)]">Node.js</span>.
          </p>

          <p className="text-lg leading-relaxed pb-5">
            I currently work as a{" "}
            <strong className="underline decoration-orange-500">
              Senior Software Developer
            </strong>{" "}
            where I lead development for cross-platform applications, mentor
            junior engineers, and ensure smooth coordination between design, QA,
            and backend teams. My recent project — a Samsung TV plugin —
            delivered ahead of schedule and optimized for 20+ device models,
            reflects my focus on precision and performance.
          </p>

          <p className="text-lg leading-relaxed pb-5">
            I love taking ownership — from building reusable component libraries
            to managing full-stack deployments that handle scale and speed
            effortlessly. My open-source project,{" "}
            <strong className="underline decoration-orange-500">AniX</strong>,
            is an animation library designed to bring seamless motion to modern
            UIs — across frameworks like React, Angular, and plain HTML/CSS.
          </p>

          <p className="text-lg leading-relaxed pb-5">
            Beyond development, I’m obsessed with building systems and
            businesses that run on autopilot. I dream of creating products that
            not only solve real problems, but also generate value continuously —
            at scale. My ultimate goal? To build tech-led companies that
            generate 10–20 crores/month passively — using automation, growth
            hacking, and product-market fit.
          </p>

          <p className="text-lg leading-relaxed">
            When I’m not coding or mentoring, I’m probably writing blogs,
            tweaking performance scores, or brainstorming the next startup idea.
            Let’s connect and build something impactful together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
