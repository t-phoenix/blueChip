import Icon from "react-crypto-icons";

export default function TokenRedeem({ props }) {
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
      </div>
    </div>
  );
}
