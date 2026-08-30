import type { Metadata } from "next";
import { EventsView } from "@/components/views/EventsView";

export const metadata: Metadata = {
  title: "কার্যক্রম ও অনুষ্ঠান",
  description: "হিফজুল কুরআন প্রতিযোগিতা, আরবি ভাষা দিবসসহ জামিয়ার সাম্প্রতিক আয়োজনসমূহ।",
};

export default function Page() {
  return <EventsView />;
}
