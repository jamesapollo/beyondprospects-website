"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { IconButton } from "./IconButton";

/** Modal built on the native <dialog> element: focus trap, Esc-to-close and backdrop come for free. */
export function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
}: {
  open: boolean;
  onClose: () => void;
  title: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="dialog"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {open && (
        <div className="dialog__inner">
          <div className="dialog__head">
            <h2 id={titleId} className="dialog__title">
              {title}
            </h2>
            <IconButton icon="x" variant="outline" size={36} label="Close" onClick={onClose} />
          </div>
          <div className="dialog__body">{children}</div>
          {footer && <div className="dialog__foot">{footer}</div>}
        </div>
      )}
    </dialog>
  );
}
