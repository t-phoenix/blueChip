import React from "react"
import "../styles/homestyle.css";
import HeroSection from "../components/sections/HeroSection";
import SecondSection from "../components/sections/SecondSection";

export default function Home(){
    return(
        <div className="main-content">
            <HeroSection />
            <SecondSection />
            <p style={{color: '#52BAD1', marginBlock: '30vh'}}>Made with ❤️ by  <a
                href={`https://twitter.com/touchey_phoenix`}
                target="blank"
                style={{ fontSize: "14px" }}
              >@toucheyphoenix</a></p>
        </div>
    )
}
/* C0DA74
  52BAD1 */