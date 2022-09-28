const express = require("express");
const {
  signupTeacher,
  loginTeacher,
} = require("../controllers/teacher.controller");
const teacherRouter = express.Router();

teacherRouter.post("/signup/teacher", signupTeacher);
teacherRouter.post("/login/teacher", loginTeacher);

module.exports = { teacherRouter };
