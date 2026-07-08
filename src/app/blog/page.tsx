import { posts } from "@/data/posts";
import PostCard from "@/components/PostCard";

export default function BlogPage() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-stone-900 mb-3 tracking-tight">
          全部文章
        </h1>
        <p className="text-stone-500">
          共 {posts.length} 篇文章，持续更新中
        </p>
        <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mt-4" />
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
