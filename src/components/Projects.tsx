"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "StudySync",
    description: "A student dashboard with login, task tracking, and Firebase integration.",
    tech: ["React", "Firebase", "Tailwind"],
    github: "https://github.com/Abhaykk615/studysync",
    demo: "https://studysync-client.web.app/",
  },
  {
    title: "Recipe Card",
    description: "Interactive recipe card showcasing ingredients and instructions.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Abhaykk615/Recipe_card",
    demo: "https://abhaykk615.github.io/Recipe_card/",
  },
  {
    title: "Tic-Tac-Toe Game",
    description: "Classic Tic-Tac-Toe game with simple UI and two-player mode.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Abhaykk615/Tic-toe-game",
    demo: "https://abhaykk615.github.io/Tic-toe-game/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-500 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-950 p-6 rounded-xl border border-blue-500/10 shadow-md text-left transition-transform duration-300 hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-lg group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm" />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-blue-800 text-white px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" className="text-blue-400 underline">GitHub</a>
                  {project.demo && <a href={project.demo} target="_blank" className="text-green-400 underline">Live Demo</a>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
