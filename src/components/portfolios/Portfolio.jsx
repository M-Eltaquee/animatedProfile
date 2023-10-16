import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";

const Portfolio = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section id={`portfolio${item.id}`} className="portfolio">
      <div className="container">
        <motion.div className="img-container" ref={ref}>
          <img src={item.img} alt="Project Cover" />
        </motion.div>
        <motion.div className="text-container" style={{ y }}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button>See Demo</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
