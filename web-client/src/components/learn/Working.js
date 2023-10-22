import React from "react"
import "../../styles/learn.css";
import How from "../../assets/illustrations/How.png";
import Technical from "../../assets/illustrations/Technical.png";


export default function Working(){
    return(
        <div className="content-container">
            <h2 style={{color: '#52BAD1'}}>Okay but how it Works?</h2>
            
            <img src={How} style={{height: '70vh', width: '40vw', borderStyle:'solid' ,borderWidth: '4px', borderRadius: '25px', borderColor: '#C0DA74'}}/>

            <h2 style={{color: '#52BAD1', marginTop: '20%'}}>And what's under the hood?</h2>
            <img src={Technical} style={{height: '60vh', borderStyle:'solid' ,borderWidth: '4px', borderRadius: '25px', borderColor: '#C0DA74'}}/>
        </div>
    )
}