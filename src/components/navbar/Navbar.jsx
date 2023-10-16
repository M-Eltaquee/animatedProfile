import "./navbar.scss";
import SideBar from "./../slideBar/SideBar";
import { motion } from "framer-motion";

const variants = {
  init: { opacity: 0, scale: 0.5 },
  anim: { opacity: 1, scale: 1 },
};

const Navbar = () => {
  return (
    <div className="navbar">
      <SideBar />
      <div className="wrapper">
        <motion.span
          className="brand"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <motion.div
          className="social"
          variants={variants}
          initial="init"
          animate="anim"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.a href="#" variants={variants}>
            <img src="/facebook.png" alt="Facebook logo" />
          </motion.a>
          <motion.a href="#" variants={variants}>
            <img src="/instagram.png" alt="Instgram logo" />
          </motion.a>
          <motion.a href="#" variants={variants}>
            <img src="/youtube.png" alt="Youtube logo" />
          </motion.a>
          <motion.a href="#" variants={variants}>
            <img src="dribbble.png" alt="Dribbble logo" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};
export default Navbar;
