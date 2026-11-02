import type { Metadata } from "next";
import { JobsBoard } from "@/components/site/JobsBoard";

export const metadata: Metadata = {
  title: "Find your role",
  description: "Discover roles that align with your values, skills, and the change you want to make.",
};

export default function JobsPage() {
  return <JobsBoard />;
}
