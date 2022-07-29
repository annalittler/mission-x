const express = require("express");
const cors = require("cors");
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
const { studentRouter } = require("./routes/student.routes");
const { teacherRouter } = require("./routes/teacher.routes");

app.use(studentRouter);
app.use(teacherRouter);

// PORT LISTENER
console.log("Server running at port", 4000);
app.listen(4000);
