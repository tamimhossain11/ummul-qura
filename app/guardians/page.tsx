import type { Metadata } from "next";
import { GuardiansView } from "@/components/views/GuardiansView";

export const metadata: Metadata = {
  title: "অভিভাবকদের প্রতি",
  description: "জামিয়ার সম্মানিত অভিভাবকদের পালনীয় নিয়মাবলি ও বিশেষ কিছু নির্দেশনা।",
};

export default function Page() {
  return <GuardiansView />;
}
