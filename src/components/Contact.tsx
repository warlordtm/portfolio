"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Mail, Send } from "lucide-react";

const SOCIAL = [
  { icon: FaGithub,   href: "https://github.com/warlordtm",            label: "GitHub",   color: "#94A3B8" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/bamisaye-godwin",  label: "LinkedIn", color: "#0A66C2" },
  { icon: FaTwitter,  href: "https://twitter.com/zen__code",            label: "Twitter",  color: "#1DA1F2" },
];

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    const form     = e.currentTarget;
    const formData = new FormData(form);
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name:    formData.get("name"),
        email:   formData.get("email"),
        message: formData.get("message"),
      }),
    });
    if (res.ok) { setStatus("Message sent! ✅"); form.reset(); }
    else          setStatus("Something went wrong ❌");
  };

  return (
    <section
      id="contact"
      className="py-28 px-6"
      style={{ background: "linear-gradient(180deg, #050816 0%, #090d1f 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#8B5CF6" }}
          >
            Get In Touch
          </p>
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Let&apos;s{" "}
            <span className="gradient-text">Work Together</span>
          </h2>
          <div className="section-divider mt-6 max-w-xs mx-auto" />
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-5 gap-10">
          {/* Left column - info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 flex flex-col justify-center gap-8"
          >
            <div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "#F8FAFC", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Got a project in mind?
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                I&apos;m always open to new opportunities - freelance projects, collaborations, or full-time roles. Fill out the form and I&apos;ll get back to you promptly.
              </p>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:godwinbamisaye@gmail.com"
                className="flex items-center gap-3 text-sm group"
                style={{ color: "#94A3B8" }}
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}
                >
                  <Mail size={16} style={{ color: "#8B5CF6" }} />
                </span>
                <span className="group-hover:text-white transition-colors">godwinbamisaye@gmail.com</span>
              </a>
              </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#475569" }}>
                Find me on
              </p>
              <div className="flex gap-3">
                {SOCIAL.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#64748B",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = color;
                      (e.currentTarget as HTMLElement).style.borderColor = `${color}50`;
                      (e.currentTarget as HTMLElement).style.background = `${color}15`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#64748B";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                    }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column - form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-3 glass rounded-2xl p-8 space-y-5"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#CBD5E1" }}
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  className="input-field"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#CBD5E1" }}
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  className="input-field"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium mb-2"
                style={{ color: "#CBD5E1" }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                className="input-field resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === "Sending..."}
              id="contact-submit-btn"
              className="w-full btn-primary py-3.5 flex items-center justify-center gap-2 text-sm font-semibold rounded-xl disabled:opacity-60"
            >
              <span>
                {status === "Sending..." ? "Sending..." : "Send Message"}
              </span>
              <Send size={16} />
            </motion.button>

            {status && status !== "Sending..." && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-center font-medium"
                style={{
                  color: status.includes("✅") ? "#4ADE80" : "#F87171",
                }}
              >
                {status}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
