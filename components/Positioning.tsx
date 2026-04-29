"use client";

export default function Positioning() {
  return (
    <section id="positioning">
      <div className="container">
        <h2 className="section__title">You have three options.</h2>
        <p className="section__subtitle">
          For engineering decisions that actually matter, here&rsquo;s what each
          one gives you.
        </p>

        <div className="positioning__grid">
          {/* AI Chatbots */}
          <div className="positioning__card positioning__card--faded reveal">
            <span className="positioning__icon mono">{"{ }"}</span>
            <h3 className="positioning__name">AI Chatbots</h3>
            <ul className="positioning__traits">
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                Hallucinate confidently&nbsp;&mdash; you can&rsquo;t tell
                what&rsquo;s wrong
              </li>
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                Generic answers with no context on your stack
              </li>
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                You still spend hours validating the output
              </li>
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                No accountability if advice breaks production
              </li>
            </ul>
            <div className="positioning__price">
              <span className="positioning__cost mono">$0 &ndash; $20/mo</span>
              <span className="positioning__caveat">
                + hours of your time researching
              </span>
            </div>
          </div>

          {/* Work With Areeb (highlighted) */}
          <div className="positioning__card positioning__card--highlighted reveal">
            <span className="positioning__badge mono">RECOMMENDED</span>
            <span className="positioning__icon mono">{"//"}</span>
            <h3 className="positioning__name">Work With Areeb</h3>
            <ul className="positioning__traits">
              <li className="positioning__trait positioning__trait--positive">
                <span className="positioning__marker">&#10003;</span>
                Specific answers from 13 years of production experience
              </li>
              <li className="positioning__trait positioning__trait--positive">
                <span className="positioning__marker">&#10003;</span>
                Context-aware&nbsp;&mdash; understands your stack, team size,
                constraints
              </li>
              <li className="positioning__trait positioning__trait--positive">
                <span className="positioning__marker">&#10003;</span>
                Direct access&nbsp;&mdash; no account managers, no layers
              </li>
              <li className="positioning__trait positioning__trait--positive">
                <span className="positioning__marker">&#10003;</span>
                Accountable&nbsp;&mdash; I stand behind every recommendation
              </li>
            </ul>
            <div className="positioning__price">
              <span className="positioning__cost mono">
                $20/hr or $500/mo
              </span>
              <span className="positioning__caveat">
                Flat rates. No surprises.
              </span>
            </div>
            <a
              href="https://tidycal.com/mohammadareebs/45-minute-prospect-discussion"
              target="_blank"
              rel="noopener noreferrer"
              className="positioning__cta"
            >
              Book a free call <span className="arrow">&rarr;</span>
            </a>
          </div>

          {/* Consulting Firms */}
          <div className="positioning__card positioning__card--faded reveal">
            <span className="positioning__icon mono">$$$</span>
            <h3 className="positioning__name">Consulting Firms</h3>
            <ul className="positioning__traits">
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                $5K &ndash; $25K/month retainers
              </li>
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
            </ul>
            <div className="positioning__price">
              <span className="positioning__cost mono">
                $5K &ndash; $25K/mo
              </span>
              <span className="positioning__caveat">+ long-term contracts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
