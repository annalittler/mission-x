import React from "react";
import Button from "../../../Button/Button";
import { pinkBtn } from "../../../Button/ButtonStyles";
import "./LoginSignupForm.css";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function Signup() {
  const [teacherNameReg, setTeacherNameReg] = useState();
  const [teacherEmailReg, setTeacherEmailReg] = useState();
  const [teacherPasswordReg, setTeacherPasswordReg] = useState();
  const [teacherConfirmPasswordReg, setTeacherConfirmPasswordReg] = useState();
  const [teacherRegStatus, setTeacherRegStatus] = useState();

  const teacherSignup = async (e) => {
    e.preventDefault();
    setTeacherRegStatus();
    console.log("teacher sign up call");
    if (
      !teacherNameReg ||
      !teacherEmailReg ||
      !teacherPasswordReg ||
      !teacherConfirmPasswordReg
    ) {
      console.log("please enter all fields");
      return setTeacherRegStatus("missingFields");
    } else if (teacherPasswordReg !== teacherConfirmPasswordReg) {
      console.log("passwords dont match");
      return setTeacherRegStatus("passwordsDontMatch");
    } else {
      try {
        const response = await Axios.post(
          "http://localhost:4000/signup/student",
          {
            full_name: teacherNameReg,
            email: teacherEmailReg,
            password: teacherPasswordReg,
            confirm_password: teacherConfirmPasswordReg,
          }
        );
        console.log(response);
        setTeacherRegStatus("signupSuccess");
      } catch (error) {
        console.log(error);
        if (error.response.status === 409) {
          console.log(error);
          setTeacherRegStatus("userExists");
        } else {
          console.log(error);
        }
      }
    }
  };

  useEffect(() => {
    setTeacherRegStatus();
  }, [
    teacherNameReg,
    teacherEmailReg,
    teacherPasswordReg,
    teacherConfirmPasswordReg,
  ]);

  return (
    <div>
      <form
        action=""
        className="login-form students-form"
        onSubmit={teacherSignup}
      >
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => {
            setTeacherNameReg(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => {
            setTeacherEmailReg(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setTeacherPasswordReg(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => {
            setTeacherConfirmPasswordReg(e.target.value);
          }}
        />
        <Button
          value="SIGN UP"
          variant={pinkBtn}
          className="btn-comp modal-button"
        />
      </form>

      {teacherRegStatus === "signupSuccess" && (
        <div className="login-status-div fade-in">
          <h2 className="login-status-title">
            Thanks for signing up, {teacherNameReg.split(" ")[0]}!
          </h2>
          <h3 className="login-status-text">Please log in.</h3>
        </div>
      )}
      {teacherRegStatus === "passwordsDontMatch" && (
        <div className="login-status-div fade-in">
          <h2 className="login-status-title">Passwords don't match.</h2>
        </div>
      )}
      {teacherRegStatus === "missingFields" && (
        <div className="login-status-div fade-in">
          <h2 className="login-status-title">
            Please fill out all the fields.
          </h2>
        </div>
      )}
      {teacherRegStatus === "userExists" && (
        <div className="login-status-div fade-in">
          <h2 className="login-status-title">User already exists.</h2>
        </div>
      )}
    </div>
  );
}
