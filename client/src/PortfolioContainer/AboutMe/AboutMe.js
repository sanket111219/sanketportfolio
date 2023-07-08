import React, { useEffect, useRef } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import Animations from "../../Utilities/Animation";
import ScrollService from "../../Utilities/ScrollService";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubsrcription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "I am Sanket Das, an M.Tech student at Delhi Technological University, specializing in Software Engineering. Skilled in various programming languages, I excel in C++. My areas of interest include Web Development, Machine Learning, Data Engineer, Blockchain. With a strong drive for continuous growth and a passion for innovation, I am determined to contribute to the field of software engineering with my expertise.",

    highlights: {
      bullets: [
        "Cognizant Digital Engineer - Intern at CTS",
        "Data Engineer Internship - Intern at Eaton",
        "Full Stack Development",
        "Data Engineering",
        "Blockchain Development",
        "C++, Java, Python",
      ],
      heading: "Here are a Few Highlights",
    },
  };

  const renderHighlights = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, index) => {
      return (
        <div className="highlight" key={index}>
          <div className="highlight-blob"></div>
          <span>{value}</span>
        </div>
      );
    });
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <h1>Who Am I ?</h1>
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="about-me-highlights-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>
            <div className="about-me-options">
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
        </div>
      </div>
    </div>
  );
}
