import axios from "axios";

import { useEffect, useState } from "react";

import "../css/ProgressBarStudent.css";

export default function ProgressBarStudent3() {
  const [students, setStudents] = useState([]);

  // Run this when you load the component for the first time

  // API need to be called only once

  useEffect(() => {
    console.log("This is from UseEffect");

    axios
      .get("http://localhost:4000/progress/student3")

      .then((result) => setStudents(result.data)); // state users updated after getting the data from the API
  },[]);

  const countProjectNotCompleted = students.filter(
    (student) => student.DateCompleted === null
  ).length;

  return (
    <div id="progress-bar-section">
      <div id="progress-bar-section-left">
        <h4>Nagini Cortes</h4>
        <h2>{15 - countProjectNotCompleted}/15 projects completed </h2>
      </div>
      {students.map((student, index) => (
        <div
          id="progress-bar-circle"
          style={{
            backgroundColor:
              student.DateCompleted == null ? "white" : "#99edcc",
          }}
        >
          <h3 id="project-number" key={index}>
            {student.ProjectID}
          </h3>
        </div>
      ))}
    </div>
  );
}
