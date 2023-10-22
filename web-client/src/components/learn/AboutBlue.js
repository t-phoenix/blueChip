import React from "react";
import "../../styles/learn.css";
import blueLogo from "../../assets/blueLogo.png";
import dollarbag from "../../assets/illustrations/dollarbag.png";
import workingman from "../../assets/illustrations/workingman.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import {
  HERO_HEADING_DURATION,
  HERO_HEADING_FINAL_OPACITY,
  HERO_HEADING_FINAL_SCALE,
  HERO_HEADING_INITIAL_OPACITY,
  HERO_HEADING_INITIAL_SCALE,
} from "../../constants/animation";

export default function AboutBlue() {
  const what =
    "Blue chip is your gateway to simplified, diversified crypto investment. As crypto market evolves and expands, navigating the complexity of individual tokens can be daunting task. Blue chip offers smart and accessible way to invest in the exciting world of cryptocurrencies.";
  const why =
    "Blue Chip provides a portfolio of less risky and market winning crypto assets. We provide expert insights and a user friendly platform that simplifies investment process.";
  const who =
    "BLUE FOR ALL! Experienced investors can mint BLUE tokens and hold for price appreciation, or trade on exchanges for a premium on price. New Investors can buy BLUE on exchanges and get exposure to the BEST crypto assets";
  return (
    <motion.div
      animate={{
        scale: HERO_HEADING_FINAL_SCALE,
        opacity: HERO_HEADING_FINAL_OPACITY,
      }}
      initial={{
        scale: HERO_HEADING_INITIAL_SCALE,
        opacity: HERO_HEADING_INITIAL_OPACITY,
      }}
      transition={{ ease: "easeInOut", duration: HERO_HEADING_DURATION }}
      className="content-container"
    >
      <h1 className="header-alignment">BLUE CHIP</h1>

      <h2 className="header-alignment">Okay! But what is BLUE CHIP?</h2>
      <div className="free-container">
        <img src={blueLogo} style={{ height: "30vh" }} />
        <TypeAnimation
          sequence={[what, 10000]}
          speed={50}
          deletionSpeed={75}
          wrapper="span"
          repeat={Infinity}
          cursor
          preRenderFirstString={false}
          omitDeletionAnimation={false}
          className="left-para"
        />
      </div>

      <h2 className="header-alignment">But Why do we need BLUE CHIP?</h2>
      <div className="free-container">
        <TypeAnimation
          sequence={[why, 10000]}
          speed={50}
          deletionSpeed={75}
          wrapper="span"
          repeat={Infinity}
          cursor
          preRenderFirstString={false}
          omitDeletionAnimation={false}
          className="left-para"
        />
        <img src={dollarbag} style={{ height: "30vh" }} />
      </div>

      <h2 className="header-alignment">Who should invest in BLUE CHIP?</h2>
      <div className="free-container">
        <img src={workingman} style={{ height: "30vh" }} />
        <TypeAnimation
          sequence={[who, 10000]}
          speed={50}
          deletionSpeed={75}
          wrapper="span"
          repeat={Infinity}
          cursor
          preRenderFirstString={false}
          omitDeletionAnimation={false}
          className="left-para"
        />
      </div>
    </motion.div>
  );
}
