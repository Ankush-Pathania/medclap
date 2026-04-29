import Container from "@/components/ui/Container";
import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 bg-cream overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
