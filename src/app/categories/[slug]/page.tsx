import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getCategoryInfo } from "@/lib/posts";
import { categories } from "@/lib/categories";
import PostCard from "@/components/PostCard";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryInfo(slug);
  if (!category) return { title: "分类未找到" };
  return {
    title: `${category.name} - Hardy's Wiki`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryInfo(slug);

  if (!category) {
    notFound();
  }

  const allPosts = await getAllPosts();
  const categoryPosts = allPosts.filter((post) => post.category === slug);

  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-stone-500 mb-6">
        <Link href="/" className="hover:text-teal-600 transition-colors">
          首页
        </Link>
        <svg className="w-4 h-4 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-stone-900 font-medium">{category.name}</span>
      </div>

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

      {categoryPosts.length > 0 ? (
        <div className="space-y-4">
          {categoryPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
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
