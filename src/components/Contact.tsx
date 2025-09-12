"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    if (res.ok) {
      setStatus("Message sent! ✅");
      form.reset();
    } else {
      setStatus("Something went wrong ❌");
    }
  };

  return (
      <div className="bg-gray-0 min-h-screen flex flex-col items-center justify-center dark:bg-black/10 px-6 -mt-10 -mb-20">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center  text-black/90 dark:text-white dark:drop-shadow-[0_0_6px_#00f]"
        >
          Contact Me
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-300 text-center max-w-lg mb-8"
        >
          Got a project in mind or just want to say hi? Fill out the form and I’ll get back to you.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-lg p-6 rounded-xl shadow-[0_0_12px_rgba(0,255,255,0.3)] bg-black/40 backdrop-blur-md space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-200">Name</label>
            <input
              name="name"
              type="text"
              required
              className="w-full p-3 rounded-lg bg-black/60 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-[0_0_6px_rgba(0,255,255,0.25)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-200">Email</label>
            <input
              name="email"
              type="email"
              required
              className="w-full p-3 rounded-lg bg-black/60 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-[0_0_6px_rgba(0,255,255,0.25)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-200">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full p-3 rounded-lg bg-black/60 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-[0_0_6px_rgba(0,255,255,0.25)]"
            />
          </div>

          {/* Submit button */}
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 0 12px rgba(0,255,255,0.6)" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 px-4 bg-cyan-500 text-black font-semibold rounded-lg dark:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Status message */}
        {status && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-sm dark:text-cyan-300 text-cyan-900"
          >
            {status}
          </motion.p>
        )}
      </div>
  );
}
