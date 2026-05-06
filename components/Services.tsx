export default function Services() {
  const bookingUrl =
    "https://tidycal.com/mohammadareebs/45-minute-prospect-discussion";

  return (
    <section id="services">
      <div className="container">
        <h2 className="section__title">Work with me.</h2>
        <p className="section__subtitle">
          Three ways I solve technical leadership gaps for fintech companies -
          without the full-time CTO salary.
        </p>

        <div className="services__grid">
          <div className="service__card service__card--primary reveal">
            <h3 className="service__name">Lead My Fintech Engineering</h3>
            <p className="service__highlight">
              90% fewer payment errors at SWVL, billions of events at Wise
            </p>
            <p className="service__tagline">
              The senior technical decision-maker your fintech needs - without
              the equity or salary.
            </p>
            <p className="service__for">
              For founders making architecture decisions on payment systems,
              compliance infrastructure, and transaction processing
              they&rsquo;re not sure are right.
            </p>
            <ul className="service__checklist">
              <li>Payment system architecture and ledger design</li>
              <li>Compliance infrastructure (PCI-DSS, KYC/AML)</li>
              <li>Transaction processing and settlement pipelines</li>
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
            <h3 className="service__name">Build My Payment Platform</h3>
            <p className="service__highlight">
              20+ products shipped including payment integrations
            </p>
            <p className="service__tagline">
              Your fintech product, built production-ready by an engineer
              who&rsquo;s worked on payment systems at SWVL and Wise.
            </p>
            <p className="service__for">
              For founders who&rsquo;ve been burned by agencies building payment
              code that can&rsquo;t handle reconciliation, edge cases, or
              audits.
            </p>
            <ul className="service__checklist">
              <li>Payment integration (Stripe, ledger systems, settlement)</li>
              <li>Full-stack development (React/Next.js + Django/FastAPI)</li>
              <li>CI/CD and deployment with compliance in mind</li>
              <li>Production monitoring and transaction observability</li>
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
            <h3 className="service__name">Fix My Payment Infrastructure</h3>
            <p className="service__highlight">
              75% CPU reduction, 90% error reduction at scale
            </p>
            <p className="service__tagline">
              Find the payment failures, reconciliation errors, and scaling
              bottlenecks that are costing you transactions.
            </p>
            <p className="service__for">
              For teams where payouts fail silently, reconciliation drifts, and
              nobody knows where the money went.
            </p>
            <ul className="service__checklist">
              <li>Payment flow and reconciliation audit</li>
              <li>Transaction processing performance review</li>
              <li>Infrastructure and compliance assessment</li>
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
