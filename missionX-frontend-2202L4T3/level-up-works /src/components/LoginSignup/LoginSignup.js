import React from "react";
import Login from "./components/LoginSignupForms/Login";
import Signup from "./components/LoginSignupForms/Signup";
import StudentLoginSignup from "./components/StudentLoginSignup/StudentLoginSignup";
import TeacherLoginSignup from "./components/TeacherLoginSignup/TeacherLoginSignup";
import "./LoginSignup.css";
export default function LoginSignup() {
  return (
    <div id="login-signup-modal-bg">
      <div id="login-signup-modal">
        <StudentLoginSignup />
        <TeacherLoginSignup />
      </div>
    </div>
  );
}
