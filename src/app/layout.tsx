import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hardy's Wiki",
  description: "个人知识分享网站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-row bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Sidebar />
        <main className="flex-1 w-full">
          <div className="max-w-4xl mx-auto px-8 md:px-12 py-10">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
