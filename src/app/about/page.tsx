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
          你好！我是一名热爱技术与创造的前端工程师。我专注于构建优雅、高效的用户界面，
          并在不断探索现代 Web 开发的最佳实践。
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
          我大学期间开始接触编程，从 HTML/CSS/JavaScript 入门，逐步深入 React 生态系统。
          我喜欢解决复杂的问题，享受将设计稿转化为可交互界面的过程。
        </p>

        <p className="text-stone-700 leading-relaxed">
          在工作之余，我喜欢阅读技术文章、尝试新技术、写博客分享经验。我相信持续学习是
          成为一名优秀工程师的关键。
        </p>

        <h2 className="text-xl font-bold text-stone-900">联系我</h2>

        <p className="text-stone-700 leading-relaxed">
          如果你有任何问题或合作意向，欢迎通过以下方式联系我：
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
            感谢你的阅读！期待与你交流。
          </p>
        </div>
      </div>
    </div>
  );
}
