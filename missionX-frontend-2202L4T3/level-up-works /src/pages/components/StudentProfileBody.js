import React from "react";
import "../css/StudentProfileBody.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function StudentProfileBody(props) {
  const [students, setStudents] = useState([]);

  // Run this when you load the component for the first time

  // API need to be called only once

  useEffect(() => {
    console.log("This is from UseEffect");

    axios
      .get("http://localhost:4000/students")

      .then((result) => setStudents(result.data)); // state users updated after getting the data from the API
  }, []);

  return (
    <div id="main-body">
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
          <h1>
            <Link to="/" style={{ textDecoration: "none" }}>
              PROGRESS CHECKER
            </Link>
          </h1>
        </div>

        <div class="left-section-navBar-style">
          <img
            src="../images/awesome-user-graduate.png"
            alt="awesome-user-graduate logo"
          ></img>
          <h1>STUDENT PROFILE</h1>
        </div>

        <div class="left-section-navBar-style">
          <img
            src="../images/material-live-help.png"
            alt="material-live-help logo"
          ></img>
          <h1>HELP Request</h1>
        </div>

        <div class="left-section-navBar-style">
          <img src="../images/submit proj.png" alt="sumbmit proj logo"></img>
          <h1>PROJECT SUBMISSIONS</h1>
        </div>

        <div class="left-section-navBar-style">
          <img src="../images/library light.png" alt="library light logo"></img>
          <h1>PROJECT LIBRARY</h1>
        </div>

        <div id="left-section-body-middle-box">
          <img
            src="../images/left-red-triangle-button.png"
            alt="eft-red-triangle-button logo"
            id="left-red-triangle-button"
          ></img>
        </div>
      </div>

      <div className="right-section-body">
        <div className="image-container">
          {students.map((student, index) => (
            <div className="small-image-container">
              <img src={student.ProfilePic} alt={student.StudentID}></img>

              <h3 key={index}>{student.Name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
