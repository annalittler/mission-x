import React from "react";
import Button from "../../../Button/Button";
import { pinkBtn } from "../../../Button/ButtonStyles";
import "./LoginSignupForm.css";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function Signup() {
  const [studentNameReg, setStudentNameReg] = useState();
  const [studentEmailReg, setStudentEmailReg] = useState();
  const [studentPasswordReg, setStudentPasswordReg] = useState();
  const [studentConfirmPasswordReg, setStudentConfirmPasswordReg] =
    useState("");
  const [studentRegStatus, setStudentRegStatus] = useState();

  const studentSignup = async (e) => {
    e.preventDefault();
    setStudentRegStatus();
    console.log("student sign up call");
    if (
      !studentNameReg ||
      !studentEmailReg ||
      !studentPasswordReg ||
      !studentConfirmPasswordReg
    ) {
      console.log("please enter all fields");
      return setStudentRegStatus("missingFields");
    } else if (studentPasswordReg !== studentConfirmPasswordReg) {
      console.log("passwords dont match");
      return setStudentRegStatus("passwordsDontMatch");
    } else {
      try {
        const response = await Axios.post(
          "http://localhost:4000/signup/student",
          {
            full_name: studentNameReg,
            email: studentEmailReg,
            password: studentPasswordReg,
            confirm_password: studentConfirmPasswordReg,
          }
        );
        console.log(response);
        setStudentRegStatus("signupSuccess");
      } catch (error) {
        console.log(error);
        if (error.response.status === 409) {
          console.log(error);
          setStudentRegStatus("userExists");
        } else {
          console.log(error);
        }
      }
    }
  };

  useEffect(() => {
    setStudentRegStatus();
  }, [
    studentNameReg,
    studentEmailReg,
    studentPasswordReg,
    studentConfirmPasswordReg,
  ]);

  return (
    <div>
      <form
        action=""
        className="login-form students-form"
        onSubmit={studentSignup}
      >
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => {
            setStudentNameReg(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => {
            setStudentEmailReg(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setStudentPasswordReg(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => {
            setStudentConfirmPasswordReg(e.target.value);
          }}
        />
        <Button
          value="SIGN UP"
          variant={pinkBtn}
          className="btn-comp modal-button"
        />
      </form>
      {studentRegStatus === "signupSuccess" && (
        <div className="login-status-div fade-in">
          <h2 className="login-status-title">
            Thanks for signing up, {studentNameReg.split(" ")[0]}!
          </h2>
          <h3 className="login-status-text">Please log in.</h3>
        </div>
      )}
      {studentRegStatus === "passwordsDontMatch" && (
        <div className="login-status-div fade-in">
          <h2 className="login-status-title">Passwords don't match.</h2>
        </div>
      )}
      {studentRegStatus === "missingFields" && (
        <div className="login-status-div fade-in">
          <h2 className="login-status-title">
            Please fill out all the fields.
          </h2>
        </div>
      )}
      {studentRegStatus === "userExists" && (
        <div className="login-status-div fade-in">
          <h2 className="login-status-title">User already exists.</h2>
        </div>
      )}
    </div>
  );
}
