import type { Metadata } from "next";
import { NoticesView } from "@/components/views/NoticesView";

export const metadata: Metadata = {
  title: "নোটিশ বোর্ড",
  description: "জামিয়ার ভর্তি, পরীক্ষা ও ছুটি সংক্রান্ত সকল আনুষ্ঠানিক ঘোষণা।",
};

export default function Page() {
  return <NoticesView />;
}
