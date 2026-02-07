import type { Property } from "@/data/properties";

function formatTHB(amount: number) {
  return new Intl.NumberFormat("en-US").format(amount);
}

export default function PropertyCard({ p }: { p: Property }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-semibold">{p.title}</div>
          <div className="text-sm text-zinc-400">{p.location} • {p.type}</div>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold">฿{formatTHB(p.priceTHB)}</div>
          <div className="text-xs text-zinc-400">{p.contract}</div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 text-sm text-zinc-200">
        <div className="rounded-lg bg-zinc-950/40 px-3 py-2">
          Beds: <span className="font-semibold">{p.bedrooms}</span>
        </div>
        <div className="rounded-lg bg-zinc-950/40 px-3 py-2">
          Baths: <span className="font-semibold">{p.bathrooms}</span>
        </div>
        <div className="rounded-lg bg-zinc-950/40 px-3 py-2">
          Size: <span className="font-semibold">{p.sizeSqm} sqm</span>
        </div>
      </div>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-300">
        {p.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </div>
  );
}
