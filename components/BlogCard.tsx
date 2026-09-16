import Link from "next/link";
import { Scene } from "./illustrations/Scene";
import { scenes } from "./illustrations/scenes";
import { PostMeta } from "@/lib/posts";

export function BlogCard({ post, index = 0 }: { post: PostMeta; index?: number }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border-[3px] border-ink bg-paper shadow-card transition-transform hover:-translate-y-1"
      style={{ transitionDelay: `${(index % 3) * 40}ms` }}
    >
      <div className="aspect-[16/9] overflow-hidden border-b-[3px] border-ink">
        <Scene def={scenes[post.sceneId]} stage="color" className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-display text-xs uppercase tracking-widest text-coral">
          {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </p>
        <h3 className="mt-2 font-display text-xl leading-snug">{post.title}</h3>
        <p className="mt-2 flex-1 font-body text-sm text-ink/70">{post.excerpt}</p>
        <span className="mt-4 font-display text-sm text-coral underline-squiggle w-fit">Read the post</span>
      </div>
    </Link>
  );
}
