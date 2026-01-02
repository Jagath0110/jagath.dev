import { IconBell, IconChevronDown, IconSearch } from "@/components/icons";
import ThemeToggle from "@/components/app-shell/theme-toggle";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 md:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 sm:max-w-md">
          <IconSearch className="h-4 w-4 text-[var(--text-muted)]" />
          <input
            aria-label="Search"
            className="w-full bg-transparent text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none"
            placeholder="Search users, invoices, settings"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-medium text-[var(--text-primary)]">
            Acme Corp
            <IconChevronDown className="h-4 w-4 text-[var(--text-muted)]" />
          </button>
          <ThemeToggle />
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-2)]">
            <IconBell className="h-5 w-5 text-[var(--text-muted)]" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[var(--brand)]" />
          </button>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111827] text-sm font-semibold text-white">
              AD
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold">Alex Doe</p>
              <p className="text-xs text-[var(--text-muted)]">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
