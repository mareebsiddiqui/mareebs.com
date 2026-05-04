"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let typed: any;
    let gsapCtx: any;

    const init = async () => {
      // Typed.js
      if (typedRef.current) {
        const { default: Typed } = await import("typed.js");
        typed = new Typed(typedRef.current, {
          strings: [
            "YOUR STARTUP NEEDS A CTO.",
            "YOU DON'T NEED TO HIRE ONE.",
          ],
          typeSpeed: 50,
          backSpeed: 30,
          backDelay: 2000,
          showCursor: true,
          cursorChar: "_",
          loop: false,
          onComplete: (self: any) => {
            setTimeout(() => {
              if (self.cursor) self.cursor.style.display = "none";
            }, 1500);
          },
        });
      }

      // GSAP animations
      const gsapMod = await import("gsap");
      const gsap = gsapMod.default;

      gsapCtx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out", duration: 0.8 },
        });

        tl.from(".hero__portrait", { scale: 0.8, opacity: 0 }, 0.1)
          .from(".hero__name", { y: 40, opacity: 0 }, 0.3)
          .from(".hero__tagline", { y: 30, opacity: 0 }, 0.5)
          .from(".hero__stats", { y: 30, opacity: 0 }, 0.7)
          .from(".hero__actions", { y: 20, opacity: 0 }, 0.9);
      });
    };

    init();

    return () => {
      typed?.destroy();
      gsapCtx?.revert();
    };
  }, []);

  return (
    <section id="hero">
      <div className="hero__glow"></div>
      <div className="hero__content">
        <div className="hero__portrait">
          <img
            src="/img/me.jpeg"
            alt="Areeb Siddiqui"
            width={140}
            height={140}
          />
        </div>
        <span className="hero__label mono">
          <span ref={typedRef}></span>
        </span>
        <h1 className="hero__name">
          Areeb Siddiqui - Fractional CTO
        </h1>
        <p className="hero__tagline">
          Ship faster and grow revenue - without the $300K salary.
        </p>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-value mono">60%</span>
            <span className="hero__stat-label">Revenue Growth</span>
            <span className="hero__stat-company mono">Dubizzle</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-value mono">90%</span>
            <span className="hero__stat-label">Fewer Production Errors</span>
            <span className="hero__stat-company mono">SWVL</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-value mono">$4,200/yr</span>
            <span className="hero__stat-label">Saved Per Device</span>
            <span className="hero__stat-company mono">ByteCorp</span>
          </div>
        </div>
        <div className="hero__actions">
          <a href="#contact" className="hero__cta">
            Book a strategy call <span className="arrow">&rarr;</span>
          </a>
          <a href="#positioning" className="hero__cta hero__cta--secondary">
            See proven results <span className="arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
