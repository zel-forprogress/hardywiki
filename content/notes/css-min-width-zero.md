---
title: "Flex 布局里的 min-width: 0"
date: "2025-04-12"
category: "frontend"
---

在 flex 布局中，子元素默认不会小于自身内容宽度，所以文本省略号有时不生效。

给 flex 子项加上 `min-width: 0`，可以允许它被压缩，配合 `overflow: hidden`、`text-overflow: ellipsis` 和 `white-space: nowrap` 使用。
