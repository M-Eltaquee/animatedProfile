import { useRef } from "react";
import "./portfolios.scss";
import items from "../../data/projects";
import Portfolio from "./Portfolio";
import { motion, useScroll, useSpring } from "framer-motion";

const Portfolios = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div ref={ref} className="portfolios">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
      </div>
      {items.map((item) => (
        <Portfolio key={`portfolio-${item.id}`} item={item} />
      ))}
    </div>
  );
};

export default Portfolios;
