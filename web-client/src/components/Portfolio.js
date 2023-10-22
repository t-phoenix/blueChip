import React from "react";
import "../styles/analytics.css";
import { readContract } from "@wagmi/core";
import { fetchBTCPrice, fetchETHPrice } from "../services/Coinbase";
import { contractAddress, toETHdenomination } from "../constants/addresses";
import { ERCTokenABI } from "../constants/contractABIs";
import Loader from "./Loader";
import Icon from "react-crypto-icons";

export default function Portfolio() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [tokenHoldings, setTokenHoldings] = React.useState([
    {
      key:0,
      tokenName: "Bitcoin",
      tokenSymbol: "BTC",
      balance: 4.5,
      price: 500,
      value: 2250,
    },
    {
      key:1,
      tokenName: "Ethereum",
      tokenSymbol: "ETH",
      balance: 18,
      price: 200,
      value: 3600,
    },
  ]);

  React.useEffect(()=>{
    fetchAssetBalance();
  },[])

  async function fetchAssetBalance(){
    setIsLoading(true);
    const btcBalanceBLUE = await readContract({
      address: contractAddress.wBTC,
      abi: ERCTokenABI,
      functionName: "balanceOf",
      args: [contractAddress.blue]
    });
    console.log("Blue Supply: ", Number(btcBalanceBLUE), " BTC");

    const ethBalanceBLUE = await readContract({
      address: contractAddress.wETH,
      abi: ERCTokenABI,
      functionName: "balanceOf",
      args: [contractAddress.blue]
    })
    console.log("Blue Supply: ", Number(btcBalanceBLUE), " BTC");

  
    let BTCprice = await fetchBTCPrice();
    let ETHprice = await fetchETHPrice();

    setTokenHoldings([
      {...tokenHoldings[0], 
        balance: Number(toETHdenomination(Number(btcBalanceBLUE))).toFixed(2),
        price: Number(BTCprice).toFixed(2),
        value: Number(toETHdenomination(Number(btcBalanceBLUE)) * Number(BTCprice)).toFixed(2)
      }, 
      {...tokenHoldings[1], 
        balance: Number(toETHdenomination(Number(ethBalanceBLUE))).toFixed(2),
        price: Number(ETHprice).toFixed(2),
        value: Number(toETHdenomination(Number(ethBalanceBLUE)) * Number(ETHprice)).toFixed(2)
      }
    ]);
    setIsLoading(false)
  }



  return (
    <div className="card-container">
      <div
        className="baseline-container"
        style={{ width: "100%", justifyContent: "space-between"}}
      >
        <h2 style={{color: '#52BAD1' }}> Token &nbsp;</h2>
        <div
          className="baseline-container"
          style={{ width: "60%", justifyContent: "space-evenly", color: '#52BAD1'  }}
        >
          <h2>Balance</h2>
          <h2>Price</h2>
          <h2>Value</h2>
        </div>
      </div>
      {isLoading? <Loader/> : tokenHoldings.map((token) => (
        <div
        key={token.key}
          className="baseline-container"
          style={{ width: "100%", justifyContent: "space-between", color: '#C0DA74' }}
        >
          <div className="baseline-container">
            <p>{token.tokenName}</p>
            {/* <Icon name={tokenHoldings.tokenSymbol} size={20} /> */}
          </div>

          <div
            className="baseline-container"
            style={{ width: "60%", justifyContent: "space-evenly" }}
          >
            <p>
              {token.balance} {token.tokenSymbol}
            </p>
            <p>$ {token.price}</p>
            <p>$ {token.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Portfolio
// Token Holdings: assets, Balance, Price, Value
