import { getAllPosts, getCategoryInfo } from "@/lib/posts";
import PostCard from "@/components/PostCard";

interface BlogPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const posts = await getAllPosts();
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();
  const filteredPosts = query
    ? posts.filter((post) => {
        const category = getCategoryInfo(post.category);
        const haystack = [
          post.title,
          post.excerpt,
          post.content,
          category?.name,
          category?.description,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return haystack.includes(query);
      })
    : posts;

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-stone-900 mb-3 tracking-tight">
          {query ? "搜索结果" : "全部文章"}
        </h1>
        <p className="text-stone-500">
          {query
            ? `找到 ${filteredPosts.length} 篇与“${q}”相关的文章`
            : `共 ${posts.length} 篇文章，持续更新中`}
        </p>
        <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mt-4" />
      </div>

      {filteredPosts.length > 0 ? (
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-stone-200 bg-stone-50 px-6 py-12 text-center">
          <p className="text-stone-600">没有找到匹配的文章。</p>
        </div>
      )}
    </div>
  );
}
