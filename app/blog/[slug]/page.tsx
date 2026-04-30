import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getPostBySlug, getBlocks } from "@/lib/notion";
import NotionBlockRenderer from "@/components/blog/NotionBlockRenderer";
import BlogNavbar from "@/components/blog/BlogNavbar";
import Footer from "@/components/Footer";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  return [];
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} - Areeb Siddiqui`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: post.coverUrl ? [{ url: post.coverUrl }] : [],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const blocks = await getBlocks(post.id);

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <>
      <BlogNavbar />
      <main>
        <article className="post container">
          <header className="post__header">
            {post.type && (
              <span className="post__type mono">{post.type}</span>
            )}
            <h1 className="post__title">{post.title}</h1>
            <time className="post__date mono">{formattedDate}</time>
            {post.coverUrl && (
              <Image
                src={post.coverUrl}
                alt={post.title}
                width={720}
                height={400}
                className="post__cover"
                priority
              />
            )}
          </header>
          <div className="post__body">
            <NotionBlockRenderer blocks={blocks} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
