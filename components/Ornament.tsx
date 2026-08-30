/** A small arabesque flourish used to separate sections. */
export function Ornament({
  className = "",
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "light";
}) {
  const stroke = tone === "gold" ? "var(--color-gold-500)" : "rgba(255,255,255,0.55)";
  return (
    <svg
      viewBox="0 0 220 24"
      role="presentation"
      aria-hidden="true"
      className={`h-6 w-[220px] ${className}`}
      fill="none"
      stroke={stroke}
      strokeWidth="1.2"
      strokeLinecap="round"
    >
      <path d="M0 12h72" opacity="0.55" />
      <path d="M220 12h-72" opacity="0.55" />
      <path d="M84 12c0-6 5-9 10-9s10 3 10 9-5 9-10 9-10-3-10-9Z" opacity="0.75" />
      <path d="M136 12c0-6-5-9-10-9s-10 3-10 9 5 9 10 9 10-3 10-9Z" opacity="0.75" />
      <path d="M110 4.5 113.4 11 110 17.5 106.6 11Z" fill={stroke} stroke="none" />
      <circle cx="78" cy="12" r="1.6" fill={stroke} stroke="none" />
      <circle cx="142" cy="12" r="1.6" fill={stroke} stroke="none" />
    </svg>
  );
}

/** A wide corner-to-corner band of eight-point stars. */
export function StarBand({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pattern-girih opacity-[0.07] ${className}`}
    />
  );
}
