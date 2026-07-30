---
title: Keldysh 平均场与响应函数
description: 驱动耗散玻色模的经典/量子场、鞍点方程和响应函数结构。
tags:
  - Keldysh
  - 响应函数
source:
  - 组会11.1/tex/data/chap02.tex
---

# Keldysh 平均场与响应函数

对驱动耗散玻色模，把前、后向时间支上的场旋转为经典场和量子场：

$$
a_{\mathrm{cl}}=\frac{a_++a_-}{\sqrt2},
\qquad
a_{\mathrm q}=\frac{a_+-a_-}{\sqrt2}.
$$

Keldysh 作用量的鞍点通常取 $a_{\mathrm q}=0$，对 $a_{\mathrm q}^\ast$ 变分得到与 Heisenberg–Langevin 平均场一致的非线性响应方程。

对单个 Kerr 模，稳态振幅的典型结构为

$$
\left[
\Delta+i\frac\kappa2
-K|\alpha|^2
\right]\alpha
=\Omega,
$$

其中符号和系数依赖旋转框架及 Hamiltonian 约定。取模平方后得到输入—输出的三次方程，可在一定参数区间出现多值平均场解。

## 物理解释

- 平均场多值区对应双稳态候选，但有限量子系统的无条件稳态通常唯一；
- 真正的一阶耗散相变需要结合亚稳态、切换率和热力学/有效尺度极限；
- 线性化鞍点附近的逆 Green 函数给出响应极点和稳定性。

## 与组会文献的关系

[[../10-开放系统基本理论/相关文献/2025-08-21-Experimental-observation-of-multimode-quantum-phase-transitions|多模超导 Bose–Hubbard 文献]]用单模响应解释被驱动模，再通过 cross-Kerr 把占据变化传递给其他模。平均场负责主响应，轨迹切换和临界慢化则需要开放系统动力学。

> [!warning] 待校核
> 原 `chap02.tex` 中部分失谐、Kerr 系数和频移公式的符号/归一化并不完全一致。正式引用前应从同一个旋转框架重新推导。
