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

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = await fs.readdir(postsDirectory);
  const posts = await Promise.all(
    fileNames
      .filter((name) => name.endsWith(".md"))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = await fs.readFile(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title as string,
          date: data.date as string,
          category: data.category as string,
          readTime: data.readTime as number,
          featured: data.featured as boolean | undefined,
          excerpt: content.trim().slice(0, 150).replace(/\n/g, " ") + "...",
          content,
        };
      })
  );

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      category: data.category as string,
      readTime: data.readTime as number,
      featured: data.featured as boolean | undefined,
      excerpt: content.trim().slice(0, 150).replace(/\n/g, " ") + "...",
      content,
    };
  } catch {
    return null;
  }
}

export function getCategoryInfo(categorySlug: string) {
  return categories.find((c) => c.slug === categorySlug) || null;
}
