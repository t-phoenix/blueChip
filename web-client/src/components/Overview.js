import React from "react";
import "../styles/analytics.css";
import { contractAddress, getLinkedAddress } from "../constants/addresses";
import { SetTokenABI } from "../constants/contractABIs";
import { readContract } from '@wagmi/core'


export default function Overview() {
  const blue = contractAddress.blue
  const issueModule = contractAddress.bim;
  const controller = contractAddress.controller

  const [supply, setSupply] = React.useState(45);
  const [AUM, setAUM] = React.useState(34500.43);
  const [value, setValue] = React.useState(766.873);

  const [manager, setManager] = React.useState('0xD56C7212A5551AD68c9b15aEBaf5AC2A66E6A27c')

  React.useEffect(()=>{
    fetchBLUEDetails();
  },[])


  async function fetchBLUEDetails(){
    const supply = await readContract({
      address: contractAddress.blue,
      abi: SetTokenABI,
      functionName: 'totalSupply',
    })
    console.log("Blue Supply: ", Number(supply), " BLUE");
    setSupply(Number(supply))

    const handler = await readContract({
      address: contractAddress.blue,
      abi: SetTokenABI,
      functionName: 'manager',
    })
    console.log("Blue Manager: ", String(handler), " BLUE");
    setManager(String(handler))
  }




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
              <p className="value-style"><a href={getLinkedAddress(manager)} target="blank" style={{ fontSize: '14px' }}>{manager}</a></p>
            </div>

            <div className="baseline-container">
              <h3 className="label-style">BLUE Token: &nbsp;</h3>
              <p className="value-style"><a href={getLinkedAddress(blue)} target="blank" style={{ fontSize: '14px' }}>{blue}</a></p>
            </div>

            <div className="baseline-container">
              <h3 className="label-style">Basic Issue Module: &nbsp;</h3>
              <p className="value-style"><a href={getLinkedAddress(issueModule)} target="blank" style={{ fontSize: '14px' }}>{issueModule}</a></p>
            </div>

            <div className="baseline-container">
              <h3 className="label-style">Controller: &nbsp;</h3>
              <p className="value-style"><a href={getLinkedAddress(controller)} target="blank" style={{ fontSize: '14px' }}>{controller}</a></p>
            </div>
        </div>
      </div>
    </div>
  );
}

//TODOs:
// Overview
// Basic: Contract Addresses List, AUM($), Supply, Manager,
