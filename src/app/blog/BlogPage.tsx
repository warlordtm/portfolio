"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { blogs } from "@/data/blogs";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function BlogPage() {
  return (
    <>
      <NavBar />
      <main
        className="min-h-screen pt-24 pb-24 px-6"
        style={{ background: "linear-gradient(180deg, #050816 0%, #090d1f 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#8B5CF6" }}
            >
              Articles
            </p>
            <h1
              className="text-5xl font-bold mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              The{" "}
              <span className="gradient-text">Blog</span>
            </h1>
            <p style={{ color: "#94A3B8" }}>
              Project breakdowns, developer insights and lessons learned along the way.
            </p>
            <div className="section-divider mt-6 max-w-xs mx-auto" />
          </motion.div>

          {/* Blog Posts */}
          <div className="flex flex-col gap-6">
            {blogs.map((post, i) => (
              <motion.article
                key={post.slug}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -4 }}
                className="glass rounded-2xl overflow-hidden flex flex-col sm:flex-row group"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {/* Image */}
                {post.image && (
                  <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-7 flex flex-col justify-between flex-1">
                  <div>
                    <div
                      className="flex items-center gap-2 text-xs mb-3"
                      style={{ color: "#64748B" }}
                    >
                      <Calendar size={12} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <h2
                      className="text-xl font-semibold mb-2 leading-snug"
                      style={{ color: "#F8FAFC", fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                      {post.description}
                    </p>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 group/link"
                    style={{ color: "#8B5CF6" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#A78BFA")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#8B5CF6")}
                  >
                    Read article
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Empty state */}
          {blogs.length === 0 && (
            <div className="text-center py-20" style={{ color: "#475569" }}>
              <p className="text-lg">No posts yet - check back soon!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
