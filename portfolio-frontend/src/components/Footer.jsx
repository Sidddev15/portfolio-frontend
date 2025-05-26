import React from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 px-6 md:px-16 py-10 bg-[var(--light-bg)] text-[var(--light-txt)] border-t border-[var(--muted-text)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo + Copyright */}
        <div className="text-center md:text-left">
          <h5 className="text-xl font-semibold tracking-tight font-[var(--main-font)]">
            Siddharth.dev
          </h5>
          <p className="text-sm text-[var(--muted-text)] mt-1">
            © {new Date().getFullYear()} Siddharth Singh. All rights reserved.
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/Sidddev15"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--highlight)]"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/siddharth1599/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--highlight)]"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://siddsr0015.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--highlight)]"
            aria-label="Medium"
          >
            <FaMedium />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
