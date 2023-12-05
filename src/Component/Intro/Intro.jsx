import React from "react";
import "./Intro.css";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import File from "@iconscout/react-unicons/icons/uil-file-download";
import Resume from "../../Documents/CV.pdf";
import ProfilePic from "../../img/Oz2.png";
import Typewriter from "typewriter-effect";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Link } from "react-scroll";

function Intro() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2, type: "spring" };

  // Function to check if the device is a touch screen
  const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Oz Benacot</span>
          <div
            className="writer"
            style={
              isTouchDevice()
                ? { height: "11.5rem", overflow: "hidden" }
                : { display: "flex", alignItems: "center" }
            }
          >
            <span style={{ marginRight: "15px" }}>I Am </span>
            <Typewriter
              style={{ height: "1em", overflow: "hidden" }}
              options={{
                strings: [
                  "Fullstack Developer",
                  "Software Developer",
                  "a Team Collaborator",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 50,
                wrapperClassName: "writer",
                cursorClassName: "t-cursor",
              }}
            />
          </div>
          <span>
            Computer science (B.Sc.) graduate who is seeking to work with
            diverse teams in a technical environment.
            <br />
            The perfect combination between a workaholic and humor addict, with
            excellent interpersonal skills and extensive experience with team
            leading.
          </span>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <a href="https://www.linkedin.com/in/oz-benacot/">
            <LinkedIn color={"var(--blue)"} size="3rem" />
          </a>
          <a href="https://github.com/OzBena">
            <Github color={"var(--blue)"} size="3rem" />
          </a>
          <a href={Resume} download="Oz Benacot CV">
            <File color={"var(--blue)"} size="3rem" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={ProfilePic} alt="" className="porfilePic" />
        <div className="blur" style={{ background: "rgb (238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            left: "2rem",
            width: "21rem",
            height: "11rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
