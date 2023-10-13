import React from "react"
import "../styles/homestyle.css";
import HeroSection from "../components/sections/HeroSection";
import SecondSection from "../components/sections/SecondSection";

export default function Home(){
    return(
        <div className="main-content">
            <HeroSection />
            <SecondSection />
        </div>
    )
}