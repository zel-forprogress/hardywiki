import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getCategoryInfo } from "@/lib/posts";
import { categories } from "@/lib/categories";

interface CategoryPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const { categories } = await import("@/lib/categories");
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = getCategoryInfo(params.slug);
  if (!category) return { title: "分类未找到" };
  return {
    title: `${category.name} - Hardy's Wiki`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryInfo(params.slug);
  const allPosts = await getAllPosts();
  const categoryPosts = allPosts.filter((p) => p.category === params.slug);

  if (!category) {
    notFound();
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-stone-500 mb-6">
        <Link href="/" className="hover:text-teal-600 transition-colors">首页</Link>
        <svg className="w-4 h-4 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
        </svg>
        <span className="text-stone-900 font-medium">{category.name}</span>
      </div>

      {/* Category Header */}
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100 flex items-center justify-center text-3xl">
            {category.icon}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-stone-900 tracking-tight">
              {category.name}
            </h1>
            <p className="text-sm text-stone-500 mt-1">{category.description}</p>
          </div>
        </div>
        <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full" />
      </div>

      {/* Posts */}
      {categoryPosts.length > 0 ? (
        <div className="space-y-4">
          {categoryPosts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative p-6 rounded-2xl bg-white border border-stone-200 hover:border-teal-200 hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-300">
                  <div className="absolute top-6 left-0 w-0.5 h-8 bg-gradient-to-b from-teal-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-center gap-3 mb-3">
                    <time className="text-xs font-medium text-stone-400 tracking-wide">
                      {post.date}
                    </time>
                    <span className="text-stone-300">·</span>
                    <span className="text-xs text-stone-500 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
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

                  <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-teal-600 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span>阅读全文</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-stone-500">该分类下暂无文章</p>
          <Link href="/blog" className="text-teal-600 hover:text-teal-700 text-sm font-medium mt-2 inline-block">
            查看全部文章 →
          </Link>
        </div>
      )}
    </div>
  );
}
