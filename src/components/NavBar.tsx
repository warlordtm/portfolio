"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import DarkMode from "./DarkMode";

export default function NavBar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 top-0 bg-transparent backdrop-blur-md"
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-medium tracking-wide text-gray-100 dark:text-white">
          Godwin.dev
        </Link>

        <div className="flex items-center gap-6 text-gray-200 dark:text-gray-300">
          <Link href="/projects" className="hover:text-pink-400">Projects</Link>
          <Link href="/services" className="hover:text-pink-400">Services</Link>
          <Link href="/contact" className="hover:text-pink-400">Contact</Link>
          <DarkMode />
        </div>
      </div>
    </motion.nav>
  );
}
