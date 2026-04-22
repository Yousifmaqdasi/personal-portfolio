import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <div className="flex flex-col item-center justify-center m-auto p-12">
      <div className="mb-6 max-w-xl">
        <p className="text-xs tracking-widest text-gray-500 mb-3">
          LET’S CONNECT
        </p>
        <h2 className="text-3xl font-serif mb-2">Contact Me</h2>
        <p className="text-gray-500 text-sm m-auto">
          I’m currently looking for an internship in software development. If
          you have an opportunity or just want to connect, feel free to reach
          out.
        </p>
      </div>

      <ContactForm />
    </div>
  );
};

export default ContactPage;