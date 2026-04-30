export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section__title">Where I&rsquo;ve made an impact.</h2>

        <div className="experience__grid">
          <div className="experience__card reveal">
            <span className="experience__date mono">Feb 2026 - Present</span>
            <h3 className="experience__company">Wise</h3>
            <span className="experience__role">Platform Engineer</span>
            <ul className="experience__metrics">
              <li>Automated Looker &rarr; Lightdash migration pipeline</li>
              <li>Zero-downtime PipelineWise &rarr; Apache Flink migration</li>
              <li>Analytics Platform team, Tallinn</li>
            </ul>
          </div>

          <div className="experience__card reveal">
            <span className="experience__date mono">Apr 2024 - 2026</span>
            <h3 className="experience__company">Dubizzle</h3>
            <span className="experience__role">Software Engineer</span>
            <ul className="experience__metrics">
              <li><strong>60%</strong> revenue increase via real-time leads tracking</li>
              <li><strong>&lt;200ms</strong> search with Algolia, 30% more leads</li>
              <li><strong>40%</strong> faster API response times</li>
            </ul>
          </div>

          <div className="experience__card reveal">
            <span className="experience__date mono">Jan 2023 - Apr 2024</span>
            <h3 className="experience__company">ByteCorp.ai</h3>
            <span className="experience__role">Software Engineer</span>
            <ul className="experience__metrics">
              <li>Led <strong>10-member</strong> team across 3 products</li>
              <li><strong>Sub-500ms</strong> live fleet tracking dashboard</li>
              <li><strong>$4,200/yr</strong> saved per device via Golang optimization</li>
            </ul>
          </div>

          <div className="experience__card reveal">
            <span className="experience__date mono">Jul - Dec 2022</span>
            <h3 className="experience__company">Securiti.ai</h3>
            <span className="experience__role">Software Engineer</span>
            <ul className="experience__metrics">
              <li><strong>90%</strong> error reduction with dead letter queues</li>
              <li><strong>80%</strong> SonarQube quality rating</li>
              <li><strong>100%</strong> accuracy in document classifier</li>
            </ul>
          </div>

          <div className="experience__card reveal">
            <span className="experience__date mono">Feb - Jun 2022</span>
            <h3 className="experience__company">SWVL</h3>
            <span className="experience__role">Software Engineer</span>
            <ul className="experience__metrics">
              <li>Fixed critical payout bug across <strong>2 cycles</strong></li>
              <li><strong>95%</strong> test coverage with TDD</li>
              <li><strong>90%</strong> error rate reduction</li>
            </ul>
          </div>

          <div className="experience__card reveal">
            <span className="experience__date mono">2014 - Present</span>
            <h3 className="experience__company">Freelance</h3>
            <span className="experience__role">Full-Stack Engineer &amp; Consultant</span>
            <ul className="experience__metrics">
              <li><strong>20+</strong> products shipped end-to-end</li>
              <li>MVPs, streaming platforms, e-commerce, real-time systems</li>
              <li><strong>10+ years</strong> solving problems across every stack</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
