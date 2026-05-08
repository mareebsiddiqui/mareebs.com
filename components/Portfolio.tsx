export default function Portfolio() {
  const projects = [
    {
      num: "01",
      name: "Autilient",
      headline: "IoT device-to-cloud: $4,200 saved per device/year",
      hook: "Rewrote IoT device management software in Go. Same architecture pattern as NFC/RFID data carrier systems for DPP.",
      results: [
        "75% CPU reduction",
        "98% memory reduction",
        "144% packet throughput",
        "Device-to-cloud Kafka pipelines",
      ],
      techs: ["Device-to-Cloud", "Real-time Tracking", "Scales with Growth", "Full Observability"],
      company: "ByteCorp.ai",
    },
    {
      num: "02",
      name: "Dealer App",
      headline: "60% revenue growth via AI-powered personalization",
      hook: "Real-time data pipelines and AI-powered search for the largest classifieds platform in the UAE.",
      results: [
        "60% revenue growth",
        "AI search under 200ms",
        "Org-wide AI framework",
        "Event-driven architecture",
      ],
      techs: ["AI-Powered Search", "Real-time Pipelines", "Event-Driven", "Scales to Millions"],
      company: "Dubizzle",
    },
    {
      num: "03",
      name: "ALEF",
      headline: "In-house AI infrastructure, no vendor lock-in",
      hook: "Built in-house LLMOps infrastructure on GCP Vertex AI. Zero OpenAI dependency.",
      results: [
        "In-house LLM on GCP Vertex AI",
        "AWS CodeBuild + CodeDeploy pipeline",
        "SQS job queue",
        "Full observability",
      ],
      techs: ["No Vendor Lock-in", "In-House AI", "Full Observability", "Production-Ready"],
      company: "ByteCorp.ai",
    },
    {
      num: "04",
      name: "SHAED",
      headline: "Multi-tenant SaaS with white-label deployment",
      hook: "Led 10-person team building a B2B SaaS with 3D configurator and white-label rollouts per client.",
      results: [
        "97% faster load times",
        "50% faster deployments",
        "White-label rollouts",
        "Multi-region K8s",
      ],
      techs: ["Multi-Tenant", "White-Label", "Fast Deploys", "Multi-Region"],
      company: "ByteCorp.ai",
    },
  ];

  return (
    <section id="portfolio">
      <div className="container">
        <h2 className="section__title">Technical portfolio: IoT, AI, and data infrastructure.</h2>

        <div className="portfolio__grid">
          {projects.map((p) => (
            <div className="portfolio__card reveal" key={p.num}>
              <span className="portfolio__num mono">{p.num}</span>
              <h3 className="portfolio__headline">{p.headline}</h3>
              <p className="portfolio__hook">{p.hook}</p>
              <ul className="portfolio__results">
                {p.results.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
              <div className="portfolio__techs">
                {p.techs.map((t) => (
                  <span className="pill pill--sm" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <span className="portfolio__company mono">{p.company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
