import Link from "next/link";
import type { Note } from "@/lib/notes";

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <article className="group border-b border-stone-100 last:border-b-0">
      <Link
        href={`/notes/${note.slug}`}
        className="grid gap-2 py-4 transition-colors hover:bg-stone-50/70 sm:grid-cols-[7rem_1fr] sm:px-3"
      >
        <time className="text-xs font-medium text-stone-400 tracking-wide sm:pt-1">
          {note.date}
        </time>

        <div>
          <h2 className="text-base font-semibold text-stone-900 group-hover:text-teal-700 transition-colors mb-1.5 tracking-tight">
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
