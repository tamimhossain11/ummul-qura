import type { Metadata } from "next";
import { AboutView } from "@/components/views/AboutView";

export const metadata: Metadata = {
  title: "প্রতিষ্ঠান পরিচিতি",
  description: "জামিয়া উম্মুল কুরা আল-ইসলামিয়ার ইতিহাস, লক্ষ্য-উদ্দেশ্য এবং সম্মানিত প্রতিষ্ঠাতা প্রিন্সিপালের বাণী।",
};

export default function Page() {
  return <AboutView />;
}
