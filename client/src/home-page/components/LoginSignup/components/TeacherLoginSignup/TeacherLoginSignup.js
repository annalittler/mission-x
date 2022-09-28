import React from "react";
import { useState } from "react";
import "../StudentTeacher.css";
import "../StudentOrTeacher/TeacherModal/TeacherModal.css";
import TeacherImg from "./teacher-img/teacher-x2.png";
import Login from "../LoginSignupForms/LoginTeacher";
import Signup from "../LoginSignupForms/SignupTeacher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function TeacherLoginSignup({
  modalState,
  setModalState,
  width,
}) {
  const [active, setActive] = useState("teachers-login");

  return (
    <div className="teacher-section">
      <div className="modal-section">
        <span id="x-mark-container">
          {
            <FontAwesomeIcon
              icon={faXmark}
              className="x-mark-main"
              onClick={() => setModalState("hide")}
            />
          }
        </span>
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
