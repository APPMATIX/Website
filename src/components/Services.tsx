import "./Services.css";
import { motion } from "framer-motion";
import Vector from "/assets/svg/Vector.svg";
import Card from "./Card";

const Services = () => {
  const services = [
    {
      cardClass: 'website-dev',
      title: 'Website Development',
      description: 'Custom responsive websites and e-commerce platforms built with modern technologies and best practices.',
      backgroundImage: '/assets/images/web.jpg'
    },
    {
      cardClass: 'mobile-app',
      title: 'Mobile Application',
      description: 'Native and cross-platform iOS/Android apps designed for exceptional user experience and performance.',
      backgroundImage: '/assets/images/mob.jpg'
    },
    {
      cardClass: 'erp-crm',
      title: 'ERP/CRM Solutions',
      description: 'Business management and workflow automation systems to streamline your operations and boost productivity.',
      backgroundImage: '/assets/images/erp.jpg'
    },
    {
      cardClass: 'app-modernization',
      title: 'Application Modernisation',
      description: 'Legacy system transformation and cloud migration services to keep your business competitive and secure.',
      backgroundImage: '/assets/images/mod.jpg'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5 // Staggers the animation of each child element
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="services-section">
      <div className="services" id="services">
        <img src={Vector} className="vector" alt="background design element"/>
        <div className="serviceContents">
          <h2>WHAT WE DO FOR YOU?</h2>
          <h1 id="heading">Our Services</h1>
          <motion.div 
            className="cardsContainer"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Triggers the animation when 30% of the container is in view
          >
            {services.map((service, index) => {
              return (
                <motion.div key={index} variants={cardVariants}>
                  <Card
                    title={service.title}
                    description={service.description}
                    cardClass={service.cardClass}
                    backgroundImage={service.backgroundImage}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div> 
    </section>
  );
};

export default Services;