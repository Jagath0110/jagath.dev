export type CapabilityItem = {
  title: string;
  items: string[];
};

type CapabilityCardProps = {
  capability: CapabilityItem;
};

export default function CapabilityCard({ capability }: CapabilityCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[var(--panel)] p-5 text-sm text-white/70">
      <p className="text-sm font-semibold text-white">{capability.title}</p>
      <ul className="mt-3 space-y-2 text-xs text-white/60">
        {capability.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
