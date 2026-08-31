/** Filled brand marks, kept separate from the stroked UI icon set. */
type BrandName = "facebook" | "whatsapp" | "youtube";

const marks: Record<BrandName, { path: string; color: string; label: string }> = {
  facebook: {
    label: "Facebook",
    color: "#1877F2",
    path: "M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z",
  },
  whatsapp: {
    label: "WhatsApp",
    color: "#25D366",
    path: "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.38-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35ZM12.05 21.8h-.02c-1.78 0-3.53-.48-5.06-1.38l-.36-.22-3.76.99 1-3.67-.24-.38a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.46-4.44 9.9-9.85 9.9ZM20.52 3.49A11.82 11.82 0 0 0 12.05 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.16 1.6 5.98L0 24l6.22-1.63a11.9 11.9 0 0 0 5.82 1.49h.01c6.58 0 11.94-5.36 11.95-11.95a11.87 11.87 0 0 0-3.48-8.42Z",
  },
  youtube: {
    label: "YouTube",
    color: "#FF0000",
    path: "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z",
  },
};

export function BrandIcon({
  name,
  className = "h-5 w-5",
  brandColor = false,
}: {
  name: BrandName;
  className?: string;
  brandColor?: boolean;
}) {
  const mark = marks[name];
  return (
    <svg
      viewBox="0 0 24 24"
      fill={brandColor ? mark.color : "currentColor"}
      aria-hidden="true"
      className={className}
    >
      <path d={mark.path} />
    </svg>
  );
}

export function brandColorOf(name: BrandName) {
  return marks[name].color;
}

export type { BrandName };
