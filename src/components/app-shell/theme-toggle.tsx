"use client";

import { useEffect, useState } from "react";

import { IconMoon, IconSun } from "@/components/icons";

const STORAGE_KEY = "flowadmin-theme";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const currentTheme = getPreferredTheme();
    setTheme(currentTheme);
    document.documentElement.dataset.theme = currentTheme;
  }, []);

  const nextTheme: Theme = theme === "dark" ? "light" : "dark";
  const label =
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  const handleToggle = () => {
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={theme === "dark"}
      title={label}
      onClick={handleToggle}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
    >
      {theme === "dark" ? (
        <IconSun className="h-4 w-4" />
      ) : (
        <IconMoon className="h-4 w-4" />
      )}
    </button>
  );
}
