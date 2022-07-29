import React from "react";
import Button from "../../../Button/Button";
import { pinkBtn } from "../../../Button/ButtonStyles";
import "./LoginSignupForm.css";

export default function Signup() {
  return (
    <div>
      <form action="" className="login-form students-form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <Button value="SIGN UP" variant={pinkBtn} />
      </form>
    </div>
  );
}
