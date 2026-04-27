import Image from "next/image";
import type { PostMeta } from "@/lib/notion";

export default function PostCard({ post }: { post: PostMeta }) {
  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <a href={`/blog/${post.slug}`} className="post-card">
      {post.coverUrl && (
        <div className="post-card__cover">
          <Image
            src={post.coverUrl}
            alt={post.title}
            width={600}
            height={340}
            className="post-card__img"
          />
        </div>
      )}
      <div className="post-card__body">
        <div className="post-card__meta">
          {post.type && (
            <span className="post-card__type mono">{post.type}</span>
          )}
          {formattedDate && (
            <time className="post-card__date mono">{formattedDate}</time>
          )}
        </div>
        <h2 className="post-card__title">{post.title}</h2>
        {post.excerpt && (
          <p className="post-card__excerpt">{post.excerpt}</p>
        )}
        {post.tags.length > 0 && (
          <div className="post-card__tags">
            {post.tags.map((tag) => (
              <span key={tag} className="pill pill--sm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
