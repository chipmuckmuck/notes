---
title: SWSSB 关联长度与有限尺寸标度
description: 从 Rényi-2 空间关联提取关联长度，并区分 Z2 与 U(1) 的动力学标度。
tags:
  - SWSSB
  - 有限尺寸标度
source:
  - 学习笔记/SPT_learning_notes_ch1.tex
---

# SWSSB 关联长度与有限尺寸标度

## 提取关联长度

对每个时间 $t$ 和尺寸 $L$，从 [[Renyi-2非线性关联函数|Rényi-2 关联]] $C^{(2)}(r,t;L)$ 拟合 $\xi_2(t,L)$。建议流程：

1. 去掉靠近边界和格点尺度的点；
2. 比较 $Ae^{-r/\xi}$、$Ar^{-\eta}$、$C_\infty+Ae^{-r/\xi}$；
3. 通过 bootstrap 或不同拟合窗口估计误差；
4. 检查 $\xi$ 是否撞到系统尺寸上限。

## Z2 与 U(1) 的不同动力学

[[相关文献/2026-03-06-Universal-Dynamical-Scaling-of-SWSSB|Shu 等人的工作]]给出：

- $\mathbb Z_2$：Rényi-2 关联长度随时间指数增长，因此达到有限尺寸 $L$ 的特征时间满足 $t_c\sim\ln L$；
- $U(1)$：关联长度呈代数增长 $\xi_2\sim t^{1/\alpha}$，故 $t_c\sim L^\alpha$；
- 该文模型中有限填充附近接近弹道标度 $\alpha\approx1$，零/满填充附近为扩散标度 $\alpha=2$。

## 不能省略的检查

- $t_c$ 的定义是否由 $\xi_2/L$ 的阈值、曲线塌缩还是其他准则给出；
- 阈值改变后指数是否稳定；
- 早期微观时间和晚期饱和区是否从拟合中排除；
- 动力学指数是否由守恒律、填充或对称群改变；
- 不把相关长度标度直接等同于 [[../10-开放系统基本理论/Liouvillian谱与稳态|Liouvillian 谱隙]] 标度。
