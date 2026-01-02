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
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg mb-4 w-full object-cover h-48"
        />
      ) : (
        <div className="h-48 rounded-lg mb-4 w-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white text-lg font-bold">
          {project.title}
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
      <div className="flex gap-4">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            Live Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}
