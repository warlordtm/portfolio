"use client";

import ProjectCard from "./ProjectCard";

export const projects = [
  {
    title: "CojaMotors",
    description:
      "A car stand venture project showcasing Mayor's Deck Ventures with an interactive demo.",
    image: "/carstand.png",
    demo: "https://cojamotors.vercel.app",
    github: "https://github.com/warlordtm/mayors_deck_ventures_car_stand",
  },
  {
    title: "Jamie White Consulting",
    description:
      "A professional landing page built for Jamie White’s consulting business. Designed to highlight his services, build trust, and convert visitors into clients with a clean, modern interface.",
    image: "/sbggroup.png",
    demo: "https://sbggroups.vercel.app",
    github: "https://github.com/warlordtm/sbggroup",
  },
  {
    title: "MovieFinder",
    description:
      "Movie search app using an external API. Includes pagination, favorites, error handling, and modals.",
    image: "/moviefinder.png",
    demo: "https://warlordtm.github.io/moviefinder/",
    github: "https://github.com/warlordtm/moviefinder",
  },
  {
    title: "SecurePass",
    description:
      "A modern password manager built with React. Add, edit, delete, and search passwords securely.",
    image: "/securepass.png",
    demo: "https://securepass-two.vercel.app",
    github: "https://github.com/warlordtm/securepass",
  },
];


export default function Projects() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
