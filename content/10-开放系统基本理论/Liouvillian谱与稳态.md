---
title: Liouvillian 谱与稳态
description: 用 Liouvillian 本征模、谱隙和亚稳态分析开放系统的稳态与耗散相变。
tags:
  - 开放系统
  - Liouvillian
source:
  - 学习笔记/SPT_learning_notes_ch1.tex
  - 组会11.1/tex/data/chap01.tex
  - 组会11.1/tex/data/chap04.tex
---

# Liouvillian 谱与稳态

将 [[Lindblad主方程|Lindblad 方程]] 看作线性超算符本征问题：

$$
\mathcal L(R_n)=\lambda_n R_n.
$$

保迹演化至少有一个 $\lambda_0=0$ 的稳态模。其余本征值实部通常非正；最靠近零的非零实部控制长时间弛豫。

## Liouvillian 谱隙

可定义

$$
\Delta_{\mathcal L}
=-\max_{\lambda_n\ne0}\operatorname{Re}\lambda_n.
$$

若一个单独慢模占主导，观测量的长时间偏离近似按 $\exp(-\Delta_{\mathcal L}t)$ 衰减。谱隙闭合或随系统尺度/有效热力学参数急剧缩小，是耗散临界慢化的重要信号。

## 一阶与二阶耗散相变

- 一阶：不同稳态或亚稳态共存，单轨迹可在明暗相之间随机切换；慢时间尺度与切换率相关。
- 二阶：序参量连续但导数非解析，常伴随对称性破缺和临界涨落；有限系统表现为恢复对称性的慢模。

## 限制

谱隙只给出最慢线性弛豫尺度，不能单独决定拓扑、SWSSB 或特定关联长度的动力学标度。[[../30-SWSSB/相关文献/2026-03-06-Universal-Dynamical-Scaling-of-SWSSB|SWSSB 动力学标度文献]]正强调：相关长度的增长/饱和规律可能主要由对称性和守恒律控制，而不能简单等同于 Liouvillian gap。
