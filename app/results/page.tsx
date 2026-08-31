import type { Metadata } from "next";
import { ResultsView } from "@/components/views/ResultsView";

export const metadata: Metadata = {
  title: "বেফাক ও এদারা পরীক্ষার সফলতা",
  description:
    "৪৮তম বেফাকুল মাদারিসিল আরাবিয়া ও এদারায়ে তালিমিয়্যাহ বোর্ড পরীক্ষায় জামিয়া উম্মুল কুরা আল-ইসলামিয়ার ছাত্রদের ফলাফল ও মেধাতালিকা।",
};

export default function Page() {
  return <ResultsView />;
}
