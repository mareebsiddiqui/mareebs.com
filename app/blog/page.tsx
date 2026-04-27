import type { Metadata } from "next";
import { getPosts } from "@/lib/notion";
import PostCard from "@/components/blog/PostCard";
import BlogNavbar from "@/components/blog/BlogNavbar";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog — Areeb Siddiqui",
  description:
    "Case studies, essays, and opinions on software engineering, platform design, and building products.",
};

export default async function BlogIndex() {
  const posts = await getPosts();

  return (
    <>
      <BlogNavbar />
      <main className="blog">
        <header className="blog__header container">
          <h1 className="blog__title">Blog</h1>
          <p className="blog__subtitle">
            Case studies, essays, and opinions on engineering.
          </p>
        </header>
        <section className="blog__grid container">
          {posts.length === 0 && (
            <p className="blog__empty">No posts yet. Check back soon.</p>
          )}
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
