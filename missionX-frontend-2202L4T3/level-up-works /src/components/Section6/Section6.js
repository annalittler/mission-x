import React from "react";
import "./Section6.css";
import Teacher from "./images/teacher/teacher.png";
import Button from "../Button/Button";
import { pinkBtn, blueBtnSmall, blueBtnBig } from "../Button/ButtonStyles";

function Section6() {
  return (
    <>
      <div id="section-6">
        <div id="sec-6-left">
          <img src={Teacher} alt="" id="sec-6-img" />
        </div>
        <div id="sec-6-right">
          <h2 id="sec-6-h2">What are you waiting for?</h2>
          <h3 id="sec-6-h3">Start teaching Digital Technologies today.</h3>
          <p id="sec-6-p">
            If you need more information, we are happy to answer any questions
            you may have.
          </p>
          <div id="sec-6-btns">
            <Button value="ENQUIRE NOW" variant={blueBtnSmall} />
            <Button value="SIGN UP" variant={pinkBtn} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section6;
