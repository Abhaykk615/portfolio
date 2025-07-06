"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Hi, I&apos;m{" "}
        <span className="underline underline-offset-8 decoration-blue-500">
          Abhay Kumar
        </span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I&apos;m a Full Stack Developer focused on building beautiful, performant
        web apps with modern tech like React, Firebase, and Tailwind.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Link
          href="#contact"
          className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-md hover:shadow-cyan-500/30 text-white transition-all duration-300"
        >
          Let&apos;s Connect
        </Link>

        <a
          href="/Abhay_Kumar_Resume.pdf"
          download
          className="px-6 py-3 text-sm font-semibold border border-blue-500 text-blue-400 rounded-xl hover:bg-blue-500 hover:text-white transition duration-300"
        >
          Download Resume
        </a>
      </motion.div>
    </motion.section>
  );
}
