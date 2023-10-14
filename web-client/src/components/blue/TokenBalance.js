import Icon from "react-crypto-icons";

export default function TokenBalance({ props }) {
  console.log("Print Input to token Balance:", props);

  return (
    <div key={props.key}>
      <div className="balance-box" key={props.iconSymbol}>
        <div className="aligned-para">
          <h2 className="aligned-para">
            {props.tokenName}{" "} <Icon name={props.iconSymbol} size={20} />
          </h2>
          <div style={{ marginLeft: "20%" }}>
            <h2 style={{ marginBlock: "4px", color: "#C0DA74" }}>
              {props.balance}
            </h2>
            <p
              style={{
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
          <p className="aligned-para" style={{fontSize: '14px'}}>
            User Balance:{" "}
            <p style={{ color: "#C0DA74", margin: "0" }}>{props.balance}</p>
          </p>
          <p className="aligned-para" style={{fontSize: '10px'}}>Approved Balance: {props.approve}</p>
        </div>
      </div>
    </div>
  );
}
