import React from "react";
import { useState } from "react";
import "../StudentTeacher.css";
import TeacherImg from "./teacher-img/teacher-x2.png";
import Login from "../LoginSignupForms/Login";
import Signup from "../LoginSignupForms/Signup";

export default function TeacherLoginSignup() {
  const [active, setActive] = useState("teachers-login");

  return (
    <div className="teacher-section">
      <div className="modal-section">
        <img src={TeacherImg} className="modal-img" alt="" />
        <h1 className="modal-h1">Teachers</h1>
        <div className="login-signup-h2s">
          <h2
            className={
              active === "teachers-login" ? "modal-h2 underline" : "modal-h2"
            }
            onClick={() => setActive("teachers-login")}
          >
            LOG IN
          </h2>

          <h2
            className={
              active === "teachers-signup" ? "modal-h2 underline" : "modal-h2"
            }
            onClick={() => setActive("teachers-signup")}
          >
            SIGN UP
          </h2>
        </div>
        {active === "teachers-login" && <Login />}
        {active === "teachers-signup" && <Signup />}
      </div>
    </div>
  );
}
