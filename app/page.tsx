"use client";

import Link from "next/link";
import { TechStack } from "@/components/TechStacks";
import SkillsCard from "@/components/SkillsCard";
import MyStory from "@/components/MyStory";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main>
      <div className="px-9 py-8 max-w-md mx-auto flex flex-col gap-10 items-center text-center md:max-w-4xl">
        <HeroSection></HeroSection>

        <MyStory></MyStory>

        <section className="mt-8 md:mt-20">
          <h2 className="text-xl font-semibold tracking-tight mb-8">
            Areas I Focus On as a Developer
          </h2>

          <div className="flex flex-col gap-6 md:flex-row md:flex-wrap lg:w-230 item-center justify-center">
            <SkillsCard
              title="Frontend"
              description="Building fast, responsive interfaces with React, Tailwind, and modern TypeScript."
            />

            <SkillsCard
              title="Backend"
              description="Developing Node.js and Express services for handling data, logic, and authentication."
            />

            <SkillsCard
              title="APIs"
              description="Designing REST APIs with Express and structured routing for predictable communication."
            />

            <SkillsCard
              title="Security"
              description="Implementing JWT auth, input validation (Zod), and basic security best practices."
            />

            <SkillsCard
              title="Databases"
              description="Working with PostgreSQL and Drizzle to model data and write efficient queries."
            />

            <SkillsCard
              title="Deployment"
              description="Deploying applications using Docker, Vercel, and cloud-based environments."
            />
          </div>
        </section>

        <TechStack></TechStack>

        <Link
          href={"contact"}
          className="inline-block px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium"
        >
          Contact me →
        </Link>
      </div>
    </main>
  );
}
