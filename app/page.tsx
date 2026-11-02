import { HeroHome, HowItWorks, LogoStrip, Stats, WhyUs } from "@/components/site/Sections";
import { Testimonials } from "@/components/site/Testimonials";

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <LogoStrip />
      <Stats />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
    </>
  );
}
