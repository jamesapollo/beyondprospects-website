import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

export type Glow = "clay" | "honey" | "sage";

const FILLED_ICONS: IconName[] = ["zap", "thumbs-up", "star", "hourglass"];

export function Badge({
  tone = "neutral",
  icon,
  stacked,
  children,
}: {
  tone?: "success" | "warning" | "accent" | "neutral" | "danger" | "inverse";
  icon?: IconName;
  stacked?: boolean;
  children: ReactNode;
}) {
  return (
    <span className={`badge badge--${tone}${stacked ? " badge--stacked" : ""}`}>
      {icon && <Icon name={icon} size={14} filled={icon === "thumbs-up" || icon === "star"} />}
      {children}
    </span>
  );
}

export function Tag({ size = "md", icon, children }: { size?: "sm" | "md"; icon?: IconName; children: ReactNode }) {
  return (
    <span className={`tag${size === "sm" ? " tag--sm" : ""}`}>
      {icon && <Icon name={icon} size={size === "sm" ? 13 : 15} />}
      {children}
    </span>
  );
}

export function StatusPill({
  icon,
  glow,
  dark,
  tilt = 0,
  children,
}: {
  icon?: IconName;
  glow?: Glow;
  dark?: boolean;
  tilt?: number;
  children: ReactNode;
}) {
  const cls = ["status-pill", glow && `status-pill--${glow}`, dark && "status-pill--dark"].filter(Boolean).join(" ");
  return (
    <span className={cls} style={tilt ? { transform: `rotate(${tilt}deg)` } : undefined}>
      {icon && (
        <span className="status-pill__icon">
          <Icon name={icon} size={18} filled={FILLED_ICONS.includes(icon)} />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat-card">
      <div className="stat-card__value">{value}</div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
}

export function StepCard({ step, title, children }: { step: number; title: string; children: ReactNode }) {
  return (
    <li className="step-card">
      <span className="step-card__num" aria-hidden="true">
        {step}
      </span>
      <h3 className="step-card__title">{title}</h3>
      <p className="step-card__body">{children}</p>
    </li>
  );
}

export function FeatureItem({ title, icon = "plus", children }: { title: string; icon?: IconName; children: ReactNode }) {
  return (
    <div className="feature-item">
      <span className="feature-item__icon">
        <Icon name={icon} size={20} strokeWidth={1.5} />
      </span>
      <h3 className="feature-item__title">{title}</h3>
      <p className="feature-item__body">{children}</p>
    </div>
  );
}
