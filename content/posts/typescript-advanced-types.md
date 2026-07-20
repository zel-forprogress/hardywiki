---
title: "TypeScript 高级类型实操指南"
date: "2025-02-10"
category: "frontend"
readTime: 12
---

TypeScript 的类型系统很强大。掌握高级类型，可以让我们在编码阶段发现更多问题，也能把业务约束表达得更清楚。

## 条件类型

条件类型类似类型层面的三元表达式，可以根据类型关系返回不同结果。

```ts
type ApiResult<T> = T extends Error ? { ok: false; error: T } : { ok: true; data: T };
```

它常用于工具类型和通用库设计中。

## 映射类型

映射类型可以基于一个已有类型生成新类型。

```ts
type ReadonlyFields<T> = {
  readonly [K in keyof T]: T[K];
};
```

这类能力适合处理表单状态、接口响应和配置对象。

## infer

`infer` 可以在条件类型中推断局部类型。

```ts
type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
```

它让类型工具更灵活，也常出现在框架类型定义里。

## 类型设计建议

- 先写清楚业务模型，再抽工具类型
- 避免为了炫技写过度复杂的类型
- 对外暴露的类型要稳定、易读
- 类型推导不清楚时，主动补充显式类型

高级类型的目标不是增加复杂度，而是减少运行时的不确定性。
