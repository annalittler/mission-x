import React from "react";
import "./StudentModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import StudentLoginSignup from "../../StudentLoginSignup/StudentLoginSignup";

export default function StudentOrTeacher({
  setStudentModal,
  studentModal,
  width,
}) {
  return (
    <>
      <div id="student-modal-bg">
        <div id="student-modal">
          <FontAwesomeIcon
            icon={faXmark}
            className="x-mark"
            onClick={() => setStudentModal("hide")}
          />
          <StudentLoginSignup
            width={width}
            setStudentModal={setStudentModal}
            studentModal={studentModal}
          />
        </div>
      </div>
    </>
  );
}
