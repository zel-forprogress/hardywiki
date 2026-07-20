import Link from "next/link";
import { getCategoryInfo, type Note } from "@/lib/notes";

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  const category = getCategoryInfo(note.category);

  return (
    <article className="group">
      <Link href={`/notes/${note.slug}`}>
        <div className="relative p-5 rounded-2xl bg-white border border-stone-200 hover:border-teal-200 hover:shadow-md hover:shadow-stone-200/50 transition-all duration-300">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <time className="text-xs font-medium text-stone-400 tracking-wide">
              {note.date}
            </time>
            {category && (
              <>
                <span className="text-stone-300">·</span>
                <span className="text-xs font-medium text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">
                  {category.icon} {category.name}
                </span>
              </>
            )}
          </div>

          <h2 className="text-base font-semibold text-stone-900 group-hover:text-teal-700 transition-colors mb-2 tracking-tight">
            {note.title}
          </h2>

          <p className="text-sm text-stone-500 leading-relaxed line-clamp-2">
            {note.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}
