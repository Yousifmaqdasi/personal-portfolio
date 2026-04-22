import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ContactCard from "@/components/ContactCard";
import { MapPin, Mail } from "lucide-react";

export function ContactForm() {
  return (
    <div className="w-full max-w-md">
      <form action={"https://formspree.io/f/mojykoyw"} method="POST">
      <input type="hidden" name="_next" value="http://localhost:3000/my-projects" />
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  className="placeholder:text-xs"
                  id="name"
                  placeholder="Enter name"
                  required
                  name="name"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  className="placeholder:text-xs"
                  id="email"
                  placeholder="Enter email"
                  required
                  name="email"
                  type="email"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <Textarea
                  id="message"
                  placeholder="Write your message here..."
                  className="resize-none placeholder:text-xs"
                  required
                  name="message"
                />
              </Field>
            </FieldGroup>
          </FieldSet>

          <Field orientation="horizontal">
            <Button className="cursor-pointer" type="submit">
              Send message
            </Button>
            <Button className="cursor-pointer" variant="outline" type="reset">
              Clear
            </Button>
          </Field>
        </FieldGroup>

        <div className="mt-12 space-y-8 w-full">
          <h3 className="text-lg font-medium mb-6 text-gray-700 text-left">
            Contact Information
          </h3>
          <ContactCard
            icon={MapPin}
            title="Location"
            content="Stockholm, Sweden"
          />
          <ContactCard
            icon={Mail}
            title="Email"
            content="Yousifmaqdasi@icloud.com"
          />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
