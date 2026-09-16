import { Reveal } from "@/components/Reveal";
import { ContactForm } from "./ContactForm";

export const metadata = {
  title: "Contact — Marigold Illustration",
};

export default function ContactPage() {
  return (
    <div className="px-6 sm:px-10 py-14">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="font-display text-sm uppercase tracking-[0.2em] text-coral">Contact</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl">Let&rsquo;s talk about your book.</h1>
          <p className="mt-4 font-body text-ink/70">
            Fill in the sample form below, or replace this section with a direct email link — whichever fits your
            workflow.
          </p>
        </Reveal>

        <div className="mt-10">
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
