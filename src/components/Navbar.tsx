import "./Navbar.css";
import { motion } from "framer-motion";
import NavbarLogo from "/assets/images/NavbarLogo.png";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const navItems = [
    { label: "Home", path: "#home" },
    { label: "Services", path: "#services" },
    { label: "Logo", path: "#home", renderCell: <img src={NavbarLogo} alt="Logo" /> },
    { label: "About", path: "#about" },
    { label: "Contact", path: "#contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="navbar"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {navItems.map((navItem, index) => {
        return (
          <motion.div key={index} variants={itemVariants} className="navItem">
            <HashLink to={navItem.path} smooth>
              {navItem.renderCell ? navItem.renderCell : navItem.label}
            </HashLink>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default Navbar;
