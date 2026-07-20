import NoteCard from "@/components/NoteCard";
import { getAllNotes } from "@/lib/notes";

export default async function NotesPage() {
  const notes = await getAllNotes();

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-stone-900 mb-3 tracking-tight">
          小记
        </h1>
        <p className="text-stone-500">
          用来记录那些不需要写成长文、但值得留下来的小知识点。
        </p>
        <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mt-4" />
      </div>

      {notes.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2">
          {notes.map((note, index) => (
            <NoteCard key={note.slug} note={note} index={index} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-stone-200 bg-stone-50 px-6 py-12 text-center">
          <p className="text-stone-600">还没有小记。</p>
        </div>
      )}
    </div>
  );
}
