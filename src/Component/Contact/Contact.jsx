import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { themeContext } from "../../Context";
import { useContext } from "react";
import "./Contact.css";
import { useState } from "react";

function Contact() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();

  const [done, setDone] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateForm = () => {
    let valid = true;

    // Reset errors
    setNameError("");
    setEmailError("");

    // Validate name
    if (!form.current.user_name.value) {
      setNameError("Name is required");
      setTimeout(() => setNameError(""), 3000); // Reset after 3 seconds

      valid = false;
    }

    // Validate email
    else if (!form.current.user_email.value) {
      setEmailError("Email is required");
      setTimeout(() => setEmailError(""), 3000); // Reset after 3 seconds

      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.current.user_email.value)) {
      setEmailError("Email is invalid");
      setTimeout(() => setEmailError(""), 3000); // Reset after 3 seconds

      valid = false;
    }

    return valid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop if form is not valid
    }

    emailjs
      .sendForm(
        "service_snadtks",
        "template_pko47tc",
        form.current,
        "FNLdceXm2P1yz0oeG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setTimeout(() => setDone(false), 3000); // Reset after 3 seconds
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-from" id="Contact">
      <div className="c-left">
        <div className="header">
          <span style={{ color: darkMode ? "white" : "" }}>Get In Touch</span>
          <span>Contact Me</span>
          <div
            className="blur s-blur1"
            style={{ background: " #ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          {nameError && <span className="error">{nameError}</span>}
          {emailError && <span className="error">{emailError}</span>}
          <span>{done && "Thank For contact me!"}</span>
          <div
            className="blur C-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
