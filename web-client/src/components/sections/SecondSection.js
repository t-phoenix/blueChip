import { useState } from "react";
import { color, motion, transform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export const HERO_HEADING_DURATION = 1;
const HERO_HEADING_INITIAL_SCALE = 0.9;
const HERO_HEADING_FINAL_SCALE = 1;
export const HERO_HEADING_INITIAL_OPACITY = 0;
export const HERO_HEADING_FINAL_OPACITY = 1;

export default function SecondSection() {
  const [typingAnimationTextColor, setTypingAnimationTextColor] = useState("");

  return (
    <div style={{ height: '90%', backgroundColor: '#C0DA74', marginBlock: '50vh', paddingInline: '16%', borderRadius:'40px', boxShadow:'-8px 12px #52BAD1' }}>
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
        className="main-animation-text"
      >
        <h2
          className="font-light"
          style={{ color: "#52BAD1" }}
        >{`Crypto Basket For\u00A0`}</h2>
        <h2 className="font-bold" style={{ color: typingAnimationTextColor }}>
          <TypeAnimation
            sequence={[
              "Investors",
              1000,
              () => setTypingAnimationTextColor("firebrick"),
              "Hodlers",
              1000,
              () => setTypingAnimationTextColor("burlywood"),
              "Buidlers",
              1000,
              () => setTypingAnimationTextColor("chocolate"),
              "Technologists",
              1000,
              () => setTypingAnimationTextColor("orangered"),
              "Traders",
              1000,
              () => setTypingAnimationTextColor("mediumvioletred"),
            ]}
            speed={50}
            deletionSpeed={75}
            repeat={Infinity}
            wrapper="span"
            cursor
            preRenderFirstString={false}
            omitDeletionAnimation={false}
            className="inline-block"
          />
        </h2>
      </motion.div>
    </div>
  );
}
