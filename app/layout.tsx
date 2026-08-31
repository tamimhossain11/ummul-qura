import type { Metadata, Viewport } from "next";
import { Amiri, Cormorant_Garamond, Hind_Siliguri } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SocialRail } from "@/components/SocialRail";
import { site } from "@/lib/site";
import "./globals.css";

const hind = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jamiaummulqura.com"),
  title: {
    default: `${site.nameBn} | ${site.nameEn}`,
    template: `%s | ${site.nameBn}`,
  },
  description:
    "জামিয়া উম্মুল কুরা আল-ইসলামিয়া, ফুলবাড়িয়া, সদর, ব্রাহ্মণবাড়িয়া — কুরআন, সুন্নাহ ও ইলমে দ্বীনের আলোকিত অঙ্গন। মক্তব, নাযেরা, হিফজুল কুরআন ও কিতাব বিভাগ।",
  keywords: [
    "জামিয়া উম্মুল কুরা",
    "মাদরাসা",
    "ব্রাহ্মণবাড়িয়া",
    "হিফজুল কুরআন",
    "Jamia Ummul Qura",
    "madrasah",
    "Brahmanbaria",
  ],
  openGraph: {
    title: `${site.nameBn} | ${site.nameEn}`,
    description: site.tagline.bn,
    type: "website",
    locale: "bn_BD",
    images: ["/banners/campus.jpeg"],
  },
  icons: { icon: "/logo.jpeg", apple: "/logo.jpeg" },
};

export const viewport: Viewport = {
  themeColor: "#05192c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn" className={`${hind.variable} ${amiri.variable} ${cormorant.variable}`}>
      <body className="flex min-h-screen flex-col">
        <LanguageProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold-500 focus:px-4 focus:py-2 focus:font-semibold focus:text-navy-950"
          >
            মূল কনটেন্টে যান
          </a>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SocialRail />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
