import React from "react";
import PriceGraph from "../components/PriceGraph";
import "../styles/analytics.css";
import Overview from "../components/Overview";
import Portfolio from "../components/Portfolio";

export default function Analytics() {
    const [subTab, setSubTab] = React.useState("overview");

    function setOverviewTab() {
      setSubTab("overview");
    }
  
    function setGraphTab() {
      setSubTab("graph");
    }

    function setPortfolioTab(){
        setSubTab("portfolio");
    }

  return (
    <div className="main-content">
        <h1 style={{marginTop: '0px'}}>Analytics Dashboard</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: '12px'
        }}
      >
        {subTab === "overview" ? (
          <div className="selected-button" onClick={setOverviewTab}>
            Overview
          </div>
        ) : (
          <div className="option-button" onClick={setOverviewTab}>
            Overview
          </div>
        )}
        {subTab === "graph" ? (
          <div className="selected-button" onClick={setGraphTab}>
            Graph
          </div>
        ) : (
          <div className="option-button" onClick={setGraphTab}>
            Graph
          </div>
        )}
        {subTab === "portfolio" ? (
          <div className="selected-button" onClick={setPortfolioTab}>
            Potfolio
          </div>
        ) : (
          <div className="option-button" onClick={setPortfolioTab}>
            Portfolio
          </div>
        )}
      </div>
      {subTab === "overview"? <Overview/>: <></>}
      {subTab === "graph" ? <PriceGraph />: <></>}
      {subTab === "portfolio" ? <Portfolio />: <></>}
      
    </div>
  );
}


 



