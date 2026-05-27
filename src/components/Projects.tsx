"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export const projects = [
  {
    title: "CojaMotors",
    description:
      "A car stand venture project showcasing Mayor's Deck Ventures with an interactive demo. Built with performance and mobile-first UX in mind.",
    image: "/carstand.png",
    demo: "https://cojamotors.vercel.app",
    github: "https://github.com/warlordtm/mayors_deck_ventures_car_stand",
    tags: ["Next.js", "React", "Tailwind"],
    featured: true,
  },
  {
    title: "Jamie White Consulting",
    description:
      "A professional landing page built for Jamie White's consulting business, designed to highlight services, build trust, and convert visitors into clients.",
    image: "/sbggroup.png",
    demo: "https://sbggroups.vercel.app",
    github: "https://github.com/warlordtm/sbggroup",
    tags: ["React", "CSS", "Landing Page"],
    featured: false,
  },
  {
    title: "MovieFinder",
    description:
      "Movie search app powered by an external API. Features pagination, saved favorites, error handling, and smooth modal previews.",
    image: "/moviefinder.png",
    demo: "https://warlordtm.github.io/moviefinder/",
    github: "https://github.com/warlordtm/moviefinder",
    tags: ["JavaScript", "REST API", "CSS"],
    featured: false,
  },
  {
    title: "SecurePass",
    description:
      "A modern password manager built with React. Add, edit, delete and search passwords with local encryption and a clean interface.",
    image: "/securepass.png",
    demo: "https://securepass-two.vercel.app",
    github: "https://github.com/warlordtm/securepass",
    tags: ["React", "LocalStorage", "Security"],
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6"
      style={{ background: "linear-gradient(180deg, #050816 0%, #090d1f 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#8B5CF6" }}
          >
            Portfolio
          </p>
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider mt-6 max-w-xs mx-auto" />
        </div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
