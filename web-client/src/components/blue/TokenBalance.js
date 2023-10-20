import React from "react";
import Icon from "react-crypto-icons";
import { ERCTokenABI } from "../../constants/contractABIs";
import { useAccount } from "wagmi";
import { contractAddress, toETHdenomination } from "../../constants/addresses";
import { readContract } from "@wagmi/core";
import Loader from "../Loader";

export default function TokenBalance({ props }) {
  // console.log("Token Balance Props:", props);
  const account = useAccount();
  
  
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    fetchUserBalance();
    
  }, []);

  
  async function fetchUserBalance() {
    setIsLoading(true);
    const balance = await readContract({
      address: props.contractAddress,
      abi: ERCTokenABI,
      functionName: "balanceOf",
      args: [account.address],
    });
    // console.log("Balance: ", Number(balance), props.tokenName);
    props.balance = Number(toETHdenomination(Number(balance))).toFixed(2);

    const approval = await readContract({
      address: props.contractAddress,
      abi: ERCTokenABI,
      functionName: 'allowance',
      args: [account.address, contractAddress.bim]
    })
    // console.log("Approval Balance: ", Number(approval));
    props.approve = Number(toETHdenomination(Number(approval))).toFixed(2);
    

    setIsLoading(false);
  }

  return (
    <div key={props.key}>
      <div className="balance-box" key={props.iconSymbol}>
        <div className="aligned-para">
          <h2 className="aligned-para">
            {props.tokenName} <Icon name={props.iconSymbol} size={20} />
          </h2>

          <div style={{ marginLeft: "20%" }}>
            <h2 style={{ marginBlock: "4px", color: "#C0DA74" }}>
              {props.requiredAsset}
            </h2>
            <p
              style={{
                width: "80px",
                fontSize: "10px",
                marginLeft: "5px",
                marginBlock: "0",

              }}
            >
              $ {props.value}
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="aligned-para" style={{ fontSize: "14px" }}>
            User Balance:{" "}
            {isLoading ? (
              <Loader />
            ) : (
              <p style={{ color: "#C0DA74", margin: "0" }}>{props.balance}</p>
            )}
          </p>
          <p className="aligned-para" style={{ fontSize: "10px" }}>
            Approved Balance: {isLoading? <Loader/> : <>{props.approve}</>}
          </p>
        </div>
      </div>
    </div>
  );
}
