import React from "react"
import "../styles/learn.css";
import IndexFund from "../components/learn/IndexFund";
import AboutBlue from "../components/learn/AboutBlue";
import Steps from "../components/learn/Steps";
import Working from "../components/learn/Working";

export default function Learn(){
    return(
        <div className="main-content">
            <div className='learn-container'>
                <IndexFund />
                <AboutBlue />
                <Working />
                <Steps />
            </div>
        </div>
    )
}