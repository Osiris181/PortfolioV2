import React, { useEffect, useRef } from "react";
import "./SkillsStyle.css";
import { init } from "ityped";

export default function Skills() {
  const textRef = useRef();
  const backEndRef = useRef();
  const frontEndRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      // showCursor: true,
      // loop: false,
    });
    init(backEndRef.current, {
      showCursor: false,
      strings: [
        "MySQL",
        "PHP",
        "Laravel",
        "C# (ASP.NET)",
        "Python",
        "Java",
        "C",
      ],
      typeSpeed: 90,
      backSpeed: 50,
      backDelay: 1500,
      // loop: false,
      // showCursor: true,
    });

    init(frontEndRef.current, {
      showCursor: false,
      strings: ["HTML", "CSS", "React", "Javascript"],
      typeSpeed: 90,
      backSpeed: 50,
      backDelay: 1500,
      // loop: false,
      // showCursor: true,
    });
  }, []);

  // const teshalo = {
  //   backgroundImage: "url(/Skills-bg.png)",
  //   "@media (max-width: 1776px)": {
  //     backgroundImage: "url(/skills-bg-med.png)",
  //     backgroundSize: "100%",
  //     backgroundRepeat: "no-repeat",
  //     height: "auto",
  //   },
  // };

  return (
    <div className="skillsbg">
      <div class="container-skills">
        <div id="skill-header">Skills</div>
        <div class="skills">
          <div class="front-end">
            <img src="./front-end.png" alt="front-end" />
            <div id="end-header">Front-End</div>
            <div id="experience">
              <p>
                “A part which user can see and interact and provides immersive
                experience for users.”
              </p>
            </div>
            <div id="experienced">Experience with</div>
            <div id="content">
              <span ref={frontEndRef}></span>
            </div>
          </div>
          <div class="back-end">
            <img src="./back-end.png" alt="back-end" />
            <div id="end-header">Back-End</div>
            <div id="experience">
              <p>
                “A part which behind-the-scene activities occur. Without it,
                front-end would not be complete.”
              </p>
            </div>
            <div id="experienced">Experience with</div>
            <div id="content">
              <span ref={backEndRef}></span>
            </div>
          </div>
          <div class="design">
            <img src="./design.png" alt="design" />
            <div id="end-header">Design</div>
            <div id="experience">
              <p>
                “Something that I really enjoy to learn and do aside from
                computer science.”
              </p>
            </div>
            <div id="experienced">Experience with</div>
            <div id="content">
              <span ref={textRef}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
