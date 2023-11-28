import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Git from "@iconscout/react-unicons/icons/uil-at";

function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Ozbenacot@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://wa.me/+972522767883"
            className="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Whatsapp color="white" size="3rem" />
          </a>
          <a href="https://www.linkedin.com/in/oz-benacot/">
            <Linkedin color="white" size="3rem" />
          </a>
          <a href="mailto:ozbenacot@gmail.com">
            <Git color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
