import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getAllNotes, getNoteBySlug } from "@/lib/notes";

interface NotePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const notes = await getAllNotes();
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export async function generateMetadata({ params }: NotePageProps) {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);
  if (!note) return { title: "小记未找到" };
  return {
    title: `${note.title} - Hardy's Wiki`,
    description: note.excerpt,
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return (
    <div>
      <Link
        href="/notes"
        className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-teal-600 mb-6 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        返回小记列表
      </Link>

      <article>
        <div className="mb-6 pb-6 border-b border-stone-200">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <time className="text-xs font-medium text-stone-400 tracking-wide">
              {note.date}
            </time>
          </div>

          <h1 className="text-3xl font-bold text-stone-900 mb-0 tracking-tight">
            {note.title}
          </h1>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown>{note.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
