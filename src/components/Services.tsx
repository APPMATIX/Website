// Services.tsx

import "./Services.css";
import Vector from "/assets/svg/Vector.svg";
// import ServiceIcon from "/assets/images/ServiceIcon.png";
// import erp from "/assets/images/erp.jpg";

import Card from "./Card";

const Services = () => {
  const services = [
      {
         
          cardClass: 'website-dev',
          title: 'Website Development',
          description: 'Custom responsive websites and e-commerce platforms built with modern technologies and best practices.'
        },
        {
        
          cardClass: 'mobile-app',
          title: 'Mobile Application',
          description: 'Native and cross-platform iOS/Android apps designed for exceptional user experience and performance.'
        },
        {
          
          cardClass: 'erp-crm',
          title: 'ERP/CRM Solutions',
          description: 'Business management and workflow automation systems to streamline your operations and boost productivity.'
        },
        {
         
          cardClass: 'app-modernization',
          title: 'Application Modernisation',
          description: 'Legacy system transformation and cloud migration services to keep your business competitive and secure.'
        },
  ];

  return (
     <section className="services-section">
      <div className="services" id="services">
        <img src={Vector} className="vector" alt="background design element"/>
        <div className="serviceContents">
          <h2>WHAT WE DO FOR YOU?</h2>
          <h1 id="heading">Our Services</h1>
          <div className="cardsContainer">
            {services.map((service, index) => {
              return (
                <Card
                  key={index} 
                  // icon={service.Image}
                  title={service.title}
                  description={service.description}
                  cardClass={service.cardClass} // ✨ --- THIS IS THE FIX --- ✨
                />
              );
            })}
          </div>
        </div>
      </div>  
    </section>
  );
};

export default Services;