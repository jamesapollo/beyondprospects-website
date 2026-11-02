import Image from "next/image";
import type { CSSProperties } from "react";
import { BRAND, FEATURES, IMAGES, LOGOS, PROOF_POINTS, STATS, STEPS } from "@/lib/content";
import { ButtonLink } from "@/components/ui/Button";
import { CandidateCard } from "@/components/ui/Cards";
import { FeatureItem, StatCard, StatusPill, StepCard } from "@/components/ui/Display";
import { IntroCallButton } from "./Dialogs";

function Halo({ size, style }: { size: number; style: CSSProperties }) {
  return <div className="halo" style={{ width: size, height: size, ...style }} aria-hidden="true" />;
}

/** Thin dashed taupe curves — the "bridge" between people. */
function Dashed({ d }: { d: string }) {
  return (
    <svg className="dashed" viewBox="0 0 560 460" preserveAspectRatio="none" aria-hidden="true">
      <path d={d} fill="none" stroke="var(--taupe-400)" strokeWidth="1.2" strokeDasharray="6 7" />
    </svg>
  );
}

export function HeroHome() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div>
          <h1 className="heading-display">The fastest way to match people with purpose</h1>
          <p className="lead hero__lead">
            Connect US companies with standout candidates through curated, pre-vetted introductions — not crowded job boards.
          </p>
          <div className="hero__ctas">
            <ButtonLink href="/employers" size="lg">
              Hire talent
            </ButtonLink>
            <ButtonLink href="/jobs" size="lg" variant="secondary">
              Find your role
            </ButtonLink>
          </div>
        </div>
        <div className="match-visual" aria-hidden="true">
          <div className="match-visual__board">
            <Halo size={560} style={{ left: 20, top: -40 }} />
            <Dashed d="M10 300 C 0 200, 60 160, 120 150 M 300 100 C 340 90, 360 80, 380 60 M 230 360 C 280 340, 320 320, 360 300 M 520 0 C 540 40, 520 70, 480 80" />
            <CandidateCard
              className="match-visual__card match-visual__card--1"
              layout="side"
              photo={IMAGES.developer}
              name="Marcus Hale"
              role="Developer"
              badge="Best fit"
              sizes="150px"
            />
            <CandidateCard
              className="match-visual__card match-visual__card--2"
              layout="photo"
              photo={IMAGES.specialist}
              glow="sage"
              label="Financial specialist"
              sizes="210px"
            />
            <CandidateCard
              className="match-visual__card match-visual__card--3"
              layout="photo"
              photo={IMAGES.manager}
              glow="honey"
              label="Account manager"
              labelSide="bottom"
              sizes="210px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function LogoStrip() {
  return (
    <section className="container logo-strip" aria-labelledby="trusted-by">
      <h2 id="trusted-by" className="eyebrow" style={{ margin: 0 }}>
        Trusted by 100+ US companies
      </h2>
      <ul className="logo-strip__list">
        {LOGOS.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </section>
  );
}

export function Stats() {
  return (
    <section className="container stats" aria-label="Results">
      {STATS.map((s) => (
        <StatCard key={s.label} value={s.value} label={s.label} />
      ))}
    </section>
  );
}

export function WhyUs() {
  return (
    <section id="why-us" className="container" style={{ scrollMarginTop: 24 }}>
      <div className="why">
        <div className="why__content">
          <h2 className="heading-2">Why choose us?</h2>
          <div className="why__features">
            {FEATURES.map((f) => (
              <FeatureItem key={f.title} title={f.title}>
                {f.body}
              </FeatureItem>
            ))}
          </div>
        </div>
        <div className="why__media">
          <Halo size={420} style={{ right: -120, top: -120 }} />
          <Image src={IMAGES.team} alt="" fill sizes="(max-width: 960px) 100vw, 500px" />
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="container section-pad" style={{ scrollMarginTop: 24 }}>
      <h2 className="heading-2">How {BRAND.name} works</h2>
      <p className="lead-2 how__lead">
        From curated intros to faster hiring — here’s how we match standout talent with forward-thinking teams.
      </p>
      <ol className="how__steps" style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {STEPS.map((s, i) => (
          <StepCard key={s.title} step={i + 1} title={s.title}>
            {s.body}
          </StepCard>
        ))}
      </ol>
    </section>
  );
}

export function HeroEmployers() {
  return (
    <section className="hero hero--employers">
      <div className="container hero__grid">
        <div>
          <h1 className="heading-1">Hire faster, smarter, and with confidence</h1>
          <p className="lead-2 hero__lead">
            We deliver pre-vetted candidates in days — not weeks. No job board clutter. Just great hires, ready to go.
          </p>
          <IntroCallButton>Let’s find my match</IntroCallButton>
        </div>
        <div className="pill-visual">
          <Halo size={460} style={{ right: -120, top: -40 }} />
          <Dashed d="M200 70 C 260 80, 320 90, 330 110 M 360 150 C 340 170, 240 170, 200 190 M 200 240 C 260 250, 300 250, 320 270" />
          <div className="pill-visual__item pill-visual__item--1">
            <StatusPill icon="briefcase" glow="clay">
              Mid-level content manager
            </StatusPill>
          </div>
          <div className="pill-visual__item pill-visual__item--2">
            <StatusPill icon="hourglass" glow="honey">
              Search completed in 2 days
            </StatusPill>
          </div>
          <div className="pill-visual__item pill-visual__item--3">
            <StatusPill icon="zap" glow="honey">
              12 vetted candidates delivered
            </StatusPill>
          </div>
          <div className="pill-visual__item pill-visual__item--4">
            <StatusPill icon="thumbs-up" glow="sage">
              Found our match!
            </StatusPill>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DarkProof() {
  return (
    <section className="proof">
      <h2 className="heading-2 container">Built for teams who hire smarter</h2>
      <div className="container proof__stage">
        <div className="proof__photo">
          <Image src={IMAGES.team} alt="" fill sizes="600px" />
        </div>
        {PROOF_POINTS.map((p, i) => (
          <div key={p.text[0]} className={`proof__pill proof__pill--${i + 1}`}>
            <StatusPill dark tilt={p.tilt}>
              {p.text[0]}
              <br />
              {p.text[1]}
            </StatusPill>
          </div>
        ))}
      </div>
    </section>
  );
}
