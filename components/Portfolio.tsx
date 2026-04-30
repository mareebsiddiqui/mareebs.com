export default function Portfolio() {
  const projects = [
    {
      num: "01",
      name: "Autilient",
      headline: "Cut device costs by $4,200/year",
      hook: "Rewrote IoT monitoring software in Go for a trucking fleet platform.",
      results: [
        "75% CPU reduction",
        "98% memory reduction",
        "144% packet throughput",
        "5 pilots in 2 weeks",
      ],
      techs: ["Go", "Kafka", "Terraform", "GCP", "Grafana"],
      company: "ByteCorp.ai",
    },
    {
      num: "02",
      name: "SHAED",
      headline: "API response: 32 seconds to under 1",
      hook: "Led 10-person team building an EV trucking SaaS with 3D configurator and white-label deployment.",
      results: [
        "97% faster load times",
        "50% faster deployments",
        "White-label rollouts",
        "Multi-region K8s",
      ],
      techs: ["React", "FastAPI", "Kubernetes", "Helm", "Terraform"],
      company: "ByteCorp.ai",
    },
    {
      num: "03",
      name: "Dealer App",
      headline: "30% more leads with under 200ms search",
      hook: "Real-time leads tracking and Algolia-powered search for the largest classifieds platform in the UAE.",
      results: [
        "60% revenue growth",
        "40% faster APIs",
        "95% faster search",
        "Org-wide AI framework",
      ],
      techs: ["Python", "Algolia", "Kinesis", "RabbitMQ", "K8s"],
      company: "Dubizzle",
    },
    {
      num: "04",
      name: "ALEF",
      headline: "Translate lengthy documents in under 2 minutes",
      hook: "Built an in-house LLMOps infrastructure - no OpenAI dependency.",
      results: [
        "In-house LLM on GCP Vertex AI",
        "AWS CodeBuild + CodeDeploy pipeline",
        "SQS job queue",
        "Full observability",
      ],
      techs: ["GCP Vertex AI", "AWS", "Python", "LLMOps"],
      company: "ByteCorp.ai",
    },
    {
      num: "05",
      name: "Course Streaming Platform",
      headline: "AI-powered education platform, built solo",
      hook: "End-to-end course creation with AI content generation, video streaming, and payments.",
      results: [
        "OpenAI course generation",
        "AWS video transcoding",
        "Adaptive streaming",
        "Stripe payments",
      ],
      techs: ["Next.js", "Django", "OpenAI", "AWS"],
      company: "Freelance",
    },
    {
      num: "06",
      name: "Live Video Calling",
      headline: "Real-time video calling with per-session payments",
      hook: "WebRTC peer connections with Redis signaling and Stripe billing per call.",
      results: [
        "Sub-second connection",
        "Redis pub/sub signaling",
        "Per-session Stripe payments",
        "Call recording + monitoring",
      ],
      techs: ["Next.js", "Redis", "Stripe", "AWS"],
      company: "Freelance",
    },
    {
      num: "07",
      name: "Digital Qari",
      headline: "1-on-1 live tutoring with AWS Chime",
      hook: "Audio/video calling platform for an online tutoring marketplace.",
      results: [
        "AWS Chime integration",
        "Beanstalk deployment",
        "Automated CI/CD with CodeDeploy",
        "Session scheduling + recording",
      ],
      techs: ["AWS Chime", "AWS Beanstalk", "CodeDeploy"],
      company: "Digital Qari",
    },
    {
      num: "08",
      name: "Restaurant Discovery",
      headline: "Find nearby restaurants in milliseconds",
      hook: "Cross-platform restaurant search with geolocation and Redis-cached results.",
      results: [
        "MongoDB geospatial queries",
        "Redis caching",
        "Cross-platform (web + mobile)",
        "Cuisine filtering + reviews",
      ],
      techs: ["React Native", "MongoDB", "Redis"],
      company: "Freelance",
    },
    {
      num: "09",
      name: "Skill Barter",
      headline: "Peer-to-peer skill exchange marketplace",
      hook: "Platform where users trade skills instead of money - design for code, music for marketing.",
      results: [
        "Matching algorithm",
        "Real-time chat",
        "Review/rating trust system",
        "User skill profiles",
      ],
      techs: ["React", "PHP", "MySQL"],
      company: "Freelance",
    },
    {
      num: "10",
      name: "Network and Chill",
      headline: "Zero-ops serverless backend for mobile",
      hook: "Fully serverless backend architecture with no infrastructure to manage.",
      results: [
        "Netlify Functions for API",
        "GitHub Actions CI/CD",
        "Zero server maintenance",
        "Instant scaling",
      ],
      techs: ["Netlify Functions", "GitHub Actions"],
      company: "ByteCorp.ai",
    },
  ];

  return (
    <section id="portfolio">
      <div className="container">
        <h2 className="section__title">What I&rsquo;ve built.</h2>

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
