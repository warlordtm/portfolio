"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home",     href: "/"         },
  { label: "About",    href: "/aboutme"  },
  { label: "Projects", href: "/#projects" },
  { label: "Blog",     href: "/blog"     },
];

export default function NavBar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive]         = useState("Home");

  /* Scroll-aware background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on resize */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 top-0 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-[#050816]/90 border-b border-white/8 shadow-lg"
            : "backdrop-blur-md bg-transparent"
        }`}
        id="navbar"
      >
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="gradient-text">Godwin</span>
            <span className="text-white/60">.dev</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === link.label
                    ? "text-violet-400 bg-violet-500/10"
                    : "text-slate-300 hover:text-white hover:bg-white/6"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Hire Me CTA */}
            <Link
              href="/#contact"
              id="hire-me-btn"
              className="ml-4 px-5 py-2 btn-primary text-sm rounded-xl"
            >
              <span>Hire Me</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/6 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#090d1f]/95 backdrop-blur-xl border-b border-white/8 md:hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => { setActive(link.label); setMobileOpen(false); }}
                  className="px-4 py-3 rounded-xl text-slate-200 hover:text-white hover:bg-white/6 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 btn-primary text-sm rounded-xl text-center"
              >
                <span>Hire Me</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
