import React from "react"
import "../../styles/learn.css";
import indexfund from "../../assets/illustrations/indexfund.png"
import moneybag from "../../assets/illustrations/moneybag.png"

export default function IndexFund(){
    return(
        <div className="content-container">
            <h1 style={{marginLeft: '3%'}}>What the hell🤯 is Index Fund?</h1>
            <div className="free-container">
            <p className="left-para">Index fund is like a mutual fund or Exchange traded fund, which is designed to follow certain preset rules so that it can replicate the performance of a specified ASSET basket of underlying investment.</p>
            <img src={moneybag} style={{height: '30vh'}}/>
            </div>
        </div>
    )
}