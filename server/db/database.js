const mysql = require("mysql2/promise");
require("dotenv").config();

// const database = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DB,
// });

const database = mysql.createPool({
  host: "sg1-ts6.a2hosting.com",
  user: "missio20_team3",
  password: "F?Rf4X0Y?yrf",
  database: "missio20_team3",
});

module.exports = database;
