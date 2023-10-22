import React from "react";
import "../../styles/learn.css";
import indexfund from "../../assets/illustrations/indexfund.png";
import moneybag from "../../assets/illustrations/moneybag.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import {
  HERO_HEADING_DURATION,
  HERO_HEADING_FINAL_OPACITY,
  HERO_HEADING_FINAL_SCALE,
  HERO_HEADING_INITIAL_OPACITY,
  HERO_HEADING_INITIAL_SCALE,
} from "../../constants/animation";

export default function IndexFund() {
  const paraText =
    "Index fund is like a mutual fund or Exchange traded fund, which is designed to follow certain preset rules so that it can replicate the performance of a specified ASSET basket of underlying investment.";
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
      <h1 className="header-alignment">What the hell🤯 is Index Fund?</h1>
      <div className="free-container">
        <TypeAnimation
          sequence={[paraText, 10000]}
          speed={50}
          deletionSpeed={75}
          wrapper="span"
          repeat={Infinity}
          cursor
          preRenderFirstString={false}
          omitDeletionAnimation={false}
          className="left-para"
        />
        {/* <p className="left-para">Index fund is like a mutual fund or Exchange traded fund, which is designed to follow certain preset rules so that it can replicate the performance of a specified ASSET basket of underlying investment.</p> */}
        <img src={moneybag} style={{ height: "30vh" }} />
      </div>
    </motion.div>
  );
}
