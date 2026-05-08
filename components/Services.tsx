export default function Services() {
  const bookingUrl =
    "https://tidycal.com/mohammadareebs/45-minute-prospect-discussion";

  return (
    <section id="services">
      <div className="container">
        <h2 className="section__title">FashionTech CTO Services: DPP, AI &amp; Supply Chain</h2>
        <p className="section__subtitle">
          Three ways I help you hit the DPP deadline without hiring a full-time CTO.
        </p>

        <div className="services__grid">
          <div className="service__card service__card--primary reveal">
            <h3 className="service__name">Lead My FashionTech Engineering</h3>
            <p className="service__highlight">
              Billions of data events at Wise, IoT device infrastructure at ByteCorp
            </p>
            <p className="service__tagline">
              The senior technical decision-maker your FashionTech startup needs -
              without the equity or salary.
            </p>
            <p className="service__for">
              For founders making technical bets on AI, data architecture,
              and compliance who need a senior engineer confirming
              they&rsquo;re building the right thing.
            </p>
            <ul className="service__checklist">
              <li>AI infrastructure (predictive inventory, virtual try-on, personalization)</li>
              <li>DPP compliance architecture and EU registry integration</li>
              <li>Supply chain traceability system design</li>
              <li>Team mentoring and hiring guidance</li>
              <li>Direct Slack/call access, no layers</li>
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
            <h3 className="service__name">Build My DPP Compliance Platform</h3>
            <p className="service__highlight">
              Data privacy platform at Securiti.ai, IoT device management at ByteCorp
            </p>
            <p className="service__tagline">
              Your Digital Product Passport infrastructure, built production-ready
              by an engineer who&rsquo;s built compliance systems and IoT device pipelines.
            </p>
            <p className="service__for">
              For founders staring at the 2027 deadline with no clear
              technical plan for how product data gets into the EU registry.
            </p>
            <ul className="service__checklist">
              <li>Product data structured to pass EU registry requirements</li>
              <li>NFC/QR tags on your products that link to full product history</li>
              <li>All supplier data unified into one queryable system</li>
              <li>Formatted so your data works with every retailer in Europe</li>
              <li>Handoff documentation your team can maintain without me</li>
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
            <h3 className="service__name">Fix My Supply Chain Data</h3>
            <p className="service__highlight">
              75% infrastructure cost reduction, 90% error reduction at scale
            </p>
            <p className="service__tagline">
              Find the data silos, interoperability failures, and scaling
              bottlenecks trapping your supply chain in spreadsheets.
            </p>
            <p className="service__for">
              For teams where supplier data lives in 40 different spreadsheets,
              traceability is someone&rsquo;s side job, and AI feels impossible
              with data this messy.
            </p>
            <ul className="service__checklist">
              <li>Full supply chain data audit (where is everything?)</li>
              <li>Architecture plan to unify it into one system</li>
              <li>AI readiness assessment (can your data support predictive inventory?)</li>
              <li>Prioritized action plan with cost estimates</li>
              <li>Optional: stay on to build it</li>
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
