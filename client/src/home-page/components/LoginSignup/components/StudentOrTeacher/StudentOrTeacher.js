import React from "react";
import "./StudentOrTeacher.css";
import StudentImg from "../StudentLoginSignup/students-img/students-x2.png";
import TeacherImg from "../TeacherLoginSignup/teacher-img/teacher-x2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function StudentOrTeacher({
  studentOrTeacherModal,
  setStudentOrTeacherModal,
  studentModal,
  setStudentModal,
  teacherModal,
  setTeacherModal,
}) {
  const goToStudent = () => {
    setStudentModal("show");
    setStudentOrTeacherModal("hide");
  };
  const goToTeacher = () => {
    setTeacherModal("show");
    setStudentOrTeacherModal("hide");
  };
  return (
    <>
      <div id="student-or-teacher-bg">
        <div id="student-or-teacher">
          <FontAwesomeIcon
            icon={faXmark}
            className="x-mark"
            onClick={() => setStudentOrTeacherModal("hide")}
          />
          <div id="student-cont" className="student-teacher-cont">
            <span>Student</span>
            <img
              src={StudentImg}
              className="student-or-teacher-img"
              alt=""
              onClick={goToStudent}
            />
          </div>
          <div id="student-teacher-text">
            <h1>
              Are you a <span>student</span> or a <span>teacher</span>?
            </h1>
          </div>
          <div id="teacher-cont" className="student-teacher-cont">
            <span>Teacher</span>
            <img
              src={TeacherImg}
              alt=""
              className="student-or-teacher-img"
              onClick={goToTeacher}
            />
          </div>
        </div>
      </div>
    </>
  );
}
