"use client";
import { motion } from "framer-motion";
import { Shield, Code, Layout, Server } from "lucide-react";

const services = [
  {
    icon: <Layout className="w-8 h-8 text-blue-500" />,
    title: "Custom Website & Web App Development",
    description:
      "I’ll build you a modern, secure, and responsive website or web application that works seamlessly across all devices.",
  },
  {
    icon: <Code className="w-8 h-8 text-green-500" />,
    title: "UI/UX Design & Frontend Development",
    description:
      "Beautiful, user-friendly designs coded with React, Next.js, and Tailwind CSS — making your site easy to use and engaging.",
  },
  {
    icon: <Shield className="w-8 h-8 text-red-500" />,
    title: "Website Security & Authentication Setup",
    description:
      "Protect your website with secure login systems, 2FA, and defense against online threats to build trust with your users.",
  },
  {
    icon: <Server className="w-8 h-8 text-purple-500" />,
    title: "API Integration & Backend Solutions",
    description:
      "Connect your app with payment systems, social media, or third-party tools. I’ll ensure reliable backend performance.",
  },
];

export default function Services() {
  return (
    <section id="services" className="min-h-screen pt-24 px-6 py-16 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 shadow-neon-md"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
