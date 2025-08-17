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
      {/* Main Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Building Scalable & Beautiful Digital Experiences
      </motion.h1>

      {/* Tagline */}
      <motion.h2
        className="text-xl sm:text-2xl text-blue-400 font-medium mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Hi, I&apos;m <span className="text-green-400">Abhay Kumar</span> — Full Stack Developer
      </motion.h2>

      {/* Professional Intro */}
      <motion.p
        className="text-lg md:text-xl text-gray-400 max-w-3xl mb-6 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        I specialize in creating <span className="text-blue-400">high-performance web
        applications</span> using modern technologies like{" "}
        <span className="text-green-400">React, Next.js, Firebase, Tailwind CSS, and Node.js</span>.  
        With a strong foundation in computer science and a passion for clean,
        scalable solutions, I turn ideas into products that deliver real value.
      </motion.p>

      {/* Confidence Line */}
      <motion.p
        className="text-md md:text-lg text-gray-500 max-w-2xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Companies trust me to build reliable software, solve complex problems, and
        craft engaging user experiences. I&apos;m always driven to push boundaries
        and deliver results that stand out.
      </motion.p>

      {/* Call to Action */}
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <Link
          href="#contact"
          className="px-8 py-3 text-base font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-md hover:shadow-cyan-500/30 text-white transition-all duration-300"
        >
          Let&apos;s Connect
        </Link>
      </motion.div>
    </motion.section>
  );
}
