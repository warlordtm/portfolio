"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image?: string;
  demo?: string;
  github?: string;
  tags?: string[];
  featured?: boolean;
  index?: number;
};

const TAG_COLORS: Record<string, string> = {
  "Next.js":     "rgba(139,92,246,0.15)",
  "React":       "rgba(6,182,212,0.15)",
  "TypeScript":  "rgba(59,130,246,0.15)",
  "JavaScript":  "rgba(234,179,8,0.15)",
  "Tailwind":    "rgba(14,165,233,0.15)",
  "CSS":         "rgba(168,85,247,0.15)",
  "REST API":    "rgba(16,185,129,0.15)",
  "API":         "rgba(16,185,129,0.15)",
  "Security":    "rgba(239,68,68,0.15)",
  "LocalStorage":"rgba(251,146,60,0.15)",
  "Landing Page":"rgba(244,114,182,0.15)",
};

const TAG_TEXT_COLORS: Record<string, string> = {
  "Next.js":     "#A78BFA",
  "React":       "#22D3EE",
  "TypeScript":  "#93C5FD",
  "JavaScript":  "#FDE047",
  "Tailwind":    "#7DD3FC",
  "CSS":         "#D8B4FE",
  "REST API":    "#6EE7B7",
  "API":         "#6EE7B7",
  "Security":    "#FCA5A5",
  "LocalStorage":"#FDBA74",
  "Landing Page":"#FBCFE8",
};

const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const topColor =
    index % 4 === 0 ? "from-violet-500 to-cyan-500"  :
    index % 4 === 1 ? "from-cyan-500 to-emerald-500"  :
    index % 4 === 2 ? "from-pink-500 to-violet-500"   :
                      "from-amber-500 to-pink-500";

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="glass rounded-2xl overflow-hidden group relative flex flex-col"
      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
    >
      {/* Gradient top border */}
      <div className={`h-0.5 w-full bg-gradient-to-r ${topColor}`} />

      {/* Featured badge */}
      {project.featured && (
        <div
          className="absolute top-6 right-4 z-20 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
          style={{
            background: "rgba(139,92,246,0.2)",
            border: "1px solid rgba(139,92,246,0.4)",
            color: "#A78BFA",
          }}
        >
          ⭐ Featured
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden h-48">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "rgba(5,8,22,0.8)" }}
            >
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-5 py-2 text-sm flex items-center gap-2 rounded-xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Live Demo</span>
                  <ExternalLink size={14} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline px-5 py-2 text-sm flex items-center gap-2 rounded-xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={14} />
                  <span>Code</span>
                </a>
              )}
            </div>
          </>
        ) : (
          <div className={`h-full w-full flex items-center justify-center bg-gradient-to-br ${topColor} text-white text-xl font-bold`}>
            {project.title}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                style={{
                  background: TAG_COLORS[tag] ?? "rgba(139,92,246,0.12)",
                  color:      TAG_TEXT_COLORS[tag] ?? "#A78BFA",
                  border:     `1px solid ${TAG_TEXT_COLORS[tag] ?? "#A78BFA"}30`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3
          className="text-lg font-semibold mb-2"
          style={{ color: "#F8FAFC", fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: "#94A3B8" }}>
          {project.description}
        </p>

        {/* Links */}
        <div className="flex gap-3 mt-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
              style={{ color: "#8B5CF6" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#A78BFA")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#8B5CF6")}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
              style={{ color: "#64748B" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#94A3B8")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#64748B")}
            >
              <Github size={14} />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
