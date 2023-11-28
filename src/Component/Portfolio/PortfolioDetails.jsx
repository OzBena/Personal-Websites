import React from "react";
import "./Portfolio.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

function PortfolioDetails({ appName, appImg, appDescription, appLink }) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div>
      <div
        className="s-name"
        style={{ color: darkMode ? "var(--blue)" : "",  background: darkMode ? "black" : ""}}
      >
        {appName}
      </div>
      <img src={appImg} alt="" className="s-img" />
      <div className="s-details">
        
        {/* Under Construction */}
        
        {/* <div
          className="appDescription"
          style={{ color: darkMode ? "var(--blue)" : "" }}
        >
          Demo
        </div>
        <div className="buffer"></div> */}
        <a
          href={appLink}
          className="appLink"
          style={{ color: darkMode ? "var(--blue)" : "", background: darkMode ? "  black" : "" }}
        >
          <div>View Codebase</div>
        </a>
      </div>
    </div>
  );
}

export default PortfolioDetails;
