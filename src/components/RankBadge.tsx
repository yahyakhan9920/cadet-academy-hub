interface RankBadgeProps {
  rank: string;
  chevrons: number;
  size?: "sm" | "md" | "lg";
}

export default function RankBadge({ rank, chevrons, size = "md" }: RankBadgeProps) {
  const sizes = {
    sm: { w: 24, h: 28, bar: 3 },
    md: { w: 32, h: 36, bar: 4 },
    lg: { w: 48, h: 56, bar: 5 },
  };
  const s = sizes[size];

  return (
    <div className="flex items-center gap-2">
      <svg width={s.w} height={s.h} viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L28 10V26L16 34L4 26V10L16 2Z" fill="hsl(var(--primary))" stroke="hsl(var(--accent))" strokeWidth="1.5" />
        {Array.from({ length: chevrons }).map((_, i) => (
          <rect
            key={i}
            x="10"
            y={12 + i * (s.bar + 2)}
            width="12"
            height={s.bar}
            rx="1"
            fill="hsl(var(--accent))"
            opacity={0.6 + i * 0.13}
          />
        ))}
      </svg>
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{rank}</span>
    </div>
  );
}
