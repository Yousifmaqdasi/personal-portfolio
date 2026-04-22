import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  content: string;
  icon: LucideIcon;
};

export function ContactCard({ title, content, icon: Icon }: Props) {
  return (
    <Card size="sm" className="mx-auto w-full max-w-sm b-0 ring-0">
      <CardHeader>
        <div className="flex gap-2.5 items-center">
          <Icon className="w-4.5 h-4.5"></Icon>
          <CardTitle>{title}</CardTitle>
        </div>

        <CardDescription>{content}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default ContactCard;
