import React from "react";
import { useState } from "react";
import "../StudentTeacher.css";
import StudentsImg from "./students-img/students-x2.png";
import Login from "../LoginSignupForms/LoginStudents";
import Signup from "../LoginSignupForms/SignupStudents";
import axios from "axios";

export default function StudentLoginSignup({
  studentModal,
  setStudentModal,
  width,
}) {
  const [active, setActive] = useState("students-login");

  return (
    <div className="student-section">
      <div className="modal-section">
        <img src={StudentsImg} className="modal-img" alt="" />
        <h1 className="modal-h1">Students</h1>
        <div className="login-signup-h2s">
          <h2
            className={
              active === "students-login" ? "modal-h2 underline" : "modal-h2"
            }
            onClick={() => setActive("students-login")}
          >
            LOG IN
          </h2>

          <h2
            className={
              active === "students-signup" ? "modal-h2 underline" : "modal-h2"
            }
            onClick={() => setActive("students-signup")}
          >
            SIGN UP
          </h2>
        </div>
        {active === "students-login" && (
          <Login
            studentModal={studentModal}
            setStudentModal={setStudentModal}
            width={width}
          />
        )}
        {active === "students-signup" && <Signup />}
      </div>
    </div>
  );
}
