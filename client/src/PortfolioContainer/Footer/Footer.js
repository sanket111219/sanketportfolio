import React from "react";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
  faGoogle,
  faGithubAlt,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import ScrollService from "../../Utilities/ScrollService";
export default function Footer() {
    let socialDetails = [
      { icon: faGithub, link: "https://github.com/sanket111219" },
      { icon: faTwitter, link: "https://twitter.com/SanketD1112" },
      {
        icon: faLinkedin,
        link: "https://www.linkedin.com/in/sanket-das-1bb952166/",
      },
      { icon: faInstagram, link: "https://www.instagram.com/sanketdas11/" },
      { icon: faFacebook, link: "https://www.facebook.com/sanket.das.1232" },
    ];
  
  let currentYear = new Date().getFullYear();
  const getSocials = () => {
    return socialDetails.map((social, index) => (
      <a
        rel="noopener noreferrer"
        key={index}
        href={social.link}
        target="_blank"
      >
        <i className="social-icon">
          <FontAwesomeIcon icon={social.icon} />
        </i>
      </a>
    ));
  };  
  return (
    <div>
      <div className="main-footer-container">
        <div className="main-footer-content">
          <div className="main-footer-message">
            <span> {currentYear}&copy; All Right Reserved To SANKET DAS </span>
          </div>
          <div className="main-footer-socials">{getSocials()}</div>
        </div>
      </div>

      <div className="scroll-container">
        <button
          className="btn-scroll"
          onClick={() => ScrollService.scrollHandler.scrollToHome()}
        >
          {" "}
          <i className="fa fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
}
