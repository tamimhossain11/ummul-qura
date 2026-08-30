import type { Metadata } from "next";
import { DonationView } from "@/components/views/DonationView";

export const metadata: Metadata = {
  title: "অনুদান ও সহযোগিতা",
  description: "যাকাত, সাদাকা ও অনুদানের মাধ্যমে জামিয়ার খিদমতে শরিক হোন।",
};

export default function Page() {
  return <DonationView />;
}
