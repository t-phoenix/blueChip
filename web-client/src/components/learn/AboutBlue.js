import React from "react";
import "../../styles/learn.css";
import blueLogo from "../../assets/blueLogo.png";
import dollarbag from "../../assets/illustrations/dollarbag.png";
import workingman from "../../assets/illustrations/workingman.png";

export default function AboutBlue() {
  return (
    <div className="content-container">
      <h1 style={{ marginLeft: "3%" }}>BLUE CHIP</h1>

      <h2 style={{ marginLeft: "3%" }}>Okay! But what is BLUE CHIP?</h2>
      <div className="free-container">
        <img src={blueLogo} style={{ height: "30vh" }} />
        <p className="left-para">
          Blue chip is your gateway to simplified, diversified crypto
          investment. As crypto market evolves and expands, navigating the
          complexity of individual tokens can be daunting task. Blue chip offers
          smart and accessible way to invest in the exciting world of
          cryptocurrencies.
        </p>
      </div>

      <h2>But Why do we need BLUE CHIP?</h2>
      <div className="free-container">
        <p className="left-para">
          Blue Chip provides a portfolio of less risky and market winning crypto
          assets. We provide expert insights and a user friendly platform that
          simplifies investment process.
        </p>
        <img src={dollarbag} style={{ height: "30vh" }} />
      </div>

      <h2>Who should invest in BLUE CHIP?</h2>
      <div className="free-container">
      <img src={workingman} style={{ height: "30vh" }} /> 
      <p className="left-para">
        BLUE FOR ALL! Experienced investors can mint BLUE tokens and hold for
        price appreciation, or trade on exchanges for a premium on price. New
        Investors can buy BLUE on exchanges and get exposure to the BEST crypto
        assets
      </p>
      </div>
    </div>
  );
}
