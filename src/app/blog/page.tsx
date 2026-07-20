import NoteCard from "@/components/NoteCard";
import PostCard from "@/components/PostCard";
import { getAllNotes } from "@/lib/notes";
import { getAllPosts, getCategoryInfo } from "@/lib/posts";

interface BlogPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const posts = await getAllPosts();
  const notes = await getAllNotes();
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
  const filteredNotes = query
    ? notes.filter((note) => {
        const category = getCategoryInfo(note.category);
        const haystack = [
          note.title,
          note.excerpt,
          note.content,
          category?.name,
          category?.description,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return haystack.includes(query);
      })
    : [];
  const totalResults = filteredPosts.length + filteredNotes.length;

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-stone-900 mb-3 tracking-tight">
          {query ? "搜索结果" : "全部文章"}
        </h1>
        <p className="text-stone-500">
          {query
            ? `找到 ${totalResults} 条与“${q}”相关的内容`
            : `共 ${posts.length} 篇文章，持续更新中`}
        </p>
        <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mt-4" />
      </div>

      {query ? (
        totalResults > 0 ? (
          <div className="space-y-10">
            {filteredPosts.length > 0 && (
              <section>
                <h2 className="text-lg font-bold text-stone-900 mb-4 tracking-tight">
                  文章
                </h2>
                <div className="space-y-4">
                  {filteredPosts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              </section>
            )}

            {filteredNotes.length > 0 && (
              <section>
                <h2 className="text-lg font-bold text-stone-900 mb-4 tracking-tight">
                  小记
                </h2>
                <div className="space-y-3">
                  {filteredNotes.map((note) => (
                    <NoteCard key={note.slug} note={note} />
                  ))}
                </div>
              </section>
            )}
          </div>
        ) : (
          <div className="rounded-2xl border border-stone-200 bg-stone-50 px-6 py-12 text-center">
            <p className="text-stone-600">没有找到匹配的内容。</p>
          </div>
        )
      ) : (
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
