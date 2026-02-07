import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/60 to-zinc-950 p-8">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight">
            Seabrook Realty Pattaya
          </h1>
          <p className="text-zinc-300">
            Client-first real estate service in Pattaya. We focus on transparency, fast communication,
            and clean handovers — including clear deposit terms and honest listings.
          </p>

          <div className="flex flex-wrap gap-3 pt-3">
            <Link
              href="/properties"
              className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
            >
              View Properties
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-zinc-700 px-5 py-2 text-sm font-semibold text-white hover:border-zinc-500"
            >
              Contact & Inquiry
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
          <div className="font-semibold">Transparent Process</div>
          <div className="mt-2 text-sm text-zinc-300">
            Clear terms, honest pricing, documented deposits, and straightforward contracts.
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
          <div className="font-semibold">Strong Local Network</div>
          <div className="mt-2 text-sm text-zinc-300">
            Wide inventory and fast access to owner listings across Pattaya.
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
          <div className="font-semibold">Fast Follow-up</div>
          <div className="mt-2 text-sm text-zinc-300">
            We contact clients quickly via WhatsApp, LINE, Telegram, phone, and email.
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
        <div className="text-xl font-semibold">Team</div>
        <p className="mt-2 text-sm text-zinc-300">
          We’re a Pattaya-based team focused on rentals, sales, and long-term client care.
          Professional communication. No games. No surprises.
        </p>
      </section>
    </div>
  );
}
