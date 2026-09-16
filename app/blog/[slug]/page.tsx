import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { Scene } from "@/components/illustrations/Scene";
import { scenes } from "@/components/illustrations/scenes";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getAllPosts().find((p) => p.slug === params.slug);
  return { title: post ? `${post.title} — Marigold Illustration` : "Journal — Marigold Illustration" };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const exists = getAllPosts().some((p) => p.slug === params.slug);
  if (!exists) notFound();

  const post = await getPostBySlug(params.slug);

  return (
    <article className="px-6 sm:px-10 py-14">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Link href="/blog" className="font-display text-sm uppercase tracking-wide text-coral underline-squiggle">
            ← All posts
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-6 font-display text-xs uppercase tracking-widest text-coral">
            {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl leading-tight">{post.title}</h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-[2rem] border-[3px] border-ink shadow-pop">
            <Scene def={scenes[post.sceneId]} stage="color" className="h-full w-full" />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            className="prose prose-lg mt-10 max-w-none font-body prose-headings:font-display prose-a:text-coral"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </Reveal>
      </div>
    </article>
  );
}
