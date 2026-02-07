export default function ContactPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Contact & Inquiry</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Fill this out and we’ll contact you fast.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
          <div className="text-lg font-semibold">Agency Contact</div>
          <div className="mt-3 space-y-2 text-sm text-zinc-300">
            <div>Email: info@seabrookrealtypattaya.com</div>
            <div>Phone: +66 (add number)</div>
            <div>WhatsApp: +66 (add number)</div>
            <div>LINE: (add LINE ID)</div>
            <div>Telegram: (add username)</div>
          </div>
        </div>

        <form
          className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6"
          method="POST"
          action="https://formspree.io/f/YOUR_FORM_ID"
        >
          <div className="text-lg font-semibold">Client Details</div>

          <div className="mt-4 grid gap-3">
            <input className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm"
              name="name" placeholder="Full name" required />

            <input className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm"
              name="phone" placeholder="Phone number" required />

            <input className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm"
              name="email" placeholder="Email (optional)" />

            <input className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm"
              name="whatsapp" placeholder="WhatsApp (optional)" />

            <input className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm"
              name="line" placeholder="LINE ID (optional)" />

            <input className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm"
              name="telegram" placeholder="Telegram username (optional)" />

            <textarea className="min-h-28 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm"
              name="message" placeholder="What are you looking for? Budget, area, move-in date, etc." />

            <button
              type="submit"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
            >
              Submit Inquiry
            </button>

            <p className="text-xs text-zinc-500">
              Note: Replace Formspree URL with your own form endpoint (I’ll guide that next).
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
