"use client";

import { useEffect, useRef } from "react";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const navbar = navRef.current;
    const hero = document.getElementById("hero");
    if (!navbar || !hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        navbar.classList.toggle("visible", !entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hamburger = document.querySelector(".nav__hamburger") as HTMLButtonElement | null;
    const navLinks = document.querySelector(".nav__links");
    if (!hamburger || !navLinks) return;

    const toggle = () => {
      const isOpen = navLinks.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", String(isOpen));
    };

    hamburger.addEventListener("click", toggle);
    return () => hamburger.removeEventListener("click", toggle);
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    const handleClick = (e: Event) => {
      const link = e.currentTarget as HTMLAnchorElement;
      const targetId = link.getAttribute("href");
      if (!targetId) return;
      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      const navLinks = document.querySelector(".nav__links");
      const hamburger = document.querySelector(".nav__hamburger");
      if (navLinks?.classList.contains("open")) {
        navLinks.classList.remove("open");
        hamburger?.setAttribute("aria-expanded", "false");
      }
    };

    links.forEach((link) => link.addEventListener("click", handleClick));
    return () =>
      links.forEach((link) => link.removeEventListener("click", handleClick));
  }, []);

  return (
    <nav id="navbar" ref={navRef} aria-label="Main navigation">
      <div className="nav__inner">
        <a href="#hero" className="nav__logo">
          AS
        </a>
        <button
          className="nav__hamburger"
          aria-label="Toggle menu"
          aria-expanded="false"
        >
          <span></span>
          <span></span>
        </button>
        <ul className="nav__links">
          <li>
            <a href="#positioning">Results</a>
          </li>
          <li>
            <a href="#evolution">Story</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
