import React from "react";
import Button from "../../../Button/Button.js";
import { pinkBtn } from "../../../Button/ButtonStyles.js";
import "./LoginSignupForm.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [teacherEmailLogin, setTeacherEmailLogin] = useState();
  const [teacherPasswordLogin, setTeacherPasswordLogin] = useState();
  const [teacherLoginStatus, setTeacherLoginStatus] = useState();
  const [teacherName, setTeacherName] = useState();

  const teacherLogin = async (e) => {
    setTeacherLoginStatus();
    e.preventDefault();
    if (!teacherEmailLogin || !teacherPasswordLogin) {
      console.log("please enter all fields");
      return setTeacherLoginStatus("missingFields");
    } else {
      setTeacherLoginStatus();
      console.log("teacher login in attempted");
      try {
        const response = await Axios.post(
          "http://localhost:4000/login/teacher",
          {
            email: teacherEmailLogin,
            password: teacherPasswordLogin,
          }
        );
        console.log(response);
        if (response.data.length > 0) {
          const statusCode = response.status;
          console.log(
            `status code: ${statusCode}. ${response.data[0].Email} has logged in.`
          );
          setTeacherName(response.data[0].Name.split(" ")[0]);
          setTeacherLoginStatus("loggedIn");
        }
      } catch (error) {
        console.log(error);
        const statusCode = error.response.status;
        console.log(`error: status code ${statusCode}`);
        if (statusCode === 401) {
          console.log("wrong password");
          setTeacherLoginStatus("wrongPassword");
        } else if (statusCode === 400) {
          console.log("user not found");
          setTeacherLoginStatus("userNotFound");
        }
      }
    }
  };

  useEffect(() => {
    setTeacherLoginStatus("");
  }, [teacherEmailLogin, teacherPasswordLogin]);

  const navigate = useNavigate();
  const goToProfile = () => {
    setTimeout(() => {
      navigate("/studentBuilderDashboard");
    }, 3500);
  };

  teacherLoginStatus === "loggedIn" && goToProfile();

  return (
    <div>
      <form action="" className="login-form " onSubmit={teacherLogin}>
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => {
            setTeacherEmailLogin(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setTeacherPasswordLogin(e.target.value);
          }}
        />
        <Button
          value="LOG IN"
          variant={pinkBtn}
          className="btn-comp modal-button"
        />
      </form>

      {teacherLoginStatus === "userNotFound" && (
        <div className="login-status-div fade-in">
          <h2 className="login-status-title">User not found.</h2>

          <h3 className="login-status-text">
            Please enter a valid email address.
          </h3>
        </div>
      )}
      {teacherLoginStatus === "wrongPassword" && (
        <div className="login-status-div fade-in">
          <h2 className="login-status-title">Incorrect password.</h2>

          <h3 className="login-status-text">Please try again.</h3>
        </div>
      )}
      {teacherLoginStatus === "missingFields" && (
        <div className="login-status-div fade-in">
          <h2 className="login-status-title">Missing email or password.</h2>

          <h3 className="login-status-text">Please try again.</h3>
        </div>
      )}
      {teacherLoginStatus === "loggedIn" && (
        <div className="login-status-div fade-in">
          <h2 className="login-status-title">Welcome back, {teacherName}!</h2>

          <h3 className="login-status-text">Logging you in...</h3>
        </div>
      )}
    </div>
  );
}
