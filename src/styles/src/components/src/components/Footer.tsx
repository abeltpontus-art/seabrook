export default function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-zinc-400">
        <div className="flex flex-col gap-2">
          <div>© {new Date().getFullYear()} Seabrook Realty Pattaya</div>
          <div>Transparent rentals • Honest listings • Professional client care</div>
        </div>
      </div>
    </footer>
  );
}
