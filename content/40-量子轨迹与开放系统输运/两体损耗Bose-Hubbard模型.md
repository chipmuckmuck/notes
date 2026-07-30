---
title: 两体损耗 Bose–Hubbard 模型
description: Bose–Hubbard Hamiltonian、局域两体损耗和量子跳跃展开。
tags:
  - Bose-Hubbard
  - 量子轨迹
source:
  - 组会11.1/tex/data/chap03.tex
---

# 两体损耗 Bose–Hubbard 模型

一维 Bose–Hubbard Hamiltonian 可写为

$$
H=-J\sum_{\langle i,j\rangle}
(b_i^\dagger b_j+\mathrm{h.c.})
+\frac{U}{2}\sum_i n_i(n_i-1)
+\sum_i V_i n_i.
$$

局域两体损耗可由

$$
L_i=b_i^2
$$

描述，对应主方程

$$
\dot\rho=-i[H,\rho]
+\gamma\sum_i\mathcal D[b_i^2](\rho).
$$

## 轨迹解释

有效非厄米项为

$$
H_{\mathrm{eff}}
=H-\frac{i\gamma}{2}\sum_i
b_i^{\dagger 2}b_i^2
=H-\frac{i\gamma}{2}\sum_i n_i(n_i-1).
$$

一次跳跃在格点 $i$ 移除两个玻色子。粒子数只按偶数变化，因此总粒子数宇称可能保留；具体是强对称还是只在 Liouvillian 层成立，需要按 [[../10-开放系统基本理论/强对称-弱对称与平均对称|对称性分层]] 检查。

## 可研究量

- 粒子数衰减与损耗事件分布；
- 密度波、相干性和关联传播；
- Zeno 极限下有效动力学；
- 边界驱动时的稳态流；
- 单轨迹与稳态密度矩阵中的拓扑诊断差异。

这是一类可服务于“量子轨迹研究稳态拓扑与输运”的模型模板，但当前源文件未给出具体拓扑实现或输运协议，因此不在公共笔记中补造。
