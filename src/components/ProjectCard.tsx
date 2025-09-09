"use client";

import { motion } from "framer-motion";

type Project = {
  image: string;
  title: string;
  short: string;
  demo: string;
  github: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  if (!project) return null;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="glass rounded-xl p-4 shadow-lg hover:shadow-cyan-500/40 transition"
    >
      <img
        src={project.image}
        alt={project.title}
        className="rounded-md mb-3 w-full object-cover h-44"
      />
      <h3 className="font-semibold text-lg text-white">{project.title}</h3>
      <p className="text-sm text-slate-300 mt-1">{project.short}</p>
      <div className="mt-3 flex gap-3">
        <a href={project.demo} target="_blank" className="text-cyan-400 hover:underline">Live</a>
        <a href={project.github} target="_blank" className="text-cyan-400 hover:underline">Code</a>
      </div>
    </motion.div>
  );
}
