import React from "react";
import "./Section5.css";
import "./Section5MQ.css";
import Button from "../Button/Button";
import {
  pinkBtn,
  blueBtnSmall,
  blueBtnBig,
  clickedBtn,
} from "../Button/ButtonStyles";
import { useState } from "react";

import LearningPathways from "./Components/LearningPathways";
import KeyCompetencies from "./Components/KeyCompetencies";
import IR40 from "./Components/IR40";
import DigitalTechnologies from "./Components/DigitalTechnologies";

function Section5() {
  const [active, setActive] = useState("LearningPathways");
  const [btnStyle, setBtnStyle] = useState(blueBtnBig);

  return (
    <>
      <div id="section-5">
        <h2 id="sec-3-title">How our programme helps teachers and schools</h2>
        <div id="sec-5-btn-section">
          <Button
            className="btn-comp sec-5-btn"
            value="LEARNING PATHWAYS"
            onClick={() => setActive("LearningPathways")}
            variant={active === "LearningPathways" ? clickedBtn : blueBtnBig}
          />
          <Button
            className="btn-comp sec-5-btn"
            value="DIGITAL TECHNOLOGIES"
            onClick={() => setActive("DigitalTechnologies")}
            variant={active === "DigitalTechnologies" ? clickedBtn : blueBtnBig}
          />
          <Button
            className="btn-comp sec-5-btn"
            value="KEY COMPETENCIES"
            onClick={() => setActive("KeyCompetencies")}
            variant={active === "KeyCompetencies" ? clickedBtn : blueBtnBig}
          />
          <Button
            className="btn-comp sec-5-btn"
            value="IR4.0"
            onClick={() => setActive("IR40")}
            variant={active === "IR40" ? clickedBtn : blueBtnBig}
          />
        </div>
        <div id="sub-comp-bg">
          {active === "LearningPathways" && <LearningPathways />}
          {active === "DigitalTechnologies" && <DigitalTechnologies />}
          {active === "KeyCompetencies" && <KeyCompetencies />}
          {active === "IR40" && <IR40 />}
        </div>
      </div>
    </>
  );
}

export default Section5;
