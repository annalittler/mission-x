const express = require("express");
const {
  signupStudent,
  loginStudent,
} = require("../controllers/student.controller");
const studentRouter = express.Router();

studentRouter.post("/signup/student", signupStudent);
studentRouter.post("/login/student", loginStudent);

module.exports = { studentRouter };
