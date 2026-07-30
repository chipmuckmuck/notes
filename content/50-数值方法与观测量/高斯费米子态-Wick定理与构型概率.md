---
title: 高斯费米子态、Wick 定理与构型概率
description: 用二点关联矩阵重建高斯费米子多点关联与占据构型概率。
tags:
  - 高斯费米子
  - Wick定理
  - 数值方法
source:
  - 2026.6.27-文献汇报问题/SWSSB_theory_derivations.pdf
---

# 高斯费米子态、Wick 定理与构型概率

费米高斯态完全由二点关联矩阵决定。对无反常配对的粒子数守恒情形，可定义

$$
C_{ij}=\langle c_i^\dagger c_j\rangle.
$$

任意等数目的产生、湮灭算符期望可由 Wick 定理写成 $C$ 的行列式。含配对时应改用 Nambu 协方差矩阵和 Pfaffian 表示。

## 占据构型概率

对占据串 $\mathbf n=(n_1,\ldots,n_L)$，

$$
P(\mathbf n)
=\left\langle\prod_i
n_i^{\hat n_i}(1-n_i)^{1-\hat n_i}
\right\rangle.
$$

展开后每一项都是数算符多点关联，可用 Wick 定理由 $C$ 计算。直接枚举全部 $2^L$ 构型只适合小系统；较大系统应利用 determinant point process、条件采样或递推。

## 与 Choi/退相干问题的关系

当退相干后的密度矩阵仍保持高斯性，可在不存储完整 $2^L\times2^L$ 密度矩阵的情况下计算：

- 纯度和 Rényi-2 量；
- 密度关联；
- 实验快照概率或似然；
- 某些双副本相关。

## 检查

- $C=C^\dagger$，且本征值在 $[0,1]$；
- 粒子数守恒和含配对两种公式不可混用；
- 数值行列式应使用 `slogdet` 或稳定分解；
- 小尺寸与精确枚举交叉验证概率归一化。
