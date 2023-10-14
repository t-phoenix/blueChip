import React from "react";
import "../styles/mint.css";
import MintInterface from "../components/blue/MintInterface";
import RedeemInterface from "../components/blue/RedeemInterface";

export default function BlueChip() {
  const [subTab, setSubTab] = React.useState("mint");

  function setMintTab() {
    setSubTab("mint");
  }

  function setRedeemTab() {
    setSubTab("redeem");
  }

  return (
    <div className="main-content">
      <div className="card-container">
        <h1>BLUE CHIP: Fash Mint</h1>
        
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {subTab === "mint" ? (
            <div className="selected-button" onClick={setMintTab}>
              Mint
            </div>
          ) : (
            <div className="option-button" onClick={setMintTab}>
              Mint
            </div>
          )}
          {subTab === "redeem" ? (
            <div className="selected-button" onClick={setRedeemTab}>
              Redeem
            </div>
          ) : (
            <div className="option-button" onClick={setRedeemTab}>
              Redeem
            </div>
          )}
        </div>


        {subTab === 'mint' ? <MintInterface />: <RedeemInterface/>}
      </div>
    </div>
  );
}
