---
title: "VS Code 高效开发指南"
date: "2025-03-18"
category: "tools"
readTime: 5
---

工欲善其事，必先利其器。VS Code 是很多前端开发者的主力编辑器，合理配置后可以显著提升日常开发效率。

## 必备插件

- ESLint：代码规范检查
- Prettier：代码格式化
- GitLens：增强 Git 历史查看
- Thunder Client：轻量 API 调试
- Error Lens：把错误直接显示在代码行内

## 常用设置

建议开启保存时格式化，并让 ESLint 自动修复可修复的问题。

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

## 快捷操作

- 快速打开文件：`Ctrl + P`
- 全局搜索：`Ctrl + Shift + F`
- 命令面板：`Ctrl + Shift + P`
- 重命名符号：`F2`
- 跳转定义：`F12`

## 工作区配置

团队项目中建议提交 `.vscode/settings.json` 的一部分公共配置，例如默认格式化工具、TypeScript SDK 路径和推荐插件。这样可以减少团队成员之间的环境差异。

工具配置的目标不是堆满插件，而是让常见动作更顺手。
