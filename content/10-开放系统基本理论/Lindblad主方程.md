---
title: Lindblad 主方程
description: Markov 开放量子系统的生成元、耗散子与稳态定义。
tags:
  - 开放系统
  - Lindblad
source:
  - 学习笔记/SPT_learning_notes_ch1.tex
  - 组会11.1/tex/data/chap03.tex
---

# Lindblad 主方程

在 Born–Markov 与完全正、保迹的半群演化假设下，密度矩阵满足

$$
\frac{\mathrm d\rho}{\mathrm dt}
=\mathcal L(\rho)
=-i[H,\rho]
+\sum_\mu \gamma_\mu
\left(
L_\mu\rho L_\mu^\dagger
-\frac12\{L_\mu^\dagger L_\mu,\rho\}
\right).
$$

$H$ 描述系统的相干演化，$L_\mu$ 是不同环境通道对应的跳跃算符，$\gamma_\mu$ 是速率。记

$$
\mathcal D[L](\rho)=L\rho L^\dagger-\frac12\{L^\dagger L,\rho\},
$$

则 $\mathcal L=-i[H,\cdot]+\sum_\mu\gamma_\mu\mathcal D[L_\mu]$。

## 稳态与守恒量

稳态满足

$$
\mathcal L(\rho_{\mathrm{ss}})=0.
$$

稳态是否唯一、是否存在长寿命亚稳态、以及接近稳态的时间尺度，需要结合 [[Liouvillian谱与稳态|Liouvillian 谱]] 判断。仅知道 $\rho_{\mathrm{ss}}$ 往往不足以判断动力学相。

## 与量子轨迹的关系

把主方程写成“无跳跃演化 + 随机跳跃”可得 [[../40-量子轨迹与开放系统输运/量子轨迹法|量子轨迹法]]。有效非厄米 Hamiltonian 为

$$
H_{\mathrm{eff}}=H-\frac{i}{2}\sum_\mu\gamma_\mu L_\mu^\dagger L_\mu.
$$

轨迹平均必须恢复密度矩阵演化；但单轨迹性质一般可能依赖所选的监测/解缠方案。

## 使用时的检查

- 跳跃算符和速率的归一化约定是否一致；
- 是否确实满足 Markov 近似；
- 对称性是作用于每条轨迹、整个超算符，还是只作用于稳态；
- 有限尺寸下的“相变”是否其实是慢弛豫或交叉。
