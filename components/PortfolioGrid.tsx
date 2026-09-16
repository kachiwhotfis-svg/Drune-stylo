"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ArtworkCard } from "./ArtworkCard";
import { ArtworkModal } from "./ArtworkModal";
import { Artwork } from "@/lib/artworks";

export function PortfolioGrid({ artworks }: { artworks: Artwork[] }) {
  const [active, setActive] = useState<Artwork | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {artworks.map((artwork, i) => (
          <ArtworkCard key={artwork.slug} artwork={artwork} index={i} onOpen={() => setActive(artwork)} />
        ))}
      </div>

      <AnimatePresence>
        {active && <ArtworkModal artwork={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  );
}
