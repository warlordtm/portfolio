"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Download, ArrowRight, Code2, Shield, Rocket, Users } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const stats = [
  { value: "3+",   label: "Years Experience",   icon: <Code2  size={20} /> },
  { value: "15+",  label: "Projects Delivered",  icon: <Rocket size={20} /> },
  { value: "100%", label: "Client Satisfaction", icon: <Users  size={20} /> },
  { value: "5+",   label: "Tech Stacks",         icon: <Shield size={20} /> },
];

const timeline = [
  {
    year: "2022",
    title: "Started Web Development",
    desc: "Began my journey with HTML, CSS and JavaScript - building my first projects and falling in love with the craft.",
  },
  {
    year: "2023",
    title: "Mastered React & Next.js",
    desc: "Dove deep into the React ecosystem, building full-stack apps with Next.js, Tailwind CSS and various databases.",
  },
  {
    year: "2024",
    title: "Security & Scalability Focus",
    desc: "Expanded into cybersecurity fundamentals, authentication systems and building applications that handle real-world threats.",
  },
  {
    year: "2025",
    title: "Freelancing & Open Source",
    desc: "Delivering client projects professionally while contributing to open-source and growing as a developer.",
  },
];

const highlights = [
  "Full-stack development with Next.js & React",
  "Secure authentication systems & 2FA",
  "Database design (SQL & NoSQL)",
  "REST API design & integration",
  "UI/UX - pixel-perfect, responsive layouts",
  "Performance optimisation & deployment",
];

const SOCIALS = [
  { icon: FaGithub,   href: "https://github.com/warlordtm",           label: "GitHub"   },
  { icon: FaLinkedin, href: "https://linkedin.com/in/bamisaye-godwin", label: "LinkedIn" },
  { icon: FaTwitter,  href: "https://twitter.com/zen__code",           label: "Twitter"  },
];

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main
        className="min-h-screen"
        style={{ background: "linear-gradient(180deg, #050816 0%, #090d1f 50%, #050816 100%)" }}
      >
        {/* ── Hero Banner ── */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          {/* Violet radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12 items-center">

              {/* Left - Photo + socials + CTAs */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="md:col-span-2 flex flex-col items-center md:items-start gap-6"
              >
                {/* Gradient ring photo */}
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full animate-spin"
                    style={{
                      background: "conic-gradient(from 0deg, #8B5CF6, #06B6D4, #8B5CF6)",
                      padding: "3px",
                      animationDuration: "8s",
                    }}
                  />
                  <div
                    className="relative w-52 h-52 rounded-full overflow-hidden"
                    style={{ border: "4px solid #050816", zIndex: 1 }}
                  >
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
                </div>

                {/* Name & title */}
                <div className="text-center md:text-left">
                  <h1
                    className="text-3xl font-bold mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F8FAFC" }}
                  >
                    Godwin Bamisaye
                  </h1>
                  <p className="text-sm font-medium" style={{ color: "#8B5CF6" }}>
                    Full-stack Developer
                  </p>
                </div>

                {/* Social icons */}
                <div className="flex gap-3">
                  {SOCIALS.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#64748B",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#A78BFA";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(139,92,246,0.5)";
                        (e.currentTarget as HTMLElement).style.background = "rgba(139,92,246,0.1)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#64748B";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                      }}
                    >
                      <Icon size={17} />
                    </a>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <Link
                    href="/#contact"
                    id="about-hire-btn"
                    className="btn-primary px-6 py-2.5 flex items-center justify-center gap-2 text-sm rounded-xl"
                  >
                    <span>Contact Me</span>
                    <ArrowRight size={15} />
                  </Link>
                  <a
                    href="/cv.pdf"
                    download
                    id="about-cv-btn"
                    className="btn-outline px-6 py-2.5 flex items-center justify-center gap-2 text-sm rounded-xl"
                  >
                    <Download size={15} />
                    <span>Download CV</span>
                  </a>
                </div>
              </motion.div>

              {/* Right - Bio text */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="md:col-span-3"
              >
                <p
                  className="text-sm font-semibold tracking-widest uppercase mb-3"
                  style={{ color: "#8B5CF6" }}
                >
                  About Me
                </p>
                <h2
                  className="text-4xl font-bold mb-6 leading-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Turning{" "}
                  <span className="gradient-text">ideas into</span>{" "}
                  secure, scalable software
                </h2>

                <div className="space-y-4 text-base leading-relaxed" style={{ color: "#94A3B8" }}>
                  <p>
                    I&apos;m a full-stack developer passionate about building
                    web applications that are not only functional, but also secure, scalable and a joy
                    to use. My focus spans{" "}
                    <span style={{ color: "#A78BFA" }}>authentication systems</span>,{" "}
                    <span style={{ color: "#22D3EE" }}>robust APIs</span> and{" "}
                    <span style={{ color: "#4ADE80" }}>pixel-perfect UI</span>.
                  </p>
                  <p>
                    For me, security goes beyond writing code - it&apos;s about asking the right
                    questions, anticipating risks, and applying discipline to build systems the right
                    way, even when shortcuts are tempting.
                  </p>
                  <p>
                    I approach every project with a balance of creativity and precision: starting
                    small, iterating quickly, and staying curious enough to explore what I don&apos;t
                    know yet. Whether it&apos;s an elegant front-end interface or a complex full-stack
                    system, I build things that scale and stand up to real-world demands.
                  </p>
                </div>

                {/* Skill bullet highlights */}
                <div className="mt-8 grid sm:grid-cols-2 gap-2.5">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2.5 text-sm" style={{ color: "#CBD5E1" }}>
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "#8B5CF6" }}
                      />
                      {h}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section
          className="py-16 px-6"
          style={{
            background: "rgba(255,255,255,0.02)",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 text-center"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: "rgba(139,92,246,0.1)", color: "#8B5CF6" }}
                >
                  {stat.icon}
                </div>
                <p
                  className="text-3xl font-bold mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F8FAFC" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs" style={{ color: "#64748B" }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Journey Timeline ── */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p
                className="text-sm font-semibold tracking-widest uppercase mb-3"
                style={{ color: "#8B5CF6" }}
              >
                My Journey
              </p>
              <h2
                className="text-4xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                How I Got{" "}
                <span className="gradient-text">Here</span>
              </h2>
              <div className="section-divider mt-6 max-w-xs mx-auto" />
            </div>

            <div className="relative">
              {/* Vertical gradient line */}
              <div
                className="absolute left-8 top-0 bottom-0 w-px hidden sm:block"
                style={{
                  background: "linear-gradient(180deg, #8B5CF6 0%, #06B6D4 60%, transparent 100%)",
                }}
              />

              <div className="flex flex-col gap-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 items-start"
                  >
                    {/* Year badge */}
                    <div
                      className="flex-shrink-0 w-16 h-16 rounded-2xl items-center justify-center text-sm font-bold hidden sm:flex"
                      style={{
                        background: "rgba(139,92,246,0.1)",
                        border: "1px solid rgba(139,92,246,0.3)",
                        color: "#A78BFA",
                        fontFamily: "'Space Grotesk', sans-serif",
                        zIndex: 1,
                      }}
                    >
                      {item.year}
                    </div>

                    {/* Card */}
                    <div
                      className="glass rounded-2xl p-6 flex-1"
                      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <span
                        className="text-xs font-bold tracking-widest uppercase mb-1 block sm:hidden"
                        style={{ color: "#8B5CF6" }}
                      >
                        {item.year}
                      </span>
                      <h3
                        className="text-lg font-semibold mb-2"
                        style={{ color: "#F8FAFC", fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="py-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center glass rounded-3xl p-12"
            style={{
              border: "1px solid rgba(139,92,246,0.2)",
              background: "rgba(139,92,246,0.04)",
            }}
          >
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#8B5CF6" }}
            >
              Ready to work together?
            </p>
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-base mb-8" style={{ color: "#94A3B8" }}>
              Whether it&apos;s a new product, a redesign, or a complex technical challenge - I&apos;m here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                id="about-cta-contact"
                className="btn-primary px-8 py-3 flex items-center justify-center gap-2 text-base"
              >
                <span>Get In Touch</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/#projects"
                id="about-cta-projects"
                className="btn-outline px-8 py-3 flex items-center justify-center gap-2 text-base"
              >
                <span>View Projects</span>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
