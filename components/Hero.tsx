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
            "AI GAVE YOU A GENERIC ANSWER?",
            "I GIVE YOU THE SPECIFIC ONE.",
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
          .from(".hero__summary", { y: 30, opacity: 0 }, 0.7)
          .from(".hero__actions", { y: 20, opacity: 0 }, 0.9)
          .from(".hero__scroll-hint", { opacity: 0 }, 1.2);
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
        <h1 className="hero__name">Areeb Siddiqui</h1>
        <p className="hero__tagline">
          Specific answers. No hallucinations. No enterprise invoice.
        </p>
        <p className="hero__summary">
          AI chatbots guess. Consulting firms charge $10K/month. I give you
          battle-tested engineering answers from 13 years of shipping production
          systems&nbsp;&mdash; for $20/hour.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="hero__cta">
            Book a free call <span className="arrow">&rarr;</span>
          </a>
          <a href="#positioning" className="hero__cta hero__cta--secondary">
            See how I compare <span className="arrow">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="hero__scroll-hint">
        <span>scroll</span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
        >
          <path
            d="M8 4v12m0 0l-4-4m4 4l4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
