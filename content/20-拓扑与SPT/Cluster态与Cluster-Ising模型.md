---
title: Cluster 态与 Cluster–Ising 模型
description: Cluster 稳定子、Z2×Z2 对称、弦序与 Cluster–Ising 竞争。
tags:
  - Cluster
  - Cluster-Ising
  - SPT
source:
  - 学习笔记/SPT_learning_notes_ch1.tex
---

# Cluster 态与 Cluster–Ising 模型

一维 Cluster Hamiltonian 的典型稳定子为

$$
K_j=Z_{j-1}X_jZ_{j+1},
$$

并可写成

$$
H_{\mathrm{cl}}=-J\sum_j K_j.
$$

Cluster 态是全部 $K_j$ 的共同 $+1$ 本征态。开边界下会留下边界自由度，体现一维 SPT 的非平凡边界结构。

## 保护对称

常见保护对称为偶、奇子格上的两个 $\mathbb Z_2$：

$$
G_{\mathrm e}=\prod_{j\in \mathrm{even}}X_j,\qquad
G_{\mathrm o}=\prod_{j\in \mathrm{odd}}X_j.
$$

二者共同构成 $\mathbb Z_2\times\mathbb Z_2$。定义具体模型时须检查边界项和格点数是否改变对称生成元。

## 弦序

SPT 不能由普通局域序参量完整诊断，常用非局域弦序揭示隐藏序。弦端点和中间算符必须与所用基底/对偶变换保持一致。

## Cluster–Ising 竞争

Cluster 项与 Ising 相互作用竞争，可产生 SPT、对称破缺相和平凡相。开放系统中再加入退相干后，还要区分：

- 保护对称是否仍为强对称；
- Liouvillian 是否只保持弱/平均对称；
- 弦序衰减与 [[../30-SWSSB/Renyi-2非线性关联函数|Rényi-2 隐藏序]] 的时间和尺度是否相关。
