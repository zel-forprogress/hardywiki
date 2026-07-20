export default function AboutPage() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-stone-900 mb-3 tracking-tight">
          关于我
        </h1>
        <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full" />
      </div>

      <div className="prose dark:prose-invert max-w-none space-y-6">
        <p className="text-base text-stone-700 leading-relaxed">
          你好！我是一名前端工程师，热爱技术与创造，专注于构建优雅、高效的用户界面，也持续探索现代 Web 开发的最佳实践。
        </p>

        <div className="my-8 p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100">
          <h3 className="text-lg font-semibold text-stone-900 mb-4 mt-0">技术栈</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { category: "前端开发", items: "React, Next.js, TypeScript, Tailwind CSS" },
              { category: "状态管理", items: "Redux, Zustand, React Context" },
              { category: "样式方案", items: "Tailwind CSS, CSS Modules, Styled Components" },
              { category: "开发工具", items: "Git, VS Code, Figma" },
            ].map((skill) => (
              <div key={skill.category} className="p-3 rounded-xl bg-white/60 border border-white/60">
                <div className="text-xs font-semibold text-teal-700 mb-1">{skill.category}</div>
                <div className="text-xs text-stone-600 leading-relaxed">{skill.items}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-xl font-bold text-stone-900">我的经历</h2>

        <p className="text-stone-700 leading-relaxed">
          我从 HTML、CSS 和 JavaScript 入门，逐步深入 React 生态与工程化体系。相比堆砌工具，我更在意如何把复杂问题拆清楚，并把设计稿稳定地转化成可交互的产品界面。
        </p>

        <p className="text-stone-700 leading-relaxed">
          工作之外，我喜欢阅读技术文章、尝试新工具，也会把实践中的经验整理成笔记。这个 Wiki 就是我持续沉淀知识、复盘问题和分享经验的地方。
        </p>

        <h2 className="text-xl font-bold text-stone-900">联系我</h2>

        <p className="text-stone-700 leading-relaxed">
          如果你有问题、建议或合作想法，欢迎通过下面的方式联系我：
        </p>

        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-stone-700">
            <span className="text-teal-600">→</span>
            <span>GitHub: @yourusername</span>
          </li>
          <li className="flex items-center gap-2 text-stone-700">
            <span className="text-teal-600">→</span>
            <span>Email: hello@example.com</span>
          </li>
          <li className="flex items-center gap-2 text-stone-700">
            <span className="text-teal-600">→</span>
            <span>Twitter: @yourusername</span>
          </li>
        </ul>

        <div className="mt-10 p-6 rounded-2xl bg-stone-50 border border-stone-200">
          <p className="text-sm text-stone-600 italic mb-0">
            感谢你的阅读，期待与你交流。
          </p>
        </div>
      </div>
    </div>
  );
}
