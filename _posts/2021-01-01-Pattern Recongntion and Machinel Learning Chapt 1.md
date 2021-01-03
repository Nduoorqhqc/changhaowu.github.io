---
layout: post
title: "PRML Chapt 1 Introduction Notes"
date: 2021-01-01
image: /images/cover/C_Design3.jpeg   
tags: [Notes]
toc: true

---

# Chapt-1-Introduction-Notes

## Concept & Definition

模式识别（Pattern Recongntion）在历史上就是长期被研究的问题，在天文学中有J.Kepler通过研究行星观测的数据总结出了Kepler定理这一经验公式，量子力学中寻找原子谱（Atomic Spectra）也同样是一个模式识别问题。模式识别可以被总结为在给出的数据中去寻找该数据的总体的一般的规律，而回到机器学习中，以一个经典的模式识别问题：手写体识别为例，给出一些关于模式识别问题的定义

{:refdef: style="text-align: center;"}
<img src="/images/2021-01-01-Pattern-Recongntion-and-Machinel-Learning-Chapt-1-Introduction/Zip Codes handwriting.png" alt="Zip Codes handwriting" style="zoom:35%;" />
{:refdef}

手写体识别的，输入是 $$28 \times 28$$ 的像素图 $$\mathbf{x}$$ ，输出是 $$0-9$$ 的识别数字结果的一个0-1整数向量  $$\mathbf{t}$$ ,模式识别问题的任务就是要找出一个映射：

$$
\mathbf{y}:\mathbf{x} \in \mathbf{X} \rightarrow \mathbf{t} \in \mathbf{T}
$$

在手写体识别问题中，会给出训练集 $$\left\{\mathbf{x}_{1}, \ldots, \mathbf{x}_{N}\right\}$$ 和对应的标签 $$\left\{\mathbf{t}_{1}, \ldots, \mathbf{t}_{N}\right\}$$ ,通过训练集去训练可调节模型 $$\mathbf{y}$$,在通过训练之后，通过一个从与 $$\mathbf{x}$$ 同分布中采样获得的测试集去检验模型，具体来说，被检验的模型性能被称为泛化性（Generalization），模型的泛化性是模式识别的中心问题。

在实际过程中，在获取 $$\mathbf{x}$$ 的几何训练集前，还有一个过程被称为预处理（Pre-poccessing）,预处理目标是提取出对问题关键的信息而过滤对问题无用的信息，这样的好处不少，比如可以减少计算时间。

像手写体识别这样的，训练集中有对应的 $$<\mathbf{x},\mathbf{t}>$$ 给出的模式识别被定义为监督学习 （Supervised Learning ），$$\mathbf{t}$$ 可以通过有限的离散的形式表达的被称为分类（classification），而后面给出的曲线拟合的例子，其结果 $$\mathbf{t}$$ 需要给出连续的形式被称为回归（Regression）

当然有些问题，训练集中仅仅给出了 $$\mathbf{x}$$ ，则被称为无监督学习（Unsupervised Learning），其根据学习目标，有几个代表性问题，有比如要找出相似的分组比如聚类（Clustering）,又比如找出给出的数据的分布（density estimation），也有从高维空间投影到二维空间这样来做可视化（VIsualization）

还有一类问题，训练集是以一个状态（State）给出的，目标是要把给出的状态标定一个合理的值被称为（Reward），比如下棋时给出一个棋局，再给出相应的奖励/状态值，来驱动问题，这样就可以做到自动下棋，不深入赘述。

## Polynomial Curve Fitting

手写体问题的现行主流解决方案不太数学，于是换一个比较数学的问题，曲线多项式拟合来详细给出一个模式识别问题从给出到解决的过程。

该问题为一个监督回归问题，问题给了训练集，以形式：$$\mathbf{x} \equiv\left(x_{1}, \ldots, x_{N}\right)^{\mathrm{T}},
 \mathbf{t} \equiv\left(t_{1}, \ldots, t_{N}\right)^{\mathrm{T}}$$，而该数据集是通过在 $$ y = \sin (2 \pi x) $$ 的基础上加一个服从高斯分布的随机误差产生的，这模拟了一般场景的情况，可视化如下：

{:refdef: style="text-align: center;"}
<img src="/images/2021-01-01-Pattern-Recongntion-and-Machinel-Learning-Chapt-1-Introduction/data set visualization.png" alt="data set visualization" style="zoom:35%;" />
{:refdef}

曲线拟合问题的目标是给出一个新的 $$ \widehat{x} $$ 时通过模型 $$ y(x,\mathbf{w}) $$ 给出 $$ \widehat{t} $$, $$\mathbf{w}$$ 为可调节参数，具体来说，多项式拟合采用多项式函数:

$$
y(x, \mathbf{w})=w_{0}+w_{1} x+w_{2} x^{2}+\ldots+w_{M} x^{M}=\sum_{j=0}^{M} w_{j} x^{j}
$$

该函数对于系数 $$ \mathbf{w} $$ 来说是线性的，并且有可调节参数  $$ \mathbf{M} $$ ，任何对模型的优化都应当给出一个标准（citeria），这里采用平方误差：

$$
\mathbf{w^{*}=\arg \min_{\mathbf{w}}}E(\mathbf{w})=\arg \min_{\mathbf{w}}\frac{1}{2} \sum_{n=1}^{N}\left\{y\left(x_{n}, \mathbf{w}\right)-t_{n}\right\}^{2}
$$

值得注意的是，由于 $$ y(x,\mathbf{w}) $$ 对于 $$ \mathbf{w} $$ 来说是线性的，于是可知 $$\frac{d E(\mathbf{w})}{d w}$$ 是线性的，因此 $$\mathbf{w^{*}}$$ 有唯一解，在给出了使 $$ E(\mathbf{w})$$ 最小的 $$\mathbf{w^{*}}$$ 后，就完成了多项式曲线拟合的问题，但具体实践上，还有两个问题有待解决，可调节参数  $$ \mathbf{M} $$ 的选择以及给出具体的数据集后 $$\mathbf{w^{*}}$$ 的计算。

### The choice of Hyperparameter

对于问题中的待拟合的函数，$$ y = \sin (2 \pi x) $$ 其泰勒展开为一个 $$x^{k}$$ 的无穷级数，因此直觉上来说，当给出的拟合多项式的可调节参数  $$ \mathbf{M} $$ 越大，拟合的效果越好。但是实际上，反直觉的是，如同下图所示，在当可调节参数  $$ \mathbf{M} $$ 为 $$9$$ ，即给出的样本数时，反而发生了过拟合现象，也就是说，给出的Citeria其实并没有做到和模型泛化性的等价，反而变成了一个求根问题，当给出  $$9$$ 个样本时，参数变成了求过 $$9$$ 点的方程。

{:refdef: style="text-align: center;"}
<img src="/images/2021-01-01-Pattern-Recongntion-and-Machinel-Learning-Chapt-1-Introduction/overfit_curfit.png" alt="overfit_curfit" style="zoom:35%;" />
{:refdef}

为了修正标准，需要做两件事情，考虑到更加合理的对于泛化性的表达（主要矛盾）和考虑样本量的影响（次要矛盾）

先解决简单的样本量，当固定当可调节参数  $$ \mathbf{M} $$ 为 $$9$$ ，换一个数据量大的训练集，同时为了减少数据量对于标准的影响，采用 RMS (root-mean-squared) 误差：

$$
E_{\mathrm{RMS}}=\sqrt{2 E\left(\mathbf{w}^{\star}\right) / N}
$$

换了 $$N=15$$ 以及  $$N=100$$ 的训练集以后，发现过拟合现象减少了

{:refdef: style="text-align: center;"}
<img src="/images/2021-01-01-Pattern-Recongntion-and-Machinel-Learning-Chapt-1-Introduction/More-data-better-generalization.png" alt="More-data-better-generalization" style="zoom:35%;" />
{:refdef}

但是往往实际问题中，这种通过增大样本量来解决问题的方案是不可行的

于是回到主要矛盾，对于要求泛化性，需要的是泛化性，但是数值上的标准给出的是尽可能的去拟合样本数据，这其实是不等价的。采用观察试验结果的方法，发现过拟合的 $$\mathbf{w}^{*}$$ 在会震荡的非常的厉害，即数值上非常大来满足完全过给出的样本点的要求：

{:refdef: style="text-align: center;"}
<img src="/images/2021-01-01-Pattern-Recongntion-and-Machinel-Learning-Chapt-1-Introduction/Parameter oscillation .png" alt="Parameter oscillation " style="zoom:35%;" />
{:refdef}

于是考虑修正误差函数，即限制参数在数值上的大小来换取泛化性，于是考虑 $$w$$ 的范数，$$\|\mathbf{w}\|^{2} \equiv \mathbf{w}^{\mathrm{T}} \mathbf{w}=w_{0}^{2}+w_{1}^{2}+\ldots+w_{M}^{2} $$ ，同时有 $$\lambda$$ 来控制对于样本点拟合精度和参数大小的比例，同是值得一提的是，有时候 $$w_{0}$$ 项会被省略因为他不会根据 $$x$$ 波动，省略它反而提高了常数项的拟合精度

$$
\widetilde{E}(\mathbf{w})=\frac{1}{2} \sum_{n=1}^{N}\left\{y\left(x_{n}, \mathbf{w}\right)-t_{n}\right\}^{2}+\frac{\lambda}{2}\|\mathbf{w}\|^{2}
$$

在调节不同的参数 $$\lambda$$ 后，一个好的 $$\lambda$$ 可以使泛化性和拟合精度达到一个平衡：

{:refdef: style="text-align: center;"}
<img src="/images/2021-01-01-Pattern-Recongntion-and-Machinel-Learning-Chapt-1-Introduction/modified_error.png" alt="modified_error" style="zoom:50%;" />
{:refdef}

若没有 Bayesian 的相关基础，请先移步至后面的 [Bayesian Probability](#bayesian-probability) 部分


### Curve fitting Re-visited

### Bayesian Probability

“贝叶斯是个好东西”，我发自内心的这么想，尤其是在现代算力大爆发的情况下，在某些领域，样本远比算力来的值钱，这个时候，强依赖大量样本的频率主义思维就会弱于贝叶斯主义方法。贝叶斯方法，是在对于一件事情有一个先验认识的时候，结合试验得到的数据修正，那么就有两个具体的问题，知识怎么用概率来表示，以及如何用实验数据结果修正。

首先解释如何将知识变成概率，用概率表示不确定性，是大家都认可的方法，但是用概率去表示知识（common sense），就有一些难以接受了，但是 通过表示该知识的置信程度，Cox(1946)建立了[Cox Theorem](https://en.wikipedia.org/wiki/Cox%27s_theorem) 来将知识转化成先验分布，这个过程是符合概率的加，乘的

或者说，拿估计投硬币的正面概率这个较为简单的例子来说，我依赖先验知识，对概率空间的划分有一个先验分布，因为我对于投硬币的结果是正面这件事，我的知识告诉我，若它是均匀硬币，则投掷出正面的结果是 $$1/2$$ ，反之亦然，即：
$$
P(\text { Head })=1 / 2, P(\text { Tail })=1 / 2
$$
然后通过实验的样本可能逐渐发现硬币并非均匀的，会有一些偏差，这是通过实验数据进行修正的，而如果是频率主义的话，这枚硬币的试验结果不好，可能就是 $$100\%$$ 正面硬币了

<img src="/images/2021-01-01-Pattern-Recongntion-and-Machinel-Learning-Chapt-1-Introduction/Coin-toss-problem.png" alt="Coin-toss-problem" style="zoom:20%;" />

第二个问题是具体的如何利用样本和先验修正概率，在给出观测样本 $$ \mathcal{D}=\left\{t_{1}, \ldots, t_{N}\right\} $$ 以及 先验分布$$ p(\mathbf{w}) $$ 后，就可以利用贝叶斯公式来得到修正过的概率/后验概率 $$ p(\mathcal{D} \mid \mathbf{w}) $$：
$$
p(\mathbf{w} \mid \mathcal{D})=\frac{p(\mathcal{D} \mid \mathbf{w}) p(\mathbf{w})}{p(\mathcal{D})}
$$
而值得一提的是，$$ p(\mathcal{D} \mid \mathbf{w})$$ 尽管形式上似乎是 $$\mathbf{w}$$ 的概率，实际上并非如此，其被称为似然函数（likelihood function），于是在关于 $$\mathbf{w}$$ 的角度下，贝叶斯公式也可以被总结为：
$$
\text { posterior } \propto \text { likelihood } \times \text { prior }
$$
再进一步，成为常数部分的 $$p(\mathcal{D})$$ 其实是在参数空间上 $$p(\mathcal{D} \mid \mathbf{w}) p(\mathbf{w})$$ 进行了积分$$p(\mathcal{D})=\int p(\mathcal{D} \mid \mathbf{w}) p(\mathbf{w}) \mathrm{d} \mathbf{w}$$因此变成了在 $$\mathbf{w}$$ 意义下的常数。
