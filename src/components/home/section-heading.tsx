import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  label: string;
  className?: string;
  lineClassName?: string;
};

export default function SectionHeading({
  label,
  className,
  lineClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span className="font-[var(--font-jetbrains-mono)] text-sm text-[var(--accent-soft)]">
        {label}
      </span>
      <div className={cn("h-px flex-1 bg-white/20", lineClassName)} />
    </div>
  );
}
