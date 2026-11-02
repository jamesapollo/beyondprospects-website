"use client";

import { useState } from "react";
import { IMAGES, TESTIMONIALS } from "@/lib/content";
import { TestimonialFrame } from "@/components/ui/Cards";
import { IconButton } from "@/components/ui/IconButton";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const total = TESTIMONIALS.length;

  return (
    <section className="container section-pad-y" aria-roledescription="carousel" aria-label="Customer testimonials">
      <TestimonialFrame photo={IMAGES.testimonial}>
        <figure style={{ margin: 0 }} aria-live="polite">
          <blockquote className="testimonial__quote">{t.quote}</blockquote>
          <figcaption className="testimonial__cite">
            <b>{t.name},</b> {t.title}
          </figcaption>
        </figure>
        <div className="testimonial__controls">
          <IconButton icon="arrow-left" variant="outline" size={40} label="Previous testimonial" onClick={() => setI(i - 1)} disabled={i === 0} />
          <span>
            {i + 1}/{total}
          </span>
          <IconButton icon="arrow-right" variant="outline" size={40} label="Next testimonial" onClick={() => setI(i + 1)} disabled={i === total - 1} />
        </div>
      </TestimonialFrame>
    </section>
  );
}
