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

例如已经激活 `hello-agents` 环境后，终端前缀会显示：

```powershell
(hello-agents) PS D:\code\Hello-Agents>
```

此时执行 `conda list`，看到的就是 `hello-agents` 环境中的依赖列表。
