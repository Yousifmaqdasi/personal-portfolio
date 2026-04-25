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

          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
            <SkillsCard
              title="Frontend"
              description="Building responsive and performant interfaces."
            ></SkillsCard>

            <SkillsCard
              title="Backend"
              description="Scalable Node.js applications handling data, auth, and logic."
            ></SkillsCard>

            <SkillsCard
              title="APIs"
              description=" Clean, secure REST APIs for reliable communication."
            ></SkillsCard>

            <SkillsCard
              title="Security"
              description="Auth, validation, and protection against vulnerabilities."
            ></SkillsCard>

            <SkillsCard
              title="Databases"
              description=" Efficient data modeling and queries."
            ></SkillsCard>

            <SkillsCard
              title="Deployment"
              description="Shipping apps to production environments."
            ></SkillsCard>
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
