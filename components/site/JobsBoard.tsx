"use client";

import { useState } from "react";
import { JOBS, type Job } from "@/lib/content";
import { JobCard } from "@/components/ui/Cards";
import { Checkbox, Input } from "@/components/ui/Forms";
import { IconButton } from "@/components/ui/IconButton";
import { Tabs } from "@/components/ui/Tabs";
import { ApplyDialog } from "./Dialogs";

const TABS = [
  { id: "all", label: "All" },
  { id: "Full-time", label: "Full-time" },
  { id: "Hybrid", label: "Hybrid" },
  { id: "Remote", label: "Remote" },
];

// Filters are visual only for now — the placeholder job data has no fields to filter on.
const FILTERS = [
  { label: "Visa sponsorship" },
  { label: "Benefits listed", defaultChecked: true },
  { label: "Posted this week" },
  { label: "Entry level" },
];

export function JobsBoard() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("all");
  const [applying, setApplying] = useState<Job | null>(null);

  const q = query.trim().toLowerCase();
  const list = JOBS.filter(
    (j) => (tab === "all" || j.type === tab) && `${j.title} ${j.company} ${j.tags.join(" ")}`.toLowerCase().includes(q),
  );

  return (
    <>
      <section className="jobs-hero">
        <div className="halo" aria-hidden="true" />
        <div className="container jobs-hero__inner">
          <h1 className="heading-1">Find work that means more</h1>
          <p className="lead-2 jobs-hero__lead">Discover roles that align with your values, skills, and the change you want to make.</p>
          <form className="searchbar" role="search" onSubmit={(e) => e.preventDefault()}>
            <Input
              aria-label="Search jobs"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by job title or location"
            />
            <IconButton icon="search" size={56} label="Search" type="submit" />
          </form>
        </div>
      </section>

      <section className="container jobs" aria-labelledby="jobs-count">
        <div className="jobs__bar">
          <h2 id="jobs-count" className="jobs__count" aria-live="polite">
            All jobs <span>({list.length})</span>
          </h2>
          <Tabs tabs={TABS} value={tab} onChange={setTab} label="Job type" />
        </div>
        <div className="jobs__layout">
          <fieldset className="jobs__filters">
            <legend>Filters</legend>
            {FILTERS.map((f) => (
              <Checkbox key={f.label} label={f.label} defaultChecked={f.defaultChecked} />
            ))}
          </fieldset>
          <div className="jobs__grid">
            {list.map((j) => (
              <JobCard key={j.id} {...j} onApply={() => setApplying(j)} />
            ))}
            {list.length === 0 && <p className="jobs__empty">No roles match yet. Try a broader search.</p>}
          </div>
        </div>
      </section>

      <ApplyDialog job={applying} onClose={() => setApplying(null)} />
    </>
  );
}
