import React from "react";
import "../styles/analytics.css";

export default function Portfolio() {
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
        ket:1,
      tokenName: "Ethereum",
      tokenSymbol: "ETH",
      balance: 18,
      price: 200,
      value: 3600,
    },
  ]);

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
      {tokenHoldings.map((token) => (
        <div
        key={token.key}
          className="baseline-container"
          style={{ width: "100%", justifyContent: "space-between", color: '#C0DA74' }}
        >
          <div className="baseline-container">
            <p>{token.tokenName}</p>
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
