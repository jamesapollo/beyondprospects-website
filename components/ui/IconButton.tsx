import type { ComponentProps } from "react";
import { Icon, type IconName } from "./Icon";

type IconButtonProps = {
  icon: IconName;
  label: string;
  variant?: "solid" | "outline" | "soft";
  size?: number;
} & Omit<ComponentProps<"button">, "children" | "aria-label">;

export function IconButton({ icon, label, variant = "solid", size = 44, type = "button", className, style, ...rest }: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={["icon-btn", `icon-btn--${variant}`, className].filter(Boolean).join(" ")}
      style={{ width: size, height: size, ...style }}
      {...rest}
    >
      <Icon name={icon} size={Math.round(size * 0.42)} />
    </button>
  );
}
