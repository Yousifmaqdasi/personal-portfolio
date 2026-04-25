import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="px-4 md:px-12 md:max-w-2xl">
      <div className="md:flex md:items-center justify-between">
        <div className="md:w-2/4">
          <p className="text-base text-muted-foreground mb-2">
            Hello there, I'm
          </p>

          <h1 className="text-3xl font-semibold tracking-tight leading-tight mb-2">
            Yousif Maqdasi
          </h1>

          <p className="text-base font-medium text-primary mb-3">
            Fullstack JavaScript Developer
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            I create fast, scalable web applications using JavaScript, React,
            and Node.js.
          </p>

          <Link
            href={"my-projects"}
            className="inline-block px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium"
          >
            View My Work →
          </Link>
        </div>

        <div className="my-10 md:my-0 flex justify-center">
          <Image
            src={"/IMG_0134 2.png"}
            alt="Yousif Maqdasi"
            className="rounded-[15px]"
            width={210}
            height={210}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
