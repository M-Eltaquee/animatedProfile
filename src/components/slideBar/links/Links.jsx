import { motion } from "framer-motion";
import items from "../../../data/projects";
const vaiants = {
  opened: {
    transition: { staggerChildren: 0.1 },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  opened: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
const Links = () => {
  const mainMenu = [
    "Home",
    "Services",
    "Portfolio1",
    "Portfolio2",
    "Portfolio3",
    "Contact",
  ];
  const projectsItems = items.map((item) => `portfolio ${item.id}`);

  const menu = ["Home", "Services", ...projectsItems, "contact"];
  return (
    <motion.div variants={vaiants} className="links">
      {menu.map((item, indx) => (
        <motion.a
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          key={`item-${indx}`}
          href={`#${item.split(" ").join("").toLowerCase()}`}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
