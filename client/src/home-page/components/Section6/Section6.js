import React from "react";
import "./Section6.css";
import "./Section6MQ.css";
import Teacher from "./images/teacher/teacher.png";
import Button from "../Button/Button";
import { pinkBtn, blueBtnSmall } from "../Button/ButtonStyles";

function Section6({ setModalState, width, setStudentOrTeacherModal }) {
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
            <Button
              className="btn-comp sec-6-btn"
              value="ENQUIRE NOW"
              variant={blueBtnSmall}
            />
            <Button
              className="btn-comp sec-6-btn"
              value="SIGN UP"
              variant={pinkBtn}
              onClick={(e) => {
                e.preventDefault();
                if (width > 950) {
                  setModalState("show");
                } else {
                  setStudentOrTeacherModal("show");
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section6;
