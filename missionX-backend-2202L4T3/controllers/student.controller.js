const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const app = express();

const bcrypt = require("bcrypt");
const database = require("../db/database");

require("dotenv").config();

app.use(cors());
app.use(express.json());

const loginStudent = async (req, res) => {
  console.log("student login in attempted");
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("Missing parameter: email or password");
  }
  try {
    const connection = await database.getConnection();
    const [row] = await connection.query(
      "SELECT * FROM `StudentAnna` WHERE Email = ?;",
      email
    );
    if (row.length > 0) {
      const { Password: realPassword } = row[0];
      const passwordsAreMatch = bcrypt.compareSync(password, realPassword);
      if (passwordsAreMatch) {
        res.status(200).send(row);
        console.log("login successful");
        console.log(`${row[0].Email} has logged in.`);
      } else if (!passwordsAreMatch) {
        console.log("error: passwords dont match.");
        return res.status(401).send({ error: "wrong password" });
      }
    } else {
      return res.status(400).send({ error: "user not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

const signupStudent = async (req, res) => {
  const { full_name, email, password } = req.body;
  if (!full_name) {
    return res.status(400).send("Missing parameter: name");
  }
  if (!email) {
    return res.status(400).send("Missing parameter: email");
  }
  if (!password) {
    return res.status(400).send("Missing parameter: password");
  }
  console.log("student sign up running");
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const connection = await database.getConnection();

    const [row] = await connection.query(
      "SELECT * FROM `StudentAnna` WHERE Email = ?;",
      email
    );
    if (row.length === 0) {
      await connection.query(
        "INSERT INTO `StudentAnna` (Name, Email, Password) VALUES (?,?,?)",
        [full_name, email, hashedPassword]
      );
      console.log("user created");
      return res.send({ success: "user created" });
    } else {
      console.log("user already exists");
      return res.status(409).send({ error: "user exists" });
    }
  } catch (error) {
    res.status(500).send({ error: "error creating user" });
    console.log("could not create user");
    console.log(error);
  }
};

module.exports = {
  loginStudent,
  signupStudent,
};
