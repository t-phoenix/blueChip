import React from "react";
import Icon from "react-crypto-icons";
import { ERCTokenABI } from "../../constants/contractABIs";
import { useAccount } from "wagmi";
import { contractAddress, toETHdenomination } from "../../constants/addresses";
import { readContract } from "@wagmi/core";
import Loader from "../Loader";

export default function TokenRedeem({ props }) {
  const account = useAccount();
  const [isLoading, setIsLoading] = React.useState(false);


  return (
    <div key={props.key}>
      <div className="balance-box" key={props.iconSymbol}>
        <div className="aligned-para">
          <h2 className="aligned-para">
            {props.tokenName} <Icon name={props.iconSymbol} size={20} />
          </h2>
          <div style={{ marginLeft: "20%" }}>
            {isLoading ? (
              <Loader />
            ) : (
              <h2 style={{ marginBlock: "4px", color: "#C0DA74" }}>
                {props.requiredAsset}
              </h2>
            )}
            <p
              style={{
                fontSize: "10px",
                marginLeft: "5px",
                marginBlock: "0",
                width: "80px",
              }}
            >
              $ {props.value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
