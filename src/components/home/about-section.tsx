import SectionHeading from "@/components/home/section-heading";

type AboutSectionProps = {
  heading: string;
  paragraphs: string[];
  ctaText: string;
};

export default function AboutSection({
  heading,
  paragraphs,
  ctaText,
}: AboutSectionProps) {
  return (
    <section id="about" className="mt-24 space-y-10">
      <SectionHeading label={heading} />

      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 text-sm text-white/65">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <button className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[var(--accent-border)] bg-[var(--accent-fade)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            {ctaText}
          </button>
        </div>

        <div className="relative mx-auto w-full max-w-[320px]">
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(155,115,255,0.4),transparent_60%)] blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 bg-[var(--panel-strong-soft-70)] p-6 shadow-[0_24px_60px_rgba(6,8,12,0.55)]">
            <div className="relative mx-auto h-[280px] w-full">
              <div className="absolute left-1/2 top-6 h-14 w-14 -translate-x-1/2 rounded-full bg-[#0f1218]" />
              <div className="absolute inset-x-4 top-16 h-[210px] rounded-[42%_42%_18%_18%] bg-[#141922]" />
              <div className="absolute right-4 top-24 h-24 w-24 bg-[radial-gradient(circle,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:10px_10px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
