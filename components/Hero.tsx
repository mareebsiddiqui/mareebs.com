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
            "YOUR PAYMENT SYSTEM IS YOUR BUSINESS.",
            "ONE BAD ARCHITECT CAN COST YOU YOUR LICENSE.",
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
          .from(".hero__actions", { y: 20, opacity: 0 }, 0.7);
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
          Areeb Siddiqui - Fractional CTO for Fintech
        </h1>
        <p className="hero__tagline">
          One failed payout erodes more trust than a month of marketing
          builds back. I cut payment errors 90% at SWVL. I process billions
          of financial events at Wise. Your fintech deserves that standard.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="hero__cta">
            Book a free strategy call <span className="arrow">&rarr;</span>
          </a>
          <a href="#experience" className="hero__cta hero__cta--secondary">
            See proven results <span className="arrow">&rarr;</span>
          </a>
          <a href="/blog" className="hero__cta hero__cta--secondary">
            Read the blog <span className="arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
