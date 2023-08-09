import React from "react";
import "./ContactStyle.css";

export default function Contact() {
  return (
    <div className="bg">
      <div className="contact-container" id="contact-page">
        <div id="touch">GET IN TOUCH</div>
        <div id="email">patrickthelysander@gmail.com</div>

        <div class="links">
          <a href="https://github.com/Osiris181" target="_blank">
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/patrick-thelysander-070785b1/"
            target="_blank"
          >
            LINKEDIN
          </a>
        </div>

        <div id="copyright">
          Made by <b>Patrick Thelysander</b> | All rights reserved. ©
        </div>
      </div>
    </div>
  );
}
