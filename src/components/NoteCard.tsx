import Link from "next/link";
import type { Note } from "@/lib/notes";

interface NoteCardProps {
  note: Note;
  index: number;
}

const noteStyles = [
  "bg-amber-50 border-amber-100 shadow-amber-100/60 rotate-[-1deg]",
  "bg-emerald-50 border-emerald-100 shadow-emerald-100/60 rotate-[0.8deg]",
  "bg-sky-50 border-sky-100 shadow-sky-100/60 rotate-[-0.4deg]",
  "bg-rose-50 border-rose-100 shadow-rose-100/60 rotate-[1deg]",
];

export default function NoteCard({ note, index }: NoteCardProps) {
  const style = noteStyles[index % noteStyles.length];

  return (
    <article className="group">
      <Link
        href={`/notes/${note.slug}`}
        className={`relative block min-h-52 p-5 border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:rotate-0 hover:shadow-lg ${style}`}
      >
        <span className="absolute left-1/2 top-3 h-2 w-12 -translate-x-1/2 rounded-full bg-white/70 shadow-sm" />

        <time className="block pt-3 text-xs font-medium text-stone-400 tracking-wide">
          {note.date}
        </time>

        <h2 className="mt-4 text-lg font-semibold text-stone-900 group-hover:text-teal-700 transition-colors tracking-tight">
          {note.title}
        </h2>

        <p className="mt-3 text-sm text-stone-600 leading-relaxed line-clamp-4">
          {note.excerpt}
        </p>
      </Link>
    </article>
  );
}
