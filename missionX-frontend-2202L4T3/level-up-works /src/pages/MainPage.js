import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProgressCheckerBody from "./components/ProgressCheckerBody";
import StudentProfileBody from "./components/StudentProfileBody";
//import RightSection from "./components/RightSection";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import "./css/MainPage.css";

export default function MainPage() {
  return (
    <div>
      <Navbar />
      <div id="main-body"></div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProgressCheckerBody />} />
          <Route path="/StudentProfileBody" element={<StudentProfileBody />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
