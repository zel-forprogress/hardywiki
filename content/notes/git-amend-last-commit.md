---
title: "修改上一次 Git 提交"
date: "2025-04-11"
category: "tools"
tags: ["Git"]
---

如果只是想把当前改动补进上一次提交，可以先暂存文件，再执行：

```bash
git commit --amend
```

如果只想改提交信息，也可以直接执行同一个命令。已经推送到远程的提交需要谨慎 amend，因为它会改写提交历史。
