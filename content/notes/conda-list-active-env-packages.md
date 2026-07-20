---
title: "查看 Conda 当前环境中已安装的依赖"
date: "2026-07-20"
category: "tools"
---

想查看某个已经激活的 Conda 虚拟环境里安装了哪些依赖，可以直接使用：

```bash
conda list
```

这个命令会列出当前激活环境中的依赖信息，包括包名、版本、构建信息和来源渠道。

例如已经激活 `hello-agents` 环境后，在终端中执行 `conda list`：

![hello-agents 环境中 conda list 的输出截图](/images/notes/conda-list-hello-agents.png)

从截图里可以看到，终端前缀是 `(hello-agents)`，说明当前激活的是 `hello-agents` 环境。此时 `conda list` 输出的就是这个环境中的依赖列表。
