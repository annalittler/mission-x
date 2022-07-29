// const express = require('express');
// const cors = require('cors');
// const app = express();
// const mysql = require('mysql2');
// require('dotenv').config();
// // const db = require('./database');

// // MIDDLEWARE
// app.use(cors());
// app.use(express.json());

// // DATABASE CONNECTION
// const db = mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE
// });

// // ROUTE
// // const students = require('./Routes/students')
// // for teachers we could create another Route
// // const teachers = require('path to teachers routes')


// // END POINTS
// // app.post('/submitProject', students);
// app.post('/submitProject', (req, res) => {
// console.log('made a POST request to /submitProject');
    
//     const StudentID = req.body.StudentID;
//     const ProjectID = req.body.ProjectID;
//     const DateStarted = req.body.DateStarted;
//     const DateSubmitted = req.body.DateSubmitted;
//     const DateCompleted = req.body.DateCompleted;
//     const Submission = req.body.Submission;

//     let sql = 'INSERT INTO ProgressHistory (`StudentID`, `ProjectID`, `DateStarted`, `DateSubmitted`, `DateCompleted`, `Submission`) VALUES (?, ?, ?, ?, ?, ?) ;'
    
//     db.query(sql, [StudentID, ProjectID, DateStarted, DateSubmitted, DateCompleted, Submission], (error, result) => {
//       if (error) {
//         console.log('Error', error);
//         res.send("You' got an error ! " + error.code);
//       } else {
//         console.log(result, new Date().toISOString());
//         res.send(result);
//       }
//     });;
// })

// // LISTENER
// console.log('Server running at port', 4000);
// app.listen(4000);