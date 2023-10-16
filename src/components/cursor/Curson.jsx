import { motion } from "framer-motion";
import "./cursor.scss";
import React, { useEffect, useState } from "react";

const Curson = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const moveMouse = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveMouse);
    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: position.x + 10, y: position.y + 10 }}
    ></motion.div>
  );
};

export default Curson;
