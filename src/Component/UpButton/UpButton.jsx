import React, { useState, useContext } from "react";
import "./UpButton.css";
import Arrow from "@iconscout/react-unicons/icons/uil-arrow-up";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";

function UpButton() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [color, setColor] = useState("white");

  // Function to check if the device is a touch screen
  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice()) {
      setColor(darkMode ? "black" : "var(--blue)"); 
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice()) {
      setColor("white"); 
    }
  };

  return (
    <Link spy={true} to="App" smooth={true}>
      <div
        className="b-wrapper"
        style={{ border: darkMode ? "2px solid black" : "" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Arrow color={color} size="2rem" />
      </div>
    </Link>
  );
}

export default UpButton;
