export default function BlogNavbar() {
  return (
    <nav className="blog-nav" aria-label="Blog navigation">
      <div className="blog-nav__inner">
        <a href="/" className="blog-nav__logo">
          AS
        </a>
        <ul className="blog-nav__links">
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/#services">Services</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
