export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <div className="achievements__row">
          <div className="achievements__item reveal">
            <span className="achievements__value mono">13+</span>
            <span className="achievements__label">Years of Hands-On Engineering</span>
          </div>
          <div className="achievements__divider"></div>
          <div className="achievements__item reveal">
            <span className="achievements__value mono">5</span>
            <span className="achievements__label">Companies Trusted Me in Production</span>
          </div>
          <div className="achievements__divider"></div>
          <div className="achievements__item reveal">
            <span className="achievements__value mono">20+</span>
            <span className="achievements__label">Systems Shipped End-to-End</span>
          </div>
        </div>
      </div>
    </section>
  );
}
