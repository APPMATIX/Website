import "./Story.css";
import Appmatix from "/assets/images/Appmatix.png";
import A from "/assets/images/A.png";

const Story = () => {
  return (
    <div className="story" id="story">
      <div className="storyContents">
        <img className="logoImage" src={A} />
        <div className="title">
          <h1>Story Of</h1>
          <img src={Appmatix} />
        </div>
        <p className="description">
        Appmatix was founded to create impactful digital solutions that help businesses thrive in a fast-moving digital world. 
        We specialize in web applications, mobile applications, and full-service software solutions that are reliable, scalable, 
        and user-friendly.
        </p>
      </div>
    </div>
  );
};

export default Story;
