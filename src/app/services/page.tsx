"use client";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Responsive, modern web apps with React, Next.js, TailwindCSS.",
    icon: "💻",
  },
  {
    id: 2,
    title: "Cybersecurity",
    description: "Penetration testing, vulnerability assessments, secure coding.",
    icon: "🛡️",
  },
  {
    id: 3,
    title: "Blockchain",
    description: "Exploring decentralized applications and blockchain solutions.",
    icon: "⛓️",
  },
];

export default function ServicesPage() {
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
          Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}
