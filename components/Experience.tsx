export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section__title">Where I&rsquo;ve delivered results.</h2>

        <div className="experience__grid">
          <div className="experience__card reveal">
            <h3 className="experience__headline">Zero-Downtime Data Migrations</h3>
            <p className="experience__impact">
              Automated Looker to Lightdash migration. Zero-downtime PipelineWise
              to Apache Flink migration. Analytics platform processing billions of
              events.
            </p>
            <div className="experience__meta">
              <span className="experience__company mono">Wise</span>
              <span className="experience__date">Feb 2026 - Present</span>
              <span className="experience__role">Platform Engineer</span>
            </div>
          </div>

          <div className="experience__card reveal">
            <h3 className="experience__headline">60% Revenue Growth</h3>
            <p className="experience__impact">
              Real-time leads tracking drove 30% more conversions. Algolia search
              under 200ms. 40% faster API response times. Built org-wide AI
              framework with RabbitMQ.
            </p>
            <div className="experience__meta">
              <span className="experience__company mono">Dubizzle</span>
              <span className="experience__date">Apr 2024 - 2026</span>
              <span className="experience__role">Software Engineer</span>
            </div>
          </div>

          <div className="experience__card reveal">
            <h3 className="experience__headline">$4,200 Saved Per Device, Per Year</h3>
            <p className="experience__impact">
              Led 10-member team across 3 products. Rewrote IoT software in Go:
              75% less CPU, 98% less memory. 144% packet throughput boost. 5 pilots
              secured in 2 weeks.
            </p>
            <div className="experience__meta">
              <span className="experience__company mono">ByteCorp.ai</span>
              <span className="experience__date">Jan 2023 - Apr 2024</span>
              <span className="experience__role">Software Engineer</span>
            </div>
          </div>

          <div className="experience__card reveal">
            <h3 className="experience__headline">90% Fewer Production Errors</h3>
            <p className="experience__impact">
              Built Redis dead letter queue microservice as a sidecar. 60% reduction
              in orphaned async jobs. 80% SonarQube quality rating. 100% accuracy
              document classifier.
            </p>
            <div className="experience__meta">
              <span className="experience__company mono">Securiti.ai</span>
              <span className="experience__date">Jul - Dec 2022</span>
              <span className="experience__role">Software Engineer</span>
            </div>
          </div>

          <div className="experience__card reveal">
            <h3 className="experience__headline">Critical Payment Bug Fixed</h3>
            <p className="experience__impact">
              Resolved payout bug affecting multiple cycles. 95% test coverage with
              TDD. 90% error rate reduction. Trusted with systems that handle real
              money.
            </p>
            <div className="experience__meta">
              <span className="experience__company mono">SWVL</span>
              <span className="experience__date">Feb - Jun 2022</span>
              <span className="experience__role">Software Engineer</span>
            </div>
          </div>

          <div className="experience__card reveal">
            <h3 className="experience__headline">20+ Products Shipped End-to-End</h3>
            <p className="experience__impact">
              MVPs, streaming platforms, e-commerce, real-time systems. Every stack,
              every layer. One engineer, zero handoffs, 10+ years.
            </p>
            <div className="experience__meta">
              <span className="experience__company mono">Freelance</span>
              <span className="experience__date">2014 - Present</span>
              <span className="experience__role">Full-Stack Engineer &amp; Consultant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
