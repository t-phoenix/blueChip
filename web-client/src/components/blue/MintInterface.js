import React from "react";
import blueLogo from "../../assets/blueLogo.svg";
import "../../styles/mint.css";
import Icon from "react-crypto-icons";
import TokenBalance from "./TokenBalance";
import { useNavigate } from "react-router-dom";

export default function MintInterface() {

  const navigate = useNavigate();

  const [blueValue, setBlueValue] = React.useState(0);
  const usdValue = 0;
  const balance = 2.5;

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
    <>
      <div className="input-box">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <input
            value={blueValue}
            onChange={(e) => setBlueValue(e.target.value)}
            type="number"
            placeholder={blueValue}
            style={{ margin: "5px", backgroundColor: "transparent" , color: '#C0DA74', width: '50%'}}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "30%"
            }}
          >
            <img src={blueLogo} style={{ height: "30px" }} /> <p>BLUE</p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: "1vw",
          }}
        >
          <p>${usdValue}</p>
          <p>Balance: {balance}</p>
        </div>

        </div>

        <p className="aligned-para">Estimated Tokens required to mint </p>
        <div style={{ width: "100%", marginInline: "20%", marginBlock: '5%' }}>
          {tokenBalances.map((tokenBalance) => (
            // <p key={tokenBalance.key}>Hello: {tokenBalance.tokenName}</p>
            <TokenBalance props={tokenBalance} />
          ))}
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <button
            style={{
              height: "16",
              fontSize: "10px",
              paddingBlock: "8px",
              paddingInline: "8px",
            }}
            onClick={()=>{navigate('/approve')}}
          >
            Approve Tokens
          </button>
        </div>

        <button>
          Mint BLUE <img src={blueLogo} style={{ height: "30px" }} />
        </button>
      
    </>
  );
}
