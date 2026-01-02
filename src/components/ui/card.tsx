import * as React from "react";

import { cn } from "@/lib/cn";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export function Card({ className, ...props }: DivProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: DivProps) {
  return (
    <div
      className={cn("flex flex-col gap-1 px-6 pt-6", className)}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: HeadingProps) {
  return (
    <h3
      className={cn("text-base font-semibold text-[var(--text-primary)]", className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: DivProps) {
  return (
    <p className={cn("text-sm text-[var(--text-muted)]", className)} {...props} />
  );
}

export function CardContent({ className, ...props }: DivProps) {
  return <div className={cn("px-6 pb-6", className)} {...props} />;
}

export function CardFooter({ className, ...props }: DivProps) {
  return (
    <div className={cn("flex items-center px-6 pb-6", className)} {...props} />
  );
}
