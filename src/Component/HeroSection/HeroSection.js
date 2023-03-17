import "./HeroSection.css";
import Header from "./Header/Header";
import Form from "./Form.js/Form";

const HeroSection = () => {
  return (
    <div className="hero__Section">
      <div className="hero__Container">
        <Header />
        <div className="main_container">
          <div className="hero_content">
            <h1 className="hero_primary_heading">
              Unlimited movies, TV shows and more.
            </h1>
            <h3 className="hero_secondary_heading">
              Watch anywhere. Cancel anytime.
            </h3>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
