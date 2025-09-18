import "./Card.css";

const Card = ({
  // icon,
  title,
  description,
  cardClass, // Add cardClass here
}: {
  // icon: string;
  title: string;
  description: string;
  cardClass: string; //  1. Add the type definition for cardClass
}) => {
  return (
    
    <div className={`service-card ${cardClass}`}> 
      {/* <img src={icon} alt={`${title} icon`} /> */}
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Card;