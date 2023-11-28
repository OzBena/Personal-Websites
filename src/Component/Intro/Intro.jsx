import React from "react";
import "./Intro.css";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import File from "@iconscout/react-unicons/icons/uil-file-download";
import Resume from "../../Documents/CV.pdf";
import ProfilePic from "../../img/Oz1.png";

import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
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
  console.log(isTouchDevice());

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span>Oz Benacot</span>
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
        <img src={ProfilePic} alt="" />

        <motion.img
          initial={{ top: "-5rem", left: "-3rem" }}
          whileInView={
            isTouchDevice()
              ? { top: "-5rem", left: "4rem" }
              : { top: "-5rem", left: "2rem" }
          }
          transition={transition}
          src={Glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "0px", left: "32rem" }}
          whileInView={ { top: "0rem", left: "25rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "21rem", left: "2rem" }}
          whileInView={{ top: "21rem", left: "8rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={Thumbup} txt1="Software" txt2="Developer" />
        </motion.div>

        {/* blur divs */}
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
