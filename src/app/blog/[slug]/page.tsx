import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import type { Post } from "@/data/posts";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: "文章未找到" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div>
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-teal-600 mb-6 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
        </svg>
        返回文章列表
      </Link>

      <article className="prose dark:prose-invert max-w-none">
        <div className="mb-6 pb-6 border-b border-stone-200">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <time className="text-xs font-medium text-stone-400 tracking-wide">
              {post.date}
            </time>
            <span className="text-stone-300">·</span>
            <span className="text-xs text-stone-500 flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {post.readTime} 分钟阅读
            </span>
            <span className="text-stone-300">·</span>
            <span className="text-xs font-medium text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-stone-900 mb-0 tracking-tight">
            {post.title}
          </h1>
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      <div className="mt-12 pt-8 border-t border-stone-200">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-stone-200 text-stone-700 text-sm font-medium hover:border-teal-200 hover:text-teal-700 transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
          </svg>
          返回文章列表
        </Link>
      </div>
    </div>
  );
}
