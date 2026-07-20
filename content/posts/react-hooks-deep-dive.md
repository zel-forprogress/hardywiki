---
title: "React Hooks 深度解析"
date: "2025-01-28"
category: "frontend"
readTime: 8
featured: true
---

React Hooks 让函数组件拥有了状态、副作用和复用逻辑的能力。理解 Hooks 的关键，不只是记住 API，而是理解它们如何参与组件渲染。

## useState

`useState` 用来在函数组件中保存状态。状态更新会触发组件重新渲染，因此更新逻辑要尽量保持可预测。

```tsx
const [count, setCount] = useState(0);

function increment() {
  setCount((current) => current + 1);
}
```

当新状态依赖旧状态时，优先使用函数式更新，可以避免闭包中的旧值带来的问题。

## useEffect

`useEffect` 适合处理组件渲染之后的副作用，例如订阅事件、同步外部系统或发起请求。

需要注意的是，依赖数组不是“手动控制执行次数”的开关，而是告诉 React 这个副作用依赖哪些响应式值。

## useMemo 和 useCallback

`useMemo` 缓存计算结果，`useCallback` 缓存函数引用。它们不是默认必需的优化，只有当计算成本较高，或者引用稳定性会影响子组件渲染时才值得使用。

## 自定义 Hook

自定义 Hook 的价值在于提取一段可复用的状态逻辑，而不是简单地把代码挪到另一个函数里。一个好的 Hook 应该有清晰的输入、输出和副作用边界。

## 常见建议

- 不要在条件语句或循环中调用 Hook
- 让依赖数组真实反映代码依赖
- 把复杂副作用拆成更小的 Effect
- 不要过早使用 memo 类优化

Hooks 的设计让组件逻辑更容易组合。写得清楚，比写得“聪明”更重要。
