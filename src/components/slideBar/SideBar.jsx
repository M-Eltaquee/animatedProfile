import "./sidebar.scss";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import { useState } from "react";
import { motion } from "framer-motion";

const vaiants = {
  opened: {
    clipPath: "circle(6000px at 50px 50px)",
    transition: { delay: 0.3, type: "spring", stiffness: 40, damping: 200 },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="sidebar"
      variants={vaiants}
      animate={open ? "opened" : "closed"}
    >
      <motion.div
        className="bg"
        variants={vaiants}
        animate={open ? "opened" : "closed"}
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} isOpen={open} />
    </motion.div>
  );
};

export default SideBar;
