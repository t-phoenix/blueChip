import React, { useEffect, useRef } from "react";
import "../styles/mint.css";
import MintInterface from "../components/blue/MintInterface";
import RedeemInterface from "../components/blue/RedeemInterface";
import Loader from "../components/Loader";
import { fetchBTCPrice, fetchETHPrice } from "../services/Coinbase";

export default function BlueChip() {
  const [subTab, setSubTab] = React.useState("mint");

  const [isLoading, setIsLoading] = React.useState(false);
  const [ethPrice, setETHprice] = React.useState("0.00");
  const [btcPrice, setBTCprice] = React.useState("0.00");

  React.useEffect(() => {
    fetchPrice();
  }, []);

  async function fetchPrice() {
    setIsLoading(true);
    let wETHprice = await fetchETHPrice();
    let wBTCprice = await fetchBTCPrice();

    console.log("Print HERE--> ", Number(wETHprice), Number(wBTCprice));

    setETHprice(Number(wETHprice));
    setBTCprice(Number(wBTCprice));
    setIsLoading(false);
  }

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
            width: "94%",
            marginInline: "2%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ marginBottom: "9px" }}>
              <h4 className="aligned-para">
                ETH Price:
                {isLoading ? (
                  <Loader />
                ) : (
                  <p
                    className="aligned-para"
                    style={{ color: "#C0DA74", fontSize: "14px" }}
                  >
                    ${ethPrice}
                  </p>
                )}
              </h4>
              <h4 className="aligned-para">
                BTC Price:{" "}
                {isLoading ? (
                  <Loader />
                ) : (
                  <p
                    className="aligned-para"
                    style={{ color: "#C0DA74", fontSize: "14px" }}
                  >
                    ${btcPrice}
                  </p>
                )}
              </h4>
            </div>
          </div>

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
        </div>

        {subTab === "mint" ? (
          <MintInterface price={{ eth: ethPrice, btc: btcPrice }} />
        ) : (
          <RedeemInterface price={{ eth: ethPrice, btc: btcPrice }} />
        )}
      </div>
    </div>
  );
}
