import * as React from "react";

export type IconProps = React.SVGProps<SVGSVGElement>;

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconDashboard(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...baseProps} {...props}>
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="7" rx="2" />
      <rect x="3" y="14" width="7" height="7" rx="2" />
      <rect x="14" y="14" width="7" height="7" rx="2" />
    </svg>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...baseProps} {...props}>
      <circle cx="8" cy="9" r="3" />
      <circle cx="17" cy="11" r="3" />
      <path d="M3 20c0-3 3-5 7-5" />
      <path d="M13 20c0-2.5 2-4 4.5-4" />
    </svg>
  );
}

export function IconCreditCard(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...baseProps} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 15h4" />
    </svg>
  );
}

export function IconSettings(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...baseProps} {...props}>
      <path d="M4 6h16" />
      <circle cx="9" cy="6" r="2" />
      <path d="M4 12h16" />
      <circle cx="15" cy="12" r="2" />
      <path d="M4 18h16" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}

export function IconLayers(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...baseProps} {...props}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 12l9 5 9-5" />
      <path d="M3 17l9 5 9-5" />
    </svg>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...baseProps} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

export function IconBell(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...baseProps} {...props}>
      <path d="M18 14.2V11a6 6 0 0 0-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h16l-1.4-1.4c-.4-.4-.6-.9-.6-1.4z" />
      <path d="M9 17a3 3 0 0 0 6 0" />
    </svg>
  );
}

export function IconSun(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...baseProps} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.9 4.9l1.4 1.4" />
      <path d="M17.7 17.7l1.4 1.4" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M4.9 19.1l1.4-1.4" />
      <path d="M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function IconMoon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...baseProps} {...props}>
      <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3a8 8 0 1 0 11.5 11.5z" />
    </svg>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...baseProps} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function IconPlus(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...baseProps} {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function IconDots(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...baseProps} {...props}>
      <circle cx="12" cy="5" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="12" cy="19" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...baseProps} {...props}>
      <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
