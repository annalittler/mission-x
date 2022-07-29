import React from "react";
import "./Section2.css";
import "./Section2MQ.css";
import learnMoreBtn from "./images/learn-more-btn/learn-more-btn.png";
import signUpBtn from "./images/sign-up-btn/sign-up-btn.png";
import Button from "../Button/Button";
import { pinkBtn, blueBtnSmall, blueBtnBig } from "../Button/ButtonStyles";

function Section2() {
  return (
    <>
      <div id="section-2">
        <div id="section-2-wrapper">
          <div id="heading" className="text">
            Prepare young minds for a better{" "}
            <span className="blue">future.</span>
          </div>
          <div id="paragraph" className="text">
            Let us help you advance students in Digital Technologies and other
            learning areas with our project-based learning programme.
          </div>

          <section id="button-section" className="">
            <div id="learn-more-btn">
              <Button value="LEARN MORE" variant={blueBtnSmall} />
            </div>
            <div id="signup-section">
              <Button value="SIGN UP" variant={pinkBtn} />

              <p id="sign-up-star-text">
                *Basic subscription includes the first 15 projects free of
                charge.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Section2;
