export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section__title">The tools I reach for.</h2>

        <div className="skills__stack">
          <div className="skills__band">
            <span className="skills__label mono">Languages</span>
            <div className="skills__pills">
              <span className="pill">Python</span>
              <span className="pill">JavaScript</span>
              <span className="pill">TypeScript</span>
              <span className="pill">Go</span>
              <span className="pill">Java</span>
            </div>
          </div>

          <div className="skills__band">
            <span className="skills__label mono">Frameworks</span>
            <div className="skills__pills">
              <span className="pill">React</span>
              <span className="pill">React Native</span>
              <span className="pill">Next.js</span>
              <span className="pill">Django</span>
              <span className="pill">FastAPI</span>
              <span className="pill">NestJS</span>
              <span className="pill">Redux</span>
            </div>
          </div>

          <div className="skills__band">
            <span className="skills__label mono">Infrastructure</span>
            <div className="skills__pills">
              <span className="pill">Docker</span>
              <span className="pill">Kubernetes</span>
              <span className="pill">Helm</span>
              <span className="pill">Terraform</span>
              <span className="pill">GitHub Actions</span>
              <span className="pill">ArgoCD</span>
            </div>
          </div>

          <div className="skills__band">
            <span className="skills__label mono">Messaging</span>
            <div className="skills__pills">
              <span className="pill">Kafka</span>
              <span className="pill">RabbitMQ</span>
              <span className="pill">Celery</span>
            </div>
          </div>

          <div className="skills__band">
            <span className="skills__label mono">Observability</span>
            <div className="skills__pills">
              <span className="pill">Grafana</span>
              <span className="pill">Prometheus</span>
              <span className="pill">Elasticsearch</span>
              <span className="pill">Kibana</span>
              <span className="pill">Sentry</span>
            </div>
          </div>

          <div className="skills__band">
            <span className="skills__label mono">Cloud</span>
            <div className="skills__pills">
              <span className="pill">AWS</span>
              <span className="pill">GCP</span>
            </div>
          </div>

          <div className="skills__band">
            <span className="skills__label mono">Data</span>
            <div className="skills__pills">
              <span className="pill">PostgreSQL</span>
              <span className="pill">MongoDB</span>
              <span className="pill">MySQL</span>
              <span className="pill">Redis</span>
              <span className="pill">Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
