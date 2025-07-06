"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 px-6 bg-black text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-center text-blue-500 mb-12">
        About Me
      </h2>

      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-center text-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="flex-1">
          <p className="text-blue-200 text-lg leading-relaxed mb-6">
            I'm <span className="font-semibold text-blue-400">Abhay Kumar</span>, a full-stack developer currently pursuing B.Tech in Information Technology. I love turning complex ideas into real, usable web apps.
          </p>
          <p className="text-blue-200 text-lg leading-relaxed mb-6">
            I'm skilled in building responsive and accessible websites using React, Next.js, Firebase, and Tailwind CSS. I’ve created multiple personal projects and participated in internships and tech events that shaped my practical development mindset.
          </p>
          <p className="text-blue-200 text-lg leading-relaxed mb-6">
            I'm always looking to grow, whether it's through coding challenges, internships, or collaborating with like-minded developers.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6">
            <a
              href="https://www.linkedin.com/in/abhaykk615/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white transition hover:scale-110"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/Abhaykk615"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white transition hover:scale-110"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.instagram.com/big_daddy_a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white transition hover:scale-110"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
