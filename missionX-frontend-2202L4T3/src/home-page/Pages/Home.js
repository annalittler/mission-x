import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Section2 from "../components/Section2/Section2";
import Section3 from "../components/Section3/Section3";
import Section4 from "../components/Section4/Section4";
import Section5 from "../components/Section5/Section5";
import Section6 from "../components/Section6/Section6";
import Footer from "../components/Footer/Footer";
import StudentOrTeacher from "../components/LoginSignup/components/StudentOrTeacher/StudentOrTeacher";
import StudentModal from "../components/LoginSignup/components/StudentOrTeacher/StudentModal/StudentModal";
import TeacherModal from "../components/LoginSignup/components/StudentOrTeacher/TeacherModal/TeacherModal";
import Section5Alt from "../components/Section5/Components/Section5Alt/Section5Alt";
import LoginSignup from "../components/LoginSignup/LoginSignup";
import { useState, useEffect } from "react";

export default function Home() {
  const [modalState, setModalState] = useState("hide");
  const [studentOrTeacherModal, setStudentOrTeacherModal] = useState("hide");
  const [studentModal, setStudentModal] = useState("hide");
  const [teacherModal, setTeacherModal] = useState("hide");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <div>
      {studentModal === "show" && (
        <StudentModal setStudentModal={setStudentModal} width={width} />
      )}
      {teacherModal === "show" && (
        <TeacherModal setTeacherModal={setTeacherModal} width={width} />
      )}
      {studentOrTeacherModal === "show" && (
        <StudentOrTeacher
          studentOrTeacherModal={studentOrTeacherModal}
          setStudentOrTeacherModal={setStudentOrTeacherModal}
          studentModal={studentModal}
          setStudentModal={setStudentModal}
          teacherModal={teacherModal}
          setTeacherModal={setTeacherModal}
        />
      )}
      {modalState === "show" && (
        <LoginSignup
          modalState={modalState}
          setModalState={setModalState}
          width={width}
          studentModal={studentModal}
          setStudentModal={setStudentModal}
        />
      )}
      <Navbar
        modalState={modalState}
        setModalState={setModalState}
        studentOrTeacherModal={studentOrTeacherModal}
        setStudentOrTeacherModal={setStudentOrTeacherModal}
        width={width}
        setWidth={setWidth}
      />
      <Section2
        modalState={modalState}
        setModalState={setModalState}
        setStudentOrTeacherModal={setStudentOrTeacherModal}
        width={width}
      />
      <Section3 />
      <Section4 />
      {width > 760 && <Section5 />}
      {width <= 760 && <Section5Alt />}
      <Section6
        modalState={modalState}
        setModalState={setModalState}
        setStudentOrTeacherModal={setStudentOrTeacherModal}
        width={width}
      />
      <Footer />
    </div>
  );
}
