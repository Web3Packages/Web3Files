# Web3Packages 开源项目介绍

### 本项目由Web3Packages联合Openbuild社区发起！

## 1. 缘起
Chainlink是区块链预言机的龙头，其下的[chainlink-functions](https://docs.chain.link/chainlink-functions/getting-started)可以实现web2与web3的数据通讯。通过链上智能合约发送JS代码参数，可以请求web2的数据。详细介绍见chainlink-functions官方文档：https://docs.chain.link/chainlink-functions/getting-started

有了JS的加持，chainlink-functions可以认作为是EVM的扩展，EVM的L2。如消耗gas的复杂逻辑运算等均可以交给chainlink-functions进行处理，大大节省主链的gas。可以说chainlink-functions会有非常广的发展空间。

但是为了更安全运行，chainlink-functions对JS代码进行了限制. 虽然可以从外部引入包，如import npm 包等，但仍然有许多问题需要解决，主要如下：

1. 很多功能函数需要根据项目的情况进行编写，项目要实现的功能越多，js代码的体积就越庞大，很有可能就超过了chainlink的代码体积的限制（30KB），导致功能受限
2. 各项目的功能函数无法实现共享
3. 代码需要作为合约参数进行输入，代码越大，花费的gas越多
4. 外部包基本上通过web2的中心化服务器进行引入，去中心化程度低


因此，基于以上因素，本项目目标是建立一个类似于npm的web3标准库，通过去中心化存储的方式，让大家可以实现函数之间的共享调用，一方面可以大大减少了代码体积，另一方面，也提高了开发者的效率。此举也降低了入门门槛，使得新手也可以快速开发出高质量的产品。

## 2. 适合人群
本项目为开源项目，任何人都可以参与。前期侧重于函数开发标准化，较适合对JS和solidity较熟悉的人员。后面技术文档说明，前端页面，产品，运营等均可以参与。

本项目以JavaScript作为切入点，后期可以扩展到其他编程语言。


## 3. 标准库标准
任何函数（不能引入外部包）均可以归入该标准库。标准库在链上是匿名的，任何人都可以发布。
关于标准库的名称，如下要求：

1. 名称名称方式：name@version （例如test@1.0.1）
2. name: 只允许数字，大小写英文，及“-”
3. version： 采用a.b.c的方式。其中当重大更新，且不兼容下游版本是升级a；当兼容下游版本，但有新功能是升级b；c为bug的修订升级版本


## 4. 标准库的存储方式
链上标准库采用EthStorage的去中心化存储技术进行存储。每个标准库第一次链上提交的人为owner，可以也只能对其进行升级操作，但旧版本无法删除及更新。非owner只能读取，没有操作的权限。

链下标准库由本repo记录。

链上和链下的标准库暂无关联。

## 5. 标准库的初步规划
任何函数（不能引入外部包）均可以，比如以下实现solidity上的功能函数等：
1. abi.encodePacked()
2. abi.encode()
3. keccak256()-(by Kevin, on going)
4. bytes => string
5. string => bytes
6. 各种类型的转换
7. sign() and ecrecover()-(by Kevin, on going)
8. encrypt() and decrypt()-(by Kevin, on going)
9. 其他...


## 6. 标准库的提交及使用方法
1. 提交到本repo：我们鼓励大家在本目录位置提交PR, 包括原生代码，和使用说明readme。提交格式：以examole.js文件为例，详见[example](https://github.com/Web3Packages/Web3Files/tree/main/JavaScript/example)。
2. 提交到链上：另见[Web3Storage-EthStorage](https://github.com/Web3Packages/Web3Storage-EthStorage)仓库详解，链上数据是否提交由开发者决定。
3. 使用方法：以Chainlink为例，另见[UseCases-Chainlink](https://github.com/Web3Packages/UseCases-Chainlink)仓库详解。


## 7. 激励
我们秉持做开源免费的项目。当然，若有获得赞助，我们会根据大家的贡献发bounty。

## 8. 特别支持
Chainlink, EthStorage
