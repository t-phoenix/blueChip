import React, { useState, useEffect, useRef } from "react";
import Dashboard from "./analytics/Dashboard";
import { formatData } from "../constants/utils";
import "../styles/analytics.css";

export default function PriceGraph() {
  const [currencies, setcurrencies] = useState([]);
  const [pair, setpair] = useState("ETH-USD");
  const [price, setprice] = useState("0.00");
  const [pastData, setpastData] = useState({});
  const ws = useRef(null);
  console.log("Web Socket:", ws);

  let first = useRef(false);
  const url = "https://api.pro.coinbase.com";

  useEffect(() => {
    ws.current = new WebSocket("wss://ws-feed.pro.coinbase.com");

    let pairs = [];
    const apiCall = async () => {
      await fetch(url + "/products")
        .then((res) => res.json())
        .then((data) => (pairs = data));

      let filtered = pairs.filter((pair) => {
        if (
          pair.display_name === "ETH/USD" ||
          pair.display_name === "BTC/USD"
        ) {
          
          return pair;
        }
      });

      filtered = filtered.sort((a, b) => {
        if (a.base_currency < b.base_currency) {
          return -1;
        }
        if (a.base_currency > b.base_currency) {
          return 1;
        }
        return 0;
      });
    //   filtered.push({base_currency: "BLUE", display_name: "BLUE/USD", id:"BLUE-USD", quote_currency: "USD"})
  

      setcurrencies(filtered);

      first.current = true;
    };

    apiCall();

  }, []);

  const fetchHistoricalData = async (historicalDataURL) => {
    let dataArr = [];
    await fetch(historicalDataURL)
      .then((res) => res.json())
      .then((data) => (dataArr = data));

    console.log("Data Array:", { dataArr });
    if (dataArr != []) {
      let formattedData = formatData(dataArr);
      setpastData(formattedData);
    }
  };



  useEffect(() => {
    console.log("Running ...");
    if (!first.current) {
      console.log("RETURNED!", first.current);
      return;
    }
    console.log("Pair New: ", pair);
    let msg = {
      type: "subscribe",
      product_ids: [pair],
      channels: ["ticker"],
    };
    let jsonMsg = JSON.stringify(msg);
    if (ws.current.readyState === 1) {
      ws.current.send(jsonMsg);
    } else {
        console.log("Error: Web Socket Not Connected")
    }

    let historicalDataURL = `${url}/products/${pair}/candles?granularity=86400`;

    fetchHistoricalData(historicalDataURL);

    ws.current.onmessage = (e) => {
      let data = JSON.parse(e.data);
      if (data.type !== "ticker") {
        return;
      }

      if (data.product_id === pair) {
        setprice(data.price);
      }
    };
  }, [pair]);

  const handleSelect = (e) => {
    let unsubMsg = {
      type: "unsubscribe",
      product_ids: [pair],
      channels: ["ticker"],
    };
    let unsub = JSON.stringify(unsubMsg);

    ws.current.send(unsub);

    // console.log("Selected Input: ", e.target.value);
    setpair(e.target.value);
  };

  return (
    <div className="card-container">
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {
          <select
            name="currency"
            value={pair}
            onChange={handleSelect}
            className="dropdown-button"
          >
            {currencies.map((cur, idx) => {
              return (
                <option key={idx} value={cur.id}>
                  {cur.display_name}
                </option>
              );
            })}
          </select>
        }
        <div className="baseline-container">
        <h3 style={{ color: "#52BAD1" }}>Price: &nbsp; </h3>
        <p style={{ color: "#C0DA74" }}> {price}</p>

        </div>
        
      </div>
      <Dashboard price={price} data={pastData} />
    </div>
  );
}


// Graph
// ETH/ BTC/ BLUE