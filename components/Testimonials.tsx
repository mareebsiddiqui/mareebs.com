"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "I have worked with over 100 Software Engineers through my professional experience, and I have disliked the majority of them; however, Areeb is an exception, as he\u2019s amongst the very few who understand the business outcome of the task at hand.",
    name: "Asad Anwer",
    role: "CXO at ByteCorp",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials">
      <div className="container">
        <h2 className="section__title">Don&rsquo;t take my word for it.</h2>
        <div className="testimonial__carousel reveal">
          {testimonials.map((t, i) => (
            <blockquote
              className={`testimonial${i === active ? " testimonial--active" : ""}`}
              key={i}
            >
              <p className="testimonial__text">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="testimonial__author">
                {t.name}
                <span className="testimonial__sep"> - </span>
                {t.role}
              </footer>
            </blockquote>
          ))}
          {testimonials.length > 1 && (
            <div className="testimonial__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonial__dot${i === active ? " testimonial__dot--active" : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
