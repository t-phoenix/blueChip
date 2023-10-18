import React from "react"
import "../../styles/learn.css";


export default function Steps(){
    return(
        <div className="content-container">
            <h2>How to Mint BLUE CHIP?</h2>
            <p className="left-para">Step1: Get test wETH, wBTC ERC20 token from faucet</p>
            <p className="left-para">Step2: Delegate those assets to BLUE protocol.</p>
            <p className="left-para">Step3: Mint BLUE - Respective component assets will be automatically transfered from minter to BLUE protocol.</p>
            <p className="left-para">Step4: HODL/ Trade/ Lend/ BLUE and monitor your investments.</p>
            <p className="left-para">Step5: Redeem BLUE - Liquidate your assets and receive proportionate funds.</p>
        </div>
    )
}