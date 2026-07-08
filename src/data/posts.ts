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

export const categories = [
  { slug: "frontend", name: "前端开发", icon: "⚛️", description: "React, Vue, CSS 等前端技术" },
  { slug: "backend", name: "后端技术", icon: "🔧", description: "Node.js, 数据库, API 设计" },
  { slug: "devops", name: "DevOps", icon: "🚀", description: "部署, CI/CD, 容器化" },
  { slug: "thinking", name: "技术思考", icon: "💡", description: "架构设计, 工程实践, 职业成长" },
  { slug: "tools", name: "工具效率", icon: "🛠️", description: "开发工具, 工作流, 效率提升" },
];

export const posts: Post[] = [
  {
    slug: "hello-world",
    title: "开启我的知识分享之旅",
    date: "2025-01-15",
    excerpt: "欢迎来到 Hardy's Wiki！这里是我整理和分享技术知识的地方，涵盖前端、后端、DevOps 等方向。",
    content: `
欢迎来到 Hardy's Wiki！

这里是我整理和分享技术知识的地方。作为一名前端工程师，我在日常工作和学习中积累了大量笔记和心得，现在把它们系统化地整理出来，方便自己回顾，也希望能帮到有需要的人。

## 这个 Wiki 的内容

这个 Wiki 主要涵盖以下几个方向：

- **前端开发**：React, TypeScript, CSS, 性能优化
- **后端技术**：Node.js, 数据库设计, API 架构
- **DevOps**：部署流程, CI/CD, 容器化
- **技术思考**：架构设计, 工程实践, 职业成长
- **工具效率**：开发工具, 工作流, 效率提升

## 使用方式

你可以通过左侧的分类导航浏览感兴趣的内容，也可以在博客页面查看所有文章。

感谢你的阅读！
    `,
    category: "thinking",
    readTime: 3,
    featured: true,
  },
  {
    slug: "react-hooks-deep-dive",
    title: "React Hooks 深度解析",
    date: "2025-01-28",
    excerpt: "深入理解 useState、useEffect、useMemo 等常用 Hooks 的工作原理和最佳实践。",
    content: `
React Hooks 是 React 16.8 引入的重大特性，它让函数组件拥有了状态和生命周期能力。

## useState

\`useState\` 是最基础的 Hook，用于在函数组件中管理状态。

\`\`\`typescript
const [count, setCount] = useState(0);
\`\`\`

## useEffect

\`useEffect\` 处理副作用操作，相当于类组件中的 \`componentDidMount\`、\`componentDidUpdate\` 和 \`componentWillUnmount\`。

## useMemo 和 useCallback

这两个 Hook 用于性能优化，避免不必要的重复计算和渲染。

## 自定义 Hooks

将可复用的逻辑提取为自定义 Hook 是 React 开发的最佳实践之一。
    `,
    category: "frontend",
    readTime: 8,
    featured: true,
  },
  {
    slug: "typescript-advanced-types",
    title: "TypeScript 高级类型体操指南",
    date: "2025-02-10",
    excerpt: "掌握 TypeScript 的高级类型特性，包括条件类型、映射类型、模板字面量类型等。",
    content: `
TypeScript 的类型系统非常强大，掌握高级类型特性能让你写出更健壮的代码。

## 条件类型

条件类型类似于三元表达式，可以根据类型关系进行条件判断。

## 映射类型

映射类型可以基于已有类型创建新类型，最典型的例子就是 \`Partial<T>\` 和 \`Readonly<T>\`。

## 模板字面量类型

模板字面量类型可以操作字符串类型，实现强大的类型推断。

## 实用技巧

在实际项目中，合理使用高级类型可以大大提升代码的类型安全性。
    `,
    category: "frontend",
    readTime: 12,
  },
  {
    slug: "docker-for-developers",
    title: "Docker 实战：前端开发者的容器化指南",
    date: "2025-02-25",
    excerpt: "从零开始学习 Docker，掌握容器化开发的核心概念和实用技巧。",
    content: `
Docker 已经成为现代开发流程中不可或缺的工具。本文面向前端开发者，介绍 Docker 的核心概念和实战技巧。

## 什么是容器？

容器是一种轻量级的虚拟化技术，它将应用及其依赖打包在一起，确保在任何环境中都能一致运行。

## 核心概念

- **镜像（Image）**：应用的只读模板
- **容器（Container）**：镜像的运行实例
- **Dockerfile**：定义镜像构建过程的文件

## 前端项目 Docker 化

即使是前端项目，也可以从 Docker 中受益，特别是部署阶段。
    `,
    category: "devops",
    readTime: 10,
  },
  {
    slug: "my-learning-path",
    title: "我的前端学习路线图",
    date: "2025-03-05",
    excerpt: "从零基础到前端工程师，我走过的路和总结的经验，供你参考。",
    content: `
回顾我的前端学习之路，从 HTML/CSS 基础到 React 生态系统，每一步都充满了挑战和收获。

## 第一阶段：基础夯实

HTML, CSS, JavaScript 三件套是根基。建议花足够的时间打好基础。

## 第二阶段：框架入门

选择 React 或 Vue 作为主攻方向，深入学习其核心概念和生态。

## 第三阶段：工程化

学习构建工具、状态管理、测试等工程化知识。

## 第四阶段：持续精进

关注性能优化、架构设计、团队协作等高级话题。
    `,
    category: "thinking",
    readTime: 6,
  },
  {
    slug: "vscode-tips",
    title: "VS Code 高效开发指南",
    date: "2025-03-18",
    excerpt: "分享我日常使用的 VS Code 配置和技巧，提升开发效率。",
    content: `
工欲善其事，必先利其器。VS Code 是前端开发的首选编辑器，以下是我常用的配置和技巧。

## 必备插件

- ESLint: 代码规范检查
- Prettier: 代码格式化
- GitLens: Git 增强
- Thunder Client: API 测试

## 快捷键

熟练掌握快捷键能显著提升编码效率。

## 自定义配置

根据个人习惯调整编辑器设置，打造最佳开发体验。
    `,
    category: "tools",
    readTime: 5,
  },
  {
    slug: "nodejs-api-design",
    title: "Node.js API 设计最佳实践",
    date: "2025-04-02",
    excerpt: "如何设计优雅、可维护的 Node.js API，包括路由设计、错误处理、认证等。",
    content: `
设计一个良好的 API 是后端开发的核心技能。本文分享我在 Node.js 项目中的 API 设计经验。

## RESTful 设计原则

遵循 REST 规范，合理使用 HTTP 方法和状态码。

## 项目结构

合理的目录结构是项目可维护性的基础。

## 错误处理

统一的错误处理机制能让 API 更易于调试和使用。

## 认证与授权

JWT、OAuth 等认证方式的选型和实现。
    `,
    category: "backend",
    readTime: 9,
  },
];
