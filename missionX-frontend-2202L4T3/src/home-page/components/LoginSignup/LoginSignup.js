import React from "react";
import Login from "./components/LoginSignupForms/LoginTeacher";
import Signup from "./components/LoginSignupForms/SignupStudents";
import StudentLoginSignup from "./components/StudentLoginSignup/StudentLoginSignup";
import TeacherLoginSignup from "./components/TeacherLoginSignup/TeacherLoginSignup";
import "./LoginSignup.css";
export default function LoginSignup({
  modalState,
  setModalState,
  studentModal,
  setStudentModal,
  width,
}) {
  return (
    <div id="login-signup-modal-bg">
      <div id="login-signup-modal">
        <StudentLoginSignup
          studentModal={studentModal}
          setStudentModal={setStudentModal}
          width={width}
        />
        <TeacherLoginSignup
          modalState={modalState}
          setModalState={setModalState}
        />
      </div>
    </div>
  );
}
