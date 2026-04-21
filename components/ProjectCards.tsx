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
  projectImage: string
};

export function ProjectCard({
  projectName,
  projectDescription,
  projectLink,
  projectImage
}: Props) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={projectImage}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40 "
        
      />
      <CardHeader>
        <CardAction></CardAction>
        <CardTitle>{projectName}</CardTitle>
        <CardDescription>{projectDescription}</CardDescription>
      </CardHeader>
      <CardFooter>
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
