"use client";

import ProjectCard from "./ProjectCard";

export const projects = [
  {
    title: "Jamie White Consulting",
    description:
      "A professional landing page built for Jamie White’s consulting business. Designed to highlight his services, build trust, and convert visitors into clients with a clean, modern interface.",
    image: "/sbggroup.png",
    demo: "https://sbggroups.vercel.app",
    github: "https://github.com/warlordtm/sbggroup",
  },
  {
    title: "SecurePass",
    description:
      "A modern password manager built with React. Add, edit, delete, and search passwords securely.",
    image: "/securepass.png",
    demo: "https://securepass-two.vercel.app",
    github: "https://github.com/warlordtm/securepass",
  },
  {
    title: "QR Code Generator",
    description:
      "Frontend Mentor challenge — a responsive QR code generator built with React and Tailwind.",
    image: "/qrcode.png",
    demo: "https://qr-code-component-xi-steel.vercel.app/",
    github: "https://github.com/warlordtm/qr-code-component",
  },
  {
    title: "MovieFinder",
    description:
      "Movie search app using an external API. Includes pagination, favorites, error handling, and modals.",
    image: "/moviefinder.png",
    demo: "https://warlordtm.github.io/moviefinder/",
    github: "https://github.com/warlordtm/moviefinder",
  },
];


export default function Projects() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-indigo-50 to-white glass" id="projects">
      <h2 className="text-3xl font-bold mb-10 text-center text-black dark:text-white">
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
