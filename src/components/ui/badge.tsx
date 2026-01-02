import * as React from "react";

import { cn } from "@/lib/cn";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-[var(--surface-2)] text-[var(--text-muted)]",
  success: "bg-[#dcfce7] text-[#15803d]",
  warning: "bg-[#fef3c7] text-[#b45309]",
  danger: "bg-[#fee2e2] text-[#b91c1c]",
  info: "bg-[#dbeafe] text-[#1d4ed8]",
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}
