import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "secondary" | "accent" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  iconLeft?: IconName;
  iconRight?: IconName;
  fullWidth?: boolean;
  children: ReactNode;
};

const ICON_SIZE: Record<Size, number> = { sm: 16, md: 18, lg: 19 };

function classes({ variant = "primary", size = "md", fullWidth }: CommonProps, extra?: string) {
  return ["btn", `btn--${variant}`, variant !== "link" && `btn--${size}`, fullWidth && "btn--full", extra]
    .filter(Boolean)
    .join(" ");
}

function Content({ iconLeft, iconRight, size = "md", children }: CommonProps) {
  const s = ICON_SIZE[size];
  return (
    <>
      {iconLeft && <Icon name={iconLeft} size={s} />}
      {children}
      {iconRight && <Icon name={iconRight} size={s} className={iconRight === "arrow-right" ? "btn__arrow" : undefined} />}
    </>
  );
}

export function Button({
  variant,
  size,
  iconLeft,
  iconRight,
  fullWidth,
  children,
  className,
  type = "button",
  ...rest
}: CommonProps & Omit<ComponentProps<"button">, "children">) {
  const common = { variant, size, iconLeft, iconRight, fullWidth, children };
  return (
    <button type={type} className={classes(common, className)} {...rest}>
      <Content {...common} />
    </button>
  );
}

export function ButtonLink({
  variant,
  size,
  iconLeft,
  iconRight,
  fullWidth,
  children,
  className,
  ...rest
}: CommonProps & Omit<ComponentProps<typeof Link>, "children">) {
  const common = { variant, size, iconLeft, iconRight, fullWidth, children };
  return (
    <Link className={classes(common, className)} {...rest}>
      <Content {...common} />
    </Link>
  );
}
