"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export const projects = [
  {
    title: "SecurePass",
    description:
      "A modern password manager built with React. Add, edit, delete, and search passwords securely.",
    image: "/projects/securepass.png",
    demo: "https://securepass-demo.vercel.app",
    github: "https://github.com/yourusername/securepass",
  },
  {
    title: "QR Code Generator",
    description:
      "Frontend Mentor challenge — a responsive QR code generator built with React and Tailwind.",
    image: "/projects/qrcode.png",
    demo: "https://qrcode-demo.vercel.app",
    github: "https://github.com/yourusername/qr-code-generator",
  },
  {
    title: "MovieFinder",
    description:
      "Movie search app using an external API. Includes pagination, favorites, error handling, and modals.",
    image: "/projects/moviefinder.png",
    demo: "https://moviefinder-demo.vercel.app",
    github: "https://github.com/yourusername/moviefinder",
  },
  {
    title: "2FA Auth System",
    description:
      "A two-factor authentication demo built with Next.js, focusing on secure login flows.",
    image: "/projects/2fa.png",
    demo: "https://2fa-demo.vercel.app",
    github: "https://github.com/yourusername/2fa-auth",
  },
];


export default function Projects() {
  return (
    <section className="py-20" id="projects">
      <h2 className="text-3xl font-bold mb-10 text-center text-white">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
}
