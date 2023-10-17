import React from "react";
import "../styles/analytics.css";

export default function Overview() {
  const [supply, setSupply] = React.useState(45);
  const [AUM, setAUM] = React.useState(34500.43);
  const [value, setValue] = React.useState(766.873);

  const [manager, setManager] = React.useState(
    "0x3131231babfb32ab54fa04bc932dc422ba"
  );
  const [blue, setBlue] = React.useState(
    "0x9031231babfb32ab54fa04bc932dc422321b"
  );
  const [issueModule, setIssueModule] = React.useState(
    "0x59a1231babfb32ab54fa04bc932dc42653f"
  );
  const [controller, setController] = React.useState(
    "0xab41231babfb32ab54fa04bc932dc4fab84a"
  );
  return (
    <div className="card-container">
      <h2 className="label-style">Overview</h2>

      <div style={{ width: "100%" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div>
            <div className="baseline-container">
              <h3 className="label-style">Token Name: &nbsp; </h3>
              <p className="value-style"> Blue Chip (BLUE)</p>
            </div>
            <div className="baseline-container">
              <h3 className="label-style">Token Supply: &nbsp; </h3>
              <p className="value-style"> {supply} BLUE </p>
            </div>
          </div>
          <div>
            <h1></h1>
          </div>
          <div>
            <div className="baseline-container">
              <h3 className="label-style">
                Asset Under Management(AUM): &nbsp;
              </h3>
              <p className="value-style">$ {AUM}</p>
            </div>
            <div className="baseline-container">
              <h3 className="label-style">Token Value (BLUE): &nbsp;</h3>
              <p className="value-style">$ {value}</p>
            </div>
          </div>
        </div>
        <div style={{marginLeft: '10%', marginTop: '5%'}}>
            <div className="baseline-container">
              <h3 className="label-style">Manager: &nbsp;</h3>
              <p className="value-style">{manager}</p>
            </div>

            <div className="baseline-container">
              <h3 className="label-style">BLUE Token: &nbsp;</h3>
              <p className="value-style">{blue}</p>
            </div>

            <div className="baseline-container">
              <h3 className="label-style">Basic Issue Module: &nbsp;</h3>
              <p className="value-style">{issueModule}</p>
            </div>

            <div className="baseline-container">
              <h3 className="label-style">Controller: &nbsp;</h3>
              <p className="value-style">{controller}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

//TODOs:
// Overview
// Basic: Contract Addresses List, AUM($), Supply, Manager,
