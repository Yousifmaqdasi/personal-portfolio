"use client";

import Link from "next/link";
import Image from "next/image";
import { TechStack } from "@/components/TechStacks";
import SkillsCard from "@/components/SkillsCard";

export default function Home() {
  return (
    <main>
      <div className="px-9 py-8 max-w-md mx-auto flex flex-col gap-10 items-center text-center">
        <section>
          <div className="flex gap-3 items-center justify-center"></div>
          <p className="text-base text-muted-foreground mb-2">
            Hello there, I'm
          </p>

          <h1 className="text-3xl font-semibold tracking-tight leading-tight mb-2">
            Yousif Maqdasi
          </h1>

          <p className="text-base font-medium text-primary mb-3">
            Fullstack JavaScript Developer
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6 ">
            I create fast, scalable web applications using JavaScript, React,
            and Node.js.
          </p>

          <div className="my-10 flex flex-col items-center">
            <Image
              src={"/IMG_0134 2.png"}
              alt="Yousif Maqdasi"
              className="rounded-[15px]"
              width={210}
              height={210}
            />
          </div>

          <Link
            href={"my-projects"}
            className="inline-block px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium"
          >
            View My Work →
          </Link>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold tracking-tight mb-8">
            Areas I Focus On as a Developer
          </h2>

          <div className="flex flex-col gap-4">
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
          </div>
        </section>

        <section className="mt-8 text-left p-7 rounded-xl">
          <h2 className="text-xl font-semibold tracking-tight mb-5.5 ">
            My Journey Into Full-Stack Development
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4 m-auto">
            My name is Yousif. I’m 23 years old and currently an aspiring
            full-stack developer.
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4 m-auto">
            My journey started as a curiosity and over time, it became something
            that I now genuinely enjoy. I like figuring things out, solving
            problems and pushing myself to the fullest.
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Right now, I’m focused on becoming a strong full-stack developer and
            I’m actively looking for an internship (available from [date]). If
            you’d like to connect or learn more, feel free to reach out:
          </p>

          <a
            href="mailto:yousifmaqdasi@icloud.com"
            className="block text-primary underline hover:opacity-80 text-sm mb-2"
          >
            yousif.maqdasi@chasacademy.se
          </a>

          <p className="text-sm text-muted-foreground">
            Or connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/yousif-maqdasi-731578382/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:opacity-80"
            >
              LinkedIn
            </a>
          </p>
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
