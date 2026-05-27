"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ArrowDown, ExternalLink } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import TypewriterText from "./TypewriterText";

const SOCIAL_LINKS = [
  { icon: FaGithub,   href: "https://github.com/warlordtm",           label: "GitHub"   },
  { icon: FaLinkedin, href: "https://linkedin.com/in/bamisaye-godwin", label: "LinkedIn" },
  { icon: FaTwitter,  href: "https://twitter.com/zen__code",           label: "Twitter"  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050816 0%, #090d1f 60%, #0d0a2e 100%)" }}
    >
      {/* Floating Particles */}
      <ParticleBackground />

      {/* Radial glow backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(139,92,246,0.15) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">


        {/* Profile photo with animated gradient ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mb-8"
        >
          {/* Gradient ring */}
          <div
            className="absolute inset-0 rounded-full animate-spin"
            style={{
              background: "conic-gradient(from 0deg, #8B5CF6, #06B6D4, #8B5CF6)",
              padding: "3px",
              animationDuration: "6s",
            }}
          />
          <div
            className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden"
            style={{ border: "4px solid #050816", position: "relative", zIndex: 1 }}
          >
            {/* inner dark ring */}
            <div className="absolute inset-0 rounded-full" style={{ background: "#050816" }} />
            <Image
              src="/developer.jpeg"
              alt="Godwin Bamisaye - Full-stack Developer"
              fill
              className="rounded-full object-cover"
              style={{ zIndex: 1 }}
              priority
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text text-glow-violet">Godwin Bamisaye</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-xl sm:text-2xl mb-4 min-h-[2rem]"
        >
          <TypewriterText />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-base sm:text-lg max-w-xl sm:max-w-2xl mb-10 leading-relaxed"
          style={{ color: "#94A3B8" }}
        >
          Building modern, secure and scalable web applications with{" "}
          <span style={{ color: "#A78BFA" }}>Next.js</span> and{" "}
          <span style={{ color: "#22D3EE" }}>React</span>. Turning your ideas into reality.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 mb-10"
        >
          <Link
            href="/#projects"
            id="view-work-btn"
            className="btn-primary px-8 py-3 flex items-center justify-center gap-2 text-base"
          >
            <span>View My Work</span>
            <ExternalLink size={16} />
          </Link>
          <a
            href="https://linkedin.com/in/bamisaye-godwin"
            target="_blank"
            rel="noopener noreferrer"
            id="download-cv-btn"
            className="btn-outline px-8 py-3 flex items-center justify-center gap-2 text-base"
          >
            <span>View LinkedIn</span>
            <FaLinkedin size={16} />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex items-center gap-5"
        >
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#94A3B8",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#A78BFA";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(139,92,246,0.5)";
                (e.currentTarget as HTMLElement).style.background = "rgba(139,92,246,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#94A3B8";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: "#475569" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
