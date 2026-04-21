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
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#6B7280" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

export function TechStack() {
  return (
    <section className="mb-5 p-7 rounded-xl text-center">
      <h2 className="text-xl font-semibold tracking-tight mb-10">Technologies I Work With</h2>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-10">
        {techStack.map((tech, i) => {
          const Icon = tech.icon;

          return (
            <div
              key={i}
              className="flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-110"
            >
              <Icon size={28} style={{ color: tech.color }} />
              <span className="text-xs text-muted-foreground">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
