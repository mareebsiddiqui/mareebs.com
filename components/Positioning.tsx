"use client";

export default function Positioning() {
  return (
    <section id="positioning">
      <div className="container">
        <h2 className="section__title">Why founders choose to work with me.</h2>
        <p className="section__subtitle">
          You have three options. Two of them burn cash or time.
        </p>

        <div className="positioning__grid">
          {/* Hire a Full-Time CTO */}
          <div className="positioning__card positioning__card--faded reveal">
            <span className="positioning__icon mono">$250K</span>
            <h3 className="positioning__name">Hire a Full-Time CTO</h3>
            <ul className="positioning__traits">
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                $200-300K salary + equity before they ship anything
              </li>
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                3-month ramp-up to understand your codebase
              </li>
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                They quit in 18 months - you start over
              </li>
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                Overkill if you need decisions, not a department
              </li>
            </ul>
          </div>

          {/* Work With Areeb (highlighted) */}
          <div className="positioning__card positioning__card--highlighted reveal">
            <span className="positioning__icon mono">{"//"}</span>
            <h3 className="positioning__name">Work With Areeb</h3>
            <ul className="positioning__traits">
              <li className="positioning__trait positioning__trait--positive">
                <span className="positioning__marker">&#10003;</span>
                Senior decisions from day one - no ramp-up, no handoffs
              </li>
              <li className="positioning__trait positioning__trait--positive">
                <span className="positioning__marker">&#10003;</span>
                Shaped by your stack, your team size, your burn rate
              </li>
              <li className="positioning__trait positioning__trait--positive">
                <span className="positioning__marker">&#10003;</span>
                I build alongside your team - not just advise from slides
              </li>
              <li className="positioning__trait positioning__trait--positive">
                <span className="positioning__marker">&#10003;</span>
                No equity, no 12-month contract - cancel anytime
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

          {/* Use a Dev Agency */}
          <div className="positioning__card positioning__card--faded reveal">
            <span className="positioning__icon mono">???</span>
            <h3 className="positioning__name">Use a Dev Agency</h3>
            <ul className="positioning__traits">
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                Senior sold the deal, juniors write the code
              </li>
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                $50K later, you get code nobody can maintain
              </li>
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                Zero ownership after handoff - bugs are your problem
              </li>
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                They optimize for billable hours, not your success
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
