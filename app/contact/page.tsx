import type { Metadata } from "next";
import { ContactView } from "@/components/views/ContactView";

export const metadata: Metadata = {
  title: "যোগাযোগ",
  description: "জামিয়া উম্মুল কুরা আল-ইসলামিয়ার সঙ্গে যোগাযোগের ঠিকানা ও মাধ্যম।",
};

export default function Page() {
  return <ContactView />;
}
