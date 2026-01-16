import SectionHeading from "@/components/home/section-heading";

type ContactSectionProps = {
  heading: string;
  description: string;
  cardTitle: string;
  contactLines: string[];
};

export default function ContactSection({
  heading,
  description,
  cardTitle,
  contactLines,
}: ContactSectionProps) {
  return (
    <section id="contact" className="mt-24 space-y-10">
      <SectionHeading label={heading} />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-sm text-white/65">
          <p>{description}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[var(--panel)] p-6 text-sm text-white/70 shadow-[0_20px_50px_rgba(6,8,12,0.45)]">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">
            {cardTitle}
          </p>
          <div className="mt-4 space-y-2 text-sm">
            {contactLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
