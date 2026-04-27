export default function Services() {
  const bookingUrl =
    "https://tidycal.com/mohammadareebs/45-minute-prospect-discussion";

  return (
    <section id="services">
      <div className="container">
        <h2 className="section__title">How I can help.</h2>

        <div className="services__grid">
          <div className="services__row">
            <div className="service__card reveal">
              <span className="service__number mono">01</span>
              <h3 className="service__name">Full-Stack Development</h3>
              <p className="service__desc">
                Your MVP needs to ship in weeks, not months&nbsp;&mdash; without
                the technical debt that slows you down later. I build clean,
                scalable applications across the stack (React/Next.js +
                Django/FastAPI) so you get end-to-end delivery from one engineer
                instead of coordinating three.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="service__cta"
              >
                Book a call <span className="arrow">&rarr;</span>
              </a>
            </div>

            <div className="service__card reveal">
              <span className="service__number mono">02</span>
              <h3 className="service__name">Platform &amp; DevOps Consulting</h3>
              <p className="service__desc">
                Your team spends weekends firefighting infrastructure instead of
                building features. I set up CI/CD, Kubernetes, and observability
                that catch problems before your users do&nbsp;&mdash; so your team
                ships with confidence and you stop losing sleep over deployments.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="service__cta"
              >
                Book a call <span className="arrow">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="services__row">
            <div className="service__card reveal">
              <span className="service__number mono">03</span>
              <h3 className="service__name">Architecture Design</h3>
              <p className="service__desc">
                Wrong architecture choices now cost you years of migration later.
                I design systems that match your team size and growth
                trajectory&nbsp;&mdash; not what&rsquo;s trendy, but what you can
                actually operate and evolve.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="service__cta"
              >
                Book a call <span className="arrow">&rarr;</span>
              </a>
            </div>

            <div className="service__card service__card--highlighted reveal">
              <span className="service__number mono">04</span>
              <h3 className="service__name">Code Reviews &amp; Mentoring</h3>
              <p className="service__desc">
                Reviews that take days, feedback that&rsquo;s vague, juniors who
                aren&rsquo;t growing. I establish code review standards that
                stick, pair sessions that teach, and mentoring that turns
                developers into owners&nbsp;&mdash; without burning out your
                seniors.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="service__cta"
              >
                Book a call <span className="arrow">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
