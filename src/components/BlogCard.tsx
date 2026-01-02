"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Blog = {
  title: string;
  slug: string;
  date: string;
  description: string;
  image?: string;
};

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="glass rounded-xl p-4 shadow-neon-md"
    >
      {blog.image && (
        <Image
          src={blog.image}
          alt={blog.title}
          width={400}
          height={176}
          className="rounded-md mb-3 w-full object-cover h-44"
        />
      )}
      <h3 className="font-semibold text-lg text-white">{blog.title}</h3>
      <p className="text-xs text-slate-400">{blog.date}</p>
      <p className="text-sm text-slate-300/80 mt-2">{blog.description}</p>
      <Link
        href={`/blogs/${blog.slug}`}
        className="inline-block mt-3 text-blue-400 hover:underline text-sm"
      >
        Read More →
      </Link>
    </motion.div>
  );
}
