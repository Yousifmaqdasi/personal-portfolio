import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  projectName: string;
  projectDescription: string;
  projectLink: string;
  projectImage: string;
};

export function ProjectCard({
  projectName,
  projectDescription,
  projectLink,
  projectImage,
}: Props) {
  return (
    <Card className="relative mx-auto pt-0 w-3/4 md:max-w-110 gap-6 cursor-pointer transition-transform duration-200 
    hover:-translate-y-1 h-150">
      <div className="absolute inset-0 z-30 aspect-video" />
      <img
        src={projectImage}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover  "
      />
      <CardHeader>
        <CardAction></CardAction>
        <CardTitle className="px-3 py-2">{projectName}</CardTitle>
        <CardDescription className="px-3 py-2">
          {projectDescription}
        </CardDescription>
      </CardHeader>
      <CardFooter className="bg-transparent">
        <a
          href={`${projectLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button className="w-full">View Project</Button>
        </a>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
