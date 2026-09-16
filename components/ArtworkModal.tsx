"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Scene } from "./illustrations/Scene";
import { scenes } from "./illustrations/scenes";
import { Artwork } from "@/lib/artworks";

export function ArtworkModal({ artwork, onClose }: { artwork: Artwork; onClose: () => void }) {
  const [stepIndex, setStepIndex] = useState(artwork.process.length - 1);

  const goTo = useCallback(
    (i: number) => {
      setStepIndex((i + artwork.process.length) % artwork.process.length);
    },
    [artwork.process.length]
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goTo(stepIndex + 1);
      if (e.key === "ArrowLeft") goTo(stepIndex - 1);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goTo, stepIndex]);

  const step = artwork.process[stepIndex];

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 backdrop-blur-sm p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${artwork.title} — behind the art`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border-[3px] border-ink bg-paper shadow-pop"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-ink bg-paper font-display text-lg hover:bg-coral hover:text-paper transition-colors"
        >
          ×
        </button>

        <div className="grid gap-0 sm:grid-cols-[1.3fr_1fr]">
          <div className="relative border-b-[3px] sm:border-b-0 sm:border-r-[3px] border-ink bg-white/40">
            <div className="relative aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.stage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <Scene def={scenes[artwork.sceneId]} stage={step.stage} className="h-full w-full" />
                </motion.div>
              </AnimatePresence>

              <button
                onClick={() => goTo(stepIndex - 1)}
                aria-label="Previous step"
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-ink bg-paper font-display hover:bg-sun"
              >
                ‹
              </button>
              <button
                onClick={() => goTo(stepIndex + 1)}
                aria-label="Next step"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-ink bg-paper font-display hover:bg-sun"
              >
                ›
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 border-t-[3px] border-ink/10 py-3">
              {artwork.process.map((p, i) => (
                <button
                  key={p.stage}
                  onClick={() => goTo(i)}
                  aria-label={p.label}
                  className={`h-2.5 rounded-full transition-all ${
                    i === stepIndex ? "w-8 bg-coral" : "w-2.5 bg-ink/20 hover:bg-ink/40"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 flex flex-col">
            <p className="font-display text-xs uppercase tracking-widest text-coral">Behind the art</p>
            <h3 className="mt-1 font-display text-2xl leading-tight">{artwork.title}</h3>
            <p className="mt-1 font-body text-sm text-ink/60">
              {artwork.book} · {artwork.medium} · {artwork.year}
            </p>

            <p className="mt-4 font-body text-sm text-ink/80">{artwork.blurb}</p>

            <div className="mt-6 flex-1">
              <div className="flex flex-wrap gap-2">
                {artwork.process.map((p, i) => (
                  <button
                    key={p.stage}
                    onClick={() => goTo(i)}
                    className={`rounded-full border-2 border-ink px-3 py-1.5 font-display text-xs uppercase tracking-wide transition-colors ${
                      i === stepIndex ? "bg-ink text-paper" : "bg-transparent hover:bg-ink/10"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={step.stage}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="mt-4 font-body text-sm text-ink/70 italic"
                >
                  {step.caption}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="mt-6 text-xs text-ink/40 font-body">
              Step {stepIndex + 1} of {artwork.process.length} — use ← → or the dots to move through the process.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
