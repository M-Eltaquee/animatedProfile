import { motion } from "framer-motion";
import React from "react";

const Button = ({ setOpen, text }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23px" height="23px" viewBox="0 0 24 24">
        <motion.path
          d="M 2 2.5 L 20 2.5"
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            opened: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          d="M 2 9.423 L 20 9.423"
          variants={{
            opened: { opacity: 0, scale: 0 },
            closed: { opacity: 1, scale: 1 },
          }}
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <motion.path
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            opened: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

export default Button;
