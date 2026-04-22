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
    <Card className="b-0 ring-0 p-0">
      <CardHeader className="p-0">
        <div className="flex gap-2.5 items-center mb-1.5 pl-0.5">
          <Icon strokeWidth={1.5} className="w-4.5"></Icon>
          <CardTitle className="font-extralight text-sm">{title}</CardTitle>
        </div>

        <CardDescription className="text-left">{content}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default ContactCard;
