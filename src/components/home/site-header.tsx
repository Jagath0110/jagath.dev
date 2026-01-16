import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  name: string;
  tagline: string;
  navItems: NavItem[];
  activeHref?: string;
};

export default function SiteHeader({
  name,
  tagline,
  navItems,
  activeHref,
}: SiteHeaderProps) {
  return (
    <header className="flex items-center justify-between gap-6 text-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs font-semibold">
          JG
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide">{name}</p>
          <p className="text-xs text-white/50">{tagline}</p>
        </div>
      </div>

      <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.2em] text-white/70 md:flex">
        {navItems.map((item) => {
          const isActive = activeHref === item.href;

          return (
            <Link
              key={item.href}
              className={isActive ? "text-white" : "hover:text-white"}
              href={item.href}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
        EN
        <span className="text-[10px]">v</span>
      </button>
    </header>
  );
}
