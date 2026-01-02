"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import DarkMode from "./DarkMode";

export default function NavBar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 top-0 backdrop-blur-lg bg-white/80 dark:bg-[#020617]/80 border-b border-gray-200 dark:border-gray-800 shadow-sm"
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-semibold tracking-wide text-gray-900 dark:text-white hover:text-pink-500 transition-colors">
          Godwin.dev
        </Link>

        <div className="flex items-center gap-8 text-gray-700 dark:text-gray-300">
          <Link href="/" className="hover:text-pink-500 transition-colors font-medium">Home</Link>
          <Link href="/aboutme" className="hover:text-pink-500 transition-colors font-medium">About</Link>
          <Link href="/#contact" className="hover:text-pink-500 transition-colors font-medium">Contact</Link>
          <Link href="/youtube" className="hover:text-pink-500 transition-colors font-medium">YouTube</Link>
          <DarkMode />
        </div>
      </div>
    </motion.nav>
  );
}
