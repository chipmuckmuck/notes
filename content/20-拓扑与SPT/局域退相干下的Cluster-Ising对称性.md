---
title: 局域退相干下的 Cluster–Ising 对称性
description: 局域退相干如何改变 Cluster–Ising 模型的强、弱和平均对称结构。
tags:
  - Cluster-Ising
  - 退相干
  - 对称性
source:
  - 学习笔记/SPT_learning_notes_ch1.tex
---

# 局域退相干下的 Cluster–Ising 对称性

考虑 Cluster–Ising Hamiltonian 加局域退相干跳跃。判断对称性时不能只检查 $[H,G]=0$，还必须检查每个跳跃通道或整个耗散子在 $G$ 下如何变换。

## 分层判断

1. **Hamiltonian 层**：Cluster 项和 Ising 项是否保持 $\mathbb Z_2\times\mathbb Z_2$。
2. **跳跃算符层**：$L_j$ 是与 $G$ 对易、反对易，还是在变换下获得相位/互相混合。
3. **Liouvillian 层**：即使 $L_j$ 不逐一对易，$\mathcal D[L_j]$ 仍可能保持共轭协变。
4. **轨迹层**：单次跳跃是否改变对称扇区；轨迹平均是否恢复对称。

## 研究上需要同时跟踪的量

- SPT/ASPT：弦序、边界结构或混态拓扑指标；
- SWSSB：非线性 Rényi-2 关联和关联长度；
- 动力学：Liouvillian 慢模、特征时间与有限尺寸漂移。

同一个退相干通道可能一方面破坏纯态 SPT 诊断，另一方面保留弱/平均对称并允许 SWSSB 型隐藏序。二者关系必须通过独立指标建立，不能从对称性名称直接推断。
