import React from "react";
import "./Footer.css";
import Languagebtn from "../Button/Language";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_container">
        <p className="footer_heading">
          Questions? Call <span className="call"> 000-800-919-1694 </span>
        </p>
        <div className="detail_links">
          <ul className="link">FAQ</ul>
          <ul className="link">Gift Card Terms</ul>
          <ul className="link">Help Center</ul>
          <ul className="link">Account</ul>
          <ul className="link">Media Center</ul>
          <ul className="link">Investor Relations</ul>
          <ul className="link">Jobs</ul>
          <ul className="link">Ways to Watch</ul>
          <ul className="link">Terms of Use</ul>
          <ul className="link">Privacy</ul>
          <ul className="link">Cookies Preferences</ul>
          <ul className="link">Corporate Information</ul>
          <ul className="link">Contact Us</ul>
          <ul className="link">Speed Test</ul>
          <ul className="link">Legal Notices</ul>
          <ul className="link">Only on Netflix</ul>
        </div>
        <Languagebtn className="footer_lang_btn" />
        <p>Netflix India</p>
      </div>
    </div>
  );
}

export default Footer;
