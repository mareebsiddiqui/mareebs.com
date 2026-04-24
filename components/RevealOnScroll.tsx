"use client";

import { useEffect } from "react";

export default function RevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    if (elements.length === 0) return;

    // Assign stagger index per parent section
    const parentMap = new Map<Element, number>();
    elements.forEach((el) => {
      const parent = el.closest("section") || el.parentElement;
      if (!parent) return;
      const count = parentMap.get(parent) || 0;
      (el as HTMLElement).dataset.revealIndex = String(count);
      parentMap.set(parent, count + 1);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay =
              (parseInt((entry.target as HTMLElement).dataset.revealIndex || "0", 10)) * 120;
            setTimeout(() => {
              entry.target.classList.add("revealed");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Also init GSAP-based reveals for skills and experience cards
  useEffect(() => {
    const init = async () => {
      const bands = document.querySelectorAll(".skills__band");
      const cards = document.querySelectorAll(".experience__card");

      if (bands.length === 0 && cards.length === 0) return;

      try {
        const gsapMod = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        const gsap = gsapMod.default;
        gsap.registerPlugin(ScrollTrigger);

        bands.forEach((band, index) => {
          gsap.to(band, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: band,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });

        cards.forEach((card, index) => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });
      } catch {
        // Fallback: IntersectionObserver already handles .reveal elements
      }
    };

    init();
  }, []);

  return null;
}
