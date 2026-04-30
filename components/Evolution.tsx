export default function Evolution() {
  const milestones = [
    {
      year: "2013",
      title: "Microsoft Certified at 13",
      text: "Building websites at 11. Certified by Microsoft at 13. Over a decade head start on production experience.",
    },
    {
      year: "2016",
      title: "National Finalist at 16",
      text: "Top 25 out of 15,000+ teams at Pakistan Startup Cup. Signed first freelance client the same year.",
    },
    {
      year: "2020",
      title: "7 Products Shipped Solo",
      text: "Streaming platforms, video calling, e-commerce. University by day, freelance by night. Full-stack range.",
    },
    {
      year: "2022",
      title: "Trusted With Payments",
      text: "SWVL and Securiti.ai. 90% error reduction. 95% test coverage. Production-grade systems that handle real money.",
    },
    {
      year: "2026",
      title: "Leading at Scale",
      text: "60% revenue growth at Dubizzle. $4,200/device savings at ByteCorp. Now building analytics infrastructure at Wise.",
    },
  ];

  return (
    <section id="evolution">
      <div className="container">
        <h2 className="section__title">How I got here.</h2>

        <div className="timeline">
          {milestones.map((m, i) => (
            <div className="timeline__item reveal" key={i}>
              <div className="timeline__marker">
                <span className="timeline__year mono">{m.year}</span>
                <span className="timeline__dot"></span>
              </div>
              <div className="timeline__content">
                <h3 className="timeline__title">{m.title}</h3>
                <p className="timeline__text">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
