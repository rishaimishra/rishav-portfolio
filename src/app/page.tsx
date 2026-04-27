import { Hero } from "@/components/home/Hero";
import { Skills } from "@/components/home/Skills";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rishav Kumar | Full Stack Developer & UI/UX Architect",
  description: "Specializing in high-performance Next.js and Laravel applications.",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <Skills />
      <FeaturedProjects />
      <ContactCTA />
    </div>
  );
}
