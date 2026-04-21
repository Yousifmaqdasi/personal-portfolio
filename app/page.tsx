import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="px-9 py-8 max-w-md mx-auto flex flex-col gap-10 items-center text-center">
        <section>
        
        <div className="flex gap-3 items-center justify-center">

        </div>
          <p className="text-sm text-muted-foreground mb-2">Hello there, I'm</p>

          <h1 className="text-4xl font-semibold tracking-tight leading-tight mb-2">
            Yousif Maqdasi
          </h1>

          <p className="text-base font-medium text-primary mb-3">
            Fullstack JavaScript Developer
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            I create fast, scalable web applications using JavaScript, React,
            and Node.js.
          </p>

          <div className="my-10 flex flex-col items-center">
            <Image
              src={"/IMG_0134 2.png"}
              alt="Yousif Maqdasi"
              className="rounded-[10px]"
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

        <section>
          <h2 className="text-lg font-semibold tracking-tight mb-4">
            Areas I Focus On as a Developer
          </h2>

          <div className="flex flex-col gap-4">
            <div className="bg-card border border-border p-5 rounded-xl">
              <p className="font-medium mb-1">Frontend</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building responsive and performant interfaces with React,
                focusing on clean UX.
              </p>
            </div>

            <div className="bg-card border border-border p-5 rounded-xl">
              <p className="font-medium mb-1">Backend</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Scalable Node.js applications handling data, auth, and logic.
              </p>
            </div>

            <div className="bg-card border border-border p-5 rounded-xl">
              <p className="font-medium mb-1">APIs</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Clean, secure REST APIs for reliable communication.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold tracking-tight mb-3">
            Featured Work
          </h2>

          <div className="bg-card border border-border p-5 rounded-xl">
            <h3 className="font-medium mb-1">Project Name</h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              Short description of what it does and why it matters.
            </p>
            <Link href="/projects" className="text-sm text-primary font-medium">
              View more →
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold tracking-tight mb-3">Explore</h2>

          <div className="flex flex-col gap-2 text-sm">
            <Link href="/about" className="text-primary font-medium">
              About Me →
            </Link>
            <Link href="/skills" className="text-primary font-medium">
              Skills →
            </Link>
            <Link href="/projects" className="text-primary font-medium">
              Projects →
            </Link>
            <Link href="/contact" className="text-primary font-medium">
              Contact →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
