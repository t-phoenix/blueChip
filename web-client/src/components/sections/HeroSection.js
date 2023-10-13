import { useState } from "react";
import { motion, transform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import blueLogo from "../../assets/blueLogo.svg"; 
import mainLogoTransparent from "../../assets/mainLogoTransparent.svg";

export const HERO_HEADING_DURATION = 1;
const HERO_HEADING_INITIAL_SCALE = 0.9;
const HERO_HEADING_FINAL_SCALE = 1;
export const HERO_HEADING_INITIAL_OPACITY = 0;
export const HERO_HEADING_FINAL_OPACITY = 1;

export default function HeroSection() {

  return (
    <section className="home-section">
      <motion.div
        animate={{
          scale: HERO_HEADING_FINAL_SCALE,
          opacity: HERO_HEADING_FINAL_OPACITY,
        }}
        initial={{
          scale: HERO_HEADING_INITIAL_SCALE,
          opacity: HERO_HEADING_INITIAL_OPACITY,
        }}
        transition={{ ease: "easeOut", duration: HERO_HEADING_DURATION }}
        className="main-image"
        whileHover={{
          scale: HERO_HEADING_INITIAL_SCALE,
        }}
        layout
      >
        <img src={blueLogo} className="logo-img"/>
        {/* <img src={mainLogoTransparent} className="logo-img"/> */}
      </motion.div>

      <motion.div
        animate={{
          scale: HERO_HEADING_FINAL_SCALE,
          opacity: HERO_HEADING_FINAL_OPACITY,
        }}
        initial={{
          scale: HERO_HEADING_INITIAL_SCALE,
          opacity: HERO_HEADING_INITIAL_OPACITY,
        }}
        transition={{ ease: 'easeInOut', duration: HERO_HEADING_DURATION }}
      >
        <h1 className='headline'>
          Blue Chip 
        </h1>
      </motion.div>
      
    </section>
  );
}
