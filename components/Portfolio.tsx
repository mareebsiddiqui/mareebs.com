"use client";

import { useEffect, useRef } from "react";

const ChevronIcon = () => (
  <svg
    className="portfolio__chevron"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M4 6l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const projects = [
  {
    name: "Course Streaming Platform",
    techs: ["Next.js", "Django", "OpenAI", "AWS"],
    desc: "AI-powered course creation and video streaming platform.",
    detail:
      "Built end-to-end from scratch. Implemented AI content generation with OpenAI for course outlines and summaries. Handled video upload, transcoding, and adaptive streaming on AWS. Built creator dashboard, student progress tracking, and Stripe payment integration.",
  },
  {
    name: "Live Video Calling",
    techs: ["Next.js", "Redis", "Stripe", "AWS"],
    desc: "Real-time 1-on-1 video and audio calling with payments.",
    detail:
      "Engineered WebRTC peer connections for real-time video. Built signaling server with Redis pub/sub for low-latency session management. Integrated Stripe for per-session payments. Implemented call scheduling, recording, and quality monitoring.",
  },
  {
    name: "Restaurant Search",
    techs: ["React Native", "MongoDB", "Redis"],
    desc: "Cross-platform restaurant listing with geolocation search.",
    detail:
      "Built for web and mobile with React Native. Implemented geolocation-based search, cuisine filtering, and restaurant profiles with menus and reviews. Used Redis caching for fast results and MongoDB geospatial queries for nearby discovery.",
  },
  {
    name: "Skill Barter",
    techs: ["React", "PHP", "MySQL"],
    desc: "Platform for exchanging skills between users.",
    detail:
      "Designed and built from scratch. Implemented user profiles with skill listings, a matching algorithm for complementary skills, real-time chat for coordination, and a review/rating system to build trust.",
  },
  {
    name: "Meeting Scheduler",
    techs: ["React Native", "Node.js", "MySQL"],
    desc: "Cross-timezone scheduling for distributed teams.",
    detail:
      "Built timezone conversion, availability overlap detection, and calendar sync. Implemented push notifications for reminders and a mobile-first booking flow that reduces scheduling friction to two taps.",
  },
  {
    name: "EV E-commerce (SHAED)",
    techs: ["React", "Stripe", "K8s"],
    desc: "Cloud platform for EV trucking with 3D configurator.",
    detail:
      "Built ByteCorp\u2019s EV trucking platform. Implemented 3D truck configurator, order tracking pipeline, and Stripe payment flow. Deployed on Kubernetes with CI/CD, handling fleet configuration and dealer management across multiple regions.",
  },
];

export default function Portfolio() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll<HTMLElement>(
      ".portfolio__card[data-expandable]"
    );

    const handleClick = (e: Event) => {
      const card = (e.currentTarget as HTMLElement);
      const isExpanded = card.classList.contains("expanded");
      cards.forEach((c) => c.classList.remove("expanded"));
      if (!isExpanded) card.classList.add("expanded");
    };

    cards.forEach((card) => card.addEventListener("click", handleClick));
    return () =>
      cards.forEach((card) => card.removeEventListener("click", handleClick));
  }, []);

  return (
    <section id="portfolio">
      <div className="container">
        <h2 className="section__title">Things I&rsquo;ve built.</h2>

        <div className="portfolio__grid" ref={gridRef}>
          {projects.map((p) => (
            <div
              key={p.name}
              className="portfolio__card reveal"
              data-expandable=""
            >
              <div className="portfolio__header">
                <h3 className="portfolio__name">{p.name}</h3>
                <ChevronIcon />
              </div>
              <div className="portfolio__techs">
                {p.techs.map((t) => (
                  <span key={t} className="pill pill--sm">
                    {t}
                  </span>
                ))}
              </div>
              <p className="portfolio__desc">{p.desc}</p>
              <div className="portfolio__detail">
                <p className="portfolio__what">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
