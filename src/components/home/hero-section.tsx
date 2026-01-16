type HeroSectionProps = {
  badge: string;
  title: string;
  subtitle: string;
  ctaText: string;
  supportingText: string;
  statusText: string;
};

function HeroFigure() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[360px]">
      <div className="absolute left-1/2 top-10 h-16 w-16 -translate-x-1/2 rounded-full bg-[#0f1218] shadow-[0_0_30px_rgba(0,0,0,0.5)]" />
      <div className="absolute inset-x-6 top-20 h-[320px] rounded-[42%_42%_18%_18%] bg-[#141922] shadow-[0_20px_50px_rgba(5,7,12,0.6)]" />
      <div className="absolute inset-x-12 top-24 h-[250px] rounded-[45%_45%_16%_16%] border border-white/10 bg-[#0e1117]" />
      <div className="absolute right-3 top-28 h-28 w-24 rounded-[40%] bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
      <div className="absolute right-6 top-52 h-24 w-24 bg-[radial-gradient(circle,rgba(255,255,255,0.22)_1px,transparent_1px)] bg-[size:10px_10px] opacity-70" />
    </div>
  );
}

export default function HeroSection({
  badge,
  title,
  subtitle,
  ctaText,
  supportingText,
  statusText,
}: HeroSectionProps) {
  return (
    <section
      id="home"
      className="mt-16 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="space-y-8 animate-[fade-up_0.9s_ease-out]">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/60">
          {badge}
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-sm text-white/60">{subtitle}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button className="rounded-lg border border-[var(--accent)] bg-[var(--accent-fade)] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(155,115,255,0.4)]">
            {ctaText}
          </button>
          <p className="text-xs text-white/60">{supportingText}</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="absolute left-6 top-8 h-20 w-20 border border-[var(--accent-border)] animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute left-16 top-20 h-20 w-20 border border-[var(--accent-border)] animate-[float_7s_ease-in-out_infinite]" />
        <div className="absolute bottom-8 left-0 hidden h-14 w-24 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-white/70 sm:flex">
          <span className="mr-2 inline-flex h-2 w-2 rounded-sm bg-[var(--accent)]" />
          {statusText}
        </div>
        <div className="relative w-full rounded-3xl border border-white/10 bg-[var(--panel-strong-soft)] px-6 py-8 shadow-[0_20px_60px_rgba(6,8,12,0.6)] backdrop-blur">
          <HeroFigure />
        </div>
      </div>
    </section>
  );
}
