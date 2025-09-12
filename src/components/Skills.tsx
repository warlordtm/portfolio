"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiShadcnui, SiMongodb, SiSupabase, SiFramer, SiTypescript, SiFigma } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "shadcn/ui", icon: <SiShadcnui className="text-purple-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Supabase + Clerk", icon: <SiSupabase className="text-emerald-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-gray-300" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Databases", icon: <FaDatabase className="text-blue-400" /> },
  { name: "Figma", icon: <SiFigma className="text-blue-900" /> }
];

export default function Skills() {
  return (
    <section className="py-16 bg-background relative">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-white mb-10 drop-shadow-[0_0_6px_#00f]"
      >
        My Tech Stack
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto px-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 12px rgba(0,255,255,0.5)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="glass rounded-xl flex flex-col items-center justify-center p-6 shadow-[0_0_6px_rgba(0,255,255,0.2)] bg-black/40 backdrop-blur-md"
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <p className="text-sm text-white font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
