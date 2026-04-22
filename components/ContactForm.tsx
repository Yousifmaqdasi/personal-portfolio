import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ContactCard from "@/components/ContactCard";
import { MapPin, Mail, Phone } from "lucide-react";

export function ContactForm() {
  return (
    <div className="w-full max-w-md">
      <form>
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
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  className="placeholder:text-xs"
                  id="email"
                  placeholder="Enter email"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <Textarea
                  id="message"
                  placeholder="Write your message here..."
                  className="resize-none placeholder:text-xs"
                  required
                />
              </Field>
            </FieldGroup>
          </FieldSet>

          <Field orientation="horizontal">
            <Button type="submit">Send message</Button>
            <Button variant="outline" type="button">
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
            content="Yousifmaqdasi@icloud@.com"
          />
          <ContactCard icon={Phone} title="Phone" content="+46 72 945 81 88" />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
