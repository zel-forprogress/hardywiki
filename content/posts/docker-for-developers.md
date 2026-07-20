---
title: "Docker 实战：前端开发者的容器化指南"
date: "2025-02-25"
category: "devops"
readTime: 10
---

Docker 已经成为现代开发流程中非常常见的工具。对于前端开发者来说，它可以帮助我们统一开发环境、简化部署流程，并减少“我这里能跑”的问题。

## 什么是容器

容器是一种轻量级的运行环境封装方式。它把应用及其依赖打包在一起，让应用可以在不同机器上以更一致的方式运行。

## 为什么前端也需要 Docker

前端项目通常依赖 Node.js 版本、包管理器、构建工具和环境变量。团队成员机器环境不同，很容易出现细碎但耗时的问题。

Docker 可以把这些依赖写进配置，让环境更容易复现。

## 一个简单的 Dockerfile

```dockerfile
FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]
```

## 实战建议

- 使用 `.dockerignore` 排除 `node_modules` 和构建产物
- 在 CI 中使用和生产环境一致的构建流程
- 不要把敏感环境变量写进镜像
- 开发环境和生产环境可以使用不同的 Dockerfile 或 compose 配置

Docker 不一定要把流程做复杂。把环境描述清楚，就是它最直接的价值。
