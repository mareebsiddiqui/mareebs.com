"use client";

export default function Positioning() {
  return (
    <section id="positioning">
      <div className="container">
        <h2 className="section__title">Why founders choose to work with me.</h2>
        <p className="section__subtitle">
          Not all engineering guidance is created equal. Here&rsquo;s the
          difference in outcomes.
        </p>

        <div className="positioning__grid">
          {/* AI Chatbots */}
          <div className="positioning__card positioning__card--faded reveal">
            <span className="positioning__icon mono">{"{ }"}</span>
            <h3 className="positioning__name">AI Chatbots</h3>
            <ul className="positioning__traits">
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                Generic answers that miss your business context
              </li>
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                No accountability when advice breaks production
              </li>
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                Hours lost validating and debugging output
              </li>
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                Zero understanding of your team, budget, or timeline
              </li>
            </ul>
          </div>

          {/* Work With Areeb (highlighted) */}
          <div className="positioning__card positioning__card--highlighted reveal">
            <span className="positioning__badge mono">RECOMMENDED</span>
            <span className="positioning__icon mono">{"//"}</span>
            <h3 className="positioning__name">Work With Areeb</h3>
            <ul className="positioning__traits">
              <li className="positioning__trait positioning__trait--positive">
                <span className="positioning__marker">&#10003;</span>
                60% revenue growth, 90% error reduction&nbsp;&mdash; results
                I&rsquo;ve already delivered
              </li>
              <li className="positioning__trait positioning__trait--positive">
                <span className="positioning__marker">&#10003;</span>
                Decisions shaped by your stack, team size, and growth stage
              </li>
              <li className="positioning__trait positioning__trait--positive">
                <span className="positioning__marker">&#10003;</span>
                Direct access to a senior engineer&nbsp;&mdash; no layers, no
                handoffs
              </li>
              <li className="positioning__trait positioning__trait--positive">
                <span className="positioning__marker">&#10003;</span>
                Accountable partner who ships alongside your team
              </li>
            </ul>
            <a
              href="https://tidycal.com/mohammadareebs/45-minute-prospect-discussion"
              target="_blank"
              rel="noopener noreferrer"
              className="positioning__cta"
            >
              Book a strategy call <span className="arrow">&rarr;</span>
            </a>
          </div>

          {/* Consulting Firms */}
          <div className="positioning__card positioning__card--faded reveal">
            <span className="positioning__icon mono">$$$</span>
            <h3 className="positioning__name">Consulting Firms</h3>
            <ul className="positioning__traits">
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                Junior consultants do the actual work
              </li>
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                Weeks of onboarding before any deliverable
              </li>
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                One-size-fits-all frameworks, not your reality
              </li>
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                Long contracts with slow feedback loops
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
