import { animate, motion } from "framer-motion";
import { useState } from "react";
const Test = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    opened: { opacity: 1, rotate: 180, scale: 1, x: 200, y: -200 },
    closed: { scale: 0.1, opacity: 0.1 },
  };
  const variants2 = {
    opened: { opacity: 1, rotate: 180, scale: 1, x: 200, y: -200 },
    closed: { scale: 0.1, opacity: 0.1 },
  };
  return (
    <motion.section className="main">
      <button onClick={() => setOpen((prev) => !prev)}>
        {open ? "Close !" : "Open. !"}
      </button>
      <motion.div
        className="box"
        variants={variants}
        animate={open ? "opened" : "closed"}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      />
      <motion.div
        className="box2"
        variants={variants2}
        animate={open ? "opened" : "closed"}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      />
    </motion.section>
  );
};
export default Test;
