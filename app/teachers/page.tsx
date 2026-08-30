import type { Metadata } from "next";
import { TeachersView } from "@/components/views/TeachersView";

export const metadata: Metadata = {
  title: "শিক্ষক পরিচিতি",
  description: "জামিয়া উম্মুল কুরা আল-ইসলামিয়ার সম্মানিত উস্তাদমণ্ডলীর পরিচিতি ও দায়িত্বসমূহ।",
};

export default function Page() {
  return <TeachersView />;
}
