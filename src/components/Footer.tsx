import "./Footer.css";
import { motion } from "framer-motion";
import Contact from "./Contact";
import Links from "./Links";
import Logo from "/logo.jpg";
import Facebook from "/assets/svg/Facebook.svg";
import Instagram from "/assets/svg/Instagram.svg";
import X from "/assets/svg/X.svg";
import ln from "/assets/svg/linked_in.svg"
import gt from "/assets/svg/github.svg"

const Footer = () => {
  const quickLinks = {
    title: "Quick Link",
    list: [
      { label: "Home", path: "#home" },
      { label: "About Us", path: "#about" },
      { label: "Contact Us", path: "#contact" },
    ],
  };

  const services = {
    title: "Services",
    list: [
      { label: "Application Modernization", path: "#services" },
      { label: "Web Application Development", path: "#services" },
      { label: "Mobile Application Development", path: "#services" },
    ],
  };

  const socialMedia = [
    { icon: Facebook, link: "https://www.facebook.com/people/Appmatix-Solutions/61580554207290/" },
    { icon: Instagram, link: "https://www.instagram.com/appmatix_solutions/" },
    { icon: X, link: "https://x.com/APPMATIXSO75205" },
    {icon:ln, link:"https://www.linkedin.com/company/105035314/admin/dashboard/"},
    {icon:gt,link:"https://github.com/APPMATIX"}
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      <div className="info">
        <motion.div className="logoBox infoItem" variants={itemVariants}>
          <img src={Logo} height={80} alt="Logo" />
          <p>Scale up your business with innovative digital experiences</p>
        </motion.div>
        <motion.div className="infoItem infoLinks" variants={itemVariants}>
          <Links title={quickLinks.title} list={quickLinks.list} />
          <Links title={services.title} list={services.list} />
        </motion.div>
        <motion.div className="infoItem infoContact" variants={itemVariants}>
          <Contact />
        </motion.div>
      </div>
      <hr />
      <div className="copyright">
        <motion.div className="rights" variants={itemVariants}>
          &copy;{new Date().getFullYear()} APPMATIX | All Rights Reserved
        </motion.div>
        <motion.ul variants={containerVariants}>
          {socialMedia.map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.icon} height={20} alt="Social media icon" />
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.footer>
  );
};

export default Footer;