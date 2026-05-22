import { Benefits } from "@/components/sections/Benefits";
import { ContactForm } from "@/components/sections/ContactForm";
import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { Modules } from "@/components/sections/Modules";
import { Panels } from "@/components/sections/Panels";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Panels />
      <Modules />
      <CTA />
      <ContactForm />
    </>
  );
}
