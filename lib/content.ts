/**
 * Site copy and placeholder data. Company names, people and numbers are placeholders
 * carried over from the design and should be replaced with real content before launch.
 */

export const BRAND = {
  name: "Beyond Prospects",
  wordmark: "BEYOND PROSPECTS",
  legal: "Beyond Prospects",
};

/**
 * Placeholder imagery. The design's portrait crops came from third-party portfolio
 * mockups and are not licensed, so these point at neutral SVG stand-ins.
 * Drop licensed photos into /public/images and update the paths here.
 */
export const IMAGES = {
  developer: "/images/portrait-developer.svg",
  specialist: "/images/portrait-specialist.svg",
  manager: "/images/portrait-manager.svg",
  testimonial: "/images/portrait-testimonial.svg",
  team: "/images/team-group.svg",
};

export const NAV_LINKS = [
  { href: "/employers", label: "For employers" },
  { href: "/jobs", label: "For candidates" },
  { href: "/#why-us", label: "About" },
  { href: "/employers#how-it-works", label: "How it works" },
] as const;

export const LOGOS = ["Northwind", "Harbor Goods", "Bluepeak", "Linden & Co.", "Fieldstone", "Cedar Health", "Amberline"];

export const STATS = [
  { value: "7 days", label: "Average time to fill a role" },
  { value: "68%", label: "Of clients return to hire again" },
  { value: "500+", label: "Companies found the right hire" },
];

export const FEATURES = [
  { title: "Transparent hiring process", body: "Real-time updates, honest feedback, clear communication at every step." },
  { title: "Future-ready talent pool", body: "Vetted professionals with the skills and mindset to grow with you." },
  { title: "Human-centered matching", body: "We connect people to teams based on values, not just job titles." },
  { title: "Speed without shortcuts", body: "Hire fast without cutting corners. We vet, so you don’t have to." },
];

export const STEPS = [
  { title: "Tell us what you need", body: "Share your role, goals, and what makes a great hire for you." },
  { title: "We shortlist top matches", body: "Every candidate is pre-vetted — no spam, no endless scrolling." },
  { title: "You connect & hire fast", body: "Skip the job boards. Interview, decide, done." },
];

export const TESTIMONIALS = [
  {
    quote: `We’ve hired faster and smarter since switching to ${BRAND.name} — it’s like having a recruiter built into our hiring process.`,
    name: "Maya Lin",
    title: "VP of People, SeedFlow",
  },
  {
    quote: "Three finalists in four days, and every one of them could have done the job. That never happens.",
    name: "Daniel Ortiz",
    title: "COO, Fieldstone Logistics",
  },
  {
    quote: "They took the time to understand our culture. Our new controller fit in from week one.",
    name: "Priya Raman",
    title: "CFO, Cedar Health",
  },
];

export const PROOF_POINTS = [
  { text: ["Matched 92% of roles", "in under 10 days"], tilt: -4 },
  { text: ["91% satisfaction rate", "on first shortlist"], tilt: -3 },
  { text: ["Trusted by 1,500+", "US hiring managers"], tilt: 4 },
  { text: ["Building teams in", "over 40 industries"], tilt: 1 },
];

export const HIRING_ROLES = ["Operations", "Finance", "People & HR", "Engineering", "Sales"];

export type JobType = "Full-time" | "Hybrid" | "Remote";

export type Job = {
  id: string;
  title: string;
  company: string;
  logo: string;
  logoBg: string;
  tags: string[];
  salary: string;
  type: JobType;
};

export const JOBS: Job[] = [
  { id: "store-ops", title: "Store Operations Assistant", company: "Harbor Goods Co.", logo: "H", logoBg: "var(--clay-600)", tags: ["2 years", "Full-time", "Austin"], salary: "$48k–$56k", type: "Full-time" },
  { id: "branch-ops", title: "Branch Operations Associate", company: "Bluepeak Bank", logo: "B", logoBg: "var(--espresso-800)", tags: ["3 years", "Hybrid", "Dallas"], salary: "to $62k", type: "Hybrid" },
  { id: "people-ops", title: "People Operations Coordinator", company: "SeedFlow", logo: "S", logoBg: "var(--sage-600)", tags: ["1 year", "Remote", "US"], salary: "$55k–$65k", type: "Remote" },
  { id: "fin-analyst", title: "Senior Financial Analyst", company: "Cedar Health", logo: "C", logoBg: "var(--honey-600)", tags: ["5 years", "Hybrid", "Chicago"], salary: "$98k–$115k", type: "Hybrid" },
  { id: "account-mgr", title: "Account Manager", company: "Linden & Co.", logo: "L", logoBg: "var(--umber-600)", tags: ["4 years", "Full-time", "Denver"], salary: "$72k–$84k", type: "Full-time" },
  { id: "frontend-dev", title: "Frontend Developer", company: "Northwind", logo: "N", logoBg: "var(--clay-700)", tags: ["3 years", "Remote", "US"], salary: "$110k–$135k", type: "Remote" },
];
