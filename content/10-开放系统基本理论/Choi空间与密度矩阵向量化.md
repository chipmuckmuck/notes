---
title: Choi 空间与密度矩阵向量化
description: 把密度矩阵映射到双层 Hilbert 空间，并解释 Rényi-2 观测量的自然来源。
tags:
  - Choi空间
  - 开放系统
source:
  - 2026.6.27-文献汇报问题/SWSSB_theory_derivations.pdf
  - 学习笔记/SPT_learning_notes_ch1.tex
---

# Choi 空间与密度矩阵向量化

选定基 $\{|i\rangle\}$ 后，可把算符

$$
\rho=\sum_{ij}\rho_{ij}|i\rangle\langle j|
$$

向量化为双层空间中的态

$$
|\rho\rangle\rangle
=\sum_{ij}\rho_{ij}|i\rangle_L\otimes|j\rangle_R.
$$

左乘和右乘分别变成作用在 $L/R$ 副本上的算符。采用列向量化约定时，

$$
|A\rho B\rangle\rangle
=(A\otimes B^{\mathsf T})|\rho\rangle\rangle.
$$

> [!important] 约定依赖
> 转置、复共轭落在哪一侧取决于向量化约定。实际推导前必须固定基与 vec 约定。

## Lindblad 生成元的双层表示

主方程可写为

$$
\partial_t|\rho\rangle\rangle
=\mathbb L|\rho\rangle\rangle,
$$

其中 Hamiltonian 对应左右两层方向相反的演化，耗散项会耦合两个副本。这样，密度矩阵问题转化为非厄米“态矢量”问题。

## 与纯度和 Rényi-2 的关系

Hilbert–Schmidt 内积给出

$$
\langle\langle\rho|\rho\rangle\rangle
=\operatorname{Tr}(\rho^\dagger\rho).
$$

对 Hermitian 密度矩阵即 $\operatorname{Tr}\rho^2$。因此二副本/Choi 空间是理解 [[../30-SWSSB/Renyi-2非线性关联函数|Rényi-2 非线性关联函数]] 的自然语言。

## 与 SWSSB 的连接

某些单副本线性关联因混态平均而消失，但在双副本归一化关联中仍可出现长程序。这不是简单“把关联函数平方”，而是利用 $\rho$ 在算符空间中的结构探测隐藏的对称破缺。
