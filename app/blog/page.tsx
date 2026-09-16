import { getAllPosts } from "@/lib/posts";
import { BlogCard } from "@/components/BlogCard";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Journal — Marigold Illustration",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="px-6 sm:px-10 py-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-display text-sm uppercase tracking-[0.2em] text-coral">Journal</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl">Notes on process &amp; picture-book making</h1>
          <p className="mt-4 max-w-2xl font-body text-ink/70">
            Sample blog posts, written and rendered from markdown files — add new posts by dropping a
            <code className="mx-1 rounded bg-ink/10 px-1.5 py-0.5 text-sm">.md</code>
            file into <code className="rounded bg-ink/10 px-1.5 py-0.5 text-sm">content/blog</code>.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <BlogCard post={post} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
