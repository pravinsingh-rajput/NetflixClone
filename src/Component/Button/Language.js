import React from "react";
import "./Language.css";

function Languagebtn() {
  return (
    <div>
      <button className="btn_lang nav_btn">
        <img
          src={require("./Assets/world.png")}
          alt="logo"
          className="btn_img"
        />
        <span>English</span>
        <img
          src={require("./Assets/arrow.png")}
          alt="logo"
          className="btn_img"
        />
      </button>
    </div>
  );
}

export default Languagebtn;
