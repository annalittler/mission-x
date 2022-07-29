import React from "react";
import "../css/ProgressCheckerBody.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProgressBarStudent1 from "./ProgressBarStudent1";
import ProgressBarStudent2 from "./ProgressBarStudent2";
import ProgressBarStudent3 from "./ProgressBarStudent3";
import ProgressBarStudent4 from "./ProgressBarStudent4";

export default function ProgressCheckerBody() {
  const [showNormal, setshowNormal] = useState(true);
  const handleShowNormal = () => setshowNormal(!showNormal);

  return (
    <>
      {showNormal ? (
        <div className="main-body">
          <div id="left-section-body">
            <div>
              <img
                src="../images/teacher.png"
                alt="teacher logo"
                id="teacher-image"
              ></img>
            </div>
            <div class="left-section-navBar-style">
              <img
                src="../images/progressLight.png"
                alt="progress checker logo"
              ></img>
              <h1>PROGRESS CHECKER</h1>
            </div>

            <div class="left-section-navBar-style">
              <img
                src="../images/awesome-user-graduate.png"
                alt="awesome-user-graduate logo"
              ></img>
              <h1>
                <Link
                  to="/StudentProfileBody"
                  style={{ textDecoration: "none" }}
                >
                  STUDENT PROFILE
                </Link>
              </h1>
            </div>

            <div class="left-section-navBar-style">
              <img
                src="../images/material-live-help.png"
                alt="material-live-help logo"
              ></img>
              <h1>HELP Request</h1>
            </div>

            <div class="left-section-navBar-style">
              <img
                src="../images/submit proj.png"
                alt="sumbmit proj logo"
              ></img>
              <h1>PROJECT SUBMISSIONS</h1>
            </div>

            <div class="left-section-navBar-style">
              <img
                src="../images/library light.png"
                alt="library light logo"
              ></img>
              <h1>PROJECT LIBRARY</h1>
            </div>

            <div id="left-section-body-middle-box">
              <img
                onClick={handleShowNormal}
                src="../images/left-red-triangle-button.png"
                alt="eft-red-triangle-button logo"
                id="left-red-triangle-button"
              ></img>
            </div>
          </div>
          {/*right section body*/}
          <div id="right-section-body">
            <div id="image-container">
              <div id="right-section-body-beginner-course-header">
                <div className="beginner-course">BEGINNER COURSE</div>
                <div className="right-section-body-beginner-course-header-right">
                  <img src="../images/file-export.png" alt="file export"></img>
                  <img
                    src="../images/ExportAsSpreadSheet.png"
                    alt="export as spreadsheet"
                  ></img>
                </div>
              </div>
              <ProgressBarStudent1 />
              <ProgressBarStudent2 />
              <ProgressBarStudent3 />
              <ProgressBarStudent4 />
            </div>
          </div>
        </div>
      ) : (
        /*collapse section*/

        <div className="main-body">
          <div id="left-section-body-collapse">
            <div>
              <img
                src="../images/teacher.png"
                alt="teacher logo"
                id="teacher-image-collapse"
              ></img>
            </div>
            <div class="left-section-navBar-style-collapse">
              <img
                src="../images/progressLight.png"
                alt="progress checker logo"
              ></img>
            </div>

            <div class="left-section-navBar-style-collapse">
              <img
                src="../images/awesome-user-graduate.png"
                alt="awesome-user-graduate logo"
              ></img>
            </div>

            <div class="left-section-navBar-style-collapse">
              <img
                src="../images/material-live-help.png"
                alt="material-live-help logo"
              ></img>
            </div>

            <div class="left-section-navBar-style-collapse">
              <img
                src="../images/submit proj.png"
                alt="sumbmit proj logo"
              ></img>
            </div>

            <div class="left-section-navBar-style-collapse">
              <img
                src="../images/library light.png"
                alt="library light logo"
              ></img>
            </div>

            <div id="left-section-body-middle-box-collapse">
              <img
                onClick={handleShowNormal}
                src="../images/right-triangle-button.png"
                alt="eft-red-triangle-button logo"
                id="left-red-triangle-button-collapse"
              ></img>
            </div>
          </div>
          {/*right section body*/}
          <div id="right-section-body-collapse">
            <div id="image-container">
              <div id="right-section-body-beginner-course-header">
                <div className="beginner-course">BEGINNER COURSE</div>
                <div className="right-section-body-beginner-course-header-right">
                  <img src="../images/file-export.png" alt="file export"></img>
                  <img
                    src="../images/ExportAsSpreadSheet.png"
                    alt="export as spreadsheet"
                  ></img>
                </div>
              </div>

              <ProgressBarStudent1 />
              <ProgressBarStudent2 />
              <ProgressBarStudent3 />
              <ProgressBarStudent4 />
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
}
