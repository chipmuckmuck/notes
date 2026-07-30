---
title: 多模到单模与 Cross-Kerr 频移
description: 非线性谐振器阵列的正则模展开、self-Kerr、cross-Kerr 和非共振模频移。
tags:
  - 多模
  - Cross-Kerr
  - Bose-Hubbard
source:
  - 组会11.1/tex/data/chap02.tex
---

# 多模到单模与 Cross-Kerr 频移

对开边界的均匀谐振器链，可用正弦模展开

$$
a_j=\sum_m\phi_m(j)b_m,
$$

把线性跃迁项对角化。局域 Kerr 非线性在模空间产生：

- self-Kerr：$b_m^{\dagger2}b_m^2$；
- cross-Kerr：$b_m^\dagger b_m b_n^\dagger b_n$；
- 以及在旋转波近似下可能被舍弃的非共振四波混频项。

## 单模近似

当驱动接近某一模且其他模远离共振时，可先保留被驱动模的 Kerr 响应。其稳态占据随驱动和失谐出现强非线性，甚至平均场多值区。

## 其他模的频移

被驱动模占据 $n_d$ 通过 cross-Kerr 使探测模产生

$$
\delta\omega_m\propto K_{md}n_d.
$$

因此被驱动模在相变附近的占据突变会映射为其他模的非共振频率跳变，形成多模相图。

> [!warning] 待校核：$4/3$ 与 $8/3$
> 原始组会推导中 cross-Kerr/self-Kerr 比值先后出现 $8/3$ 和 $4/3$。对应论文报告的相邻模式频移关系支持 $4/3$，但原推导仍需从
> $\sum_j\phi_m^2(j)\phi_n^2(j)$
> 的归一化和组合因子重新核对，不能只替换最终数字。

## 近似边界

- 模间距必须足以压制被忽略的四波混频；
- 强驱动下多个模可能同时占据，单模近似失效；
- 有限尺寸和边界使不同模的重叠积分并不总相同；
- 临界切换和噪声展宽不能由纯确定性平均场完整描述。
