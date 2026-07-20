import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <section className="mb-14">
        <div className="relative">
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
              在这里，我系统地整理和分享前端、后端、DevOps
              等方向的技术知识。每一篇文章都来自学习与实践中的沉淀。
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm hover:shadow-md"
              >
                浏览全部文章
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
