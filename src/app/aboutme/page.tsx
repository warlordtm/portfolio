"use client";
import NavBar from "@/components/NavBar";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <NavBar/>
      <section id="about" className="mt-20 min-h-screen pt-24 px-6 bg-white dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m passionate about building web applications that are not only functional,
            but also secure, scalable, and reliable. My focus is on authentication,
            authorization, and secure design principles, the foundations of trustworthy
            software.
          </p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            For me, security goes beyond writing code. It’s about asking the right
            questions, anticipating risks, and applying discipline to build systems the
            right way, even when shortcuts are tempting.
          </p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I approach projects with a balance of creativity and precision, starting
            small, iterating quickly, and staying curious enough to explore what I don’t
            know yet. This mindset allows me to confidently tackle everything from
            elegant front-end interfaces to complex full-stack applications that can
            scale and stand up to real-world demands.
          </p>
        </motion.div>
      </section>
    </>
  );
}
