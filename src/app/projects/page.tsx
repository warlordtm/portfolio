"use client";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "MovieFinder App",
    short: "Search and explore movies using an API.",
    image: "/images/moviefinder.png",
    link: "https://github.com/godwin/movie-finder",
  },
  {
    id: 2,
    title: "SecurePass",
    short: "Password manager built with React.",
    image: "/images/securepass.png",
    link: "https://github.com/godwin/secure-pass",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <NavBar />
      <section className="min-h-screen px-6 py-28">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
