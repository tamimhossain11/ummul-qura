import type { Metadata } from "next";
import { ScholarshipsView } from "@/components/views/ScholarshipsView";

export const metadata: Metadata = {
  title: "বৃত্তি ও অনুদান",
  description:
    "মেধাবৃত্তি, হিফজ বৃত্তি, এতিম ও অসচ্ছল শিক্ষার্থীদের সহায়তা এবং যাকাতভিত্তিক শিক্ষা সহায়তার বিবরণ।",
};

export default function Page() {
  return <ScholarshipsView />;
}
