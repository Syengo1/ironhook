import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <CTA />
    </div>
  );
}