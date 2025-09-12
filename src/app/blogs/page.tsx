import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data/blogs";
import NavBar from "@/components/NavBar";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-purple-900 text-white">
      <NavBar />
      <section className="pt-28 pb-20">
        <h1 className="text-4xl font-bold text-center mb-10">My Blog</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {blogs.map((b, i) => (
            <BlogCard key={i} blog={b} />
          ))}
        </div>
      </section>
    </main>
  );
}
