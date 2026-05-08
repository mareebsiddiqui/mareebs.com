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
            "DPP GOES MANDATORY IN 18 MONTHS.",
            "YOUR SUPPLY CHAIN DATA IS STILL IN SPREADSHEETS.",
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
            alt="Areeb Siddiqui - Fractional CTO for FashionTech and DPP Compliance"
            width={140}
            height={140}
          />
        </div>
        <span className="hero__label mono">
          <span ref={typedRef}></span>
        </span>
        <h1 className="hero__name">
          Fractional CTO for FashionTech: DPP Compliance, AI Infrastructure
          &amp; Supply Chain Systems
        </h1>
        <p className="hero__tagline">
          The EU Digital Product Passport goes mandatory for fashion and
          textiles late 2027. The registry launches mid-2026. If the
          regulation feels overwhelming and you don&rsquo;t know where
          technology ends and legal begins, I&rsquo;ve already solved this
          problem for regulated industries. Not an agency learning on your
          budget.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="hero__cta">
            Book a free strategy call <span className="arrow">&rarr;</span>
          </a>
          <a href="#experience" className="hero__cta hero__cta--secondary">
            See how I&rsquo;ve done this before <span className="arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
