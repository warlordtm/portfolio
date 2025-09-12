"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image?: string;
  demo?: string;
  github?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="glass rounded-xl p-4 shadow-neon-md"
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="rounded-md mb-3 w-full object-cover h-44"
        />
      ) : (
        <div className="h-44 rounded-md mb-3 w-full flex items-center justify-center bg-gradient-to-br from-purple-700 via-black to-blue-900 text-black dark:text-white text-lg font-bold">
          {project.title}
        </div>
      )}
      <h3 className=" text-black font-semibold text-lg dark:text-white">{project.title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-300/80 mt-1">{project.description}</p>
      <div className="mt-3 flex gap-3">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            className="text-sm text-blue-400 hover:underline"
          >
            Live Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="text-sm text-green-400 hover:underline"
          >
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}
