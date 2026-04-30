export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <div className="achievements__row">
          <div className="achievements__item reveal">
            <span className="achievements__value mono">60%</span>
            <span className="achievements__label">Revenue Growth Delivered</span>
          </div>
          <div className="achievements__divider"></div>
          <div className="achievements__item reveal">
            <span className="achievements__value mono">90%</span>
            <span className="achievements__label">Production Errors Eliminated</span>
          </div>
          <div className="achievements__divider"></div>
          <div className="achievements__item reveal">
            <span className="achievements__value mono">$4,200</span>
            <span className="achievements__label">Saved Per Device, Per Year</span>
          </div>
        </div>
      </div>
    </section>
  );
}
