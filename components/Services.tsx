export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2 className="section__title">How I can help.</h2>

        <div className="services__grid">
          <div className="service__card reveal">
            <span className="service__number mono">01</span>
            <h3 className="service__name">Full-Stack Development</h3>
            <p className="service__desc">
              From responsive frontends in React and Next.js to robust APIs in
              Django and FastAPI. End-to-end delivery, not just one side of the
              stack.
            </p>
          </div>

          <div className="service__card reveal">
            <span className="service__number mono">02</span>
            <h3 className="service__name">Platform &amp; DevOps Consulting</h3>
            <p className="service__desc">
              CI/CD pipelines, container orchestration, infrastructure-as-code. I
              help teams ship with confidence and observe what matters.
            </p>
          </div>

          <div className="service__card reveal">
            <span className="service__number mono">03</span>
            <h3 className="service__name">Architecture Design</h3>
            <p className="service__desc">
              System design that fits your stage. Whether you need microservices,
              a well-structured monolith, or something in between&nbsp;&mdash; the
              architecture should serve the business.
            </p>
          </div>

          <div className="service__card reveal">
            <span className="service__number mono">04</span>
            <h3 className="service__name">Code Reviews &amp; Mentoring</h3>
            <p className="service__desc">
              Elevate your team&rsquo;s engineering culture. Structured code
              reviews, pair programming sessions, and mentoring for engineers at
              any level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
