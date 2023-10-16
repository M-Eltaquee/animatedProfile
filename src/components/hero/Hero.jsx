import { motion } from "framer-motion";
import "./hero.scss";

import React from "react";
const varients = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 5,
    transition: {
      type: "spring",
      duration: 2,
      repeat: Infinity,
    },
  },
};
const SlidingText = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={varients}
          initial="initial"
          animate="animate"
        >
          <motion.h3 variants={varients}>Mohamed Eltaquee</motion.h3>
          <motion.h1 variants={varients}>Fornt-end Developer</motion.h1>
          <motion.div variants={varients} className="buttons">
            <motion.button variants={varients}>
              See The Latest Works
            </motion.button>
            <motion.button variants={varients}>contact me</motion.button>
          </motion.div>
          <motion.img
            variants={varients}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
        <motion.div
          className="text-slider"
          variants={SlidingText}
          initial="initial"
          animate="animate"
        >
          ReactJS, WordPress Web Developer
        </motion.div>
        <div className="img-container">
          <img src="/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
