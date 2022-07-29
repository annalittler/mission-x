import React from "react"
import Header from './Header.js'
import Footer from './Footer'
import axios from 'axios';
import { useState, useEffect } from 'react'

export default function StudProjLibMain() {

        // const scrollUp = () => {
        //         window.scrollTo({
        //                 top: 0,
        //                 behavior: "smooth"
        //                 })
        //         }

        const [projectInfo, setProjectInfo] = useState([]);

        useEffect(() => {
                axios.get("http://localhost:4000/project")
                .then(response => {
                setProjectInfo(response.data)
                console.log(response.data)
                })
                .catch(err => console.log(err));
        }, [])

        const projectInfoDisplay = projectInfo.map((projectInfo, index) => {
                return (
                <div className="projectInfoCard">

                        <img src={projectInfo.ProjectPic} alt="" />
                        <div className="cardMiddle">{projectInfo.Name}</div>
                        <div className="cardBottom" key={index}>{projectInfo.Course} | {projectInfo.ActivityType}</div>

                </div>
        )
    });

    return (
        <>
        <Header />
       <div className="splMain">
            <div className="splLeftBlock">
                
        
                <div className="splLeftBlock-subscription">
                        <div>SUBSCRIPTION</div>
                        <hr color="#707070" />                  
                        
                        <label> <input type="checkbox" />Free </label>
                        <br />
                        <label> <input type="checkbox" />Premium </label>
                </div>

                <div className="splLeftBlock-activity">
                        <div>ACTIVITY TYPE</div>
                        <hr color="#707070"/>
                        <label> <input type="checkbox" />Animation </label>
                        <br />
                        <label> <input type="checkbox" />Game </label>
                        <br />
                        <label> <input type="checkbox" />Chatbot </label>
                        <br />
                        <label> <input type="checkbox" />Augmented Reality </label>
                </div>


                <div className="splLeftBlock-year">
                        <div>YEAR LEVEL</div>
                        <hr color="#707070" />
                        <label> <input type="checkbox" />1 - 4 </label>
                        <br />
                        <label> <input type="checkbox" />5 - 6 </label>
                        <br />
                        <label> <input type="checkbox" />7 - 8 </label>
                        <br />
                        <label> <input type="checkbox" />9 - 13 </label>
                </div>

                <div className="splLeftBlock-subject">
                        <div>SUBJECT MATTER</div>
                        <hr color="#707070" />
                        <label> <input type="checkbox" />Computer Science</label>
                        <br />
                        <label> <input type="checkbox" />Maths </label>
                        <br />
                        <label> <input type="checkbox" />Science </label>
                        <br />
                        <label> <input type="checkbox" />Language </label>
                        <br />
                        <label> <input type="checkbox" />Art </label>
                        <br />
                        <label> <input type="checkbox" />Music </label>
                </div>
        </div>


        <div className="splRightBlock">

                <div className="splRightBlock-head"> PROJECTS</div>

                <div className="splRightBlock-head-descrip"> 
                Welcome to the project library. 
                You can use the filters on the right to help you search for specific projects. 
                </div>

                <div className="splRightBlock-navbar">
                        <div className="splRightBlock-progressButtons">
                                <button type="button">BEGINNER</button>
                                <button type="button">INTERMEDIATE</button>
                                <button type="button">ADVANCED</button>
        	        </div>
                                
                        <div className="splRightBlock-showMenu">
                                <label className="splRightBlock-label">SHOW</label>
                                <button type="button">25</button>
                                <button type="button">50</button>
                                <button type="button">100</button>
                        </div>

                </div>

                <div className="splRightBlock-container">

                                {projectInfoDisplay}  
                                
                        {/* <div className="splRightBlock-buttonLineBottom">
                                <button onClick={scrollUp} className="backToTopButton">BACK TO TOP</button>
                        </div> */}
                </div>

        </div>

        </div>
        <Footer />
        </>
        )
}