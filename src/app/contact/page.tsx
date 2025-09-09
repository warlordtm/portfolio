"use client";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";

export default function ContactPage() {
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
          Contact Me
        </motion.h2>

        <form className="max-w-xl mx-auto bg-gray-900/50 p-6 rounded-xl shadow-md space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
