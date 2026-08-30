import type { Metadata } from "next";
import { DepartmentsView } from "@/components/views/DepartmentsView";

export const metadata: Metadata = {
  title: "শিক্ষা বিভাগসমূহ",
  description: "মক্তব, নাযেরা, হিফজুল কুরআন, কিতাব বিভাগসহ জামিয়ার সকল শিক্ষা বিভাগের বিস্তারিত।",
};

export default function Page() {
  return <DepartmentsView />;
}
