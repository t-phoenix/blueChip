import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import "../../styles/analytics.css";

function Dashboard({ price, data }) {

    const opts = {
    tooltips: {
      intersect: false,
      mode: "index"
    },
    responsive: true,
    maintainAspectRatio: false
  };
  if (price === "0.00") {
    return <h3>please select a currency pair</h3>;
  }
  return (
    <div className="dashboard">
      {/* <h2>{`${price}`}</h2> */}

      <div className="chart-container">
        <Line data={data} options={opts} />
      </div>
    </div>
  );
}

export default Dashboard;