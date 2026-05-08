"use client";

export default function Positioning() {
  return (
    <section id="positioning">
      <div className="container">
        <h2 className="section__title">You have 18 months and three options.</h2>
        <p className="section__subtitle">
          Two of them put your DPP deadline at risk. Here&rsquo;s why.
        </p>

        <div className="positioning__grid">
          {/* Hire a Full-Time CTO */}
          <div className="positioning__card positioning__card--faded reveal">
            <span className="positioning__icon mono">$250K</span>
            <h3 className="positioning__name">Hire a Full-Time CTO</h3>
            <ul className="positioning__traits">
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                &euro;200-300K salary + equity before they write a line of code
              </li>
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                3 months to hire, 3 months to ramp. That&rsquo;s a third of your runway to deadline.
              </li>
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                Senior engineers leave once the hard architecture is done
              </li>
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                You need architecture decisions now, not a department to manage
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
                Built systems that track millions of products from factory to customer
              </li>
              <li className="positioning__trait positioning__trait--positive">
                <span className="positioning__marker">&#10003;</span>
                Shipped IoT device infrastructure identical to DPP data carriers
              </li>
              <li className="positioning__trait positioning__trait--positive">
                <span className="positioning__marker">&#10003;</span>
                I build alongside your team. Working code every sprint, not slide decks.
              </li>
              <li className="positioning__trait positioning__trait--positive">
                <span className="positioning__marker">&#10003;</span>
                No equity, no 12-month lock-in. Cancel anytime.
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
                Senior sold the deal, juniors write your traceability code
              </li>
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                &euro;50K later, you get a system that doesn&rsquo;t meet EU requirements
              </li>
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                They&rsquo;ve never read the DPP regulation. They&rsquo;ll learn it on your budget and your timeline.
              </li>
              <li className="positioning__trait positioning__trait--negative">
                <span className="positioning__marker">&times;</span>
                They optimize for billable hours, not your compliance deadline
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
