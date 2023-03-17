import "./FeaturesSection.css";
import TitleDescription from "./TitleDescription";
import ImageComponent from "./ImageComponent";

function FeaturesSection() {
  return (
    <>
      <div className="features">
        <div className="features_container features1">
          <TitleDescription
            title="Enjoy on your TV."
            description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          />
          <ImageComponent src={require("./Assests/features1.png")} />
        </div>
      </div>
      <div className="features">
        <div className="features_container features2">
          <ImageComponent src={require("./Assests/features2.jpg")} />
          <TitleDescription
            title="Download your shows to watch offline."
            description="Save your favourites easily and always have something to watch."
          />
        </div>
      </div>
      <div className="features">
        <div className="features_container features3">
          <TitleDescription
            title="Watch everywhere."
            description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          />
          <ImageComponent src={require("./Assests/features3.png")} />
        </div>
      </div>
      <div className="features">
        <div className="features_container features4">
          <ImageComponent src={require("./Assests/features4.png")} />
          <TitleDescription
            title="Create profiles for children."
            description="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
          />
        </div>
      </div>
    </>
  );
}

export default FeaturesSection;
