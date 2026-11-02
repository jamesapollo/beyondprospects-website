import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "./Button";
import { Badge, Tag, type Glow } from "./Display";

type CandidateCardProps = {
  photo: string;
  glow?: Glow;
  className?: string;
  sizes?: string;
} & (
  | { layout: "side"; name: string; role: string; badge?: string }
  | { layout: "photo"; label: string; labelSide?: "top" | "bottom" }
);

export function CandidateCard(props: CandidateCardProps) {
  const { photo, glow = "clay", className, sizes = "300px" } = props;
  return (
    <div className={`candidate-card candidate-card--${props.layout} ${className ?? ""}`}>
      <div className={`candidate-card__frame candidate-card__frame--${glow}`}>
        <div className="candidate-card__photo">
          <Image src={photo} alt={props.layout === "side" ? props.name : props.label} fill sizes={sizes} />
        </div>
        {props.layout === "side" && (
          <div className="candidate-card__info">
            <div className="candidate-card__name">
              <strong>{props.name}</strong>
              <span>{props.role}</span>
            </div>
            {props.badge && (
              <Badge tone="success" icon="thumbs-up" stacked>
                {props.badge}
              </Badge>
            )}
          </div>
        )}
      </div>
      {props.layout === "photo" && (
        <span className={`candidate-card__label candidate-card__label--${props.labelSide ?? "top"}`} aria-hidden="true">
          {props.label}
        </span>
      )}
    </div>
  );
}

export function JobCard({
  title,
  company,
  logo,
  logoBg = "var(--espresso-800)",
  tags,
  salary,
  onApply,
}: {
  title: string;
  company: string;
  logo: string;
  logoBg?: string;
  tags: string[];
  salary: string;
  onApply?: () => void;
}) {
  return (
    <article className="job-card">
      <div className="job-card__head">
        <div className="job-card__logo" style={{ background: logoBg }} aria-hidden="true">
          {logo}
        </div>
        <div style={{ minWidth: 0 }}>
          <h3 className="job-card__title" title={title}>
            {title}
          </h3>
          <div className="job-card__company">{company}</div>
        </div>
      </div>
      <div className="job-card__tags">
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <div className="job-card__foot">
        <span className="job-card__salary">{salary}</span>
        <Button variant="link" iconRight="arrow-right" onClick={onApply} style={{ fontSize: 17 }} aria-label={`Apply now: ${title}`}>
          Apply now
        </Button>
      </div>
    </article>
  );
}

export function TestimonialFrame({ photo, children }: { photo: string; children: ReactNode }) {
  return (
    <div className="testimonial">
      <div className="testimonial__photo">
        <Image src={photo} alt="" fill sizes="(max-width: 960px) 260px, 360px" />
      </div>
      <div className="testimonial__body">{children}</div>
    </div>
  );
}
