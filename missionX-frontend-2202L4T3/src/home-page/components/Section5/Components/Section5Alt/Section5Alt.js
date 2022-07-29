import React from "react";
import "../Section5Alt/Section5Alt.css";
import DigitalTechnologies from "../DigitalTechnologies";
import IR40 from "../IR40";
import KeyCompetencies from "../KeyCompetencies";
import LearningPathways from "../LearningPathways";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function Section5Alt() {
  const [scrollLoopState, setScrollLoopState] = useState(1);

  const sec5Content = [
    {
      key: 1,
      title: "Learning Pathways",
      content: <LearningPathways />,
    },
    {
      key: 2,
      title: "Digital Technologies",
      content: <DigitalTechnologies />,
    },
    {
      key: 3,
      title: "Key Competencies",
      content: <KeyCompetencies />,
    },
    {
      key: 4,
      title: "IR4.0",
      content: <IR40 />,
    },
  ];

  const scrollLoopForward = () => {
    if (scrollLoopState === 4) {
      return;
    }
    setScrollLoopState(scrollLoopState + 1);
  };

  const scrollLoopBack = () => {
    if (scrollLoopState === 1) {
      return;
    }
    setScrollLoopState(scrollLoopState - 1);
  };

  return (
    <>
      <div id="sec-5-alt-wrapper">
        <h2 id="sec-5-alt-title">
          How our programme helps teachers and schools
        </h2>

        <div id="sec-5-alt-cont">
          <div className="sec-5-alt-btn-cont">
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              onClick={scrollLoopBack}
              className={
                scrollLoopState === 1
                  ? "sec-5-alt-button no-opacity"
                  : "sec-5-alt-button"
              }
            />
          </div>

          <div id="sec-5-alt-content-wrapper">
            {sec5Content[scrollLoopState - 1].content}
          </div>
          <div className="sec-5-alt-btn-cont">
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              onClick={scrollLoopForward}
              className={
                scrollLoopState === 4
                  ? "sec-5-alt-button no-opacity"
                  : "sec-5-alt-button"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
