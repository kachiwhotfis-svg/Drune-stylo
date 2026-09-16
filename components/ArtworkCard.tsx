"use client";

import { motion } from "framer-motion";
import { Scene } from "./illustrations/Scene";
import { scenes } from "./illustrations/scenes";
import { Artwork } from "@/lib/artworks";

export function ArtworkCard({
  artwork,
  onOpen,
  index = 0,
}: {
  artwork: Artwork;
  onOpen: () => void;
  index?: number;
}) {
  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6, rotate: index % 2 === 0 ? -1 : 1 }}
      whileTap={{ scale: 0.98 }}
      className="group relative text-left w-full rounded-2xl border-[3px] border-ink bg-paper shadow-card overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-sun"
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b-[3px] border-ink">
        <Scene def={scenes[artwork.sceneId]} stage="color" className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 flex items-end justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="rounded-full bg-ink text-paper font-display text-xs uppercase tracking-wide px-3 py-1.5 shadow-pop">
            See the process →
          </span>
        </div>
      </div>
      <div className="p-4">
        <p className="font-display text-lg leading-snug">{artwork.title}</p>
        <p className="mt-1 font-body text-sm text-ink/60">{artwork.book}</p>
      </div>
    </motion.button>
  );
}
