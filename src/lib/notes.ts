import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { categories } from "./categories";

export interface Note {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
}

const notesDirectory = path.join(process.cwd(), "content/notes");

function buildExcerpt(content: string) {
  return `${content.trim().replace(/\s+/g, " ").slice(0, 120)}...`;
}

function parseNote(slug: string, fileContents: string): Note {
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    category: data.category as string,
    tags: (data.tags as string[] | undefined) || [],
    excerpt: buildExcerpt(content),
    content,
  };
}

export async function getAllNotes(): Promise<Note[]> {
  try {
    const fileNames = await fs.readdir(notesDirectory);
    const notes = await Promise.all(
      fileNames
        .filter((name) => name.endsWith(".md"))
        .map(async (fileName) => {
          const slug = fileName.replace(/\.md$/, "");
          const fullPath = path.join(notesDirectory, fileName);
          const fileContents = await fs.readFile(fullPath, "utf8");

          return parseNote(slug, fileContents);
        }),
    );

    return notes.sort((a, b) => (a.date > b.date ? -1 : 1));
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      return [];
    }

    throw error;
  }
}

export async function getNoteBySlug(slug: string): Promise<Note | null> {
  try {
    const fullPath = path.join(notesDirectory, `${slug}.md`);
    const fileContents = await fs.readFile(fullPath, "utf8");

    return parseNote(slug, fileContents);
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      return null;
    }

    throw error;
  }
}

export function getCategoryInfo(categorySlug: string) {
  return categories.find((category) => category.slug === categorySlug) || null;
}
