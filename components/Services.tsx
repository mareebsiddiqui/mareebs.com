export default function Services() {
  const bookingUrl =
    "https://tidycal.com/mohammadareebs/45-minute-prospect-discussion";

  return (
    <section id="services">
      <div className="container">
        <h2 className="section__title">Work with me.</h2>
        <p className="section__subtitle">
          Three ways to get senior engineering leadership without the
          full-time hire.
        </p>

        <div className="services__grid">
          <div className="service__card service__card--primary reveal">
            <h3 className="service__name">Fractional CTO</h3>
            <p className="service__tagline">
              Strategic + hands-on engineering leadership, monthly.
            </p>
            <p className="service__for">
              For startups that need a senior technical voice in the room but
              aren&rsquo;t ready for a full-time CTO hire.
            </p>
            <ul className="service__checklist">
              <li>Architecture decisions and system design</li>
              <li>DevOps and infrastructure setup</li>
              <li>Code reviews and engineering standards</li>
              <li>Team mentoring and hiring guidance</li>
              <li>Direct Slack/call access - no layers</li>
            </ul>
            <p className="service__proof">
              This is how I drove 60% revenue growth at Dubizzle.
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
            <h3 className="service__name">MVP Sprint</h3>
            <p className="service__tagline">
              Full-stack product, shipped end-to-end.
            </p>
            <p className="service__for">
              For founders who need a production-ready MVP built fast by one
              senior engineer - not a team of juniors.
            </p>
            <ul className="service__checklist">
              <li>Full-stack development (React/Next.js + Django/FastAPI)</li>
              <li>CI/CD and deployment setup</li>
              <li>Payment integration (Stripe)</li>
              <li>Production monitoring and observability</li>
              <li>Handoff documentation</li>
            </ul>
            <p className="service__proof">
              I&rsquo;ve shipped 20+ products this way - solo, end-to-end.
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
            <h3 className="service__name">Technical Audit</h3>
            <p className="service__tagline">
              Find what&rsquo;s slowing you down, fix what matters.
            </p>
            <p className="service__for">
              For teams that know something is wrong - slow deploys, scaling
              issues, tech debt - but need an expert eye to prioritize.
            </p>
            <ul className="service__checklist">
              <li>System architecture review</li>
              <li>Performance and scalability audit</li>
              <li>Infrastructure and DevOps assessment</li>
              <li>Prioritized action plan with estimated effort</li>
              <li>Optional: stay on to implement fixes</li>
            </ul>
            <p className="service__proof">
              At ByteCorp, my audit led to 75% CPU reduction and $4,200/yr
              saved per device.
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
    </section>
  );
}
