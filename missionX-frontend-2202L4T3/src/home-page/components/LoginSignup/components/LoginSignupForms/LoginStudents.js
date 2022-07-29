import React from "react";
import Button from "../../../Button/Button.js";
import { pinkBtn } from "../../../Button/ButtonStyles.js";
import "./LoginSignupForm.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({ width, studentModal, setStudentModal }) {
  const [studentEmailLogin, setStudentEmailLogin] = useState();
  const [studentPasswordLogin, setStudentPasswordLogin] = useState();
  const [studentLoginStatus, setStudentLoginStatus] = useState();
  const [studentName, setStudentName] = useState();

  const studentLogin = async (e) => {
    setStudentLoginStatus();
    e.preventDefault();
    if (!studentEmailLogin || !studentPasswordLogin) {
      console.log("please enter all fields");
      return setStudentLoginStatus("missingFields");
    } else {
      setStudentLoginStatus();
      console.log("student login in attempted");
      try {
        const response = await Axios.post(
          "http://localhost:4000/login/student",
          {
            email: studentEmailLogin,
            password: studentPasswordLogin,
          }
        );
        console.log(response);
        if (response.data.length > 0) {
          const statusCode = response.status;
          console.log(
            `status code: ${statusCode}. ${response.data[0].Email} has logged in.`
          );
          setStudentName(response.data[0].Name.split(" ")[0]);
          setStudentLoginStatus("loggedIn");
        }
      } catch (error) {
        console.log(error);
        const statusCode = error.response.status;
        console.log(`error: status code ${statusCode}`);
        if (statusCode === 401) {
          console.log("wrong password");
          setStudentLoginStatus("wrongPassword");
        } else if (statusCode === 400) {
          console.log("user not found");
          setStudentLoginStatus("userNotFound");
        }
      }
    }
  };

  useEffect(() => {
    setStudentLoginStatus();
  }, [studentEmailLogin, studentPasswordLogin]);

  const navigate = useNavigate();
  const goToProfile = () => {
    setTimeout(() => {
      if (width > 600) {
        navigate("/studentBuilderDashboard");
      } else {
        setStudentModal("hide");
      }
    }, 3500);
  };

  studentLoginStatus === "loggedIn" && goToProfile();

  return (
    <div>
      <form action="" className="login-form" onSubmit={studentLogin}>
        <input
          type="email"
          placeholder="Email Address"
          value={studentEmailLogin}
          onChange={(e) => {
            setStudentEmailLogin(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={studentPasswordLogin}
          onChange={(e) => {
            setStudentPasswordLogin(e.target.value);
          }}
        />
        <Button
          value="LOG IN"
          variant={pinkBtn}
          className="btn-comp modal-button"
        />
      </form>

      {studentLoginStatus === "userNotFound" && (
        <div className="login-status-div fade-in">
          <h2 className="login-status-title">User not found.</h2>
          <h3 className="login-status-text">
            Please enter a valid email address.
          </h3>
        </div>
      )}
      {studentLoginStatus === "wrongPassword" && (
        <div className="login-status-div fade-in">
          <h2 className="login-status-title">Incorrect password.</h2>
          <h3 className="login-status-text">Please try again.</h3>
        </div>
      )}
      {studentLoginStatus === "missingFields" && (
        <div className="login-status-div fade-in">
          <h2 className="login-status-title">Missing email or password.</h2>
          <h3 className="login-status-text">Please try again.</h3>
        </div>
      )}
      {studentLoginStatus === "loggedIn" && (
        <div className="login-status-div fade-in">
          <h2 className="login-status-title">Welcome back, {studentName}!</h2>
          <h3 className="login-status-text">Logging you in...</h3>
        </div>
      )}
    </div>
  );
}
