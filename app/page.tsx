"use client";

import Link from "next/link";
import Image from "next/image";
import StackIcon from "tech-stack-icons";

export default function Home() {
  return (
    <main>
      <div className="px-9 py-8 max-w-md mx-auto flex flex-col gap-10 items-center text-center">
        <section>
          <div className="flex gap-3 items-center justify-center"></div>
          <p className="text-base text-muted-foreground mb-2">
            Hello there, I'm
          </p>

          <h1 className="text-4xl font-semibold tracking-tight leading-tight mb-2">
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
              width={230}
              height={230}
              
            />
          </div>


          <Link
            href={"my-projects"}
            className="inline-block px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium"
          >
            View My Work →
          </Link>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight mb-6">
            Areas I Focus On as a Developer
          </h2>

          <div className="flex flex-col gap-4">
            <div
              className="bg-card border border-border p-7 rounded-xl h-34 justify-center flex flex-col 
            hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <p className="font-medium mb-1">Frontend</p>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building responsive and performant interfaces with React
              </p>
            </div>
            

            <div
              className="bg-card border border-border p-7 rounded-xl h-34 justify-center flex flex-col 
            hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <p className="font-medium mb-1">Backend</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Scalable Node.js applications handling data, auth, and logic.
              </p>
            </div>

            <div
              className="bg-card border border-border p-7 rounded-xl h-34 justify-center flex flex-col 
            hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <p className="font-medium mb-1">APIs</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Clean, secure REST APIs for reliable communication.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 text-left">
          <h2 className="text-xl font-semibold tracking-tight mb-5.5 text-center">
            My Journey Into Full-Stack Development
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4 m-auto">
            My name is Yousif. I’m 23 years old and currently an aspiring
            full-stack developer.
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4 m-auto">
            I did not start this journey because I had everything figured out,
            but because I was curious and honestly, over time, it became
            something that i now genuinely enjoy. I like figuring things,
            solving annoying problems out and pushing myself even when things
            dont always go as expected
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Outside of coding, I keep things simple. I spend time and hang out
            with people I care about, stay active and healthy, and try to stay
            consistent with whatever I’m working on.
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Right now, I’m focused on becoming a strong full-stack developer and
            I’m currently looking for an internship (available from [date]). If
            you'd like to connect with me or learn more, you can reach me at{" "}
            <a
              href="mailto:yousifmaqdasi@icloud.com"
              className="text-primary underline hover:opacity-80"
            >
              yousif.maqdasi@chasacademy.se
            </a>{" "}
            or feel free to reach me on{" "}
            <a
              href="https://www.linkedin.com/in/yousif-maqdasi-731578382/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:opacity-80"
            >
              LinkedIn
            </a>
            .
          </p>
        </section>

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
