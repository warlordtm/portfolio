"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import DarkMode from "./DarkMode";

export default function NavBar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 top-0 backdrop-blur-md bg-gray-50 dark:bg-[#020617]"
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-medium tracking-wide  text-gray-600 dark:text-white">
          Godwin.dev
        </Link>

        <div className="flex items-center gap-6 text-gray-600 dark:text-gray-300">
          <Link href="/" className="hover:text-pink-400">Home</Link>
          <Link href="/aboutme" className="hover:text-pink-400">About</Link>
          <Link href="/blogs" className="hover:text-pink-400">Blog</Link>
          <DarkMode />
        </div>
      </div>
    </motion.nav>
  );
}
