//TODO:
// ADD LINKS TO EVERY STEP NECESSARY
// METAMASK TUTORIAL
// MATIC FAUCET
// wETH/wBTC FAUCET
// Delegate page
// Mint/ Redeem Page

import React from 'react';
import '../../styles/learn.css';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import useListItemStaggerAnimation from '../../services/useListItemStaggerAnimation';

import {
  HERO_HEADING_DURATION,
  HERO_HEADING_FINAL_OPACITY,
  HERO_HEADING_FINAL_SCALE,
  HERO_HEADING_INITIAL_OPACITY,
  HERO_HEADING_INITIAL_SCALE,
} from "../../constants/animation";

const Line = ({ controls }) => {
  const variants = {
    start: {
      height: '5rem',
      backgroundColor: '#fff',
      transition: { duration: 0.7 },
    },
    initial: { height: 0 },
  };

  return (
    <div className='line-container'>
      <motion.div
        className='line'
        initial={'initial'}
        variants={variants}
        animate={controls}
      ></motion.div>
    </div>
  );
};

const Circle = ({ controls, alreadyFinish, index }) => {
  const variants = {
    start: {
      backgroundColor: '#000',
      transition: { duration: alreadyFinish ? 0 : 0.7 },
      color: '#fff',
    },
    initial: alreadyFinish
      ? {}
      : { backgroundColor: 'transparent', color: '#000' },
  };

  return (
    <motion.div
      initial={'initial'}
      variants={variants}
      animate={alreadyFinish ? 'start' : controls}
      className='circle-container'
    >
      {index}
    </motion.div>
  );
};

function Steps() {
  const ref = useRef(null);

  const isSectionInView = useInView(ref);
  const line = useAnimation();
  const secondLine = useAnimation();
  const thirdLine = useAnimation();
  const fourthLine = useAnimation();
  const fifthLine = useAnimation();
  const sixthLine = useAnimation();
  const secondCircle = useAnimation();
  const thirdCircle = useAnimation();
  const fourthCircle = useAnimation();
  const fifthCircle = useAnimation();
  const sixthCircle = useAnimation();
  const seventhCircle = useAnimation();
  const scope = useListItemStaggerAnimation(isSectionInView);

  useEffect(() => {
    if (isSectionInView) {
      const sequence = async () => {
        await line.start('start');
        await secondCircle.start('start');
        await secondLine.start('start');
        await thirdCircle.start('start');
        await thirdLine.start('start');
        await fourthCircle.start('start');
        await fourthLine.start('start');
        await fifthCircle.start('start');
        await fifthLine.start('start');
        await sixthCircle.start('start');
        await sixthLine.start('start');
        await seventhCircle.start('start');
      };
      sequence();
    }
  }, [
    isSectionInView,
    line,
    secondCircle,
    thirdCircle,
    fourthCircle,
    secondLine,
    thirdLine,
    fourthLine,
    fifthCircle,
    fifthLine,
    sixthCircle,
    sixthLine,
    seventhCircle,
  ]);

  return (
    <section ref={scope} className='steps-section' style={{marginTop: '20vh'}}>
    <motion.div animate={{
        scale: HERO_HEADING_FINAL_SCALE,
        opacity: HERO_HEADING_FINAL_OPACITY,
      }}
      initial={{
        scale: HERO_HEADING_INITIAL_SCALE,
        opacity: HERO_HEADING_INITIAL_OPACITY,
      }}
      transition={{ ease: "easeInOut", duration: HERO_HEADING_DURATION }}>
      <h2 style={{color: '#52BAD1'}}>How to Mint BLUE CHIP?</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: -20 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        className='content-wrapper'
      >
        <div className='steps-content-container'>
          <motion.div layout className='step-numbers'>
            <Circle alreadyFinish={true} index={1} />
            <Line controls={line} />
            <Circle controls={secondCircle} index={2} />
            <Line controls={secondLine} />
            <Circle controls={thirdCircle} index={3} />
            <Line controls={thirdLine} />
            <Circle controls={fourthCircle} index={4} />
            <Line controls={fourthLine} />
            <Circle controls={fifthCircle} index={5} />
            <Line controls={fifthLine} />
            <Circle controls={sixthCircle} index={6} />
            <Line controls={sixthLine} />
            <Circle controls={seventhCircle} index={6} />
          </motion.div>

          <motion.div ref={ref} className='steps-list-container'>
            <li>Get Metamask Wallet</li>
            <li>Fund the wallet with matic-testnet (mumbai) faucet.</li>
            <li>Get test wETH, wBTC ERC20 token from faucet</li>
            <li>Delegate those assets to BLUE protocol</li>
            <li>
              Mint BLUE - Respective component assets will be automatically
              transfered from minter to BLUE protocol.
            </li>
            <li>HODL/ Trade/ Lend BLUE and monitor your investments.</li>
            <li>
              Redeem BLUE - Liquidate your assets and receive proportionate
              funds.
            </li>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Steps;

