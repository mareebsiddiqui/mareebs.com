export default function Services() {
  const bookingUrl =
    "https://tidycal.com/mohammadareebs/45-minute-prospect-discussion";

  return (
    <section id="services">
      <div className="container">
        <h2 className="section__title">How I drive results.</h2>

        <div className="services__grid">
          <div className="services__row">
            <div className="service__card reveal">
              <span className="service__number mono">01</span>
              <h3 className="service__name">Full-Stack Development</h3>
              <p className="service__desc">
                Ship your MVP in weeks, not quarters. I build production-ready
                applications across the full stack&nbsp;&mdash; one senior
                engineer, end-to-end. No coordinator tax, no rework. You get a
                product that&rsquo;s built to grow from day one.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="service__cta"
              >
                Book a strategy call <span className="arrow">&rarr;</span>
              </a>
            </div>

            <div className="service__card reveal">
              <span className="service__number mono">02</span>
              <h3 className="service__name">Platform &amp; DevOps</h3>
              <p className="service__desc">
                Stop losing weekends to infrastructure fires. I set up CI/CD,
                Kubernetes, and observability that catch problems before your
                users do. Teams I&rsquo;ve worked with saw 90% fewer production
                errors and deployed with confidence instead of anxiety.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="service__cta"
              >
                Book a strategy call <span className="arrow">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="services__row">
            <div className="service__card reveal">
              <span className="service__number mono">03</span>
              <h3 className="service__name">Architecture Design</h3>
              <p className="service__desc">
                Get a system architecture designed for your actual
                team&nbsp;&mdash; not what&rsquo;s trending on Hacker News.
                I&rsquo;ve designed systems for 4-person startups and 10-person
                teams, optimizing for the growth stage you&rsquo;re at today
                and the scale you&rsquo;ll need tomorrow.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="service__cta"
              >
                Book a strategy call <span className="arrow">&rarr;</span>
              </a>
            </div>

            <div className="service__card service__card--highlighted reveal">
              <span className="service__number mono">04</span>
              <h3 className="service__name">Code Reviews &amp; Mentoring</h3>
              <p className="service__desc">
                Turn your developers into technical owners. I run pair sessions
                that teach, establish code review standards that stick, and
                mentor engineers into leaders. The result: a self-sufficient
                team that ships confidently&nbsp;&mdash; even after our
                engagement ends.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="service__cta"
              >
                Book a strategy call <span className="arrow">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
