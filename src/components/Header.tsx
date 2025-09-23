import "./Header.css";
import { motion } from "framer-motion";
import Appmatix from "/assets/images/Appmatix.png";
import A from "/assets/images/A.png";
//import Ellipsis from "/assets/svg/Ellipsis.svg";
import Navbar from "./Navbar";
// import ScrollDown from "/assets/svg/ScrollDown.svg";
import ArrowDown from "/assets/icons/ArrowDown.svg";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
  };


  return (
    <>
      <motion.div 
        className="header" 
        id="home"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Navbar />
        {/* <motion.img className="ellipsis" src={Ellipsis} variants={itemVariants} /> */}
        <motion.img className="fadedLogo" src={A} variants={itemVariants} />
        <motion.img className="fadedLogo2" src={A} variants={itemVariants} />
        <motion.div className="contents" variants={logoVariants}>
          <motion.img src={Appmatix} variants={itemVariants} />
          <motion.h1 id="subtitle" variants={itemVariants}>
            we bring ideas to life through <br /> innovative software solutions. 
          </motion.h1>
        </motion.div>
        <HashLink to="#about" smooth>
          <motion.div 
            className="scrollIndicator"
            // The 'animate' prop was removed from here
          >
            <div className="arrows">
              <motion.img 
                src={ArrowDown} 
               // variants={arrowVariants}
                animate="bounce" // Moved the prop here
              />
              <motion.img 
                src={ArrowDown} 
                //variants={arrowVariants}
                animate="bounce" // Moved the prop here
              />
            </div>
          </motion.div>
        </HashLink>
      </motion.div>
      <motion.div 
        className="headerExtended" 

      />
    </>
  );
};

export default Header;
