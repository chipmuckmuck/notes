---
title: Universal Dynamical Scaling of Strong-to-Weak Spontaneous Symmetry Breaking in Open Quantum Systems
description: Z2 与 U(1) SWSSB 的 Rényi-2 关联长度动力学及有限尺寸标度。
tags:
  - 文献笔记
  - SWSSB
  - Renyi-2
publication_date: 2026-03-06
arxiv: "2603.06363"
source:
  - 学习笔记/SPT_learning_notes_ch1.tex
---

# Universal Dynamical Scaling of Strong-to-Weak Spontaneous Symmetry Breaking in Open Quantum Systems

## 基本信息

|项目|记录|
|---|---|
|首次公开|2026-03-06，arXiv v1|
|当前已读版本|v2，2026-04-15|
|作者|Chang Shu；Kai Zhang（张锴）；Zhu-Xi Luo；Yizhi You；Kai Sun|
|第一、第二作者机构|Department of Physics, University of Michigan, Ann Arbor, Michigan, USA|
|阅读目的|学习 SWSSB 的动力学标度、Rényi-2 判据及其数值提取方式|
|阅读日期|待补充|
|链接|[arXiv:2603.06363](https://arxiv.org/abs/2603.06363)|

**所属领域：** SWSSB  
**强关联领域：** [[../../10-开放系统基本理论/强对称-弱对称与平均对称|开放系统对称性]]、[[../../50-数值方法与观测量/index|数值方法与观测量]]、[[../../20-拓扑与SPT/混态SPT与ASPT|ASPT]]

## 阅读目的对应的问题

文章不只问“SWSSB 最终是否出现”，而是问隐藏长程序以什么普适动力学到达有限尺寸尺度，以及不同对称群为何给出不同时间标度。

## 主要结果

1. 使用 Rényi-2 非线性关联函数定义混态中的隐藏空间关联。
2. 对离散 $\mathbb Z_2$ 对称，Rényi-2 关联长度随时间指数增长，有限尺寸建立时间满足 $t_c\sim\ln L$。
3. 对连续 $U(1)$ 对称，关联长度代数增长，$t_c\sim L^\alpha$。
4. 在文中模型里，有限填充附近接近弹道标度 $\alpha\approx1$；零填充和满填充附近出现扩散标度 $\alpha=2$。
5. 标度主要由对称性与相应守恒结构控制，不能简单用 Liouvillian gap 替代。

## 可复用概念

- [[../SWSSB与隐藏长程序|SWSSB 与隐藏长程序]]
- [[../Renyi-2非线性关联函数|Rényi-2 非线性关联函数]]
- [[../SWSSB关联长度与有限尺寸标度|关联长度与有限尺寸标度]]

## 阅读问题

- 文中的动力学指数对初态、填充和退相干通道分别有多强的依赖？
- 若同一模型同时具有 ASPT 指标，SPT/ASPT 衰减时间与 SWSSB 建立时间是否共享同一标度？
- $\mathbb Z_2$ 的指数关联长度增长在更一般的局域噪声和非可积模型中是否仍成立？
- 数值上用阈值定义 $t_c$ 时，阈值和拟合窗口改变会产生多大有限尺寸漂移？
- 相关长度增长与 Liouvillian 慢模之间能否建立比“二者不等价”更精确的关系？

## 版本说明

v1（2026-03-06）和 v2（2026-04-15）是同一篇文章的两个版本，本库只保留这一篇文献笔记，后续修改在本页记录。
