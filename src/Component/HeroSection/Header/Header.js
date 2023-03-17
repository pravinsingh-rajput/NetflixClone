import "./Header.css";
import Languagebtn from "../../Button/Language";

const Header = () => {
  return (
    <header className="header">
      <nav className="navBar">
        <img
          src={require("./Assets/netflix_logo.png")}
          alt="logo"
          className="logo_img"
        />
        <div className="buttons">
          <Languagebtn />
          <button className="btn_signin nav_btn">Sign In</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
