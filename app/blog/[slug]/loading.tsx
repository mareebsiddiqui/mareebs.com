import BlogNavbar from "@/components/blog/BlogNavbar";

export default function Loading() {
  return (
    <>
      <BlogNavbar />
      <main>
        <article className="post container">
          <header className="post__header">
            <div className="skeleton skeleton--type" />
            <div className="skeleton skeleton--title" />
            <div className="skeleton skeleton--date" />
          </header>
          <div className="post__body">
            <div className="skeleton skeleton--paragraph" />
            <div className="skeleton skeleton--paragraph" />
            <div className="skeleton skeleton--paragraph skeleton--short" />
          </div>
        </article>
      </main>
    </>
  );
}
