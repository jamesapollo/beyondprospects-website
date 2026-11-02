"use client";

/*
 * The intro-call, log-in and apply flows from the design.
 * NOTE: these forms are front-end only — submissions are not sent anywhere yet.
 * Wire each `onSubmit` to a Server Action / API route (or CRM, ATS, email provider) before launch.
 */

import { useState, type ComponentProps, type FormEvent } from "react";
import { BRAND, HIRING_ROLES, type Job } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import { Input, Select } from "@/components/ui/Forms";

type FlowProps = { open: boolean; onClose: () => void };

function useSent(onClose: () => void) {
  const [sent, setSent] = useState(false);
  const close = () => {
    onClose();
    setSent(false);
  };
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return { sent, close, submit };
}

export function IntroCallDialog({ open, onClose }: FlowProps) {
  const { sent, close, submit } = useSent(onClose);
  return (
    <Dialog
      open={open}
      onClose={close}
      title={sent ? "You’re on the list" : "Let’s find your match"}
      footer={
        sent ? (
          <Button onClick={close}>Done</Button>
        ) : (
          <>
            <Button variant="secondary" onClick={close}>
              Cancel
            </Button>
            <Button type="submit" form="intro-call-form">
              Request intro call
            </Button>
          </>
        )
      }
    >
      {sent ? (
        `A ${BRAND.name} talent partner will reach out within one business day.`
      ) : (
        <form id="intro-call-form" className="dialog__fields" onSubmit={submit}>
          <Input label="Work email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
          <Select label="Role you’re hiring for" name="role" options={HIRING_ROLES} />
        </form>
      )}
    </Dialog>
  );
}

export function LoginDialog({ open, onClose }: FlowProps) {
  const { close, submit } = useSent(onClose);
  return (
    <Dialog
      open={open}
      onClose={close}
      title="Welcome back"
      footer={
        <Button type="submit" form="login-form" fullWidth>
          Log in
        </Button>
      }
    >
      <form
        id="login-form"
        className="dialog__fields"
        onSubmit={(e) => {
          submit(e);
          close();
        }}
      >
        <Input label="Email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
        <Input label="Password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" required />
      </form>
    </Dialog>
  );
}

export function ApplyDialog({ job, onClose }: { job: Job | null; onClose: () => void }) {
  const { sent, close, submit } = useSent(onClose);
  return (
    <Dialog
      open={job !== null}
      onClose={close}
      title={sent ? "Application sent" : job?.title}
      footer={
        sent ? (
          <Button onClick={close}>Back to jobs</Button>
        ) : (
          <Button type="submit" form="apply-form" iconRight="arrow-right">
            Submit application
          </Button>
        )
      }
    >
      {job &&
        (sent ? (
          `We’ll share your profile with ${job.company} and keep you posted at every step.`
        ) : (
          <form id="apply-form" className="dialog__fields" onSubmit={submit}>
            <div>
              {job.company} · {job.tags.join(" · ")} ·{" "}
              <span style={{ color: "var(--text-positive)", fontWeight: 500 }}>{job.salary}</span>
            </div>
            <Input label="Full name" name="name" placeholder="Jordan Reyes" autoComplete="name" required />
            <Input label="Email" name="email" type="email" placeholder="you@email.com" autoComplete="email" required />
          </form>
        ))}
    </Dialog>
  );
}

/** A button that opens the intro-call dialog. Usable from Server Components. */
export function IntroCallButton(props: Omit<ComponentProps<typeof Button>, "onClick">) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button {...props} onClick={() => setOpen(true)} />
      <IntroCallDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
