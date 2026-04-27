"use client";

import { useEffect, useRef } from "react";

export default function Evolution() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const chapters = section.querySelectorAll(".evolution__chapter");
    const years = section.querySelectorAll(".evolution__year");
    const dot = section.querySelector(".evolution__dot") as HTMLElement | null;

    if (chapters.length === 0) return;

    // On mobile, chapters are already visible via CSS
    if (window.innerWidth <= 768) return;

    let scrollTriggerInstance: any;

    const init = async () => {
      const gsapMod = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const gsap = gsapMod.default;

      gsap.registerPlugin(ScrollTrigger);

      chapters[0].classList.add("active");
      if (years[0]) years[0].classList.add("active");

      scrollTriggerInstance = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        invalidateOnRefresh: true,
        onUpdate: (self: any) => {
          const progress = self.progress;
          const totalChapters = chapters.length;
          const chapterIndex = Math.min(
            Math.floor(progress * totalChapters),
            totalChapters - 1
          );

          chapters.forEach((ch: Element, i: number) => {
            ch.classList.toggle("active", i === chapterIndex);
            ch.classList.toggle(
              "near",
              i !== chapterIndex &&
                (i === chapterIndex - 1 || i === chapterIndex + 1)
            );
          });

          years.forEach((y: Element, i: number) => {
            y.classList.toggle("active", i === chapterIndex);
          });

          if (dot) {
            dot.style.top = `${progress * 100}%`;
          }
        },
      });

      // Refresh after load to handle scroll restoration
      window.addEventListener("load", () => ScrollTrigger.refresh());
      setTimeout(() => ScrollTrigger.refresh(), 500);
    };

    init();

    return () => {
      scrollTriggerInstance?.kill();
    };
  }, []);

  return (
    <section id="evolution" ref={sectionRef}>
      <div className="evolution__sticky">
        <div className="evolution__progress">
          <div className="evolution__years">
            <span className="evolution__year" data-chapter="1">2013</span>
            <span className="evolution__year" data-chapter="2">2016</span>
            <span className="evolution__year" data-chapter="3">2020</span>
            <span className="evolution__year" data-chapter="4">2022</span>
            <span className="evolution__year" data-chapter="5">2026</span>
          </div>
          <div className="evolution__line">
            <div className="evolution__dot"></div>
          </div>
        </div>

        <div className="evolution__content">
          {/* Chapter 1: Certified at 13 */}
          <div className="evolution__chapter" data-chapter="1">
            <div className="evolution__code">
              <pre className="mono">{`<table width="100%" border="1">
  <tr>
    <td colspan="2">Header</td>
  </tr>
  <tr>
    <td width="20%">Nav</td>
    <td>Content goes here</td>
  </tr>
</table>
<!-- built my first site at 11 -->
<!-- certified by Microsoft at 13 -->`}</pre>
            </div>
            <h3 className="evolution__title">Certified at 13</h3>
            <p className="evolution__text">
              When <code>&lt;table&gt;</code> was still a layout tool and CSS was
              optional. I started building websites at 11 and became a Microsoft
              Certified Professional at 13&nbsp;&mdash; the youngest in the room,
              but not for long.
            </p>
          </div>

          {/* Chapter 2: Top 25 at 16 */}
          <div className="evolution__chapter" data-chapter="2">
            <div className="evolution__code">
              <pre className="mono">{`┌─ Pakistan Startup Cup ─────────┐
│                                │
│  NATIONAL FINALISTS            │
│  Top 25 out of 15,000+         │
│                                │
│  Age: 16                       │
│  Status: youngest team         │
│  Next:   first client signed   │
│                                │
└────────────────────────────────┘`}</pre>
            </div>
            <h3 className="evolution__title">Top 25 at 16</h3>
            <p className="evolution__text">
              Pitched a startup idea at the Pakistan Startup Cup and made it to
              the national Top 25 out of 15,000+ teams. At 16, I was the youngest
              in the room&nbsp;&mdash; again. That same year, I signed my first
              freelance client. I stopped waiting for permission to build.
            </p>
          </div>

          {/* Chapter 3: 7 Products. Solo. */}
          <div className="evolution__chapter" data-chapter="3">
            <div className="evolution__code">
              <pre className="mono">{`const Portfolio = () => {
  const projects = [
    "Streaming Platform",
    "Live Video Calling",
    "E-commerce Store",
    "Meeting Scheduler",
    "Restaurant Search",
    "Skill Barter App",
  ];
  // shipped: all of them. solo.
  return <Ship count={7} />;
};`}</pre>
            </div>
            <h3 className="evolution__title">7 Products. Solo.</h3>
            <p className="evolution__text">
              University by day, freelance by night. Streaming platforms, real-time
              video calling, e-commerce stores, meeting schedulers&nbsp;&mdash;
              each a different stack, a different problem. I didn&rsquo;t wait for
              a team. I became one.
            </p>
          </div>

          {/* Chapter 4: Trusted With Payments */}
          <div className="evolution__chapter" data-chapter="4">
            <div className="evolution__code">
              <pre className="mono">{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: payment-service
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
  # error_rate:    90% ↓
  # test_coverage: 95%
  # sonarqube:     A rating`}</pre>
            </div>
            <h3 className="evolution__title">Trusted With Payments</h3>
            <p className="evolution__text">
              SWVL and Securiti.ai taught me what production really means. Fixed
              critical payment bugs affecting thousands. Built dead letter queues
              that slashed system errors by 90%. Hit 95% test coverage with TDD.
              Reliability isn&rsquo;t a feature&nbsp;&mdash; it&rsquo;s the
              standard.
            </p>
          </div>

          {/* Chapter 5: Led 10. Shipped 3. */}
          <div className="evolution__chapter" data-chapter="5">
            <div className="evolution__code">
              <pre className="mono">{`┌─ metrics.dashboard ────────────┐
│  revenue      ████████░░  +60% │
│  api_speed    ██████████  -40% │
│  lead_gen     ███████░░░  +30% │
│  latency      ██████████ <200ms│
│  cost/device  ██████░░░░ -$4.2K│
└────────────────────────────────┘
// wise: analytics platform infra
// the needle keeps moving.`}</pre>
            </div>
            <h3 className="evolution__title">Led 10. Shipped 3.</h3>
            <p className="evolution__text">
              Led a 10-member team at ByteCorp&nbsp;&mdash; sub-500ms fleet
              tracking, $4,200 saved per device. Drove 60% revenue growth at
              Dubizzle. Now at Wise, building analytics platform
              infrastructure&nbsp;&mdash; automated migrations, zero-downtime
              tooling. Every line of code moves a metric.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
