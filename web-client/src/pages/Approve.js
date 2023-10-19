import React from "react";
import "../styles/mint.css";
import ApproveToken from "../components/blue/ApproveToken";
import {useLocation} from 'react-router-dom';

export default function Approve() {
    const location = useLocation();


    // console.log("LOCATION STATE:", location.state);
  return (
    <div className="main-content">
      <div className="card-container">
        <h3>Approve ERC20 tokens to Blue Chip</h3>
        {location.state.map((tokenDetails) => (
          <ApproveToken props={tokenDetails} />
        ))}
      </div>
    </div>
  );
}
