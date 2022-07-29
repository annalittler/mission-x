
import React from "react";

import StudentProfilePage from "./components/Pages/StudentProfilePage/StudentProfilePage"
import StudProjLibMain from "./components/Pages/StudentProjLibMain/StudProjLibMain"
import LearningObjectives from './StudentBuilderDashboard/Pages/LearningObjectives/LearningObjectives';
import Instructions from './StudentBuilderDashboard/Pages/Instructions/Instructions';
import VideoTutorial from './StudentBuilderDashboard/Pages/VideoTutorial/VideoTutorial';
import MakeProject from './StudentBuilderDashboard/Pages/MakeProject/MakeProject';
import SubmitProject from './StudentBuilderDashboard/Pages/SubmitProject/SubmitProject';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentBuilderDashboard from './StudentBuilderDashboard/StudentBuilderDashboard';
import Home from './components/Pages/Home'
import MainPage from './pages/MainPage';
{/* Add import of Home component */}


function App() {
  return (
    <>
     {/* <LoginSignup />  */}
    
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          
          <Route path='/studentBuilderDashboard' element={<StudentBuilderDashboard />} />
          <Route path="/learningObjectives" element={<LearningObjectives />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/videoTutorial" element={<VideoTutorial />} />
          <Route path="/makeProject" element={<MakeProject />} />
          <Route path="/submitProject" element={<SubmitProject />} />
          <Route path="/StudentProfilePage" element={<StudentProfilePage />} />
          <Route path="/StudProjLibMain" element={<StudProjLibMain />} />

        </Routes>
      </BrowserRouter> 
          
    </>
  );
}

export default App;






