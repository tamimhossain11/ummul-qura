"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { chatFallback, chatGreeting, chatTopics, findTopic, type ChatTopic } from "@/lib/chatbot";
import type { T } from "@/lib/i18n";
import { site } from "@/lib/site";
import { Icon } from "./Icon";
import { useLang } from "./LanguageProvider";

type Message = {
  from: "bot" | "user";
  text: T | string;
  link?: ChatTopic["link"];
};

const chips = chatTopics.filter((topic) => topic.chip);

const whatsappLink = {
  href: `https://wa.me/${site.whatsapp}`,
  label: { bn: "হোয়াটসঅ্যাপে জিজ্ঞাসা করুন", en: "Ask on WhatsApp" },
  external: true,
};

/**
 * A small assistant that answers the questions the office is asked most.
 * It runs entirely in the browser against the site's own content — no
 * external service, so it works wherever the site is hosted.
 */
export function ChatWidget() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ from: "bot", text: chatGreeting }]);
  const [thinking, setThinking] = useState(false);
  const [draft, setDraft] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [messages, thinking, open]);

  useEffect(() => () => clearTimeout(timer.current), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /** Answers after a short pause, so the reply reads as a reply. */
  const say = (question: string, topic: ChatTopic | null) => {
    setMessages((prev) => [...prev, { from: "user", text: question }]);
    setThinking(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setThinking(false);
      setMessages((prev) => [
        ...prev,
        topic
          ? { from: "bot", text: topic.answer(), link: topic.link }
          : { from: "bot", text: chatFallback, link: whatsappLink },
      ]);
    }, 420);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const question = draft.trim();
    if (!question) return;
    setDraft("");
    say(question, findTopic(question));
    inputRef.current?.focus();
  };

  const Avatar = () => (
    <span className="relative mt-0.5 h-7 w-7 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-gold-500/50">
      <Image src="/logo.jpeg" alt="" fill sizes="28px" className="object-cover" />
    </span>
  );

  return (
    <>
      {/* Launcher — bottom of the floating column; the social rail sits above it. */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={t({ bn: "জামিয়ার সহায়ক", en: "Jamia assistant" })}
        className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] end-3 z-[60] flex h-12 items-center gap-2 rounded-full bg-navy-900 ps-3.5 pe-4 text-white shadow-lift ring-1 ring-gold-500/50 transition-all hover:-translate-y-0.5 hover:bg-teal-600 lg:bottom-5 lg:end-5 lg:h-13"
      >
        <Icon name={open ? "close" : "chat"} className="h-5 w-5 text-gold-400" strokeWidth={1.9} />
        <span className="text-sm font-bold">{lang === "bn" ? "জিজ্ঞাসা" : "Ask us"}</span>
      </button>

      {/* A quiet scrim on phones, so the panel reads as being in front. */}
      {open && (
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[55] bg-navy-950/25 backdrop-blur-[1px] sm:hidden"
        />
      )}

      {open && (
        <div
          role="dialog"
          aria-label={t({ bn: "জামিয়ার সহায়ক", en: "Jamia assistant" })}
          className="fixed inset-x-3 bottom-[max(4.25rem,calc(env(safe-area-inset-bottom)+4.25rem))] top-[max(3.5rem,env(safe-area-inset-top))] z-[60] flex flex-col overflow-hidden rounded-2xl border border-navy-800/15 bg-white shadow-lift sm:inset-x-auto sm:end-3 sm:top-auto sm:h-[min(36rem,82dvh)] sm:w-[24rem] lg:bottom-[5.5rem] lg:end-5"
        >
          {/* Header */}
          <div className="relative shrink-0 overflow-hidden bg-gradient-to-r from-navy-950 via-navy-900 to-teal-600 px-4 py-3.5 text-white">
            <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.08]" />
            <div className="relative flex items-center gap-3">
              <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-gold-500/60">
                <Image src="/logo.jpeg" alt="" fill sizes="40px" className="object-cover" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold leading-tight">
                  {lang === "bn" ? "জামিয়ার সহায়ক" : "Jamia assistant"}
                </p>
                <p className="flex items-center gap-1.5 text-[11px] text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {lang === "bn" ? "সচরাচর জিজ্ঞাসার উত্তর" : "Answers to common questions"}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t({ bn: "বন্ধ করুন", en: "Close" })}
                className="shrink-0 rounded-md p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Icon name="close" className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Conversation */}
          <div className="flex-1 space-y-3 overflow-y-auto overscroll-contain bg-sky-50 px-3.5 py-4">
            {messages.map((m, i) =>
              m.from === "user" ? (
                <div key={i} className="flex justify-end">
                  <p className="max-w-[85%] rounded-2xl rounded-ee-md bg-navy-900 px-3.5 py-2.5 text-sm leading-relaxed text-white">
                    {typeof m.text === "string" ? m.text : t(m.text)}
                  </p>
                </div>
              ) : (
                <div key={i} className="flex items-start gap-2">
                  <Avatar />
                  <div className="max-w-[85%] rounded-2xl rounded-es-md border border-navy-800/10 bg-white px-3.5 py-3 text-sm leading-relaxed text-navy-800/85 shadow-soft">
                    {typeof m.text === "string" ? m.text : t(m.text)}
                    {m.link &&
                      (m.link.external ? (
                        <a
                          href={m.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 flex items-center gap-1.5 border-t border-navy-800/10 pt-2.5 text-sm font-bold text-teal-600 hover:text-gold-600"
                        >
                          {t(m.link.label)}
                          <Icon name="arrow" className="h-3.5 w-3.5 rtl:rotate-180" strokeWidth={2.2} />
                        </a>
                      ) : (
                        <Link
                          href={m.link.href}
                          onClick={() => setOpen(false)}
                          className="mt-3 flex items-center gap-1.5 border-t border-navy-800/10 pt-2.5 text-sm font-bold text-teal-600 hover:text-gold-600"
                        >
                          {t(m.link.label)}
                          <Icon name="arrow" className="h-3.5 w-3.5 rtl:rotate-180" strokeWidth={2.2} />
                        </Link>
                      ))}
                  </div>
                </div>
              ),
            )}

            {!thinking && (
              <div className="flex items-start gap-2">
                <span className="h-7 w-7 shrink-0" />
                <div className="flex flex-wrap gap-2">
                  {chips.map((topic) => (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => say(t(topic.question), topic)}
                      className="rounded-full border border-navy-800/15 bg-white px-3 py-1.5 text-xs font-semibold text-navy-800/75 shadow-soft transition-colors hover:border-gold-400 hover:bg-gold-200/40 hover:text-navy-900"
                    >
                      {t(topic.question)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {thinking && (
              <div className="flex items-start gap-2">
                <Avatar />
                <span className="flex items-center gap-1 rounded-2xl rounded-es-md border border-navy-800/10 bg-white px-4 py-3.5 shadow-soft">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-navy-800/35"
                      style={{ animationDelay: `${d * 0.12}s` }}
                    />
                  ))}
                </span>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Composer */}
          <div className="shrink-0 border-t border-navy-800/10 bg-white">
            <form onSubmit={submit} className="flex items-center gap-2 px-3 py-2.5">
              <input
                ref={inputRef}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder={lang === "bn" ? "আপনার প্রশ্ন লিখুন…" : "Type your question…"}
                aria-label={t({ bn: "আপনার প্রশ্ন", en: "Your question" })}
                className="min-w-0 flex-1 rounded-full border border-navy-800/15 bg-sky-50 px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors placeholder:text-navy-800/40 focus:border-gold-400 focus:bg-white"
              />
              <button
                type="submit"
                disabled={!draft.trim()}
                aria-label={t({ bn: "পাঠান", en: "Send" })}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500 text-navy-950 transition-all hover:bg-gold-400 disabled:cursor-not-allowed disabled:bg-navy-800/15 disabled:text-navy-800/40"
              >
                <Icon name="send" className="h-4 w-4" strokeWidth={2} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
