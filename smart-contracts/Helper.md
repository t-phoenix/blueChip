 //Core deployments:
//1. Deploy Controller(feeRecipient)

// 1.1 Prepare components - wBTC, wETH, LINK
// 1.2 Deploy Modules - BIM, 
//2. Deploy SetToken(components[], units[], modules[], controller, manager, name, symbol)

// 2.1 address masterQuoteAsset
// 2.2 Adapters
// 2.3 Oracles
//3. Deploy Oracle(controller, masterQuoteAsset, adapters[], assetOnes[], AssetTwos[], oracles[])
//4. Deploy Integration Registry(controller)
//5. Deply SetValuer (controller)






 
 
 //Deploy Oracle(controller, address masterQuoteAsset, address[] adapters,address[] assetOnes, address[] AssetTwos, IOracle[] oracles)\
  // Polygon Mainnet
  // USDT/USD - 0x0A6513e40db6EB1b165753AD52E80663aeA50545
  // ETH/USD - 0xF9680D99D6C9589e2a93a78A04A279e509205945
  // BTC/ USD - 0xc907e116054ad103354f2d350fd2514433d57f6f
  // USDT/ETH - 0xf9d5aac6e5572aefa6bd64108ff86a222f69b64d
  // WBTC/ETH - 0xa338e0492b2f944e9f8c0653d3ad1484f2657a37
  // USDT - 0xc2132D05D31c914a87C6611C10748AEb04B58e8F
  // wETH - 0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619
  // wBTC - 0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6

//   wETH, wBTC
//   USDT, USDT
//   wETH/USDT, wBTC/USDT

// masterQuoteAsset: 0xc2132D05D31c914a87C6611C10748AEb04B58e8F
// adapters: []
// assetOnes: [wETH.target, wBTC.target]
// assetTwos [USDT.target, USDT.target]
// IOracles: [0xF9680D99D6C9589e2a93a78A04A279e509205945, 0xc907e116054ad103354f2d350fd2514433d57f6f ]
  // const ETHUSD = '0xF9680D99D6C9589e2a93a78A04A279e509205945';
  // const BTCUSD = '0xc907e116054ad103354f2d350fd2514433d57f6f';  
  // const USDTETH = '0xf9d5aac6e5572aefa6bd64108ff86a222f69b64d';
  // const WBTCETH = '0xa338e0492b2f944e9f8c0653d3ad1484f2657a37';