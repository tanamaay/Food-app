// import food from "../../burger-image.png";
import food from "../../about.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>
          Welcome to <br /> The world of <br /> <span>Tasty & Fresh Food</span>
        </h1>
        <h4>
          "Better you will feel if you eat a Shayla<span>Hive</span> healthy meal"
        </h4>
      </div>
      <div className="about-right">
        <img src="https://foodfire-app.netlify.app/burger-image.ec55d069.png" alt="Food Image" />
      </div>
    </div>
  );
};

export default About;