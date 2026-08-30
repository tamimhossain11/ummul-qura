import type { Metadata } from "next";
import { AdmissionView } from "@/components/views/AdmissionView";

export const metadata: Metadata = {
  title: "ভর্তি তথ্য",
  description: "ভর্তি প্রক্রিয়া, প্রয়োজনীয় কাগজপত্র ও নিয়মাবলী সম্পর্কে বিস্তারিত তথ্য।",
};

export default function Page() {
  return <AdmissionView />;
}
