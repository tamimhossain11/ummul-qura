import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-teal-600 text-center text-white">
      <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.08]" />
      <div className="relative mx-auto max-w-xl px-6 py-20">
        <p className="font-arabic text-6xl text-gold-400">٤٠٤</p>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">পাতাটি খুঁজে পাওয়া যায়নি</h1>
        <span className="rule-gold mx-auto my-5 block h-px w-40" />
        <p className="leading-relaxed text-white/70">
          দুঃখিত, আপনি যে পাতাটি খুঁজছেন সেটি সরিয়ে ফেলা হয়েছে অথবা কখনো ছিল না.
          <span className="mt-1 block text-white/50">
            Sorry, the page you are looking for could not be found.
          </span>
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-gold-500 px-7 py-3 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-400"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </section>
  );
}
