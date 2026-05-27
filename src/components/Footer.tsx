"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const LINKS = [
  { label: "Home",     href: "/"         },
  { label: "About",    href: "/aboutme"  },
  { label: "Projects", href: "/#projects" },
  { label: "Blog",     href: "/blog"     },
  { label: "Contact",  href: "/#contact" },
];

const SOCIALS = [
  { icon: FaGithub,   href: "https://github.com/warlordtm",            label: "GitHub"   },
  { icon: FaLinkedin, href: "https://linkedin.com/in/bamisaye-godwin",  label: "LinkedIn" },
  { icon: FaTwitter,  href: "https://twitter.com/zen__code",            label: "Twitter"  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#050816",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
      }}
    >
      {/* Gradient top accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.5), rgba(6,182,212,0.5), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="gradient-text">Godwin</span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>.dev</span>
            </Link>
            <p className="mt-1 text-xs" style={{ color: "#475569" }}>
              Full-stack Developer
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{ color: "#64748B" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#A78BFA")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#64748B")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#64748B",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#A78BFA";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(139,92,246,0.4)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(139,92,246,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#64748B";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-8"
          style={{ height: "1px", background: "rgba(255,255,255,0.05)" }}
        />

        {/* Copyright */}
        <p className="text-center text-xs" style={{ color: "#334155" }}>
          © {new Date().getFullYear()} Godwin Bamisaye.
        </p>
      </div>
    </footer>
  );
}
