export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <h2 className="section__title">How we start working together.</h2>

        <div className="process__grid">
          <div className="process__step reveal">
            <span className="process__num mono">01</span>
            <h3 className="process__name">Free strategy call</h3>
            <p className="process__text">
              You tell me where you are. I tell you what I&rsquo;d build first
              and whether I&rsquo;m the right fit. 45 minutes, no obligation.
            </p>
          </div>

          <div className="process__step reveal">
            <span className="process__num mono">02</span>
            <h3 className="process__name">Two-week discovery sprint</h3>
            <p className="process__text">
              I deliver a concrete DPP architecture plan tailored to your supply
              chain. No lock-in. If it&rsquo;s not right, you walk away with a
              roadmap you can hand to anyone.
            </p>
          </div>

          <div className="process__step reveal">
            <span className="process__num mono">03</span>
            <h3 className="process__name">Build alongside your team</h3>
            <p className="process__text">
              I work with your team week by week. Working code every sprint.
              Cancel anytime with 2 weeks notice.
            </p>
          </div>

          <div className="process__step reveal">
            <span className="process__num mono">04</span>
            <h3 className="process__name">Handoff-ready</h3>
            <p className="process__text">
              Everything I build is documented so your team can maintain it
              without me. No dependency, no lock-in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
