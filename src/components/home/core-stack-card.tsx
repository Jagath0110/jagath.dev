type CoreStackCardProps = {
  title: string;
  items: string[];
};

export default function CoreStackCard({ title, items }: CoreStackCardProps) {
  return (
    <div className="mt-32 rounded-2xl border border-white/10 bg-[#232832] p-6 shadow-[0_20px_50px_rgba(6,8,12,0.45)]">
      <p className="text-xs uppercase tracking-[0.22em] text-white/60">{title}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
