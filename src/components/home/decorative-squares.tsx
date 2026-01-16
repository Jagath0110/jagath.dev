import { cn } from "@/lib/cn";

type SquareConfig = {
  className: string;
};

type DecorativeSquaresProps = {
  squares: SquareConfig[];
  className?: string;
};

export default function DecorativeSquares({
  squares,
  className,
}: DecorativeSquaresProps) {
  return (
    <div className={cn("pointer-events-none", className)}>
      {squares.map((square, index) => (
        <div
          key={`${square.className}-${index}`}
          className={cn(
            "absolute border border-[var(--accent-border)]",
            square.className,
          )}
        />
      ))}
    </div>
  );
}
