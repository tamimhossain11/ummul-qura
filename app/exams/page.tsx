import type { Metadata } from "next";
import { ExamsView } from "@/components/views/ExamsView";

export const metadata: Metadata = {
  title: "পরীক্ষা তথ্য",
  description:
    "জামিয়ার শিক্ষাবর্ষের চারটি পরীক্ষা, প্রস্তুতির নিয়মাবলি ও পরীক্ষার হলে পালনীয় নির্দেশনা।",
};

export default function Page() {
  return <ExamsView />;
}
