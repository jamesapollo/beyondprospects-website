import type { Metadata } from "next";
import { DarkProof, HeroEmployers, HowItWorks } from "@/components/site/Sections";
import { Testimonials } from "@/components/site/Testimonials";

export const metadata: Metadata = {
  title: "For employers",
  description: "Pre-vetted candidates in days — not weeks. No job board clutter. Just great hires, ready to go.",
};

export default function EmployersPage() {
  return (
    <>
      <HeroEmployers />
      <DarkProof />
      <HowItWorks />
      <Testimonials />
    </>
  );
}
