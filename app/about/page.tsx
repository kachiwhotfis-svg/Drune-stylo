import { Reveal } from "@/components/Reveal";
import { Scene } from "@/components/illustrations/Scene";
import { scenes } from "@/components/illustrations/scenes";

export const metadata = {
  title: "About — Marigold Illustration",
};

export default function AboutPage() {
  return (
    <div className="px-6 sm:px-10 py-14">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border-[3px] border-ink shadow-pop">
            <Scene def={scenes["owls-library"]} stage="color" className="h-full w-full" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-display text-sm uppercase tracking-[0.2em] text-coral">About</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl">Hi, I&rsquo;m Marigold.</h1>
          <div className="mt-6 space-y-4 font-body text-ink/80">
            <p>
              This is placeholder biography copy for the sample site. In the real version, this paragraph will talk
              about your path into children&rsquo;s book illustration — the first book you fell in love with, how you
              found your style, and what kind of stories you&rsquo;re drawn to illustrating.
            </p>
            <p>
              I work across picture books, chapter book interiors, and visual development for animation, moving from
              rough thumbnail sketches through to fully painted final art. Every project on the portfolio page shows
              that process, step by step.
            </p>
            <p>
              Based somewhere lovely, taking on a small number of new picture book projects each year. Replace this
              paragraph with real studio details, representation, and a mailing list link when you&rsquo;re ready.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              ["8+", "years illustrating"],
              ["12", "picture books"],
              ["3", "publishers"],
            ].map(([num, label]) => (
              <div key={label} className="rounded-2xl border-[3px] border-ink bg-white/50 px-4 py-5 text-center shadow-card">
                <p className="font-display text-3xl text-coral">{num}</p>
                <p className="mt-1 font-body text-xs uppercase tracking-wide text-ink/60">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
