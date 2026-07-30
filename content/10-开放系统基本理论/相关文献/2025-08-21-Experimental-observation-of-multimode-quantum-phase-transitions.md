---
title: Experimental observation of multimode quantum phase transitions in a superconducting Bose-Hubbard simulator
description: 21 模超导非线性谐振器阵列中的多模耗散相变、切换动力学和 Cross-Kerr 频移。
tags:
  - 文献笔记
  - 耗散相变
  - Bose-Hubbard
publication_date: 2025-08-21
arxiv: "2508.20116"
source:
  - 组会11.1/tex/data/chap01.tex
  - 组会11.1/tex/data/chap02.tex
---

# Experimental observation of multimode quantum phase transitions in a superconducting Bose-Hubbard simulator

## 基本信息

|项目|记录|
|---|---|
|首次公开|2025-08-21，arXiv v1|
|期刊状态|PRX Quantum 接收：2026-06-24|
|主要作者|Claudia Castillo-Moreno；Théo Sépulcre（第一、第二作者）|
|第一、第二作者机构|Department of Microtechnology and Nanoscience, Chalmers University of Technology, Gothenburg, Sweden|
|实验机构|Department of Microtechnology and Nanoscience, Chalmers University of Technology|
|阅读目的|组会汇报|
|阅读日期|11.1（年份待补充）|
|链接|[arXiv:2508.20116](https://arxiv.org/abs/2508.20116)；[PRX Quantum 接收稿](https://journals.aps.org/prxquantum/accepted/10.1103/rvhv-ms4t)|

**所属领域：** 开放系统基本理论  
**强关联领域：** [[../../40-量子轨迹与开放系统输运/index|量子轨迹与开放系统输运]]、[[../../50-数值方法与观测量/index|数值方法与观测量]]

## 系统与问题

实验平台是由 21 个超导非线性谐振器组成的一维 Bose–Hubbard 模拟器。局域驱动可激发多个正则模；Kerr 非线性使不同模通过 self-Kerr 和 cross-Kerr 相互影响。

研究重点是：

- 单个被驱动模的一阶耗散相变如何通过 cross-Kerr 耦合改变其他模；
- 功率谱密度如何显示多模临界边界；
- 轨迹中的随机切换时间如何揭示亚稳态和临界慢化。

## 理论整理

从实空间 Bose–Hubbard 型阵列变换到正则模后，会得到：

- 每个模的频率与 self-Kerr 非线性；
- 不同模之间的 cross-Kerr 相互作用；
- 被驱动模的平均占据引起其他模的非共振频移。

组会推导中的单模平均场、Heisenberg–Langevin/Keldysh 响应和多模频移已分别整理到：

- [[../../50-数值方法与观测量/Keldysh平均场与响应函数|Keldysh 平均场与响应函数]]
- [[../../50-数值方法与观测量/多模到单模与Cross-Kerr频移|多模到单模与 Cross-Kerr 频移]]

## 主要观察

- 不同模的耗散相变在驱动—频率平面形成多模结构；
- 模间 cross-Kerr 使一个模的占据变化表现为其他模的共振频移；
- 一阶转变附近轨迹在低、高清晰度状态之间切换，切换时间提供动力学判据；
- 单模近似可以解释主要响应，但多模耦合决定频移和相图的互相牵引。

> [!warning] 待校核：Cross-Kerr 系数
> 原始 `chap02.tex` 中同一比值出现过 $8/3$ 与 $4/3$ 两种写法；论文正文给出的相邻模式频移关系对应 $4/3$。在重新逐式核对模函数归一化、求和范围和重复计数前，不把原推导中的冲突静默改正。

## 阅读问题

- 单模平均场在靠近切换区时遗漏的主要量子涨落是什么？
- 多模相变边界能否用 Liouvillian 低能谱而不只是 PSD 峰值统一描述？
- 实验切换轨迹与数值 quantum-jump unraveling 的对应依赖测量方案吗？
- cross-Kerr 引起的非共振频移在更大尺寸下如何标度？
- 该平台能否加入拓扑泵浦或边界驱动，用于连接稳态拓扑与输运？
