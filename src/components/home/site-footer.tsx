type SiteFooterProps = {
  name: string;
  tagline: string;
  mediaLabel: string;
  media: string[];
  copyright: string;
};

export default function SiteFooter({
  name,
  tagline,
  mediaLabel,
  media,
  copyright,
}: SiteFooterProps) {
  return (
    <footer className="mt-24 border-t border-white/10 pt-10 text-xs text-white/50">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p>{tagline}</p>
        </div>
        <div className="flex items-center gap-3 text-white/60">
          <span>{mediaLabel}</span>
          {media.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <p className="mt-6">{copyright}</p>
    </footer>
  );
}
