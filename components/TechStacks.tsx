import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

const techStack = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    link: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    link: "https://nextjs.org/",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    link: "https://nodejs.org/",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#6B7280",
    link: "https://expressjs.com/",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
    link: "https://www.postgresql.org/",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#38BDF8",
    link: "https://tailwindcss.com/",
  },
  { name: "Git", icon: SiGit, color: "#F05032", link: "https://git-scm.com/" },
];

export function TechStack() {
  return (
    <section className="mt-12 mb-5 p-7 rounded-xl text-center w-3/4">
      <h2 className="text-xl font-semibold tracking-tight mb-10">
        Technologies I Work With
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-10 lg:grid-cols-3">
        {techStack.map((tech, i) => {
          const Icon = tech.icon;

          return (
            <a
              key={i}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-110"
            >
              <Icon size={28} style={{ color: tech.color }} />
              <span className="text-xs text-muted-foreground">{tech.name}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
