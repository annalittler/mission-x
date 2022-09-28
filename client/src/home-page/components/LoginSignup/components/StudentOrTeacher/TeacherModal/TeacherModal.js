import React from "react";
import "./TeacherModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import TeacherLoginSignup from "../../TeacherLoginSignup/TeacherLoginSignup";

export default function StudentOrTeacher({ setTeacherModal }) {
  return (
    <>
      <div id="teacher-modal-bg">
        <div id="teacher-modal">
          <FontAwesomeIcon
            icon={faXmark}
            className="x-mark"
            onClick={() => setTeacherModal("hide")}
          />
          <TeacherLoginSignup />
        </div>
      </div>
    </>
  );
}
