"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  IconCreditCard,
  IconDashboard,
  IconLayers,
  IconSettings,
  IconUsers,
} from "@/components/icons";
import { cn } from "@/lib/cn";

const navItems = [
  { label: "Dashboard", href: "/", icon: IconDashboard },
  { label: "Users", href: "/users", icon: IconUsers },
  { label: "Billing", href: "/billing", icon: IconCreditCard },
  { label: "Components", href: "/components", icon: IconLayers },
  { label: "Settings", href: "/settings", icon: IconSettings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-full flex-col border-b border-[var(--border)] bg-[var(--sidebar-bg)] px-5 py-4 md:h-screen md:w-64 md:border-b-0 md:border-r md:py-6">
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--brand)] text-sm font-bold text-white">
          FA
        </div>
        <div>
          <p className="text-base font-semibold">FlowAdmin</p>
          <p className="text-xs text-[var(--text-muted)]">Admin Console</p>
        </div>
      </div>

      <nav className="mt-6 flex flex-1 flex-row gap-1 overflow-x-auto md:mt-8 md:flex-col md:overflow-visible">
        {navItems.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-[var(--text-muted)] transition-colors",
                isActive
                  ? "bg-[var(--sidebar-active)] text-[var(--text-primary)]"
                  : "hover:bg-[var(--surface-2)]",
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-sm md:block">
        <p className="font-semibold text-[var(--text-primary)]">Enterprise ready</p>
        <p className="mt-1 text-xs text-[var(--text-muted)]">
          Upgrade to unlock SSO, audit logs, and advanced RBAC.
        </p>
        <button className="mt-3 w-full rounded-md bg-[var(--brand)] px-3 py-2 text-xs font-semibold text-white">
          Upgrade plan
        </button>
      </div>
    </aside>
  );
}
