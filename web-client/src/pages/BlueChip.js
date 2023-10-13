import React from "react";
import blueLogo from "../assets/blueLogo.svg";
import "../styles/mint.css";
import Icon from "react-crypto-icons";


export default function BlueChip() {
  const [blueValue, setBlueValue] = React.useState(0);
  const usdValue = 0.0;
  const balance = 0;

  return (
    <div className="main-content">
      <div className="card-container">
        <h1>Mint/Redeem Blue Chip</h1>
        <p>
          Approve and deposit respective ERC20 tokens to mint Blue Chip tokens
        </p>

        <div className="input-box">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <input
              value={blueValue}
              onChange={(e) => setBlueValue(e.target.value)}
              type="number"
              placeholder={blueValue}
              style={{ margin: "5px", backgroundColor: 'transparent'}}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
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
              marginLeft: "1vw"
            }}
          >
            <p>${usdValue}</p>
            <p>Balance: {balance}</p>
          </div>
        </div>

        <p style={{display:'flex', flexDirection: 'row', alignItems: 'center'}}>Estimated wETH (<Icon name="eth" size={20}/>) and wBTC (<Icon name="btc" size={20}/>) required to mint </p>

      </div>

    </div>
  );
}
