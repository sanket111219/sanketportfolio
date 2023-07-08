import React, { useState } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import { ReactComponent as education } from "./education.svg";
import Animations from "../../Utilities/Animation";
import "./Resume.css";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import CodeIcon from "@mui/icons-material/Code";
import AndroidIcon from "@mui/icons-material/Android";
import InterestsIcon from "@mui/icons-material/Interests";


export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animation.animations.fadeInScreen(props.id);
  };

  const fadeInSubsrcription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : " "}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : " "}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : " "}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    {
      label: "Education",
      icon: <SchoolIcon sx={{ color: "white" }} />,
    },
    {
      label: "Experience",
      icon: <PeopleIcon sx={{ color: "white" }} />,
    },
    {
      label: "Programming Skills",
      icon: <CodeIcon sx={{ color: "white" }} />,
    },
    {
      label: "Projects",
      icon: <AndroidIcon sx={{ color: "white" }} />,
    },
    {
      label: "Intersests",
      icon: <InterestsIcon sx={{ color: "white" }} />,
    },
  ];

  const programmingSkillDetails = [
    {
      skill: "C++",
      ratingPercentage: "95",
    },
    {
      skill: "python",
      ratingPercentage: "80",
    },
    {
      skill: "Java",
      ratingPercentage: "75",
    },
    {
      skill: "Html",
      ratingPercentage: "80",
    },
    {
      skill: "Css",
      ratingPercentage: "80",
    },
    {
      skill: "React",
      ratingPercentage: "75",
    },
    {
      skill: "MySQL",
      ratingPercentage: "75",
    },
    {
      skill: "JavaScript",
      ratingPercentage: "70",
    },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "Fully responsive personal portfolio website using React, RJX",
      subHeading: "Front-end Project",
    },
    {
      title: "Crowd Coin",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "Crowd Funding based web app using Ethereum blockchain, and React",
      subHeading: "React, Ganache-cli, truffle",
    },
    {
      title: "TCP/IP stack",
      duration: { fromDate: "2023", toDate: "2023" },
      description: "L2 and L1 routing protocols implementation in C",
      subHeading: "C based project",
    },
    {
      title: "Software Defect Prediction",
      duration: { fromDate: "2022", toDate: "2023" },
      description: "Predicting software defects using Ensemble learning algorithms",
      subHeading: "Machine Learning Project",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Delhi Technological University"}
        subHeading={"M.Tech in Software Engineering"}
        description={"CGPA: 9.09/10.0"}
        fromDate={"2022"}
        toDate={"2024"}
      />
      <ResumeHeading
        heading={"Maulana Abul Kalam Azad University of Technology"}
        subHeading={"B.Tech in Computer Science and Engineering"}
        description={"CGPA: 9.02/10.0"}
        fromDate={"2018"}
        toDate={"2022"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Eaton India Innovation Center"}
          subHeading={"Intern - CIP Data Engineer"}
          fromDate={"Jun 5, 2023"}
          toDate={"Aug 4, 2023"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Worked as a Data Engineer intern on ML QA platform Development.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Worked on integretion of ML QA tools with excisting CI/CD pipeline
          </span>
          <br />
          <span className="resume-description-text">
            - Worked on Airflow, CosmosDB, DataBricks in excisting CI/CD pipeline
          </span>
          <br />
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Cognizant Technology Solutions"}
          subHeading={"Intern - Fullstack Engineer"}
          fromDate={"Feb 12, 2022"}
          toDate={"July 7, 2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Fullstack Developer with expertise in creating Microservices and responsive and user-friendly interfaces.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            -Developed Microservices using DotNet and Microsoft SQL Server
          </span>
          <br />
          <span className="resume-description-text">
            -Developed responsive and user-friendly interfaces using React, HTML, CSS
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Photgraphy"
        description="Apart from being a tech enthusiast and a code writer, I love to capture wild life photography."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something I can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that I can get my hands on."
      />
      <ResumeHeading
        heading="Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => {
      return (
        <div
          onClick={() => handleCarousal(index)}
          className={
            index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
          }
          key={index}
        >
          {bullet.icon}
          <span className="bullet-label">{bullet.label}</span>
        </div>
      );
    });
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
