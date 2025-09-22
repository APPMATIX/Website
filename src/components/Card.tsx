import "./Card.css";

interface CardProps {
  title: string;
  description: string;
  cardClass: string;
  backgroundImage: string;
}

const Card = ({ 
  title, 
  description, 
  cardClass,
  backgroundImage 
}: CardProps) => {
  return (
    <div 
      className={`service-card ${cardClass}`} 
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="card-overlay"></div>
      
      <div className="card-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;