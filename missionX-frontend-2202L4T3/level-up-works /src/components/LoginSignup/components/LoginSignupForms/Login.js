import React from "react";
import Button from "../../../Button/Button";
import { pinkBtn } from "../../../Button/ButtonStyles";
import "./LoginSignupForm.css";

export default function Login() {
  return (
    <div>
      <form action="" className="login-form students-form">
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <Button value="LOG IN" variant={pinkBtn} />
      </form>
    </div>
  );
}
