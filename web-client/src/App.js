// eslint-disable-next-line 
import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useNetwork } from "wagmi";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home";
import BlueChip from "./pages/BlueChip";
import Learn from "./pages/Learn";
import Analytics from "./pages/Analytics";
import Faucet from "./pages/Faucet";
import Approve from "./pages/Approve";


function App() {
  const { chain } = useNetwork();
  console.log("chain:", chain);

  return (
    <div className="App">
      {/* Header Component */}
      <Header />

      {/* Body Component with Navigation Sidebar and Content Screen */}
      <div className="body">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bluechip" element={<BlueChip />} />
        <Route path="/faucet" element={<Faucet />} />
        <Route path="/analytics" element={<Analytics />}/>
        <Route path="/learn" element={<Learn />} />
        <Route path="/approve" element={<Approve/>}/>
        {/* <Route path="/explorer" element={<IdeaExplorer />} />
          <Route path="/create" element={<CreateScreen />} />
          <Route path="/collection" element={<CollectionScreen />} />
          <Route path="/guide" element={<LearnScreen />}/> */}
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
