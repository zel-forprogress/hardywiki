"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

const mainNav = [
  { href: "/", label: "首页" },
  { href: "/blog", label: "文章" },
  { href: "/notes", label: "小记" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchFocused, setSearchFocused] = useState(false);
  const [query, setQuery] = useState(searchParams.get("q") || "");

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedQuery = query.trim();

    router.push(trimmedQuery ? `/blog?q=${encodeURIComponent(trimmedQuery)}` : "/blog");
  }

  return (
    <aside className="w-72 shrink-0 border-r border-stone-200 bg-stone-50/50 min-h-screen">
      <div className="sticky top-0 p-6 flex flex-col h-screen">
        <div className="mb-6">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/avatar.jpg"
              alt="Hardy's avatar"
              width={40}
              height={40}
              className="rounded-xl object-cover shadow-sm group-hover:shadow-md transition-shadow"
            />
            <div>
              <h1 className="text-lg font-bold text-stone-900 tracking-tight leading-tight">
                Hardy&apos;s Wiki
              </h1>
              <p className="text-xs text-stone-500">Personal Knowledge Base</p>
            </div>
          </Link>
        </div>

        <form
          onSubmit={handleSearch}
          className={`relative mb-5 transition-all ${searchFocused ? "scale-[1.02]" : ""}`}
        >
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              value={query}
              placeholder="搜索知识..."
              onChange={(event) => setQuery(event.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-xl bg-white border border-stone-200 text-stone-700 placeholder-stone-400 focus:outline-none focus:border-teal-300 focus:ring-2 focus:ring-teal-100 transition-all"
            />
          </div>
        </form>

        <nav className="mb-5">
          <ul className="space-y-0.5">
            {mainNav.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href === "/notes" && pathname.startsWith("/notes/"));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "bg-teal-50 text-teal-700"
                        : "text-stone-600 hover:text-stone-900 hover:bg-white"
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    )}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex-1" />

        <div className="pt-4 border-t border-stone-200">
          <div className="flex items-center justify-center gap-2 text-xs text-stone-400">
            <span>&copy; 2025</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Hardy&apos;s Wiki</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
