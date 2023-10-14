import React from "react";
import "../styles/mint.css";
import ApproveToken from "../components/blue/ApproveToken";

export default function Approve() {
  const [tokenBalances, setTokenBalances] = React.useState([
    {
      key: 0,
      tokenName: "wETH",
      iconSymbol: "eth",
      balance: "1.23",
      value: "1918.9",
      approve: "0.89",
    },
    {
      key: 1,
      tokenName: "wBTC",
      iconSymbol: "btc",
      balance: "0.56",
      value: "14000",
      approve: "0.23",
    },
  ]);
  return (
    <div className="main-content">
      <div className="card-container">
        <h3>Approve ERC20 tokens to Blue Chip</h3>
        {tokenBalances.map((tokenBalance) => (
          <ApproveToken props={tokenBalance} />
        ))}
      </div>
    </div>
  );
}
