import type { Metadata } from "next";
import { ResearchView } from "@/components/views/ResearchView";

export const metadata: Metadata = {
  title: "গবেষণা বিভাগ",
  description:
    "কুরআন-সুন্নাহর আলোকে সমকালীন প্রশ্ন ও চ্যালেঞ্জ নিয়ে গবেষণা — জামিয়ার গবেষণা বিভাগের কার্যক্রম।",
};

export default function Page() {
  return <ResearchView />;
}
