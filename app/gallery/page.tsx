import type { Metadata } from "next";
import { GalleryView } from "@/components/views/GalleryView";

export const metadata: Metadata = {
  title: "ফটো গ্যালারি",
  description: "জামিয়ার প্রাঙ্গণ, আয়োজন ও কার্যক্রমের নির্বাচিত ছবিসমূহ।",
};

export default function Page() {
  return <GalleryView />;
}
