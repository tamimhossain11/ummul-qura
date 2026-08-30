type IconName =
  | "book-open" | "quran" | "star" | "scroll" | "pen" | "home"
  | "users" | "shield" | "utensils" | "chart" | "heart" | "mosque"
  | "phone" | "mail" | "pin" | "clock" | "arrow" | "check"
  | "chevron" | "menu" | "close" | "calendar" | "bell" | "gift";

const paths: Record<IconName, React.ReactNode> = {
  "book-open": <><path d="M12 6.5C10.5 5 8 4.3 4 4.5v13c4-.2 6.5.5 8 2 1.5-1.5 4-2.2 8-2v-13c-4-.2-6.5.5-8 2Z" /><path d="M12 6.5v13" /></>,
  quran: <><path d="M5 4.5h11a2 2 0 0 1 2 2V19a2 2 0 0 0-2-2H5Z" /><path d="M5 4.5V17" /><path d="M18 19v1.5H6.5A1.5 1.5 0 0 1 5 19" /><path d="M9 9h6M9 12h4" /></>,
  star: <path d="M12 3.2 14.3 9l6.2.4-4.8 4 1.6 6-5.3-3.4L6.7 19.4l1.6-6-4.8-4L9.7 9Z" />,
  scroll: <><path d="M6 4h11a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2Z" /><path d="M19 17h2a3 3 0 0 1-3 3" /><path d="M8 8h7M8 11.5h7M8 15h4" /></>,
  pen: <><path d="m15.5 4.5 4 4L8 20H4v-4Z" /><path d="m13.5 6.5 4 4" /></>,
  home: <><path d="M4 10.5 12 4l8 6.5V19a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19Z" /><path d="M9.5 20.5v-6h5v6" /></>,
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16 5.3a3.2 3.2 0 0 1 0 5.4M17 15a6 6 0 0 1 4 5" /></>,
  shield: <><path d="M12 3.5 19.5 6v6c0 4.3-3 7.4-7.5 8.5C7.5 19.4 4.5 16.3 4.5 12V6Z" /><path d="m9 12 2.2 2.2L15.5 10" /></>,
  utensils: <><path d="M7 3v7a2.5 2.5 0 0 0 5 0V3" /><path d="M9.5 12.5V21" /><path d="M17.5 3c-1.5 1.5-2 3-2 5.5 0 1.7.7 2.7 2 3V21" /></>,
  chart: <><path d="M4 20h16" /><path d="M7 20V11M12 20V5M17 20v-6" /></>,
  heart: <path d="M12 20s-7.5-4.4-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6c0 5-7.5 9.4-7.5 9.4Z" />,
  mosque: <><path d="M12 2.5c2 2 3 3.3 3 4.8 0 1.4-1.2 2.2-3 2.2S9 8.7 9 7.3c0-1.5 1-2.8 3-4.8Z" /><path d="M4.5 20.5v-6a7.5 7.5 0 0 1 15 0v6Z" /><path d="M10 20.5v-3.5a2 2 0 0 1 4 0v3.5" /><path d="M2.5 20.5h19" /></>,
  phone: <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></>,
  pin: <><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></>,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>,
  arrow: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  chevron: <path d="m6 9.5 6 6 6-6" />,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  calendar: <><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>,
  bell: <><path d="M6 9a6 6 0 1 1 12 0c0 4 1.5 5.5 1.5 5.5h-15S6 13 6 9Z" /><path d="M10 18a2 2 0 0 0 4 0" /></>,
  gift: <><rect x="3.5" y="9" width="17" height="11.5" rx="1.5" /><path d="M3.5 13.5h17M12 9v11.5" /><path d="M12 9S10.8 4.5 8.5 4.5a2.2 2.2 0 0 0 0 4.5ZM12 9s1.2-4.5 3.5-4.5a2.2 2.2 0 0 1 0 4.5Z" /></>,
};

export function Icon({
  name,
  className = "h-5 w-5",
  strokeWidth = 1.5,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
