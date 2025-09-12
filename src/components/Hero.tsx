"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-[#020617] dark:text-white"
      >
        Hi, I’m <span className="text-blue-400">Godwin Bamisaye</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-xl"
      >
        Full-Stack Developer (Next.js) & Cybersecurity Practitioner | Learning to Build Secure, Scalable, and Trustworthy Web Applications
      </motion.p>
    </section>
  );
}
