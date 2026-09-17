import Link from "next/link";
import { artworks } from "@/lib/artworks";
import { getAllPosts } from "@/lib/posts";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { BlogCard } from "@/components/BlogCard";
import { Reveal } from "@/components/Reveal";
import { FloatingShapes } from "@/components/FloatingShapes";
import { ParallaxLayer } from "@/components/ParallaxLayer";
import { Scene } from "@/components/illustrations/Scene";
import { scenes } from "@/components/illustrations/scenes";

export default function HomePage() {
  const featured = artworks.slice(0, 3);
  const posts = getAllPosts().slice(0, 3);

  return (
    <div>
      <section className="relative px-6 sm:px-10 pt-10 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
        <ParallaxLayer speed={0.3} className="absolute inset-0">
          <FloatingShapes />
        </ParallaxLayer>
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.2em] text-coral">Children&rsquo;s book illustrator</p>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl leading-[1.05]">
              Pictures that make small readers <span className="underline-squiggle">stop turning pages.</span>
            </h1>
            <p className="mt-6 max-w-md font-body text-lg text-ink/70">
              I&rsquo;m Marigold — I paint the worlds inside picture books, from first scribble to final spread.
              This is a sample layout: swap this copy and the art below for the real thing whenever you&rsquo;re ready.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="rounded-full border-[3px] border-ink bg-coral px-6 py-3 font-display text-sm uppercase tracking-wide text-paper shadow-card transition-transform hover:-translate-y-0.5"
              >
                See the portfolio
              </Link>
              <Link
                href="/blog"
                className="rounded-full border-[3px] border-ink bg-paper px-6 py-3 font-display text-sm uppercase tracking-wide text-ink transition-transform hover:-translate-y-0.5"
              >
                Read the journal
              </Link>
            </div>
          </div>

          <ParallaxLayer speed={0.12} className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-sun/30 rotate-2" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-ink shadow-pop">
              <Scene def={scenes["fox-and-book"]} stage="color" className="h-full w-full" />
            </div>
          </ParallaxLayer>
        </div>
      </section>

      <section className="px-6 sm:px-10 py-16 bg-white/40 border-y-[3px] border-ink/10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl">Selected work</h2>
                <p className="mt-2 font-body text-ink/70">
                  Click any piece to peek behind the curtain — sketches, clean-up, and the final art.
                </p>
              </div>
              <Link href="/portfolio" className="font-display text-sm uppercase tracking-wide text-coral underline-squiggle">
                View full portfolio
              </Link>
            </div>
          </Reveal>

          <div className="mt-10">
            <PortfolioGrid artworks={featured} />
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10 py-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl">From the journal</h2>
                <p className="mt-2 font-body text-ink/70">Notes on process, palettes, and picture-book making.</p>
              </div>
              <Link href="/blog" className="font-display text-sm uppercase tracking-wide text-coral underline-squiggle">
                All posts
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <BlogCard post={post} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10 py-20">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-[2rem] border-[3px] border-ink bg-leaf/10 px-8 py-14 text-center shadow-card">
            <h2 className="font-display text-3xl sm:text-4xl">Working on a picture book?</h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-ink/70">
              I take on a limited number of picture book and visual development projects each year. Get in touch and let&rsquo;s talk about your story.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full border-[3px] border-ink bg-ink px-7 py-3 font-display text-sm uppercase tracking-wide text-paper transition-transform hover:-translate-y-0.5"
            >
              Say hello
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
