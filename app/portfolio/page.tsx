import { artworks } from "@/lib/artworks";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Portfolio — Marigold Illustration",
};

export default function PortfolioPage() {
  return (
    <div className="px-6 sm:px-10 py-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-display text-sm uppercase tracking-[0.2em] text-coral">Portfolio</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl">Picture book art &amp; visual development</h1>
          <p className="mt-4 max-w-2xl font-body text-ink/70">
            A sample gallery — click any piece to see the process behind it, from thumbnail sketch through to final
            colour. Swap these placeholder illustrations for real artwork whenever it&rsquo;s ready.
          </p>
        </Reveal>

        <div className="mt-12">
          <PortfolioGrid artworks={artworks} />
        </div>
      </div>
    </div>
  );
}
