import React from 'react'
import Header from '../StudentProjLibMain/Header.js'
import Footer from '../StudentProjLibMain/Footer'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


export default function StudentProfilePage() {
    const [studentInfo, setStudentInfo] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/student/80")
        .then(response => {
        setStudentInfo(response.data)
        console.log(response.data)
        })
        .catch(err => console.log(err));
    }, [])

const studentInfoDisplay = studentInfo.map((studentInfo, index) => {
    return (
        <>
            <div key={index}>{studentInfo.School}</div>
            <br></br>
            <div>{studentInfo.TeacherID}</div>
            <br></br>
            <div>{studentInfo.Course}</div>
            <br></br>
            <div>{studentInfo.DateOfBirth}</div>
            <br></br>
            <div>{studentInfo.ContactNumber}</div>
            <br></br>
            <div>{studentInfo.Email}</div>
            <br></br>
        </>
        )
    });


    
    return (
    <>
        <Header></Header>
        <div className="mainSection">
            
            <div className="leftBlock">
                <div className='leftBlock-inner'>
                    <img src="../images/Ellipse 38.png" alt="" />
                    <button /*onClick={""}*/>EDIT PROFILE</button>
                    <button /* onClick={""}*/>CHANGE PHOTO</button>
                </div>
            </div>

            <div className="rightBlock-container">

                <div className="rightBlock">
                                <div className="studentName"> Rawiri Fletcher </div>

                                <div className="rightBlock-Inner">
                                    <div className= "rightBlock-headings">

                                        
                                        <div>School</div>
                                        <br></br>
                                        <div>Teacher</div>
                                        <br></br>
                                        <div>Course</div>
                                        <br></br>
                                        <div>Date of Birth</div>
                                        <br></br>
                                        <div>Contact No</div>
                                        <br></br>
                                        <div>Email Address</div>
                                    </div>

                                    <div className="rightBlock-studentData">
                                    
                                        <div>{studentInfoDisplay}</div>
                                        
                                    </div>
                                </div>

                                <div className="buttonLine-bottom">
                                
                                <Link to="/StudProjLibMain"><button className="projectsButton">BACK TO PROJECTS</button></Link> 
                                <div></div>
                                </div>
            
                </div>
            
            </div>

        </div>
        <Footer />
        </>
    )
}

// const linkToStudentProjLib() {
//     return(<Link to="/StudProjLibMain">StudentProjPage</Link>)
// };
//<Link to="/StudProjLibMain">StudentProjPage</Link>