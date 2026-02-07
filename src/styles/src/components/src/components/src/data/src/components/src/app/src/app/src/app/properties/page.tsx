import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";

export default function PropertiesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Properties</h1>
          <p className="mt-1 text-sm text-zinc-400">
            Sample listings (easy to edit in src/data/properties.ts)
          </p>
        </div>
        <Link
          href="/contact"
          className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
        >
          Send Inquiry
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {properties.map((p) => (
          <PropertyCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}
