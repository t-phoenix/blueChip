import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import blueLogo from "../assets/blueLogo.png"; 

export const HERO_HEADING_DURATION = 1;
const HERO_HEADING_INITIAL_SCALE = 0.9;
const HERO_HEADING_FINAL_SCALE = 1;
export const HERO_HEADING_INITIAL_OPACITY = 0;
export const HERO_HEADING_FINAL_OPACITY = 1;

export default function HeroSection() {
  const [typingAnimationTextColor, setTypingAnimationTextColor] = useState("");

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
      </motion.div>

      {/* <motion.div
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
          Blue Chip Crypto Index Fund
        </h1>
      </motion.div> */}
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
        className="main-animation-text"
        >
        <h2 className='font-light'>{`Crypto Basket For\u00A0`}</h2>
        <h2 className='font-bold' style={{ color: typingAnimationTextColor }}>
          <TypeAnimation
            sequence={[
              'Investors',
              1000,
              () => setTypingAnimationTextColor('firebrick'),
              'Hodlers',
              1000,
              () => setTypingAnimationTextColor('burlywood'),
              'Buidlers',
              1000,
              () => setTypingAnimationTextColor('chocolate'),
              'Technologists',
              1000,
              () => setTypingAnimationTextColor('orangered'),
              'Traders',
              1000,
              () => setTypingAnimationTextColor('mediumvioletred'),
            //   'Musicians',
            //   1000,
            //   () => setTypingAnimationTextColor('mediumvioletred'),
            //   'Technologists',
            //   1000,
            //   () => setTypingAnimationTextColor('firebrick'),
            ]}
            speed={50}
            deletionSpeed={75}
            repeat={Infinity}
            wrapper='span'
            cursor
            preRenderFirstString={false}
            omitDeletionAnimation={false}
            className='inline-block'
          />
        </h2>
      </motion.div>
    </section>
  );
}
