import Link from "next/link";
import type { Post } from "@/lib/posts";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative p-6 rounded-2xl bg-white border border-stone-200 hover:border-teal-200 hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-300">
          <div className="absolute top-6 left-0 w-0.5 h-8 bg-gradient-to-b from-teal-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <time className="text-xs font-medium text-stone-400 tracking-wide">
              {post.date}
            </time>
            <span className="text-stone-300">·</span>
            <span className="text-xs text-stone-500 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readTime} 分钟
            </span>
          </div>

          <h2 className="text-lg font-semibold text-stone-900 group-hover:text-teal-700 transition-colors mb-2 tracking-tight">
            {post.title}
          </h2>

          <p className="text-sm text-stone-500 leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>

          <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-teal-600 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
            <span>阅读全文</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
}
