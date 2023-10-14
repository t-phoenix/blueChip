import React from "react";
import Icon from "react-crypto-icons";
import "../../styles/mint.css";

export default function ApproveToken({ props }) {
  console.log("Print Input to token Balance:", props);
  const [amount, setAmount] = React.useState(0)
    
  return (
    <div key={props.key} style={{width: '90%'}}>
      <div className="balance-box" key={props.iconSymbol}>
        <div className="aligned-para">
          <h2 className="aligned-para">
            {props.tokenName}{" "} <Icon name={props.iconSymbol} size={20} />
          </h2>

          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder={amount}
            style={{ marginInline: "5%", backgroundColor: "transparent" , color: '#C0DA74', width: '30%'}}
          />
          <button >Approve</button>
          
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="aligned-para" style={{fontSize: '14px'}}>
            Balance:{" "}
            <p style={{ color: "#C0DA74", margin: "0" }}>{props.balance}</p>
          </p>
          <p className="aligned-para" style={{fontSize: '10px'}}>Approved: {props.approve}</p>
        </div>
      </div>
    </div>
  );
}