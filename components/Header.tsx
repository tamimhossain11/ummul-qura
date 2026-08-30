"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Icon } from "./Icon";
import { useLang } from "./LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";

export function Header() {
  const { t, lang } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility strip */}
      <div className="hidden bg-navy-950 text-white/70 lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-2 text-xs">
          <span className="flex items-center gap-2">
            <Icon name="pin" className="h-3.5 w-3.5 text-gold-400" strokeWidth={1.8} />
            {t(site.address)}
          </span>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <Icon name="calendar" className="h-3.5 w-3.5 text-gold-400" strokeWidth={1.8} />
              {lang === "bn" ? "প্রতিষ্ঠিত ২০২২ ঈসায়ী" : "Established 2022"}
            </span>
            <LanguageToggle compact />
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b border-white/10 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 transition-all duration-300 ${
          scrolled ? "shadow-lift" : ""
        }`}
      >
        <div className="relative">
          <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.05]" />
          <div className="relative mx-auto flex max-w-6xl items-center gap-4 px-5 sm:px-8">
            <Link
              href="/"
              className="flex min-w-0 flex-1 items-center gap-3 py-3 text-white"
              aria-label={site.nameBn}
            >
              <span
                className={`relative shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-gold-500/60 transition-all duration-300 ${
                  scrolled ? "h-10 w-10 sm:h-11 sm:w-11" : "h-11 w-11 sm:h-14 sm:w-14"
                }`}
              >
                <Image
                  src="/logo.jpeg"
                  alt=""
                  fill
                  sizes="56px"
                  className="object-cover"
                  priority
                />
              </span>
              <span className="min-w-0">
                <span
                  dir="rtl"
                  className="font-arabic block truncate text-start text-[13px] leading-tight text-gold-400"
                >
                  {site.shortAr}
                </span>
                <span
                  className={`block truncate font-bold leading-tight transition-all duration-300 ${
                    scrolled ? "text-sm sm:text-base" : "text-base sm:text-lg"
                  }`}
                >
                  {lang === "bn" ? site.nameBn : site.nameEn}
                </span>
                <span className="hidden truncate text-[11px] tracking-wide text-cyan-200/70 sm:block">
                  {t(site.address)}
                </span>
              </span>
            </Link>

            <nav className="ms-auto hidden items-center gap-1 lg:flex" aria-label="Primary">
              {nav.map((item) => (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                      isActive(item.href)
                        ? "text-gold-400"
                        : "text-white/85 hover:text-gold-300"
                    }`}
                  >
                    {t(item.label)}
                    {item.children && (
                      <Icon
                        name="chevron"
                        className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                        strokeWidth={2}
                      />
                    )}
                  </Link>
                  {item.children && (
                    <div className="invisible absolute start-0 top-full z-10 w-64 translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="mt-1 overflow-hidden rounded-xl border border-navy-800/10 bg-white shadow-lift">
                        <div className="h-1 bg-gradient-to-r from-gold-500 to-gold-400" />
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-2 border-b border-sky-100 px-4 py-2.5 text-sm font-medium text-navy-800 last:border-0 hover:bg-sky-50 hover:text-teal-600"
                          >
                            <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
                            {t(child.label)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/admission"
                className="ms-3 rounded-full bg-gold-500 px-5 py-2 text-sm font-bold text-navy-950 shadow-sm transition-colors hover:bg-gold-400"
              >
                {lang === "bn" ? "ভর্তি চলছে" : "Apply Now"}
              </Link>
            </nav>

            <div className="flex shrink-0 items-center gap-2 lg:hidden">
              <LanguageToggle compact />
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={lang === "bn" ? "মেনু" : "Menu"}
                className="rounded-md border border-white/20 p-2 text-white"
              >
                <Icon name={open ? "close" : "menu"} className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer — sits in the header's flow, so it always lands
          directly beneath the bar whatever height that bar happens to be. */}
      {open && (
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-navy-950/98 backdrop-blur lg:hidden">
          <nav className="px-5 py-6" aria-label="Mobile">
          {nav.map((item) => (
            <div key={item.href} className="border-b border-white/10">
              <div className="flex items-center">
                <Link
                  href={item.href}
                  className={`flex-1 py-4 text-base font-semibold ${
                    isActive(item.href) ? "text-gold-400" : "text-white"
                  }`}
                >
                  {t(item.label)}
                </Link>
                {item.children && (
                  <button
                    type="button"
                    onClick={() =>
                      setExpanded(expanded === item.href ? null : item.href)
                    }
                    aria-label={t(item.label)}
                    aria-expanded={expanded === item.href}
                    className="p-3 text-white/60"
                  >
                    <Icon
                      name="chevron"
                      className={`h-4 w-4 transition-transform ${
                        expanded === item.href ? "rotate-180" : ""
                      }`}
                      strokeWidth={2}
                    />
                  </button>
                )}
              </div>
              {item.children && expanded === item.href && (
                <div className="pb-3 ps-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="flex items-center gap-2 py-2.5 text-sm text-cyan-200"
                    >
                      <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
                      {t(child.label)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
            <Link
              href="/admission"
              className="mt-6 block rounded-full bg-gold-500 py-3 text-center text-base font-bold text-navy-950"
            >
              {lang === "bn" ? "ভর্তি চলছে" : "Apply Now"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
