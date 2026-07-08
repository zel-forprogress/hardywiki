export default function ProjectsPage() {
  const projects = [
    {
      title: "项目一：个人博客",
      description: "使用 Next.js 和 Tailwind CSS 搭建的简洁个人博客网站，注重阅读体验和代码质量。",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "项目二：待开发",
      description: "更多项目正在规划中，敬请期待。",
      tech: [],
      link: "#",
    },
  ];

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-stone-900 mb-3 tracking-tight">
          我的项目
        </h1>
        <p className="text-stone-500">
          这是我参与或独立开发的一些项目
        </p>
        <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mt-4" />
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-2xl bg-white border border-stone-200 hover:border-teal-200 hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-300"
          >
            <div className="absolute top-6 left-0 w-0.5 h-8 bg-gradient-to-b from-teal-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <h3 className="text-lg font-semibold text-stone-900 mb-2 group-hover:text-teal-700 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-4">
              {project.description}
            </p>
            {project.tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-lg bg-teal-50 text-teal-700 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors"
              >
                查看项目
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
