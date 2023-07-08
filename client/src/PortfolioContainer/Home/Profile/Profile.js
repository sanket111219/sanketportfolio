import React from "react";
// import Typical from "react-typical";
import { Typewriter } from "react-simple-typewriter";
import ScrollService from "../../../Utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/sanket.das.1232">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/sanket-das-1bb952166/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/sanketdas11/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/sanket111219">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://twitter.com/SanketD1112">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Sanket</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typewriter
                  words={[
                    "I'm a Web Developer",
                    "Full stack Developer",
                    "Data Engineer",
                    "Blockchain Developer",
                    "Mern stack Developer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle={"|"}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <span className="profile-role-tagline">
                Knock of building applications with front and back end
                operations
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a href="RESUME.pdf" download="Sanket.pdf">
              <button className="btn highlighted-btn"> Get Resume </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
