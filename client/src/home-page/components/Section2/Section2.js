import React from "react";
import "./Section2.css";
import "./Section2MQ.css";
import Button from "../Button/Button";
import { pinkBtn, blueBtnSmall } from "../Button/ButtonStyles";

function Section2({
  modalState,
  setModalState,
  width,
  setStudentOrTeacherModal,
}) {
  return (
    <>
      <div id="section-2">
        <div id="section-2-heading" className="section-2-text">
          Prepare young minds for a better <span className="blue">future.</span>
        </div>
        <div id="section-2-paragraph" className="section-2-text">
          Let us help you advance students in Digital Technologies and other
          learning areas with our project-based learning programme.
        </div>

        <section id="section-2-buttons" className="section-2-text">
          <div id="learn-more-btn">
            <Button
              className="btn-comp sec-2-btn sec-2-learnmore-btn"
              value="LEARN MORE"
              variant={blueBtnSmall}
            />
          </div>
          <div id="signup-section">
            <Button
              className="btn-comp sec-2-btn sec-2-signup-btn startext"
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

            <p id="signup-star-text">
              *Basic subscription includes the first 15 projects free of charge.
            </p>
          </div>
        </section>
      </div>
      {/* </div> */}
    </>
  );
}

export default Section2;
