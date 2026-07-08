import Link from "next/link";
import { categories } from "@/lib/categories";

export default async function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mb-14">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-28 h-28 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full blur-2xl opacity-60" />
          <div className="absolute -top-2 -right-8 w-36 h-36 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-2xl opacity-40" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
              持续更新中
            </div>

            <h1 className="text-4xl font-bold text-stone-900 mb-5 tracking-tight leading-tight">
              我的知识分享站
            </h1>

            <p className="text-lg text-stone-600 leading-relaxed max-w-xl mb-8">
              在这里，我系统地整理和分享前端、后端、DevOps 等方向的技术知识。
              每一篇文章都是学习与实践的沉淀。
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm hover:shadow-md"
              >
                浏览全部文章
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
              <Link
                href="/categories/frontend"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-stone-200 text-stone-700 text-sm font-medium hover:border-stone-300 hover:shadow-sm transition-all"
              >
                按分类浏览
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-14">
        <h2 className="text-lg font-bold text-stone-900 mb-1 tracking-tight">知识分类</h2>
        <p className="text-sm text-stone-500 mb-4">选择一个分类开始探索</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="group p-4 rounded-2xl bg-white border border-stone-200 hover:border-teal-200 hover:shadow-md hover:shadow-stone-200/50 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{cat.icon}</span>
                <div>
                  <div className="text-sm font-semibold text-stone-900 group-hover:text-teal-700 transition-colors">
                    {cat.name}
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5 line-clamp-1">{cat.description}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 这里留空，以后你可以放自定义内容 */}
    </div>
  );
}
