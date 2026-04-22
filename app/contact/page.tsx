import ContactForm from "@/components/ContactForm";
import ContactCard from "@/components/ContactCard";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="w-3/4 m-auto my-8">
      <div className="mb-6">
        <p className="text-xs tracking-widest text-gray-500 mb-3">
          LET’S CONNECT
        </p>
        <h2 className="text-3xl font-serif mb-2">Contact Me</h2>
        <p className="text-gray-500 text-sm">
          I’m currently looking for an internship in software development. If
          you have an opportunity or just want to connect, feel free to reach
          out.
        </p>
      </div>

      <ContactForm></ContactForm>

      <div>
        <ContactCard icon={MapPin} title="Location" content="Stockholm, Sweden"></ContactCard>
        <ContactCard icon={Mail} title="Email" content="Yousifmaqdasi@icloud@.com"></ContactCard>
        <ContactCard icon={Phone} title="Phone" content="+46 72 945 81 88"></ContactCard>
      </div>
    </div>
  );
};

export default Contact;

