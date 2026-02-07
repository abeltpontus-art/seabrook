import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-semibold tracking-wide">
          Seabrook Realty Pattaya
        </Link>

        <nav className="flex items-center gap-5 text-sm text-zinc-200">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/properties" className="hover:text-white">Properties</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
