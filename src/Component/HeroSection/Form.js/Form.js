import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="form_container">
      <div className="form_label">
        <p className="hero_description">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <form>
        <input
          type="email"
          className="emailAddress"
          placeholder="Email address"
        />
        <button className="submit_btn">
          Get Started <img src={require("./Assets/next.png")} alt="" />{" "}
        </button>
      </form>
    </div>
  );
}

export default Form;
