import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t-[3px] border-ink/10 px-6 sm:px-10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-hand text-3xl font-bold text-coral -rotate-2 inline-block">Marigold</span>
          <p className="mt-2 max-w-sm text-sm text-ink/70 font-body">
            Picture book illustration &amp; visual development. Sample site — art and copy to be replaced with the real thing.
          </p>
        </div>
        <div className="flex gap-6 font-display text-sm uppercase tracking-wide">
          <Link href="/portfolio" className="hover:text-coral">Portfolio</Link>
          <Link href="/blog" className="hover:text-coral">Journal</Link>
          <Link href="/contact" className="hover:text-coral">Contact</Link>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-xs text-ink/40 font-body">
        © {new Date().getFullYear()} Marigold Illustration. Placeholder site for design review.
      </p>
    </footer>
  );
}
