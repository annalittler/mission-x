// const express = require('express');
// const router = express.Router();
// const db = require('../database');


// // Submit a project photo, and store URL in database
// router.post('/submitProject', (req, res) => {
// // app.post('/submitProject', (req, res) => {
//     console.log('made a POST request to /submitProject');
        
//         const StudentID = req.body.StudentID;
//         const ProjectID = req.body.ProjectID;
//         const DateStarted = req.body.DateStarted;
//         const DateSubmitted = req.body.DateSubmitted;
//         const DateCompleted = req.body.DateCompleted;
//         const Submission = req.body.Submission;
    
//         let sql = 'INSERT INTO ProgressHistory (`StudentID`, `ProjectID`, `DateStarted`, `DateSubmitted`, `DateCompleted`, `Submission`) VALUES (?, ?, ?, ?, ?, ?) ;'
        
//         db.query(sql, [StudentID, ProjectID, DateStarted, DateSubmitted, DateCompleted, Submission], (error, result) => {
//         //   if (error) {
//         //     console.log('Error', error);
//         //     res.send("You' got an error ! " + error.code);
//         //   } else {
//         //     console.log(result, new Date().toISOString());
//             res.send(result);
//         //   }
//         });;
//     })

// module.exports = router;