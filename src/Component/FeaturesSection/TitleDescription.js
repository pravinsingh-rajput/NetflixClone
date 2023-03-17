import React from "react";
import "./TitleDescription.css";

function TitleDescription(props) {
  return (
    <div className="details">
      <div className="feature_title">{props.title}</div>
      <div className="feature_desc">{props.description}</div>
    </div>
  );
}

export default TitleDescription;
