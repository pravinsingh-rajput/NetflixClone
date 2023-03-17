import "./ImageComponent.css";

const ImageComponent = (props) => {
  return <img src={props.src} alt="featureimg" className="feature_img" />;
};

export default ImageComponent;
