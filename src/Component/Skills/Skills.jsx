import React from "react";
import "./Skills.css";
import SWDev from "../../img/sw-dev.png";
import backend from "../../img/backend.png";
import frontend from "../../img/frontend.png";
import Card from "../Card/Card";
import Resume from "../../Documents/CV.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

function Skills() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 1, type: "spring" };
  return (
    <div className="skills" id="Skills">
      <div className="s-left">
        <span style={{ color: darkMode ? "white" : "" }}>My Professional</span>
        <span>Skills</span>
        <span>
          Passionate about continuous learning and development, my skills are a
          blend of formal education, practical experience in the field, and
          self-directed learning.
          <br/>
          This unique mix of learning environments has equipped me with not just
          technical know-how, but also adaptability, problem-solving skills, and
          a self-starter attitude.
        </span>
        <a className="s-link" href={Resume} download="Oz Benacot CV">
          <button className="button s-button">Download CV</button>
        </a>
        <div
          className="blur s-blur1"
          style={{ background: " #ABF1FF94" }}
        ></div>
      </div>
      <div className="s-right">
        <motion.div
          initial={{ left: "27rem" }}
          whileInView={{ left: "22rem" }}
          transition={transition}
        >
          <Card
            emoji={SWDev}
            heading={"Software"}
            details={"C#, Java, Python, C++, .Net, Assembly"}
          />
        </motion.div>
        <motion.div
          initial={{ top: "9rem", left: "-1rem" }}
          whileInView={{ top: "9rem", left: "4rem" }}
          transition={transition}
        >
          <Card
            emoji={frontend}
            heading={"Frontend"}
            details={"React, JavaScript, Html, Recoil, Css, MUI"}
          />
        </motion.div>
        <motion.div
          initial={{ top: "20rem", left: "25rem" }}
          whileInView={{ top: "20rem", left: "20rem" }}
          transition={transition}
        >
          <Card
            emoji={backend}
            heading={"Backend"}
            details={"Node.js, Django, MySql, Express.js"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Skills;
