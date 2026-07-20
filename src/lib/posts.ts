import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { categories } from "./categories";

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: number;
  featured?: boolean;
}

const postsDirectory = path.join(process.cwd(), "content/posts");

function buildExcerpt(content: string) {
  return `${content.trim().replace(/\s+/g, " ").slice(0, 150)}...`;
}

function parsePost(slug: string, fileContents: string): Post {
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    category: data.category as string,
    readTime: data.readTime as number,
    featured: data.featured as boolean | undefined,
    excerpt: buildExcerpt(content),
    content,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = await fs.readdir(postsDirectory);
  const posts = await Promise.all(
    fileNames
      .filter((name) => name.endsWith(".md"))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = await fs.readFile(fullPath, "utf8");

        return parsePost(slug, fileContents);
      }),
  );

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = await fs.readFile(fullPath, "utf8");

    return parsePost(slug, fileContents);
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
