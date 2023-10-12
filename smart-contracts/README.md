# Blue Chip Smart Contracts

Blue Chip is an automated Crypto Index Fund for to simplified, diversified cryptocurrency investments

hardhat helper commands:

```shell
yarn hardhat help
yarn hardhat test
REPORT_GAS=true yarn hardhat test
yarn hardhat node
yarn hardhat run scripts/deploy.js
```


## We need 3 sets of Smart-Contract Clusters
1. ***ERC20 token*** contract for wETH, wBTC, LINK and other if needed
Enable Faucet to mint tokens for Demo Users

2. ***Set Protocol Contracts***
Controller, Set Token (blue Chip), Basic Issue Module (Mint/ Redeem)

3. ***Uniswap V3*** contract for AMM pools
Enable LP/ Swap for Blue Chip
