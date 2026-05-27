"use client";

import { motion } from "framer-motion";
import { Shield, Code, Layout, Server } from "lucide-react";

const services = [
  {
    num: "01",
    icon: <Layout className="w-6 h-6" />,
    iconBg: "from-violet-500 to-purple-600",
    title: "Custom Website & Web App Development",
    description:
      "I build modern, secure and responsive websites and web applications that work seamlessly across all devices - from idea to deployment.",
  },
  {
    num: "02",
    icon: <Code className="w-6 h-6" />,
    iconBg: "from-cyan-500 to-sky-600",
    title: "UI/UX Design & Frontend Development",
    description:
      "Beautiful, user-friendly designs coded with React, Next.js and Tailwind CSS - making your site easy to use, engaging and fast.",
  },
  {
    num: "03",
    icon: <Shield className="w-6 h-6" />,
    iconBg: "from-rose-500 to-pink-600",
    title: "Website Security & Authentication",
    description:
      "Protect your platform with secure login systems, 2FA and defence against common web threats - building trust with your users from day one.",
  },
  {
    num: "04",
    icon: <Server className="w-6 h-6" />,
    iconBg: "from-emerald-500 to-green-600",
    title: "API Integration & Backend Solutions",
    description:
      "Connect your app with payment systems, social media or third-party tools. Reliable backend performance you can depend on.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 px-6"
      style={{ background: "linear-gradient(180deg, #090d1f 0%, #050816 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#8B5CF6" }}
          >
            What I Do
          </p>
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            My{" "}
            <span className="gradient-text">Services</span>
          </h2>
          <div className="section-divider mt-6 max-w-xs mx-auto" />
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -4,
                boxShadow: "0 0 30px rgba(139,92,246,0.15), 0 0 60px rgba(139,92,246,0.05)",
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-7 relative overflow-hidden cursor-default"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Large number watermark */}
              <span
                className="absolute top-4 right-5 text-7xl font-black select-none pointer-events-none"
                style={{ color: "rgba(255,255,255,0.03)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {service.num}
              </span>

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white bg-gradient-to-br ${service.iconBg}`}
              >
                {service.icon}
              </div>

              {/* Number label */}
              <p
                className="text-xs font-bold tracking-widest uppercase mb-2"
                style={{ color: "#8B5CF6" }}
              >
                {service.num}
              </p>

              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: "#F8FAFC", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
