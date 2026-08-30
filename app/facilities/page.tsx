import type { Metadata } from "next";
import { FacilitiesView } from "@/components/views/FacilitiesView";

export const metadata: Metadata = {
  title: "সুযোগ-সুবিধা",
  description: "মাসজিদুল মিসবাহ, দারুল ইক্বামা, মাতবাখ ও কুতুবখানাসহ জামিয়ার সুযোগ-সুবিধা।",
};

export default function Page() {
  return <FacilitiesView />;
}
