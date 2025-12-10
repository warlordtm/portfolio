"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6">
      {/* Profile Picture with Animated Border */}
      <div className="relative mb-8 w-32 h-32 sm:w-40 sm:h-40 md:w-76 md:h-76 lg:w-84 lg:h-84">
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-cyan-400"
          animate={{
            scale: [1, 1.05, 0.98, 1.03, 1],
            x: [0, 2, -2, 1, 0],
            y: [0, -2, 1, -1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <Image
          src="/developer.jpeg"
          alt="Profile Picture"
          fill
          className="rounded-full object-cover relative z-10"
        />
      </div>

      {/* Hero Content */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold mb-4 text-gray-700 dark:text-white"
      >
        Hi, I’m <span className="text-cyan-400">Godwin Bamisaye</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-base sm:text-lg text-slate-600 max-w-xl sm:max-w-2xl dark:text-gray-400"
      >
        Full-stack developer in the making — building modern web apps with Next.js,
        React, and secure design principles.
      </motion.p>
    </section>
  );
}
















