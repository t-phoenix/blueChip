import React from "react"
import "../../styles/learn.css";
import How from "../../assets/illustrations/How.png";
import Technical from "../../assets/illustrations/Technical.png";


export default function Working(){
    return(
        <div className="content-container">
            <h2 className="header-alignment">Okay but how it Works?</h2>
            
            <img src={How} style={{height: '70vh', width: '40vw', borderStyle:'solid' ,borderWidth: '4px', borderRadius: '25px', borderColor: '#C0DA74'}}/>

            <h2 className="header-alignment">And what's under the hood?</h2>
            <img src={Technical} style={{height: '60vh', borderStyle:'solid' ,borderWidth: '4px', borderRadius: '25px', borderColor: '#C0DA74'}}/>
        </div>
    )
}