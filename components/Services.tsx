export default function Services() {
  const bookingUrl =
    "https://tidycal.com/mohammadareebs/45-minute-prospect-discussion";

  return (
    <section id="services">
      <div className="container">
        <h2 className="section__title">Work with me.</h2>
        <p className="section__subtitle">
          Three ways I solve technical leadership gaps - without the
          full-time CTO salary.
        </p>

        <div className="services__grid">
          <div className="service__card service__card--primary reveal">
            <h3 className="service__name">Ongoing CTO Partnership</h3>
            <p className="service__highlight">
              60% revenue growth at Dubizzle
            </p>
            <p className="service__tagline">
              The senior technical decision-maker your startup needs - without
              the equity or salary.
            </p>
            <p className="service__for">
              For founders making architecture, hiring, and infrastructure
              decisions they&rsquo;re not sure are right.
            </p>
            <ul className="service__checklist">
              <li>Architecture decisions and system design</li>
              <li>DevOps and infrastructure setup</li>
              <li>Code reviews and engineering standards</li>
              <li>Team mentoring and hiring guidance</li>
              <li>Direct Slack/call access - no layers</li>
            </ul>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="service__cta"
            >
              Book a free strategy call <span className="arrow">&rarr;</span>
            </a>
          </div>

          <div className="service__card reveal">
            <h3 className="service__name">Build My MVP</h3>
            <p className="service__highlight">
              20+ products shipped solo, end-to-end
            </p>
            <p className="service__tagline">
              Your product, built production-ready by one senior engineer - not
              an agency of juniors.
            </p>
            <p className="service__for">
              For founders who&rsquo;ve been burned by agencies, or can&rsquo;t
              tell if their dev team is building it right.
            </p>
            <ul className="service__checklist">
              <li>Full-stack development (React/Next.js + Django/FastAPI)</li>
              <li>CI/CD and deployment setup</li>
              <li>Payment integration (Stripe)</li>
              <li>Production monitoring and observability</li>
              <li>Handoff documentation</li>
            </ul>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="service__cta"
            >
              Book a free strategy call <span className="arrow">&rarr;</span>
            </a>
          </div>

          <div className="service__card reveal">
            <h3 className="service__name">Fix What&rsquo;s Broken</h3>
            <p className="service__highlight">
              75% CPU reduction, $4,200/yr saved per device at ByteCorp
            </p>
            <p className="service__tagline">
              Find the technical debt that&rsquo;s costing you money, and get a
              plan to fix it.
            </p>
            <p className="service__for">
              For teams where deploys take hours, the app crashes under load,
              and nobody knows where to start.
            </p>
            <ul className="service__checklist">
              <li>System architecture review</li>
              <li>Performance and scalability audit</li>
              <li>Infrastructure and DevOps assessment</li>
              <li>Prioritized action plan with estimated effort</li>
              <li>Optional: stay on to implement fixes</li>
            </ul>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="service__cta"
            >
              Book a free strategy call <span className="arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
