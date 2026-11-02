import { useId, type ComponentProps } from "react";
import { Icon } from "./Icon";

type FieldProps = { label?: string; hint?: string; error?: string };

export function Input({ label, hint, error, id, className, ...rest }: FieldProps & ComponentProps<"input">) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const hintId = hint || error ? `${inputId}-hint` : undefined;
  return (
    <div className="field">
      {label && (
        <label className="field__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={["input", className].filter(Boolean).join(" ")}
        aria-invalid={error ? true : undefined}
        aria-describedby={hintId}
        {...rest}
      />
      {hintId && (
        <span id={hintId} className={`field__hint${error ? " field__hint--error" : ""}`}>
          {error ?? hint}
        </span>
      )}
    </div>
  );
}

export function Select({
  label,
  options,
  placeholder = "Select…",
  id,
  ...rest
}: FieldProps & { options: string[]; placeholder?: string } & ComponentProps<"select">) {
  const autoId = useId();
  const selectId = id ?? autoId;
  return (
    <div className="field">
      {label && (
        <label className="field__label" htmlFor={selectId}>
          {label}
        </label>
      )}
      <span className="select-wrap">
        <select id={selectId} className="select" defaultValue="" required {...rest}>
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <span className="select-wrap__chevron">
          <Icon name="chevron-down" size={18} />
        </span>
      </span>
    </div>
  );
}

export function Checkbox({ label, ...rest }: { label: string } & Omit<ComponentProps<"input">, "type">) {
  return (
    <label className="checkbox">
      <input type="checkbox" {...rest} />
      <span className="checkbox__box" aria-hidden="true">
        <Icon name="check" size={14} strokeWidth={2.5} />
      </span>
      {label}
    </label>
  );
}
