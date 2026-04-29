export default function Services() {
  const bookingUrl =
    "https://tidycal.com/mohammadareebs/45-minute-prospect-discussion";

  return (
    <section id="services">
      <div className="container">
        <h2 className="section__title">What I actually do for you.</h2>

        <div className="services__grid">
          <div className="services__row">
            <div className="service__card reveal">
              <span className="service__number mono">01</span>
              <h3 className="service__name">Full-Stack Development</h3>
              <p className="service__desc">
                You asked AI how to build your MVP and got 10 contradicting
                answers. You can&rsquo;t justify a $15K consulting engagement
                for a product that doesn&rsquo;t exist yet. I build clean,
                scalable applications across the stack (React/Next.js +
                Django/FastAPI)&nbsp;&mdash; one engineer, end-to-end, shipped
                in weeks. No ambiguity, no coordinator tax.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="service__cta"
              >
                Book a free call <span className="arrow">&rarr;</span>
              </a>
            </div>

            <div className="service__card reveal">
              <span className="service__number mono">02</span>
              <h3 className="service__name">Platform &amp; DevOps Consulting</h3>
              <p className="service__desc">
                Your team is firefighting infrastructure every weekend, and
                AI-generated Kubernetes configs aren&rsquo;t helping. Enterprise
                consultants want a 3-month engagement just to assess the problem.
                I set up CI/CD, Kubernetes, and observability that catch problems
                before your users do&nbsp;&mdash; in days, not quarters.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="service__cta"
              >
                Book a free call <span className="arrow">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="services__row">
            <div className="service__card reveal">
              <span className="service__number mono">03</span>
              <h3 className="service__name">Architecture Design</h3>
              <p className="service__desc">
                ChatGPT told you to use microservices. A consulting firm would
                tell you the same thing (for $20K). Neither knows your team is
                4 people. I design systems that match your team size and growth
                trajectory&nbsp;&mdash; not what&rsquo;s trendy, but what you
                can actually operate and evolve.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="service__cta"
              >
                Book a free call <span className="arrow">&rarr;</span>
              </a>
            </div>

            <div className="service__card service__card--highlighted reveal">
              <span className="service__number mono">04</span>
              <h3 className="service__name">Code Reviews &amp; Mentoring</h3>
              <p className="service__desc">
                AI-generated code reviews miss context. Senior consultants
                parachute in, deliver a PDF, and leave. I establish code review
                standards that stick, pair sessions that teach, and mentoring
                that turns developers into owners&nbsp;&mdash; because I&rsquo;ve
                done this at 5 companies and seen what actually works.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="service__cta"
              >
                Book a free call <span className="arrow">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
